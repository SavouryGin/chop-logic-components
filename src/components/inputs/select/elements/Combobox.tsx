import ArrowDownIcon from 'assets/icons/ArrowDown';
import ArrowUpIcon from 'assets/icons/ArrowUp';

import { StyledSelectCombobox, StyledSelectPlaceholder } from '../Select.styled';
import { SelectValue } from '../types';

type SelectComboboxProps = {
  isOpened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: SelectValue;
  placeholder?: string;
  name: string;
};

const SelectCombobox: React.FC<SelectComboboxProps> = ({
  isOpened,
  onClick,
  comboboxId,
  dropdownId,
  selected,
  name,
  placeholder,
  disabled,
  required,
}) => {
  return (
    <StyledSelectCombobox
      type='button'
      name={name}
      value={selected?.id}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className='cl-select__combobox'
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
    >
      <StyledSelectPlaceholder>{selected?.label ?? placeholder}</StyledSelectPlaceholder>
      {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
