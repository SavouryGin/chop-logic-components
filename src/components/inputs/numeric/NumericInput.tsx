import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicErrorMessage from 'components/inputs/_common/error-message/ErrorMessage';
import ChopLogicLabel from 'components/inputs/_common/label/Label';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import InputInnerButton from '../_common/input-inner-button/InputInnerButton';

import { useChopLogicNumericInputController } from './controller';
import {
  StyledButtonsWrapper,
  StyledFieldWrapper,
  StyledNumericInput,
  StyledNumericInputContainer,
  StyledNumericInputWrapper,
} from './NumericInput.styled';
import { ChopLogicNumericInputProps } from './types';

const ChopLogicNumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  onSpinButtonClick,
  validator,
  min,
  max,
  disabled = false,
  required = false,
  readOnly = false,
  hasSpinButtons = true,
  defaultValue = 0,
  step = 1,
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, valid, handleChange, increment, decrement, minValue, maxValue } = useChopLogicNumericInputController({
    name,
    defaultValue,
    min,
    max,
    onChange,
    required,
    validator,
    step: +step,
    onSpinButtonClick,
  });

  return (
    <StyledNumericInputContainer className={props?.className} style={props?.style}>
      <StyledNumericInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledFieldWrapper>
          <StyledNumericInput
            id={elementId}
            name={name}
            type='number'
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            placeholder='0'
            aria-invalid={!valid}
            aria-errormessage={errorId}
            value={value.toString()}
            onChange={handleChange}
            min={minValue}
            max={maxValue}
            step={step}
            onBlur={props?.onBlur}
            onFocus={props?.onFocus}
            tabIndex={props?.tabIndex}
          />
          {hasSpinButtons && (
            <StyledButtonsWrapper>
              <InputInnerButton onClick={decrement} label={`Decrement value for ${label}`} icon={ChopLogicIconName.ChevronLeft} />
              <InputInnerButton onClick={increment} label={`Increment value for ${label}`} icon={ChopLogicIconName.ChevronRight} />
            </StyledButtonsWrapper>
          )}
        </StyledFieldWrapper>
      </StyledNumericInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledNumericInputContainer>
  );
};

export default ChopLogicNumericInput;
