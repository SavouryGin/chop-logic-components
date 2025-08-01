import { Dimensions } from '@models';
import React, { useEffect, useState } from 'react';

type useContainerDimensionsParams = {
  ref: React.RefObject<HTMLElement | null>;
  isVisible?: boolean;
};

export const useContainerDimensions = ({ ref, isVisible }: useContainerDimensionsParams): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref?.current && isVisible) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref, isVisible]);

  return dimensions;
};
