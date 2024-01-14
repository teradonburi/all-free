import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/components/custom-button';
import type CustomButton from '../src/components/custom-button';

type Element = CustomButton & { children: any };

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/custom-button',
  tags: ['autodocs'],
  render: (args) => `<custom-button ${args.disabled ? 'disabled' : ''}>${args.children}</custom-button>`,
  argTypes: {
    disabled: {
      description: 'The disable flag of button',
      type: { name: 'boolean', required: false },
    },
    children: {
      description: 'The text to display on the button',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
  },
  args: {
    disabled: false,
    children: 'my button'
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    children: 'my button'
  },
};
