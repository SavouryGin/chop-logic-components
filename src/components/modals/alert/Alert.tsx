import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicPortal from 'components/elements/portal/Portal';
import 'styles';
import './Alert.styles.scss';
import { ChopLogicAlertProps } from './types';
import ChopLogicAlertHeader from './elements/Header';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, title, message, mode = 'info', ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  const wrapperClass = createClassName([rest.className, 'cl-alert', { 'cl-alert_closing': isClosing }]);
  const contentClass = createClassName([
    'cl-alert__content',
    {
      'cl-alert__content_info': mode === 'info',
      'cl-alert__content_warning': mode === 'warning',
      'cl-alert__content_error': mode === 'error',
      'cl-alert__content_success': mode === 'success',
      'cl-alert__content_help': mode === 'help',
    },
  ]);

  return (
    <ChopLogicPortal>
      <div className={wrapperClass} {...rest}>
        <div className={contentClass}>
          <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} />
          <p className='cl-alert__message'>{message}</p>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
