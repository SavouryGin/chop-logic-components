import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicMenuProps extends ChopLogicComponentProps {
  items: ChopLogicMenuItem[];
  mode?: ChopLogicOrientationMode;
  openedOn?: 'hover' | 'click';
}

export interface ChopLogicMenuItem {
  label: string;
  id: string;
  nestedItems?: ChopLogicMenuItem[];
  icon?: ChopLogicIconName;
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
}
