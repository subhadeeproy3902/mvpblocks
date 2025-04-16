declare module 'tailwindcss/lib/util/flattenColorPalette'

type UserStats = Record<string, number>;
type GitHubResponse = {
  user: {
    repository: {
      defaultBranchRef: {
        target: {
          history: {
            edges: {
              node: {
                committedDate: string;
              };
            }[];
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
