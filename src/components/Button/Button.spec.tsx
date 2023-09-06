import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    it('should render the component correctly', () => {
        const functionMock = jest.fn();
        render(
            <Button data-testid='Button' variant='primary' fillColor='#000' onClick={functionMock}>
                Button
            </Button>
        );

        const buttonElement = screen.getByTestId('Button');

        expect(buttonElement).toBeInTheDocument();
    });

    it('should call a function when clicked', () => {
        const functionMock = jest.fn();
        render(
            <Button data-testid='Button' fullWidth={true} variant='outline' fillColor='#000' onClick={functionMock}>
                Button
            </Button>
        );

        const buttonElement = screen.getByTestId('Button');

        fireEvent.click(buttonElement);

        expect(functionMock).toHaveBeenCalled();
    });
});
