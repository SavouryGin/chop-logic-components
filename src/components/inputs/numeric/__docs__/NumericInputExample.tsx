import React from 'react';

import NumericInput, { ChopLogicNumericInputProps } from '../NumericInput';

const Example: React.FC<ChopLogicNumericInputProps> = (props) => {
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
      <NumericInput {...props} style={{ width: '240px' }} />
    </div>
  );
};

export default Example;
