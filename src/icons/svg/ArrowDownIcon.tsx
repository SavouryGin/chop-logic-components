import { ChopLogicSVGElementProps } from '@models';

function ArrowDownIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path d='M21.886 5.536A1.002 1.002 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13a.998.998 0 001.644 0l9-13a.998.998 0 00.064-1.033zM12 17.243L4.908 7h14.184L12 17.243z' />
    </svg>
  );
}

export default ArrowDownIcon;
