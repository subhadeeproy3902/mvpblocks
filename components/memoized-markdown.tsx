import { marked } from 'marked';
import { isValidElement, memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens.map((token) => token.raw);
}

const MemoizedMarkdownBlock = memo(
  ({ content }: { content: string }) => {
    return (
      <ReactMarkdown
        components={{
          pre: ({ children }) => {
            if (!isValidElement(children)) return null;
            const childProps = children.props as {
              className?: string;
              children?: string;
            };
            const lang = childProps.className?.replace('language-', '') || '';
            const code = childProps.children?.trim();

            if (!code) return null;
            return <DynamicCodeBlock lang={lang} code={code} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.content !== nextProps.content) return false;
    return true;
  },
);

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock';

export const MemoizedMarkdown = memo(
  ({ content, id }: { content: string; id: string }) => {
    const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

    return blocks.map((block, index) => (
      <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />
    ));
  },
);

MemoizedMarkdown.displayName = 'MemoizedMarkdown';
