import { CommonInputProps } from './_common';
import { SelectValue } from './select';

export type MultiSelectValue = SelectValue & { selected: boolean };

export type ChopLogicMultiSelectProps = CommonInputProps & {
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
};

export type MultiSelectDropdownProps = {
  options: MultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};