#!/usr/bin/env bun
import { writeFileSync } from 'fs';
import { join } from 'path';

// Types
export type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name?: string;
  bio?: string;
};

export type UserStats = Record<string, number>;

export type CodeFrequencyStats = Record<
  string,
  { additions: number; deletions: number }
>;

// GitHub GraphQL helper
const githubGraphql = async ({
  query,
  variables,
}: {
  query: string;
  variables: Record<string, any>;
}) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};

// Fetch contributors
const fetchContributors = async (): Promise<Contributor[]> => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/subhadeeproy3902/mvpblocks/contributors',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch contributors');
    }

    const data: Contributor[] = await res.json();
    
    // Fetch detailed info for each contributor
    const detailedContributors = await Promise.all(
      data.map(async (contributor) => {
        try {
          const res = await fetch(
            `https://api.github.com/users/${contributor.login}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
              },
            }
          );
          const detail = await res.json();

          return {
            ...contributor,
            name: detail.name || contributor.login,
            bio: detail.bio || '',
          };
        } catch {
          return contributor;
        }
      }),
    );

    return detailedContributors;
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
};

// Fetch commit activity
const fetchUserData = async (): Promise<{ userStats: UserStats }> => {
  const query = `
    query GetCommits($login: String!, $name: String!, $cursor: String) {
      repository(owner: $login, name: $name) {
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 100, after: $cursor) {
                edges {
                  node {
                    committedDate
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        }
      }
    }
  `;

  let allDates: string[] = [];
  let cursor: string | null = null;

  while (true) {
    const response = await githubGraphql({
      query,
      variables: { login: 'subhadeeproy3902', name: 'mvpblocks', cursor },
    });

    const history = response.repository?.defaultBranchRef?.target?.history;
    if (!history) break;

    const edges = history.edges || [];
    const dates = edges.map((edge: any) => edge.node.committedDate);
    allDates.push(...dates);

    if (!history.pageInfo.hasNextPage) break;
    cursor = history.pageInfo.endCursor;
  }

  // Group commits by date
  const counts: UserStats = {};
  for (const dateTime of allDates) {
    const date = dateTime.split('T')[0];
    counts[date] = (counts[date] || 0) + 1;
  }

  return { userStats: counts };
};

// Fetch code frequency
const fetchCodeFrequency = async (): Promise<{
  codeFrequency: CodeFrequencyStats;
}> => {
  const commitQuery = `
    query GetCommits($login: String!, $name: String!, $cursor: String) {
      repository(owner: $login, name: $name) {
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 100, after: $cursor) {
                edges {
                  node {
                    committedDate
                    additions
                    deletions
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        }
      }
    }
  `;

  let cursor: string | null = null;
  const frequencyMap: CodeFrequencyStats = {};

  while (true) {
    const data = await githubGraphql({
      query: commitQuery,
      variables: {
        login: 'subhadeeproy3902',
        name: 'mvpblocks',
        cursor,
      },
    });

    const history = data.repository?.defaultBranchRef?.target?.history;
    if (!history) break;

    for (const edge of history.edges) {
      const { committedDate, additions, deletions } = edge.node;
      const date = committedDate.split('T')[0];

      if (!frequencyMap[date]) {
        frequencyMap[date] = { additions: 0, deletions: 0 };
      }

      frequencyMap[date].additions += additions;
      frequencyMap[date].deletions += deletions;
    }

    if (!history.pageInfo.hasNextPage) break;
    cursor = history.pageInfo.endCursor;
  }

  return { codeFrequency: frequencyMap };
};

// Main execution
async function main() {
  console.log('🚀 Fetching GitHub data...');
  
  try {
    // Fetch all data in parallel
    const [contributors, userData, codeFrequency] = await Promise.all([
      fetchContributors(),
      fetchUserData(),
      fetchCodeFrequency(),
    ]);

    const totalContributions = contributors.reduce(
      (acc, curr) => acc + curr.contributions,
      0,
    );

    // Prepare data object
    const githubData = {
      contributors,
      totalContributions,
      userStats: userData.userStats,
      codeFrequency: codeFrequency.codeFrequency,
      lastUpdated: new Date().toISOString(),
    };

    // Write to constants file
    const constantsPath = join(process.cwd(), 'constants', 'github-data.ts');
    const fileContent = `// Auto-generated file - Do not edit manually
// Last updated: ${githubData.lastUpdated}

export const githubData = ${JSON.stringify(githubData, null, 2)} as const;

export type GitHubData = typeof githubData;
`;

    writeFileSync(constantsPath, fileContent);
    
    console.log('✅ GitHub data cached successfully!');
    console.log(`📊 Contributors: ${contributors.length}`);
    console.log(`📈 Total contributions: ${totalContributions}`);
    console.log(`📅 Commit dates: ${Object.keys(userData.userStats).length}`);
    console.log(`💻 Code frequency entries: ${Object.keys(codeFrequency.codeFrequency).length}`);
    
  } catch (error) {
    console.error('❌ Error fetching GitHub data:', error);
    process.exit(1);
  }
}

// Check if this script is being run directly
if (typeof require !== 'undefined' && require.main === module) {
  main();
} else if (typeof process !== 'undefined' && process.argv[1] === __filename) {
  main();
}
