import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { CenteredTitle } from './Faq.styles';
import { FaqProps } from './Faq.types';
import { RichTextRenderer } from '../shared';

export const Faq = ({ questions }: FaqProps) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34382c',
        color: '#fffff5',
        padding: '40px',
        marginBottom: '500px',
        position: 'relative',
      }}
    >
      <Image
        src="/images/olive.png"
        width="220"
        height="400"
        alt="olive background"
        style={{ position: 'absolute', bottom: 15, left: 5, opacity: 0.5, zIndex: 1 }}
      />
      <Image
        src="/images/olive.png"
        width="200"
        height="340"
        alt="olive background 2"
        style={{
          position: 'absolute',
          transform: 'rotate(-90deg)',
          top: -50,
          right: 80,
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      <div style={{ backgroundColor: '#717469', padding: '32px 16px', zIndex: 2, opacity: 0.85 }}>
        <CenteredTitle variant="h2">{t('menu.faq')}</CenteredTitle>
        {questions?.map(({ title, answer: { json } }, index) => {
          return (
            <Accordion
              key={index}
              sx={{
                maxWidth: '1000px',
                backgroundColor: 'transparent',
                color: 'white',
                boxShadow: 'none',
                '&:before': {
                  borderBottom: '0.5px solid white',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon style={{ color: 'white' }} />}
                sx={{ backgroundColor: 'transparent', color: 'white' }}
              >
                <Typography variant="title">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: '1rem' }}>
                <RichTextRenderer richTextDocument={json} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
