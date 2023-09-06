import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
    it('should render correctly', () => {
        render(<Input type="text" placeholder='Placeholder' data-testid="input"></Input>);

        const ModalElement = screen.getByTestId('input');

        expect(ModalElement).toBeInTheDocument();
    });

});