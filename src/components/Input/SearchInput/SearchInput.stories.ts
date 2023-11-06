import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from './SearchInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Input/SearchInput',
  component: SearchInput,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SearchInputLarge: Story = {
  args: {
    placeholder: '검색어를 입력해 주세요',
    size: 'large',
    onSearch(text) {
      console.log(text);
    },
  },
};

export const SearchInputSmall: Story = {
  args: {
    placeholder: '검색어를 입력해 주세요',
    size: 'small',
    onSearch(text) {
      console.log(text);
    },
  },
};
