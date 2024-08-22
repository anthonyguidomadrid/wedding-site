import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { RichTextRendererProps } from './RichTextRenderer.types';

export const RichTextRenderer = ({ richTextDocument }: RichTextRendererProps) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (_node, children) => <h1>{children}</h1>,
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};
