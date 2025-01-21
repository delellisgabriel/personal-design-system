import type { Meta, StoryObj } from '@storybook/react'
import { Callout, Variant } from './Callout'

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An important Title',
    children: 'Lorem ipsum dolor sit amet, consectetur adispicing',
    variant: 'primary' as Variant
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'information', 'warning']
    }
  }
} satisfies Meta

export default meta
type Story = StoryObj<typeof Callout>

export const Primary: Story = {
  args: {
    title: "An important title",
    children: 'This is the callout content.',
    variant: 'primary'
  }
}

export const Success: Story = {
  args: {
    title: 'An important Title',
    children: 'This is the callout content.',
    variant: 'success'
  }
}

export const Danger: Story = {
  args: {
    title: 'An important Title',
    children: 'This is the callout content.',
    variant: 'danger'
  }
}

export const Information: Story = {
  args: {
    title: 'An important Title',
    children: 'This is the callout content.',
    variant: 'information'
  }
}

export const Warning: Story = {
  args: {
    title: 'An important Title',
    children: 'This is the callout content.',
    variant: 'warning'
  }
}

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
