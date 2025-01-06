import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';

export interface ChopLogicMenuProps {
  items: ChopLogicMenuItem[];
  mode?: ChopLogicOrientationMode;
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
