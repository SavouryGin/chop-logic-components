import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicModalLayout from '../elements/Layout';
import ChopLogicModalLayoutHeader from '../elements/Header';
import userEvent from '@testing-library/user-event';
import ChopLogicModal from '../Modal';

describe('ChopLogicModal component', () => {
  const testLayoutProps = {
    id: 'test-id',
    title: 'Test modal',
    onClose: vi.fn(),
  };

  it('ChopLogicModal should render the window correctly after a delay', async () => {
    render(
      <ChopLogicModal {...testLayoutProps} isOpened>
        <div>Test content</div>
      </ChopLogicModal>,
    );
    const window = await screen.findByRole('dialog');
    expect(window).toBeInTheDocument();
  });

  it('ChopLogicModal should render the window if isOpened is false', () => {
    render(
      <ChopLogicModal {...testLayoutProps} isOpened={false}>
        <div>Test content</div>
      </ChopLogicModal>,
    );
    const window = screen.queryByRole('dialog');
    expect(window).not.toBeInTheDocument();
  });

  it('ChopLogicModalLayout should render correctly', () => {
    const { asFragment } = render(
      <ChopLogicModalLayout {...testLayoutProps} isOpened>
        <div>Test content</div>
      </ChopLogicModalLayout>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChopLogicModalLayout the dialog element', () => {
    render(
      <ChopLogicModalLayout {...testLayoutProps} isOpened>
        <div>Test content</div>
      </ChopLogicModalLayout>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('ChopLogicModalLayoutHeader should display the modal title and the close button', () => {
    render(<ChopLogicModalLayoutHeader title={testLayoutProps.title} onClose={testLayoutProps.onClose} />);
    expect(screen.getByText(testLayoutProps.title)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('ChopLogicModalLayoutHeader should call onClose handler', async () => {
    render(<ChopLogicModalLayoutHeader title={testLayoutProps.title} onClose={testLayoutProps.onClose} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testLayoutProps.onClose).toHaveBeenCalledOnce();
  });
});
