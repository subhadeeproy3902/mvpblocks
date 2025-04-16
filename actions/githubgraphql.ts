"use server";

type GitHubResponse = {
  repository: {
    defaultBranchRef: {
      target: {
        history: {
          edges: { node: { committedDate: string } }[];
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
          };
        };
      };
    };
  };
};

export type UserStats = Record<string, number>;

const githubGraphql = async ({
  query,
  variables,
}: {
  query: string;
  variables: Record<string, any>;
}) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed with status ${response.status}`
    );
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
  name: string
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
    const date = dateTime.split("T")[0];
    counts[date] = (counts[date] || 0) + 1;
  }
  return counts;
};

export const fetchUserData = async (): Promise<{ userStats: UserStats }> => {
  const allCommitDates = await getAllCommitDates("subhadeeproy3902", "mvpblocks");
  const userStats = groupCommitsByDate(allCommitDates);
  return { userStats };
};
