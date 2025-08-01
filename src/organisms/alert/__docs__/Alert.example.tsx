import { ChopLogicButtonView } from '@enums';
import { ChopLogicAlertProps } from '@models';
import { ChopLogicButton } from '@molecules';
import React, { useState } from 'react';

import ChopLogicAlert from '../Alert';

export const AlertExample: React.FC<ChopLogicAlertProps> = ({ mode, message, title, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div>
      <ChopLogicButton onClick={handleOpen} text='Open Alert' view={ChopLogicButtonView.Secondary} />
      <ChopLogicAlert title={title} message={message} mode={mode} {...rest} isOpened={isOpened} onClose={handleClose} />
    </div>
  );
};
