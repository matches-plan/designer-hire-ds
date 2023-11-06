import type { Meta, StoryObj } from '@storybook/react';

import ButtonToggle from './ButtonToggle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Toggle/ToggleItem/ButtonToggle',
  component: ButtonToggle,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LargeButtonToggleOn: Story = {
  args: {
    size: 'large',
    children: '버튼',
    isActive: true,
  },
};

export const LargeButtonToggleOff: Story = {
  args: {
    size: 'large',
    children: '버튼',
    isActive: false,
  },
};

export const SmallButtonToggleOn: Story = {
  args: {
    size: 'small',
    children: '버튼',
    isActive: true,
  },
};

export const SmallButtonToggleOff: Story = {
  args: {
    size: 'small',
    children: '버튼',
    isActive: false,
  },
};
