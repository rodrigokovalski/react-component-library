import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal  from './Modal';
import { ModalProps } from './Modal.types';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'Components/Modal',
    argTypes: {
       isOpen: {
           control: 'boolean',
           description: ''
       },
       onClose: {
           control: 'none',
           description: ''
       }
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ height: '400px' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        onClose: () => {},
        isOpen: true,
        title: 'Modal Heading',
        actions: true,
        children: "Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam."
    }
} as Meta<ModalProps>;