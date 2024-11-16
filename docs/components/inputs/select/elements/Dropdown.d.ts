import { default as React } from '../../../../../node_modules/react';
import { SelectValue } from '../../../../../../../../../../src/utils/types.ts';

type SelectDropdownProps = {
    options: SelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: SelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
};
declare const SelectDropdown: React.FC<SelectDropdownProps>;
export default SelectDropdown;
