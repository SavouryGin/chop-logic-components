import React from 'react';

import { ChopLogicLabel } from '@/elements';
import { useElementIds } from '@/hooks';
import CheckboxCheckedIcon from '@/icons/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@/icons/CheckboxUncheckedIcon.tsx';

import { StyledGridCheckboxInput, StyledGridCheckboxWrapper } from '../Grid.styled';

type ChopLogicGridCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const GridCheckbox: React.FC<ChopLogicGridCheckboxProps> = ({
  name,
  label,
  disabled,
  required = false,
  onChange,
  checked = false,
  ...props
}) => {
  const { elementId } = useElementIds(props?.id);

  return (
    <StyledGridCheckboxWrapper $disabled={!!disabled}>
      <StyledGridCheckboxInput
        id={elementId}
        name={name}
        type='checkbox'
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={onChange}
      />
      <ChopLogicLabel
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={true}
        iconPosition='left'
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      />
    </StyledGridCheckboxWrapper>
  );
};

export default GridCheckbox;
