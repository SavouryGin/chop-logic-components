import { ChopLogicSVGElementProps } from '@models';

function CheckboxUncheckedIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 16 16' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path fill='currentColor' d='M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H2V2h12v12z' />
    </svg>
  );
}

export default CheckboxUncheckedIcon;
