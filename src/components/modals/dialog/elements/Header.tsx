import React from 'react';

import { ChopLogicButton } from 'components/index';
import { CLIcon } from 'components/misc/icon/Icon';

import { StyledDialogHeader } from '../Dialog.styled';

const ChopLogicModalLayoutHeader: React.FC<{
  title: string;
  onClose: () => void;
}> = ({ title, onClose }): React.ReactElement => {
  return (
    <StyledDialogHeader>
      {title}
      <ChopLogicButton icon={CLIcon.Cancel} view='icon' label='Close modal window' onClick={onClose} />
    </StyledDialogHeader>
  );
};

export default ChopLogicModalLayoutHeader;
