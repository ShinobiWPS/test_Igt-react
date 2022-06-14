type Photo = {
  imageUrl: string;
  imageAlt: string;
};

type PrimaryArticle = {
  title: string;
  content: string;
};

type SecondaryArticle = {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageAlt: string;
  buttonLabel: string;
  buttonHref: string;
};

export type Sections = {
  headerSection: {
    carouselPhotos: Photo[];
    firstArticle: PrimaryArticle;
    secondArticle: PrimaryArticle;
  };
  primarySections: Array<PrimaryArticle & { buttonLabel: string; buttonHref: string }>;
  secondarySections: SecondaryArticle[];
};
