import { BORDERS, COLORS, SHADOWS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledCheckboxWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: ${UNITS.smallGap};
  padding: ${UNITS.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${COLORS.secondary};
  }

  label {
    cursor: pointer;
    gap: ${UNITS.smallGap};
    font-size: 1rem !important;
    &:hover,
    &:active {
      text-shadow: ${SHADOWS.text};
    }
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${BORDERS.outline};
    outline-offset: 2px;
  }
`;
