import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMultiSelectValue } from '../../../../models';
type MultiSelectComboboxProps = {
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
declare const SelectCombobox: React.FC<MultiSelectComboboxProps>;
export default SelectCombobox;
