import React from 'react';
import Footer from '../Footer';
import Button from '../Button';

import { HeroContainer, ButtonsContainer } from './styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer data-testid="hero-container">
      <h1>Button</h1>
      <ButtonsContainer>
        <Button>{`<Button />`}</Button>
        <Button hover>&:hover, &:focus</Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="primary" variant="outline">
          {`<Button variant=”outline” />`}
        </Button>
        <Button color="primary" variant="outline" hover>
          &:hover, &:focus
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="primary" variant="text">
          {`<Button variant=”text” />`}
        </Button>
        <Button color="primary" variant="text" hover>
          &:hover, &:focus
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button disableShadow color="primary">
          {`<Button disableShadow />`}
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button disabled text="disabled">{`<Button disabled />`}</Button>
        <Button disabled text="disabled" variant="text">
          {`<Button variant=”text” disabled /> `}
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="primary" startIcon>
          {`<Button startIcon=”local_grocery_store” />`}
        </Button>
        <Button color="primary" endIcon>
          {`<Button endIcon=”local_grocery_store” />`}
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="primary" size="sm">{`<Button size=”sm” />`}</Button>
        <Button color="primary" size="md">{`<Button size=”md” />`}</Button>
        <Button color="primary" size="lg">{`<Button size=”lg” />`}</Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="default">{`<Button color=”default” /> `}</Button>
        <Button color="primary">{`<Button color="primary"/>`}</Button>
        <Button color="secondary" text="secondary">
          {`<Button color=”secondary”/>`}
        </Button>
        <Button color="danger" text="danger">
          {`<Button color=”danger”/>`}
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button hover color="default">
          &:hover, &:focus
        </Button>
        <Button hover color="primary" />
        <Button hover color="secondary" text="secondary" />
        <Button hover color="danger" text="danger" />
      </ButtonsContainer>
      <Footer />
    </HeroContainer>
  );
};

export default Hero;
