import { RichTextRenderer } from '../shared';
import { FaqProps } from './Faq.types';

export const Faq = ({ questions }: FaqProps) => {
  console.log({ questions });
  return (
    <div style={{ height: '100vh' }}>
      <h1>Faq</h1>
      {questions?.map(({ title, answer: { json } }, index) => {
        return (
          <div key={index}>
            <p>{title}</p>
            <RichTextRenderer richTextDocument={json} />
          </div>
        );
      })}
    </div>
  );
};
