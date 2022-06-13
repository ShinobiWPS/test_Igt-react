import { ComponentProps } from 'react';
import { Skeleton as MaterialSkeleton } from '@mui/material';

type SkeletonProps = {
  numberOfItems?: number;
};

export const Skeleton: React.FC<SkeletonProps & ComponentProps<typeof MaterialSkeleton>> = ({
  numberOfItems,
  ...props
}) => (
  <>
    {numberOfItems ? (
      <>
        {new Array(numberOfItems).fill('').map((item, index) => (
          <MaterialSkeleton key={index} {...props} />
        ))}
      </>
    ) : (
      <MaterialSkeleton {...props} />
    )}
  </>
);
