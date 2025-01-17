import { ComponentProps } from 'react'
import { variants, type ButtonVariants } from './button-variant'

export type Variant = 'primary' | 'secondary' | 'destructive'

export type Size = 'small' | 'medium' | 'large'

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    variant?: Variant
    size?: Size
  }

export const Button = ({
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />
}
