import { FocusEventHandler, MouseEventHandler } from 'react';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';

import { ChopLogicInputProps } from './_common';

export interface ChopLogicButtonProps extends Partial<ChopLogicInputProps> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  view?: ChopLogicButtonView;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
  type?: 'button' | 'reset' | 'submit';
  tooltip?: string;
}
