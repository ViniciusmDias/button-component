import React from 'react';

import { render } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  it('should be able to render the Footer component', () => {
    const { getAllByTestId } = render(<Footer />);

    expect(getAllByTestId('footer-container')).toBeTruthy();
  });
});
