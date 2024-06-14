import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import { userEvent } from '@testing-library/user-event';
import { Icon } from 'enums/icon';

describe('ChopLogicButton component', () => {
  const testProps = {
    id: 'test-button-id',
    text: 'Test button',
    icon: Icon.Copy,
    className: 'test-class',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<Button {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible role', () => {
    render(<Button {...testProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render the text if view is icon', () => {
    render(<Button {...testProps} view='icon' />);
    expect(screen.queryByRole(testProps.text)).not.toBeInTheDocument();
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  it('should not call the callback function on click if the button is disabled', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should have focus on Tab press', () => {
    render(<Button {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
    button.focus();
  });

  it('should call the callback function on Enter press', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockedCallback).toHaveBeenCalledOnce();
  });
});
