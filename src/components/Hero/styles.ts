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
  flex-wrap: wrap;
  margin-bottom: 5vh;
`;
