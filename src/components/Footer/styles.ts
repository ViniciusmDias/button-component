import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 3vh;
    color: var(--e-global-color-text-footer-default);
  }
  h3 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 15px;
    color: var(--e-global-color-text-footer-default);
  }
`;
