import React, { Suspense } from 'react';
import { ChopLogicIconDictionary } from '@icons';
import { ChopLogicIconProps } from '@models';

const ChopLogicIcon: React.FC<ChopLogicIconProps> = ({ name, testId, ...rest }) => {
  if (!name) return null;

  const fallback = (
    <span style={{ fontSize: '1rem' }} aria-label='SVG Icon Fallback'>
      &#11036;
    </span>
  );
  const Component = ChopLogicIconDictionary[name];

  return (
    <Suspense fallback={fallback}>
      <Component data-testid={testId} {...rest} />
    </Suspense>
  );
};

export default ChopLogicIcon;
