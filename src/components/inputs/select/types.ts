import { CommonInputProps } from 'utils/types';

export type ChopLogicSelectProps = CommonInputProps & {
  options: SelectValue[];
  onChange?: (value?: SelectValue) => void;
  placeholder?: string;
  defaultValue?: string | number | readonly string[];
};

export type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };

export type SelectOptionProps = {
  value: SelectValue;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onClear: () => void;
};
