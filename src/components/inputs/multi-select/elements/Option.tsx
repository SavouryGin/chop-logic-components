import { KeyboardEvent } from 'react';
import createClassName from 'utils/create-class-name';
import { Icon } from 'enums/icon';
import '../MultiSelect.styles.css';
import { MultiSelectValue } from '../types';

type SelectOptionProps = {
  value: MultiSelectValue;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, onSelect }) => {
  const { id, label, selected } = value;
  const checkboxClass = createClassName(['cl-multi-select__checkbox', { [Icon.Checked]: selected, [Icon.Unchecked]: !selected }]);

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
    <li
      id={id}
      role='option'
      className='cl-multi-select__option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      <span className={checkboxClass} aria-hidden='true'></span>
      <span>{label}</span>
    </li>
  );
};

export default SelectOption;
