type NavigationLink = {
  label: string;
  variant: 'text' | 'outlined' | 'contained' | undefined;
};

export const firstLineNavigationLinks: NavigationLink[] = [
  {
    label: 'Lorem impsum',
    variant: 'text',
  },
  {
    label: 'Lorem impsum',
    variant: 'contained',
  },
  {
    label: 'Lorem impsum',
    variant: 'contained',
  },
];

export const secondLineNavigationLinks: NavigationLink[] = [
  {
    label: 'Link 1',
    variant: 'text',
  },
  {
    label: 'Link 2',
    variant: 'text',
  },
  {
    label: 'Link 3',
    variant: 'text',
  },
];
