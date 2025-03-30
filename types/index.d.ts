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
