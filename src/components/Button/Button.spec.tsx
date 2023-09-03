import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    it('should render the component correctly', () => {
        render(<Button data-testid="Button" label="Button"></Button>);

        const buttonElement = screen.getByTestId("Button");

        expect(buttonElement).toBeInTheDocument();
    })
});