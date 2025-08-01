import { ChopLogicIcon } from '@atoms';
import { ChopLogicHeaderProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC<ChopLogicHeaderProps> = ({ as = 'h1', icon, children, className, ...rest }) => {
  const HeaderTag = as;
  const headerClass = getClassName([
    className,
    styles.header,
    {
      [styles.header__h1]: as === 'h1',
      [styles.header__h2]: as === 'h2',
      [styles.header__h3]: as === 'h3',
      [styles.header__h4]: as === 'h4',
      [styles.header__h5]: as === 'h5',
      [styles.header__h6]: as === 'h6',
    },
  ]);

  return (
    <HeaderTag className={headerClass} {...rest}>
      {icon && <ChopLogicIcon name={icon} />}
      <span className={styles.header_text}>{children}</span>
    </HeaderTag>
  );
};

export default Header;
