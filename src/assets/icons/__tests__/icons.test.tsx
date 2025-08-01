import { ChopLogicIconDictionary } from '@assets/icons';
import { ChopLogicIconName } from '@enums';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('SVG Icons', () => {
  it('should match the snapshot', () => {
    for (const name in ChopLogicIconDictionary) {
      const Component = ChopLogicIconDictionary[name as ChopLogicIconName];
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    }
  });
});
