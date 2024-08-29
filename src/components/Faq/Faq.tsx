import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  ArrowIcon,
  BottomLeftOliveBackground,
  CenteredTitle,
  Details,
  FaqWrapper,
  QuestionsWrapper,
  StyledAccordion,
  Summary,
  TopRightOliveBackground,
} from './Faq.styles';
import { FaqProps } from './Faq.types';
import { RichTextRenderer } from '../shared';

export const Faq = ({ questions }: FaqProps) => {
  const { t } = useTranslation();
  return (
    <FaqWrapper>
      <TopRightOliveBackground src="/images/olive.png" alt="olive background" />
      <BottomLeftOliveBackground src="/images/olive.png" alt="olive background 2" />
      <QuestionsWrapper>
        <CenteredTitle variant="h2">{t('menu.faq')}</CenteredTitle>
        {questions?.map(({ title, answer: { json } }, index) => {
          return (
            <StyledAccordion key={index}>
              <Summary expandIcon={<ArrowIcon />}>
                <Typography variant="title">{title}</Typography>
              </Summary>
              <Details>
                <RichTextRenderer richTextDocument={json} />
              </Details>
            </StyledAccordion>
          );
        })}
      </QuestionsWrapper>
    </FaqWrapper>
  );
};
