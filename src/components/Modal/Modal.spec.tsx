import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
    it('should render correctly', () => {
        const functionMock = jest.fn();
        render(
            <Modal isOpen={true} onClose={functionMock}>
                Modal
            </Modal>
        );

        const ModalElement = screen.getByText('Modal');

        expect(ModalElement).toBeInTheDocument();
    });

    it('should render with a title when it is passed', () => {
        const functionMock = jest.fn();
        render(
            <Modal isOpen={true} onClose={functionMock} actions={true} data-testid='Modal' title='Título'>
                Modal
            </Modal>
        );

        const titleElement = screen.getByText('Título');

        expect(titleElement).toBeInTheDocument();
    });
});
