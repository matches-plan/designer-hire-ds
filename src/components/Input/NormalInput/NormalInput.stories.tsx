import type { Meta, StoryObj } from '@storybook/react';

import NormalInput from './NormalInput';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Input/NormalInput',
  component: NormalInput,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof NormalInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalInputDefault: Story = {
  args: {
    placeholder: '플레이스폴더',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string>();

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

export const NormalInputDescription: Story = {
  args: {
    placeholder: '플레이스폴더',
    description: '메세지 텍스트를 입력하세요.',
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

export const NormalInputError: Story = {
  args: {
    placeholder: '플레이스폴더',
    error: '오류 메시지 텍스트를 입력하세요.',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string | undefined>(
        'example@example.com'
      );

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

export const NormalInputSuccess: Story = {
  args: {
    placeholder: '플레이스폴더',
    isSuccess: true,
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string | undefined>('입력한 정보');

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

export const NormalInputDisabled: Story = {
  args: {
    placeholder: '플레이스폴더',
    disabled: true,
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const [value, setValue] = useState<string | undefined>('입력한 정보');

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
