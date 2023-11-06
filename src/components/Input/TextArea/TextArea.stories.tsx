import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './TextArea';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Input/TextArea',
  component: TextArea,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextAreaDefault: Story = {
  args: {
    placeholder: `두줄 이상 긴 텍스트 입력 시 인풋창 입니다.
두줄 이상 긴 텍스트 입력 시 인풋창 입니다.
두줄 이상 긴 텍스트 입력 시 인풋창 입니다.`,
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string | undefined>('');

      return (
        <Story
          args={{
            ...context.args,
            value, // useState로 생성된 value 상태를 전달합니다.
            onChange: (e) => setValue(e), // onChange 핸들러를 정의합니다.
          }}
        />
      );
    },
  ],
};

export const TextAreaTyped: Story = {
  args: {
    placeholder: `플레이스홀더`,
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<
        string | undefined
      >(`두줄 이상 긴 텍스트 입력 시 인풋창 입니다.
두줄 이상 긴 텍스트 입력 시 인풋창 입니다.
두줄 이상 긴 텍스트 입력 시 인풋창 입니다.`);

      return (
        <Story
          args={{
            ...context.args,
            value, // useState로 생성된 value 상태를 전달합니다.
            onChange: (e) => setValue(e), // onChange 핸들러를 정의합니다.
          }}
        />
      );
    },
  ],
};
