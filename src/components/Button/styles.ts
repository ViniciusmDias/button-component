import styled from 'styled-components';
import { ButtonProps } from './index';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 5%;
  }

  strong {
    margin-bottom: 1vh;
  }

  @media (max-width: 1050px) {
    margin-top: 2vh;
  }
`;

export const Btn = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 1.5vh 2vw;
  width: max-content;
  background: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  border: none;
  text-transform: capitalize;
  border: 1px solid transparent;

  &.text {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  &.no-shadow {
    box-shadow: none;
  }
  &.disabled {
    color: #9e9e9e;
  }
  &.sm {
    padding: 1vh 1.5vw;
  }
  &.lg {
    padding: 2vh 2.5vw;
  }
  &.primary {
    background-color: var(--e-global-color-button-primary);
    color: var(--e-global-color-text-white);

    &.hover {
      background-color: var(--e-global-color-button-primary-hover);
    }
  }
  &.secondary {
    background-color: var(--e-global-color-button-secondary);
    color: var(--e-global-color-text-white);

    &.hover {
      background-color: var(--e-global-color-button-secondary-hover);
    }
  }
  &.danger {
    background-color: var(--e-global-color-button-danger);
    color: var(--e-global-color-text-white);

    &.hover {
      background-color: var(--e-global-color-button-danger-hover);
    }
  }
  &.outline {
    background-color: transparent;
    color: var(--e-global-color-button-primary);
    border: 1px solid;
    &.hover {
      background: rgba(41, 98, 255, 0.1);
    }
  }
  &.hover,
  &.focus {
    background: var(--e-global-color-button-default-hover);
  }
`;
