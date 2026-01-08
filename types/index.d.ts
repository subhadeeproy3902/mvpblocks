declare module 'tailwindcss/lib/util/flattenColorPalette';

type UserStats = Record<string, number>;

type CodeFrequencyStats = Record<
  string, // date (YYYY-MM-DD)
  { additions: number; deletions: number }
>;

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

type GitHubCommitNode = {
  committedDate: string;
  additions: number;
  deletions: number;
};

type GitHubResponse2 = {
  repository: {
    defaultBranchRef: {
      target: {
        history: {
          edges: { node: GitHubCommitNode }[];
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
          };
        };
      };
    };
  };
};

type ComponentPreviewProps = {
  name: string;
  code: string;
  lang: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  fromDocs?: boolean;
};

type ComponentDisplayProps = {
  component: React.ReactElement;
  hasReTrigger: boolean;
  className?: string;
  reTriggerKey: number;
  reTrigger: () => void;
  fromDocs?: boolean;
  name?: string;
};

type CodePreviewProps = {
  code: string;
  highlightedCode: string;
};
