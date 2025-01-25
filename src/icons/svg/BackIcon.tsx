import React from 'react';

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' role='img' {...props}>
      <title>Back</title>
      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={48} d='M328 112L184 256l144 144' />
    </svg>
  );
}

export default BackIcon;
