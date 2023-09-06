import React from 'react';
import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props) => <StyledInput {...props}></StyledInput>;

export default Input;
