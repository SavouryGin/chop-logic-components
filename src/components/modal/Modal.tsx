import styles from './styles.module.css';
import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicModalLayout from './elements/Layout';
import { PropsWithChildren } from 'react';
import ChopLogicPortal from 'components/misc/portal/Portal';

export type ChopLogicModalProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

const ChopLogicModal: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, className, title, children, ...rest }: ChopLogicModalProps) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([className, styles.background, { [styles.background_closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest}>
          {children}
        </ChopLogicModalLayout>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicModal;
