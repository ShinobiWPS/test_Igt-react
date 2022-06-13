import { Sections } from '../../models';
import { Box, useTheme } from '@mui/material';
import classNames from 'classnames';

import { Button, Card, ContentWrapper, TitleSize, Text, Input, Image, Skeleton } from '../../components';

import styles from './main-content.module.scss';

type MainContentProps = {
  content: {
    primarySections?: Sections['primarySections'];
    secondarySections?: Sections['secondarySections'];
  };
};

export const MainContent: React.FC<MainContentProps> = ({ content }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: {
          xs: palette.primary.main,
          md: palette.secondary.main,
        },
      }}
    >
      <ContentWrapper className={styles.mainContentWrapper}>
        <div className={styles.primarySectionWrapper}>
          <>
            {content.primarySections?.map((section, index) => (
              <Card
                key={index}
                title={section.title}
                className={styles.primarySection}
                contentClassName={styles.primaryCardContent}
              >
                <div className={styles.primarySectionContent}>{section.content}</div>
                <Button className={styles.primaryCardButton} variant="contained" isUpperCase={true}>
                  {section.buttonLabel}
                </Button>
              </Card>
            ))}
          </>
          {!content?.primarySections && !content?.secondarySections && (
            <>
              <Skeleton
                numberOfItems={2}
                variant="rectangular"
                height={190}
                width="100%"
                sx={{ bgcolor: 'grey.900' }}
              />
            </>
          )}
        </div>
        <div className={styles.secondarySectionWrapper}>
          <Text variant="h6" className={styles.secondarySectionHeader} color={palette.primary.contrastText}>
            Lorem ipsum lorem ipsum
          </Text>
          <div className={styles.secondaryCardsWrapper}>
            <>
              {content.secondarySections?.map((section, index) => (
                <Card
                  key={index}
                  title={section.title}
                  titleSize={TitleSize.SMALL}
                  contentClassName={styles.secondaryCardContent}
                >
                  <Text variant="subtitle2" isUpperCase={true}>
                    {section.subTitle}
                  </Text>
                  <Image
                    className={styles.secondaryCardImage}
                    src={section.imageUrl}
                    alt={section.imageAlt}
                    height={135}
                  />
                  <Button
                    variant="contained"
                    className={styles.secondarySectionButton}
                    isForward={true}
                    isUpperCase={true}
                  >
                    {section.buttonLabel}
                  </Button>
                </Card>
              ))}
            </>
            {!content?.primarySections && !content?.secondarySections && (
              <>
                <Skeleton
                  numberOfItems={4}
                  variant="rectangular"
                  height={240}
                  width="100%"
                  sx={{ bgcolor: 'grey.900' }}
                />
              </>
            )}
          </div>
        </div>
        <div className={styles.warningButtonWrapper}>
          <Button className={styles.warningButton} isForward={true} backgroundColor={palette.warning.main}>
            Lorem ipsum
          </Button>
        </div>
      </ContentWrapper>
      <Box
        className={styles.newsletterWrapper}
        sx={{ backgroundColor: palette.secondary.main, borderTop: `1px solid ${palette.divider}` }}
      >
        <ContentWrapper>
          <Box className={styles.newsletter}>
            <Text className={styles.newsletterHeader} variant="subtitle1" color={palette.primary.contrastText}>
              Lorem Ipsum Dolor
            </Text>
            <Input className={classNames(styles.newsletterInput, styles.mobileHidden)} />
            <div className={styles.newsletterMobileGroup}>
              <Input />
              <Button variant="contained" className={styles.newsletterButton}>
                Lorem ipsum
              </Button>
            </div>
          </Box>
        </ContentWrapper>
      </Box>
      <Box className={styles.bottomNoteWrapper} sx={{ backgroundColor: palette.primary.main }}>
        <ContentWrapper>
          <Box sx={{ color: palette.secondary.contrastText }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut fermentum leo. Donec vestibulum erat vitae
            nulla dignissim tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla at turpis urna.
          </Box>
        </ContentWrapper>
      </Box>
    </Box>
  );
};
