import React from 'react';
import { ChopLogicAlertMode } from '@enums';
import { useIsMounted } from '@hooks';
import { ChopLogicAlertProps } from '@models';
import AlertHeader from './elements/AlertHeader.tsx';
import styles from './Alert.module.scss';
import { getClassName } from '@utils';
import { ChopLogicPortal } from '@atoms';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = ChopLogicAlertMode.Info,
  icon,
  ...rest
}) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <div className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}>
        <div {...rest} className={styles.content}>
          <AlertHeader title={title} onClose={onClose} mode={mode} icon={icon} />
          <p>{message}</p>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
