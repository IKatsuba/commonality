import type { Meta, StoryObj } from '@storybook/react';
import { TooltipDependency } from '@commonalityco/ui-graph';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Features/Graph/TooltipContentDependency',
  component: TooltipDependency,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light/secondary',
    },
  },
} satisfies Meta<typeof TooltipDependency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    edge: {
      name: '@scope/source',
      type: 'PRODUCTION',
      version: '1.0.0',
      target: '@scope/target',
      source: '@scope/source',
    },
  },
};