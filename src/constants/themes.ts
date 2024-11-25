import { ChopLogicTheme } from 'utils/types.ts';

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  primaryColor: 'hsl(205, 100%, 9%)',
  secondaryColor: 'hsl(202, 40%, 27%)',
  tertiaryColor: 'hsl(217, 16%, 72%)',
  backgroundColor: 'hsl(38, 100%, 91%)',
  accentColor: 'hsl(356, 100%, 53%)',
  // Gradients
  primaryGradient:
    'linear-gradient(to left, hsl(202, 40%, 14%) 0%, hsl(202, 40%, 20%) 8%, hsl(202, 40%, 20%) 92%, hsl(202, 40%, 14%) 100%)',
  accentGradient:
    'linear-gradient(to left, hsl(356, 100%, 16%) 0%, hsl(356, 100%, 43%) 8%, hsl(356, 100%, 43%) 92%, hsl(356, 100%, 16%) 100%)',
  tintGradient: 'linear-gradient(to left, hsl(38, 100%, 30%) 0%, hsl(38, 100%, 60%) 8%, hsl(38, 100%, 60%) 92%, hsl(38, 100%, 30%) 100%)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #ACB5C3FF',
  accentBorder: '1px solid #FF0F1FFF',
  outlineBorder: '1px solid #001B2EFF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  baseFontSize: '1rem',
  smallFontSize: '0.8rem',
  headerFontSize: '2rem',
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1.2rem',
  blockBorderRadius: '0.375rem',
  // Z-indexes
  baseIndex: '1',
  tooltipIndex: '100',
  dropdownIndex: '200',
  modalIndex: '300',
};

export const DARK_THEME: ChopLogicTheme = {
  // Colors
  primaryColor: 'hsl(30, 36%, 90%)',
  secondaryColor: 'hsl(45, 77%, 79%)',
  tertiaryColor: 'hsl(184, 36%, 63%)',
  backgroundColor: 'hsl(345, 6%, 13%)',
  accentColor: 'hsl(9, 59%, 46%)',
  // Gradients
  primaryGradient: 'linear-gradient(to left, hsl(45, 77%, 20%) 0%, hsl(45, 77%, 59%) 8%, hsl(45, 77%, 50%) 92%, hsl(45, 77%, 20%) 100%)',
  accentGradient: 'linear-gradient(to left, hsl(9, 59%, 16%) 0%, hsl(9, 59%, 36%) 8%, hsl(9, 59%, 36%) 92%, hsl(9, 59%, 16%) 100%)',
  tintGradient: 'linear-gradient(to left, hsl(184, 36%, 20%) 0%, hsl(184, 36%, 43%) 8%, hsl(184, 36%, 43%) 92%, hsl(184, 36%, 20%) 100%)',
  // Shadows
  boxShadow: 'rgba(239, 230, 220, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(127, 190, 195, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #7FBEC3FF',
  accentBorder: '1px solid #BB4530FF',
  outlineBorder: '1px solid #EFE6DCFF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  baseFontSize: '1rem',
  smallFontSize: '0.8rem',
  headerFontSize: '2rem',
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1rem',
  blockBorderRadius: '0.375rem',
  // Z-indexes
  baseIndex: '1',
  tooltipIndex: '100',
  dropdownIndex: '200',
  modalIndex: '300',
};
