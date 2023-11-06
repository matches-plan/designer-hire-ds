import type { Meta, StoryObj } from '@storybook/react';

import RoundedButton from './RoundedButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button/RoundedButton',
  component: RoundedButton,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RoundedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LargeFilled: Story = {
  args: {
    size: 'large',
    variant: 'filled',
    children: '버튼',
  },
};

export const SmallFilled: Story = {
  args: {
    size: 'small',
    variant: 'filled',
    children: '버튼',
  },
};

export const LargeOutlined: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    children: '버튼',
  },
};

export const SmallOutlined: Story = {
  args: {
    size: 'small',
    variant: 'outlined',
    children: '버튼',
  },
};

export const LargeGhost: Story = {
  args: {
    size: 'large',
    variant: 'ghost',
    children: '버튼',
  },
};

export const SmallGhost: Story = {
  args: {
    size: 'small',
    variant: 'ghost',
    children: '버튼',
  },
};

export const LargeDisabled: Story = {
  args: {
    size: 'large',
    disabled: true,
    children: '버튼',
  },
};

export const SmallDisabled: Story = {
  args: {
    size: 'small',
    disabled: true,
    children: '버튼',
  },
};
