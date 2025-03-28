type ComponentPreviewProps = {
  name: string;
  code: string;
  lang: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
};

type ComponentDisplayProps = {
  component: React.ReactElement;
  hasReTrigger: boolean;
  className?: string;
  reTriggerKey: number;
  reTrigger: () => void;
};

type CodePreviewProps = {
  code: string;
  highlightedCode: string;
};
