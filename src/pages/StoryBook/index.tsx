import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

import { Container } from './styles';

const StoryBook: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <footer />
    </Container>
  );
};

export default StoryBook;
