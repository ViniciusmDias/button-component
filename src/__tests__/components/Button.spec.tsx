import React from 'react';

import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render the Button component', () => {
    const { getAllByTestId } = render(<Button />);

    expect(getAllByTestId('button-container')).toBeTruthy();
  });
});
