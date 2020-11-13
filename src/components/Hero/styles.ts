import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4vh 5%;
  background: var(--e-global-color-background-primary);

  h1 {
    color: var(--e-global-color-text-default);
    margin-bottom: 3vh;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;

  & + & {
    margin-top: 5vh;
  }
`;

// create a component
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 5%;
  }

  strong {
    font-family: 'Ubuntu Mono';
    font-size: 0.9rem;
    line-height: 12px;
    margin-bottom: 1vh;
    color: var(--e-global-color-button-text-span);
    font-weight: 400;
  }

  button {
    padding: 1vh 2vw;
    width: max-content;
    background: #e0e0e0;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    border: none;
  }
`;
