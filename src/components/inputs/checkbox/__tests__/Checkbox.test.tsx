import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Checkbox from '../Checkbox';
import userEvent from '@testing-library/user-event';

describe('ChopLogicTextInput component', () => {
  const testProps = {
    id: 'test-checkbox-id',
    name: 'testCheckbox',
    label: 'Test checkbox:',
  };

  it('should render the input correctly', () => {
    const { asFragment } = render(<Checkbox {...testProps} />);
    screen.debug();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should be enabled by default', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByRole('checkbox')).toBeEnabled();
  });

  it('could be disable by prop', () => {
    render(<Checkbox {...testProps} disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('should call onChange handler on click', async () => {
    const mockOnChange = vi.fn();
    render(<Checkbox {...testProps} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledOnce();
  });
});
