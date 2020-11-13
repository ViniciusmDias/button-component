import React from 'react';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer data-testid="header-container">
      <h2>
        <span>Dev</span>challenges.io
      </h2>
      <ul>
        <li>
          <a href="/">Colors</a>
        </li>
        <li>
          <a href="/">Typography</a>
        </li>
        <li>
          <a href="/">Spaces</a>
        </li>
        <li>
          <a href="/">Buttons</a>
        </li>
        <li>
          <a className="active" href="/">
            Inputs
          </a>
        </li>
        <li>
          <a href="/">Grids</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
