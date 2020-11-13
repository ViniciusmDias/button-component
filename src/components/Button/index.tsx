import React from 'react';

import { ButtonContainer } from './styles';

const Button: React.FC = () => {
  return (
    <ButtonContainer>
      <strong>{`<Button variant=”outline” />`}</strong>
      <button type="button">Default</button>
    </ButtonContainer>
  );
};

export default Button;
