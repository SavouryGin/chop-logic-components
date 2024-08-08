import React from 'react';

import { ChopLogicButton } from 'components/index';

import '../Dialog.scss';

type ChopLogicModalLayoutHeaderProps = {
  title: string;
  onClose: () => void;
};

const ChopLogicModalLayoutHeader: React.FC<ChopLogicModalLayoutHeaderProps> = ({ title, onClose }): React.ReactElement => {
  return (
    <header className='cl-dialog__header'>
      {title}
      <ChopLogicButton icon='cancel' view='icon' aria-label='Close modal window' onClick={onClose} />
    </header>
  );
};

export default ChopLogicModalLayoutHeader;
