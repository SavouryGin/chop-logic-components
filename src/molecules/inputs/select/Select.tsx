import { Label, SelectCombobox, SelectDropdown } from '@atoms';
import { useClickOutside, useElementIds, useKeyPress } from '@hooks';
import { ChopLogicSelectProps } from '@models';
import { getClassName } from '@utils';
import React, { useRef } from 'react';

import { useChopLogicSelectController } from './Select.controller.ts';
import styles from './Select.module.scss';

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
  id,
  placeholder = 'Not selected',
  required = false,
  disabled = false,
  className,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClear, handleClose, handleSelect, handleToggle, selected, opened } = useChopLogicSelectController({
    options,
    onChange,
    defaultValue,
    name,
  });
  const selectClass = getClassName([styles.wrapper, className]);

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <div ref={ref} {...rest} className={selectClass}>
      <Label label={label} required={required} inputId={elementId} />
      <SelectCombobox
        name={name}
        opened={opened}
        comboboxId={elementId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown
        options={options}
        selected={selected}
        opened={opened}
        onClose={handleClose}
        dropdownId={dropdownId}
        comboboxId={elementId}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </div>
  );
};

export default ChopLogicSelect;
