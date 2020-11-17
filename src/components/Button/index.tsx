/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ButtonContainer, Btn } from './styles';

export interface ButtonProps {
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
  size?: string;
  color?: string;
  hover?: boolean;
  focus?: boolean;
  text?: string;
  children?: string | any;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  let variant;
  switch (props.variant) {
    case 'outline':
      variant = 'outline';
      break;
    case 'text':
      variant = 'text';
      break;
    default:
      variant = '';
      break;
  }
  let color;
  switch (props.color) {
    case 'primary':
      color = 'primary';
      break;
    case 'secondary':
      color = 'secondary';
      break;
    case 'danger':
      color = 'danger';
      break;
    default:
      color = 'default';
      break;
  }
  const hover = props.hover ? 'hover' : '';
  const focus = props.focus ? 'focus' : '';
  const shadow = props.disableShadow ? 'no-shadow' : '';
  const disabled = props.disabled ? 'disabled' : '';
  const size = props.size ? props.size : '';

  const buttonStyle = `${variant} ${shadow} ${disabled} ${size} ${hover} ${focus} ${color}`;

  return (
    <ButtonContainer data-testid="button-container">
      <strong>{props.children}</strong>
      <div>
        <Btn className={buttonStyle} type="button">
          {props.startIcon && (
            <MdAddShoppingCart style={{ marginRight: 5 }} size={20} />
          )}

          {props.text}
          {props.endIcon && (
            <MdAddShoppingCart style={{ marginLeft: 5 }} size={20} />
          )}
        </Btn>
      </div>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  variant: '',
  disableShadow: false,
  disabled: false,
  startIcon: false,
  endIcon: false,
  size: 'md',
  color: 'default',
  hover: false,
  focus: false,
  text: 'default',
};

export default Button;
