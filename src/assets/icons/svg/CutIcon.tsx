import { ChopLogicSVGElementProps } from '@models';

function CutIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      role='img'
      {...rest}
    >
      {title && <title>{title}</title>}
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M10 17 A3 3 0 0 1 7 20 A3 3 0 0 1 4 17 A3 3 0 0 1 10 17 z' />
      <path d='M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z' />
      <path d='M9.15 14.85L18 4M6 4l8.85 10.85' />
    </svg>
  );
}

export default CutIcon;
