import React from 'react';

import TextInput, { ChopLogicTextInputProps } from '../TextInput';

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
      <TextInput {...props} style={{ width: '180px' }} />
    </div>
  );
};

export default Example;
