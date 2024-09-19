import { Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
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

export const Faq: React.FC<FaqProps> = ({ questions }) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  return (
    <FadeInWrapper>
      <FaqWrapper>
        <TopRightOliveBackground src="/images/olive.png" alt="olive background" />
        <BottomLeftOliveBackground src="/images/olive.png" alt="olive background 2" />
        <FadeInWrapper delay={500}>
          <QuestionsWrapper ref={containerRef}>
            <CenteredTitle variant="h2">{t('menu.faq')}</CenteredTitle>
            {container &&
              questions?.map(({ title, answer: { json } }, index) => (
                <FadeInWrapper
                  key={index}
                  delay={index * 300 + 1000}
                  shouldSlide={true}
                  container={container}
                >
                  <StyledAccordion slotProps={{ transition: { timeout: 1000 } }}>
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
  );
};
