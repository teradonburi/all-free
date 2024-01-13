import type { Meta, StoryObj } from '@storybook/web-components';
import { CustomButton } from '../src/components/custom-button';

if (!customElements.get('custom-button')) {
  customElements.define('custom-button', CustomButton);
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => `<custom-button text="${args.text}"></custom-button>`,
  argTypes: {
    text: {
      description: 'The text to display on the button',
      type: { name: 'string', required: true },
      defaultValue: 'Click Me',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<CustomButton>;

export default meta;
type Story = StoryObj<CustomButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'my button'
  },
};
