import React from 'react';
import { ChopLogicButton } from 'components/index';
import { Icon } from 'enums/icon';
import '../Dialog.styles.css';

type ChopLogicModalLayoutHeaderProps = {
  title: string;
  onClose: () => void;
};

const ChopLogicModalLayoutHeader: React.FC<ChopLogicModalLayoutHeaderProps> = ({ title, onClose }): React.ReactElement => {
  return (
    <header className='cl-dialog__header'>
      {title}
      <ChopLogicButton icon={Icon.Cancel} view='icon' aria-label='Close modal window' onClick={onClose} />
    </header>
  );
};

export default ChopLogicModalLayoutHeader;
