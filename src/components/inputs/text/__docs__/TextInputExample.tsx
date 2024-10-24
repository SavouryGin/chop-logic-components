import React from 'react';

import TextInput from '../TextInput';
import { ChopLogicTextInputProps } from '../types';

const Example: React.FC<ChopLogicTextInputProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <TextInput {...props} style={{ width: '240px' }} />
    </div>
  );
};

export default Example;
