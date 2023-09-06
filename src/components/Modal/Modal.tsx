import React from 'react';
import { StyledHeader, StyledModal, StyledFooter } from './Modal.styles';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = (props) => (
    <>
        {props.isOpen && (
            <StyledModal open={props.isOpen}>
                {props.title && (
                    <StyledHeader>
                        <h4>{props.title}</h4>
                        <button onClick={props.onClose}>X</button>
                    </StyledHeader>
                )}
                {props.children}
                {props.actions && (
                    <StyledFooter>
                        <button className='firstAction'>Fechar</button>
                        <button className='secondAction'>Prosseguir</button>
                    </StyledFooter>
                )}
            </StyledModal>
        )}
    </>
);

export default Modal;
