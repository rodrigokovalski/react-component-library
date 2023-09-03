import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => <button {...props}>{props.label}</button>;

export default Button;
