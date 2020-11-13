import React from 'react';

import { render } from '@testing-library/react';
import Hero from '../../components/Hero';

describe('Hero component', () => {
  it('should be able to render the Hero component', () => {
    const { getAllByTestId } = render(<Hero />);

    expect(getAllByTestId('hero-container')).toBeTruthy();
  });
});
