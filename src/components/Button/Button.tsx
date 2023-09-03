import React from 'react';

interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = (props) => (
    <button {...props}>{props.label}</button>
);

export default Button;