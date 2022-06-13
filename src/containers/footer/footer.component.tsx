import { Box, useTheme } from '@mui/material';
import { ContentWrapper, Button } from '../../components';
import { footerLinks } from './footer.const';

import styles from './footer.module.scss';

export const Footer = () => {
  const { palette } = useTheme();
  
  return (
    <Box className={styles.footerWrapper} sx={{ backgroundColor: palette.secondary.dark }}>
      <ContentWrapper>
        <Box className={styles.linksWrapper}>
          {footerLinks.map((link, index) => (
            <Button key={index} className={styles.link} variant="text">
              {link.label}
            </Button>
          ))}
        </Box>
        <Box className={styles.textWrapper} sx={{ color: palette.secondary.contrastText }}>
          Nulla ornare arcu vel ullamcorper aliquam. Duis ultricies nisl lobortis tempor faucibus. Duis rhoncus semper
          tristique. Vestibulum accumsan ac purus vitae ornare. Aenean tempor luctus quam eget tincidunt. Quisque quis
          rutrum erat. Vivamus vitae rhoncus dolor, dignissim varius nunc.
        </Box>
      </ContentWrapper>
    </Box>
  );
};
