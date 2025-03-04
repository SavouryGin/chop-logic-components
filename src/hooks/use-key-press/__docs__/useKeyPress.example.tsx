import { useRef } from 'react';
import { ExampleDivContainer } from '@css/__docs__/ExampleDivContainer.styled.tsx';
import { useChopLogicTheme, useKeyPress } from '@hooks';

const UseKeyPressExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();

  const handleKeyPress = () => {
    alert('Enter Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <ExampleDivContainer ref={ref} tabIndex={0} $theme={theme}>
      Press Enter key
    </ExampleDivContainer>
  );
};

export default UseKeyPressExample;
