import { ChopLogicSVGElementProps } from '@models';

function DownloadIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 1024 1024' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path d='M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' />
    </svg>
  );
}

export default DownloadIcon;
