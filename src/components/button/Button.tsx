import React, { MouseEventHandler } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';

export type ChopLogicButtonProps = {
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: 'submit' | 'reset' | 'button';
  mode?: 'primary' | 'secondary';
};

const Button: React.FC<ChopLogicButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  onClick,
  text = 'Ok',
  type = 'button',
  mode = 'primary',
  ...props
}) => {
  const buttonClass = createClassName([
    styles.button,
    props?.className,
    { [styles.primary]: mode === 'primary', [styles.secondary]: mode === 'secondary' },
  ]);

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
