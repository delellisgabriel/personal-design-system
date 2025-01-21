import type { Meta, StoryObj } from '@storybook/react'
import { Button, Size, Variant } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary' as Variant,
    size: 'medium' as Size,
    disabled: false
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button'
    },
    size: {
      control: 'select'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button'
    },
    variant: {
      control: 'select'
    }
  }
} satisfies Meta

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false
  }
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}

export const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: 'destructive'
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  }
}

export const Large: Story = {
  args: {
    size: 'large'
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
