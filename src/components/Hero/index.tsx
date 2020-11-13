import React from 'react';
import Footer from '../Footer';
import Button from '../Button';

import { HeroContainer, ButtonsContainer } from './styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer data-testid="hero-container">
      <h1>Button</h1>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
        <Button>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Button>
      </ButtonsContainer>
      <Footer />
    </HeroContainer>
  );
};

export default Hero;
