import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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
        color: 'white',
        padding: '40px',
        marginBottom: '500px',
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 245, 0.3)', padding: '32px 16px' }}>
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
                <Typography variant="menu">{title}</Typography>
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
