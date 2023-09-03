import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        children: {
            control: 'text',
            description: '',
        },
        variant: {
            control: 'inline-radio',
            description: '',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
} as Meta<ButtonProps>;
