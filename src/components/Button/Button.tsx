import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => (
    <StyledButton {...props} onClick={props.onClick}>
        {props.children}
    </StyledButton>
);

export default Button;
