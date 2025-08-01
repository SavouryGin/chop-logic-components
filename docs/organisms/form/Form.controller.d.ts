import { ChopLogicFormData, ChopLogicFormInputParams } from '../../models';
import { default as React, FormEvent } from '../../../node_modules/react';
export declare function useChopLogicFormController({ initialValues, onReset, onSubmit, onClickSubmit, }: {
    initialValues?: ChopLogicFormData;
    onReset?: React.FormEventHandler<HTMLFormElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    onClickSubmit?: (data: ChopLogicFormData) => void;
}): {
    handleInputChange: (params: ChopLogicFormInputParams) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleReset: (event: FormEvent<HTMLFormElement>) => void;
    resetSignal: number;
    valid: boolean;
};
