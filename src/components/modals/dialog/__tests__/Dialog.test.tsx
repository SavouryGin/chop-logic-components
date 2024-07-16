import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicModalLayout from '../elements/Layout';
import ChopLogicModalLayoutHeader from '../elements/Header';
import userEvent from '@testing-library/user-event';
import ChopLogicDialog from '../Dialog';

describe('ChopLogicDialog', () => {
  const testLayoutProps = {
    id: 'test-dialog-id',
    title: 'Test dialog',
    onClose: vi.fn(),
  };

  it('should render the dialog correctly after a delay', async () => {
    render(
      <ChopLogicDialog {...testLayoutProps} isOpened>
        <div>Dialog content</div>
      </ChopLogicDialog>,
    );
    const window = await screen.findByRole('dialog');
    expect(window).toBeInTheDocument();
  });

  it('should render the dialog if isOpened is false', () => {
    render(
      <ChopLogicDialog {...testLayoutProps} isOpened={false}>
        <div>Dialog content</div>
      </ChopLogicDialog>,
    );
    const window = screen.queryByRole('dialog');
    expect(window).not.toBeInTheDocument();
  });

  it('should render the layout correctly', () => {
    const { asFragment } = render(
      <ChopLogicModalLayout {...testLayoutProps} isOpened>
        <div>Dialog content</div>
      </ChopLogicModalLayout>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the dialog role', () => {
    render(
      <ChopLogicModalLayout {...testLayoutProps} isOpened>
        <div>Dialog content</div>
      </ChopLogicModalLayout>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should display the dialog title and the close button', () => {
    render(<ChopLogicModalLayoutHeader title={testLayoutProps.title} onClose={testLayoutProps.onClose} />);
    expect(screen.getByText(testLayoutProps.title)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClose handler', async () => {
    render(<ChopLogicModalLayoutHeader title={testLayoutProps.title} onClose={testLayoutProps.onClose} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testLayoutProps.onClose).toHaveBeenCalledOnce();
  });
});
