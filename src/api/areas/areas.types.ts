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

export type Areas = {
  headerSection: {
    carouselPhotos: Photo[];
    firstArticle: PrimaryArticle;
    secondArticle: PrimaryArticle;
  };
  primaryAreas: Array<PrimaryArticle & { buttonLabel: string; buttonHref: string }>;
  secondaryAreas: SecondaryArticle[];
};
