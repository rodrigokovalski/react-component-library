import React from "react";

export interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement>{
    isOpen: boolean,
    onClose: () => void,
    title?: string,
    size?: 'small' | 'medium' | 'large',
    actions?: boolean;
}