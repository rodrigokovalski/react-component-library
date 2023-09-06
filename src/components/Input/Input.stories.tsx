import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input  from './Input';
import { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Input',
    argTypes: {
       
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'Placeholder'
    }
} as Meta<InputProps>;