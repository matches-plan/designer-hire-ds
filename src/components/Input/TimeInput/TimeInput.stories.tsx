import type { Meta, StoryObj } from '@storybook/react';

import TimeInput from './TimeInput';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Input/TimeInput',
  component: TimeInput,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TimeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TimeInputDefault: Story = {
  args: {
    placeholder: '플레이스폴더',
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

export const TimeInputTyped: Story = {
  args: {
    placeholder: '플레이스폴더',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string | undefined>('123456');

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
