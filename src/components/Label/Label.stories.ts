import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Label/Label',
  component: Label,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LabelOptional: Story = {
  args: {
    title: '레이블',
    optionString: '선택',
    required: false,
    description: '설명을 입력해 주세요.',
  },
};

export const LabelRequired: Story = {
  args: {
    title: '레이블',
    optionString: '필수',
    required: true,
    description: '설명을 입력해 주세요.',
  },
};
