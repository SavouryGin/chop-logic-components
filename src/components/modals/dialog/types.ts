import { HTMLAttributes, PropsWithChildren } from 'react';
import { CommonComponentProps } from 'utils/types';

export type ChopLogicDialogProps = CommonComponentProps &
  PropsWithChildren & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

export type DialogLayoutProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
  };
