import React from 'react';
import { ChopLogicSelectProps } from '@models';

import ChopLogicSelect from '../Select';

const Example: React.FC<ChopLogicSelectProps> = (props) => {
  return <ChopLogicSelect {...props} style={{ width: '240px' }} />;
};

export default Example;
