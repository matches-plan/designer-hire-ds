import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Select/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '280px', width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SelectDefault: Story = {
  args: {
    placeholder: '분류',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const items = [
        '분류항목0',
        '분류항목1',
        '분류항목2',
        '분류항목3',
        '분류항목4',
      ];
      const [index, setIndex] = useState<number>();

      return (
        <Story
          args={{
            ...context.args,
            index, // useState로 생성된 value 상태를 전달합니다.
            items,
            onChange: (i, e) => {
              setIndex(e);
            }, // onChange 핸들러를 정의합니다.
          }}
        />
      );
    },
  ],
};

export const SelectSelected: Story = {
  args: {
    placeholder: '분류',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const items = [
        '분류항목0',
        '분류항목1',
        '분류항목2',
        '분류항목3',
        '분류항목4',
      ];
      const [index, setIndex] = useState<number | undefined>(1);

      return (
        <Story
          args={{
            ...context.args,
            index, // useState로 생성된 value 상태를 전달합니다.
            items,
            onChange: (i, e) => {
              setIndex(e);
            }, // onChange 핸들러를 정의합니다.
          }}
        />
      );
    },
  ],
};

export const SelectLonger: Story = {
  args: {
    placeholder: '분류',
  },
  decorators: [
    (Story, context) => {
      // useState를 사용하여 value 상태를 관리합니다.
      const items = [
        '버튼보다 더욱더 길어진 분류 항목입니다.',
        '분류항목0',
        '분류항목1',
        '분류항목2',
        '분류항목3',
        '분류항목4',
      ];
      const [index, setIndex] = useState<number | undefined>(1);

      return (
        <Story
          args={{
            ...context.args,
            index, // useState로 생성된 value 상태를 전달합니다.
            items,
            onChange: (i, e) => {
              setIndex(e);
            }, // onChange 핸들러를 정의합니다.
          }}
        />
      );
    },
  ],
};
