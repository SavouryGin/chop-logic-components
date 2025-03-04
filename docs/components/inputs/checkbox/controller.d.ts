import { default as React } from '../../../../node_modules/react';
export declare function useChopLogicCheckboxController({ name, defaultChecked, onChange, }: {
    name: string;
    defaultChecked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}): {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
};
