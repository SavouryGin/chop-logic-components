import React, { useRef } from 'react';
import { useKeyPress } from 'hooks/use-key-press';
import { useModalFocusTrap } from 'hooks/use-modal-focus-trap';

import { StyledDialogContent, StyledDialogLayout } from '../Dialog.styled';
import { DialogLayoutProps } from '../types';

import ChopLogicModalLayoutHeader from './Header';

const ChopLogicModalLayout: React.FC<DialogLayoutProps> = ({ title, onClose, isOpened, children, ...rest }): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  return (
    <StyledDialogLayout ref={modalRef} role='dialog' aria-modal='true' {...rest}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <StyledDialogContent>{children}</StyledDialogContent>
    </StyledDialogLayout>
  );
};

export default ChopLogicModalLayout;
