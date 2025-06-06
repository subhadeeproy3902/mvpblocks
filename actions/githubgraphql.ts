'use server';

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

const getAllCommitDates = async (
  login: string,
  name: string,
): Promise<string[]> => {
  let allDates: string[] = [];
  let cursor: string | null = null;

  while (true) {
    const response: GitHubResponse = await githubGraphql({
      query,
      variables: { login, name, cursor },
    });

    const history = response.repository?.defaultBranchRef?.target?.history;
    if (!history) break;

    const edges = history.edges || [];
    const dates = edges.map((edge) => edge.node.committedDate);
    allDates.push(...dates);

    if (!history.pageInfo.hasNextPage) break;
    cursor = history.pageInfo.endCursor;
  }

  return allDates;
};

const groupCommitsByDate = (dates: string[]): UserStats => {
  const counts: UserStats = {};
  for (const dateTime of dates) {
    const date = dateTime.split('T')[0];
    counts[date] = (counts[date] || 0) + 1;
  }
  return counts;
};

export const fetchUserData = async (): Promise<{ userStats: UserStats }> => {
  const allCommitDates = await getAllCommitDates(
    'subhadeeproy3902',
    'mvpblocks',
  );
  const userStats = groupCommitsByDate(allCommitDates);
  return { userStats };
};

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

export const fetchCodeFrequency = async (): Promise<{
  codeFrequency: CodeFrequencyStats;
}> => {
  let cursor: string | null = null;
  const frequencyMap: CodeFrequencyStats = {};

  while (true) {
    const data: GitHubResponse2 = await githubGraphql({
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
