import React from 'react';
import Footer from '../Footer';

import { HeroContainer, ButtonsContainer, Buttons } from './styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer data-testid="hero-container">
      <h1>Buttons</h1>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <ButtonsContainer>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
        <Buttons>
          <strong>{`<Button variant=”outline” />`}</strong>
          <button type="button">Default</button>
        </Buttons>
      </ButtonsContainer>
      <Footer />
    </HeroContainer>
  );
};

export default Hero;
