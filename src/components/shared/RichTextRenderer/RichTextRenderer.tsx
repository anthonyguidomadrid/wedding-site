import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import { RichTextRendererProps } from './RichTextRenderer.types';

export const RichTextRenderer = ({ richTextDocument }: RichTextRendererProps) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (_node, children) => <h1>{children}</h1>,
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};
