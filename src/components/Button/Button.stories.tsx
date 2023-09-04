import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        children: {
            control: 'text',
            description: 'It sets the text content within the button.',
        },
        variant: {
            control: 'inline-radio',
            description: 'It sets the button variant.',
        },
        onClick: {
            control: 'none',
            description: 'It sets the function triggered when the button is clicked.',
        },
        fillColor: {
            control: 'color',
            description: 'It defines the hex value for the background or the border + color of the button.'
        },
        fullWidth: {
            control: 'boolean',
            description: 'If true, the button will max content of the available space.'
        }
    },
    args: {
        children: 'Click me!',
        fillColor: '#000000'
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
} as Meta<ButtonProps>;

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
} as Meta<ButtonProps>;

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        fillColor: '#2D5033',
        fullWidth: true,
    },
    decorators: [
        (Story) => (
          <div style={{ width: '300px' }}>
            <Story />
          </div>
        ),
    ],
} as Meta<ButtonProps>;