import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 16.5%;
  min-width: 200px;
  padding: 4vh 3%;
  margin: 0.5% 0 0.5% 0.5%;
  background: var(--e-global-color-background-header);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 24px 0 0 24px;

  h2 {
    color: var(--e-global-color-button-secondary-hover);
    margin-bottom: 10.5vh;

    span {
      color: #f7542e;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      margin-bottom: 4vh;
      a {
        font-family: 'Noto Sans JP', sans-serif;
        text-decoration: none;
        color: var(--e-global-color-text-header);
        font-weight: 500;
        font-size: 1rem;
        line-height: 20px;

        &.active {
          color: var(--e-global-color-text-header-selected);
        }
      }
    }
  }
`;
