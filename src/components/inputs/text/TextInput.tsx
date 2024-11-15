import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicErrorMessage from 'components/inputs/_common/error-message/ErrorMessage';
import InputInnerButton from 'components/inputs/_common/input-inner-button/InputInnerButton';
import ChopLogicLabel from 'components/inputs/_common/label/Label';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import { useChopLogicTextInputController } from './controller';
import {
  StyledButtonsWrapper,
  StyledFieldWrapper,
  StyledTextInput,
  StyledTextInputContainer,
  StyledTextInputWrapper,
} from './TextInput.styled';
import { ChopLogicTextInputProps } from './types';

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
  theme,
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
  const themeValues = getChopLogicTheme(theme);

  return (
    <StyledTextInputContainer {...rest} theme={themeValues}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid} theme={themeValues}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} theme={themeValues} />
        <StyledFieldWrapper>
          <StyledTextInput
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
          />
          <StyledButtonsWrapper>
            {clearable && <InputInnerButton onClick={handleClear} label={`Clear input for ${label}`} icon={ChopLogicIconName.Remove} />}
            {isPasswordButtonVisible && (
              <InputInnerButton
                onClick={togglePassword}
                label='Toggle password visibility'
                icon={passwordShown ? ChopLogicIconName.Hide : ChopLogicIconName.Show}
              />
            )}
          </StyledButtonsWrapper>
        </StyledFieldWrapper>
      </StyledTextInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledTextInputContainer>
  );
};

export default ChopLogicTextInput;
