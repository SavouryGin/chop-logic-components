import { ErrorMessage, Input, Label } from '@atoms';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { useElementIds } from '@hooks';
import { ChopLogicTextInputProps } from '@models';
import { ChopLogicButton } from '@molecules';
import { getClassName } from '@utils';
import React from 'react';

import { useChopLogicTextInputController } from './TextInput.controller.ts';
import styles from './TextInput.module.scss';

const ChopLogicTextInput: React.FC<ChopLogicTextInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  onClear,
  validator,
  maxLength,
  id,
  tabIndex,
  placeholder = 'Type here...',
  disabled = false,
  required = false,
  clearable = true,
  readOnly = false,
  autoComplete = 'off',
  type = 'text',
  className,
  ...rest
}) => {
  const { value, valid, handleChange, handleClear, passwordShown, togglePassword } = useChopLogicTextInputController({
    defaultValue,
    name,
    onChange,
    onClear,
    required,
    validator,
  });
  const { elementId, errorId } = useElementIds(id);
  const isPasswordButtonVisible = type === 'password';
  const inputClass = getClassName([styles.wrapper, className]);

  return (
    <div {...rest} className={inputClass}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type={passwordShown ? 'text' : type}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        autoComplete={autoComplete}
        aria-invalid={!valid}
        aria-errormessage={errorId}
        aria-readonly={readOnly}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        onBlur={onBlur}
        onFocus={onFocus}
        tabIndex={tabIndex}
      >
        <span>
          {clearable && (
            <ChopLogicButton
              view={ChopLogicButtonView.Inner}
              onClick={handleClear}
              label={`Clear input for ${label}`}
              icon={ChopLogicIconName.Remove}
              disabled={disabled}
            />
          )}
          {isPasswordButtonVisible && (
            <ChopLogicButton
              onClick={togglePassword}
              view={ChopLogicButtonView.Inner}
              label='Toggle password visibility'
              icon={passwordShown ? ChopLogicIconName.Hide : ChopLogicIconName.Show}
              disabled={disabled}
            />
          )}
        </span>
        <ErrorMessage errorId={errorId} message={errorMessage} visible={!valid} className={styles.errorMessage} />
      </Input>
    </div>
  );
};

export default ChopLogicTextInput;
