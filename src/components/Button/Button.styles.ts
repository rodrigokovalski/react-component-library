import isPropValid from "@emotion/is-prop-valid";
import { styled } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button.withConfig({
    shouldForwardProp : isPropValid
})<ButtonProps>` 
    padding: 10px 12px;
    color: ${props => props.variant === 'primary' ? '#FFFFFF' : props.fillColor};
    border: 1px solid ${props => props.variant === 'primary' ? 'transparent' : props.fillColor};
    border-radius: 6px;
    background-color: ${props => props.fillColor && props.variant === 'primary' ? props.fillColor : "#FFFFFF"};
    cursor: pointer;

    width: ${props => props.fullWidth ? '100%' : 'fit-content'};
`;

export { StyledButton };