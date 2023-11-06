import type { Meta, StoryObj } from '@storybook/react';

import GrayButton from './GrayButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button/GrayButton',
  component: GrayButton,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof GrayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    children: '버튼',
    disabled: true,
  },
};
