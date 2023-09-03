import isPropValid from "@emotion/is-prop-valid";
import { styled } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button.withConfig({
    shouldForwardProp : isPropValid
})<ButtonProps>` 

`;

export { StyledButton };