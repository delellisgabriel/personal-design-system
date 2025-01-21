import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

import { userEvent, within, expect } from '@storybook/test'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area'
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area'
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area'
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required'
    }
  }
} satisfies Meta

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithCount: Story = {
  args: {
    maxLength: 140
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textArea = canvas.getByRole('textbox')
    const count = canvas.getByTestId('length')

    const inputValue = 'Hello, World!'

    await userEvent.type(textArea, inputValue)
    await expect(count).toHaveTextContent(inputValue.length.toString())
  }
}

// this is dom functionality so the test is kind of not important but it's good to keep as an example.
export const WithDisabled: Story = {
  args: {
    maxLength: 140,
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textArea = canvas.getByRole('textbox')

    await expect(textArea).toBeDisabled()
    const inputValue = 'Hello, World!'
    await userEvent.type(textArea, inputValue)
    await expect(textArea).toHaveValue('')
  }
}

export const LengthTooLong: Story = {
  args: {
    maxLength: 140
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textArea = canvas.getByRole('textbox')
    const count = canvas.getByTestId('length')

    const inputValue = 'Y' + 'o'.repeat(140) + '!'

    await userEvent.type(textArea, inputValue)
    await expect(count).toHaveTextContent(inputValue.length.toString())
    await expect(textArea).toHaveAttribute('aria-invalid', 'true')
    // await expect(count).toHaveClass('ring-danger-500')
    await expect(count).toHaveStyle({ color: 'rgb(237, 70, 86)' })
    await expect(textArea).toHaveStyle({ borderColor: 'rgb(237, 70, 86)' })
  }
}
