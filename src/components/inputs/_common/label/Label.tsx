import React, { PropsWithChildren } from 'react';
import { ChopLogicTheme } from 'utils/types.ts';

import { StyledLabel } from './Label.styled';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
  theme?: ChopLogicTheme;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
  style,
  theme,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <StyledLabel htmlFor={inputId} style={style} theme={theme}>
      {isLeftIconVisible && icon}
      {!isTextHidden && <span className='chop-logic-label-text'>{label}</span>}
      {required && (
        <abbr className='chop-logic-label-abbr' title='required'>
          *
        </abbr>
      )}
      {isRightIconVisible && icon}
    </StyledLabel>
  );
};

export default ChopLogicLabel;
