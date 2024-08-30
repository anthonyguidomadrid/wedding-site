import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
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
import { FadeInWrapper, RichTextRenderer } from '../shared';

export const Faq = ({ questions }: FaqProps) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);

  return (
    <Box ref={containerRef}>
      <FadeInWrapper>
        <FaqWrapper>
          <TopRightOliveBackground src="/images/olive.png" alt="olive background" />
          <BottomLeftOliveBackground src="/images/olive.png" alt="olive background 2" />
          <FadeInWrapper delay={500}>
            <QuestionsWrapper>
              <CenteredTitle variant="h2">{t('menu.faq')}</CenteredTitle>
              {questions?.map(({ title, answer: { json } }, index) => (
                <FadeInWrapper
                  key={index}
                  delay={index * 300 + 1500}
                  shouldSlide={true}
                  container={containerRef.current}
                >
                  <StyledAccordion>
                    <Summary expandIcon={<ArrowIcon />}>
                      <Typography variant="title">{title}</Typography>
                    </Summary>
                    <Details>
                      <RichTextRenderer richTextDocument={json} />
                    </Details>
                  </StyledAccordion>
                </FadeInWrapper>
              ))}
            </QuestionsWrapper>
          </FadeInWrapper>
        </FaqWrapper>
      </FadeInWrapper>
    </Box>
  );
};
