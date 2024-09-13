import { BORDERS, COLORS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledClearButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 2px;
  padding: 2px;
  background: ${COLORS.background};
  border: none;
  font-size: 1rem;
  color: ${COLORS.secondary};

  &:focus-visible {
    outline: ${BORDERS.focusOutline};
    outline-offset: -4px;
  }

  &:hover {
    color: ${COLORS.accent};
  }

  svg {
    cursor: pointer;
    height: ${UNITS.smallIconSize};
    width: ${UNITS.smallIconSize};
  }
`;
