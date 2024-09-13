import { KeyboardEvent } from 'react';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';

import { MultiSelectDropdownProps } from '../MultiSelect';
import { StyledMultiSelectDropdown } from '../MultiSelect.styled';

import SelectOption from './Option';

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, opened, onClose, onSelect, dropdownId }) => {
  const handleListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    let focusedId: string = '';
    options.forEach((value) => {
      const element = document.getElementById(value.id);
      if (element === document.activeElement) {
        focusedId = value.id;
      }
    });

    const currentFocusIndex = options.findIndex((value) => value.id === focusedId);

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
      case 'ArrowUp': {
        e.preventDefault();
        const previousOptionIndex = currentFocusIndex - 1 >= 0 ? currentFocusIndex - 1 : options.length - 1;
        const previousValue = options[previousOptionIndex];
        if (previousValue) moveFocusOnElementById(previousValue.id);
        break;
      }
      case 'ArrowDown':
      case 'Tab': {
        e.preventDefault();
        const nextOptionIndex = currentFocusIndex === options.length - 1 ? 0 : currentFocusIndex + 1;
        const nextValue = options[nextOptionIndex];
        if (nextValue) moveFocusOnElementById(nextValue.id);
        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledMultiSelectDropdown $opened={opened} role='listbox' id={dropdownId} tabIndex={-1} onKeyDown={handleListKeyDown}>
      {options.map((item) => (
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </StyledMultiSelectDropdown>
  );
};

export default MultiSelectDropdown;
