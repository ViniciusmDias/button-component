import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4vh 5%;
  margin: 0.5% 0.5% 0.5% 0;
  background: var(--e-global-color-background-primary);
  border-radius: 0 24px 24px 0;

  h1 {
    color: var(--e-global-color-text-default);
    margin-bottom: 3vh;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  margin-bottom: 5vh;
`;

// create a component
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 5%;
  }

  strong {
    margin-bottom: 1vh;
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
