import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext } from 'components/containers/form/FormContext';

import { getTextInputInitialValue, validateTextInputValue } from './helpers';
import { RegExpWithFlags, TextValidationFunction } from './types';

export function useChopLogicTextInputController({
  name,
  defaultValue,
  onChange,
  onClear,
  required,
  validator,
}: {
  name: string;
  required: boolean;
  validator?: RegExpWithFlags | TextValidationFunction;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getTextInputInitialValue({ initialValues, defaultValue, name });
  const [value, setValue] = useState<string>(initialValue);
  const [valid, setValid] = useState<boolean>(true);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const valid = validateTextInputValue({ value, required, validator });

    setValue(value);
    setValid(valid);
    onChangeFormInput?.({ name, value, valid });
    onChange?.(event);
  };

  const handleClear = () => {
    setValue('');
    setValid(true);
    onChangeFormInput?.({ name, value: '', valid: true });
    onClear?.();
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    setValid(true);
    onChangeFormInput?.({ name, value: initialValue, valid: true });
  }, [name]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useResetFormInput(handleReset);

  return {
    value,
    valid,
    passwordShown,
    handleChange,
    handleClear,
    togglePassword,
  };
}
