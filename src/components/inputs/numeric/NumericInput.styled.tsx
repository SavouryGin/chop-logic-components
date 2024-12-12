import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledNumericInput = styled.div<{ $theme: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$theme.gapMedium};

  & > div:nth-child(2) {
    display: flex;
    gap: ${(props) => props.$theme.gapMedium};
    align-items: center;
    border: ${(props) => props.$theme.borderBase};
    border-radius: ${(props) => props.$theme.blockBorderRadius};
    padding: ${(props) => props.$theme.gapMedium};

    &:has(input:focus) {
      border: ${(props) => props.$theme.borderOutline};
    }

    &:has(input[aria-invalid='true']) {
      border: ${(props) => props.$theme.borderAccent};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: 0;
      align-items: center;
    }
  }

  & input {
    font-size: ${(props) => props.$theme.fontSizeBase};
    padding: 0;
    border: none;
    font-family: ${(props) => props.$theme.fontFamilyCore};
    color: ${(props) => props.$theme.fontColorBase};
    display: inline-block;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;

    &:focus-visible {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
