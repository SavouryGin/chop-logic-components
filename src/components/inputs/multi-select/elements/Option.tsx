import React, { KeyboardEvent } from 'react';

import { StyledMultiSelectOption } from '@/elements/styled/Select.styled';
import CheckboxCheckedIcon from '@/icons/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@/icons/CheckboxUncheckedIcon.tsx';
import { MultiSelectOptionProps } from '@/types';

const SelectOption: React.FC<MultiSelectOptionProps> = ({ value, onSelect, theme }) => {
  const { id, label, selected } = value;

  const handleKeyDown = (id: string) => (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        onSelect(id);
        break;
      default:
        break;
    }
  };

  return (
    <StyledMultiSelectOption
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
      $theme={theme}
      $selected={selected}
    >
      {selected ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      <span>{label}</span>
    </StyledMultiSelectOption>
  );
};

export default SelectOption;
