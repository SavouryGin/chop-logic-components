import { useRef, useState } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import { useClickOutside } from 'utils/use-click-outside';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import ChopLogicLabel from '../../misc/label/Label';

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: MultiSelectValue[];
  placeholder?: string;
};

export type MultiSelectValue = {
  id: string;
  label: string;
  selected: boolean;
};

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
  id,
  values,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<MultiSelectValue[]>(values);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName([styles.wrapper, props?.className, { [styles.disabled]: disabled }]);
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const newValues = selected.map((item) => {
      return item.id === id ? { ...item, selected: true } : item;
    });
    setSelected(newValues);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} className={styles.label} />
      <SelectCombobox
        name={name}
        isOpened={isOpened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown values={values} isOpened={isOpened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </div>
  );
};

export default ChopLogicMultiSelect;
