import ArrowDownIcon from '@assets/icons/svg/ArrowDownIcon.tsx';
import ArrowUpIcon from '@assets/icons/svg/ArrowUpIcon.tsx';
import { ChopLogicMultiSelectValue } from '@models';
import React from 'react';

import styles from '../select/combobox/Combobox.module.scss';

type Props = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  values?: ChopLogicMultiSelectValue[];
  placeholder?: string;
  name: string;
};

export const MultiSelectCombobox: React.FC<Props> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  name,
  placeholder,
  disabled,
  required,
  values,
}) => {
  const selectedLabels = values?.filter((value) => value.selected).map((value) => value.label);
  const selectedIds = values?.filter((value) => value.selected).map((value) => value.id);
  let selectedValues = <span>{placeholder}</span>;

  if (selectedLabels && selectedLabels.length === values?.length) {
    selectedValues = <span>All items selected</span>;
  } else if (selectedLabels && selectedLabels.length === 1) {
    selectedValues = <span>{selectedLabels[0]}</span>;
  } else if (selectedLabels && selectedLabels.length > 1) {
    selectedValues = <span>{`${selectedLabels.length} items selected`}</span>;
  }

  return (
    <button
      type='button'
      name={name}
      value={selectedIds}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={opened}
      aria-controls={dropdownId}
      id={comboboxId}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
      className={styles.combobox}
    >
      {selectedValues}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </button>
  );
};
