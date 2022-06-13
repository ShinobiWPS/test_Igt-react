import * as React from 'react';
import classNames from 'classnames';
import { useTheme, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container } from '@mui/material';
import {
  Menu as MenuIcon,
  Face as FaceIcon,
  Brightness5 as SunIcon,
  Brightness2 as MoonIcon,
} from '@material-ui/icons';

import { Button } from '../';
import styles from './navigation.module.scss';
import { firstLineNavigationLinks, secondLineNavigationLinks } from './navigation.const';

type NavigationProps = {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
};

export const Navigation: React.FC<NavigationProps> = ({ isDarkTheme, onThemeToggle }) => {
  const { palette } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classNames(styles.navigationBar)}>
      <Container className={styles.container}>
        <Toolbar disableGutters className={styles.navigationLinesWrapper}>
          <Button variant="text" className={styles.themeToggleButton} onClick={onThemeToggle}>
            {isDarkTheme ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: palette.secondary.contrastText }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <div className={styles.mobileNavigationWrapper}>
                {[...firstLineNavigationLinks, ...secondLineNavigationLinks].map((link, index) => (
                  <Button key={index} variant="text" color={palette.secondary.dark}>
                    <span className={styles.link}>{link.label}</span>
                  </Button>
                ))}
              </div>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              color: palette.secondary.main,
            }}
          >
            <Box sx={{ color: palette.secondary.contrastText }}>
              <FaceIcon />
            </Box>
          </Typography>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'block',
                height: '90px',
                position: 'relative',
              },
            }}
            style={{ width: '100%' }}
          >
            <Box className={styles.navigationFirstLine} sx={{ backgroundColor: palette.secondary.main }}>
              <Button
                variant="text"
                className={styles.themeToggleButton}
                onClick={onThemeToggle}
                color={palette.primary.contrastText}
              >
                {isDarkTheme ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Box>
            <Box className={styles.navigationSecondLine} sx={{ backgroundColor: palette.primary.main }}></Box>
            <Box className={styles.navigationContent}>
              <Box
                className={styles.logoContainer}
                sx={{
                  background: palette.primary.dark,
                  color: palette.secondary.contrastText,
                }}
              >
                <FaceIcon className={styles.logo} />
              </Box>
              <Box className={styles.navigationLinks}>
                {firstLineNavigationLinks.map((link, index) => (
                  <Button
                    key={index}
                    className={styles.linkButton}
                    variant={link.variant}
                    color={link.variant === 'text' ? palette.text.primary : palette.secondary.contrastText}
                  >
                    <span className={styles.link}>{link.label}</span>
                  </Button>
                ))}
              </Box>
              <Box className={styles.navigationLinks}>
                {secondLineNavigationLinks.map((link, index) => (
                  <Button key={index} className={styles.linkButton} variant={link.variant}>
                    <span className={styles.link}>{link.label}</span>
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
