import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    variant: 'primary',
    type: 'button',
    fullWidth: false,
    children: 'button label'
  },
  parameters: {
    jest: ['Button.test.tsx']
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};
