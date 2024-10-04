import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import SelectGridRowCheckbox from '../elements/SelectRow';

describe('SelectGridRowCheckbox', () => {
  const mockedSelect = vi.fn();
  const mockedDeselect = vi.fn();
  const mockedRowId = 'grid-id';

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <SelectGridRowCheckbox selectRowById={mockedSelect} deselectRowById={mockedDeselect} rowId={mockedRowId} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call select/deselect handlers', async () => {
    render(<SelectGridRowCheckbox selectRowById={mockedSelect} deselectRowById={mockedDeselect} rowId={mockedRowId} />);

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedSelect).toHaveBeenCalledOnce();
    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedDeselect).toHaveBeenCalledOnce();
  });
});