import { cva, type VariantProps } from 'class-variance-authority'

// a way of doing the type without VariantProps from CVA
// const variations = [
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'information',
//   'warning'
// ] as const
// type Variations = (typeof variations)[number]

export type CalloutVariants = VariantProps<typeof variants>

const variant = {
  primary: [
    'bg-primary-200',
    'text-primary-900',
    'border-primary-500',
    'dark:bg-primary-800',
    'dark:border-primary-900',
    'dark:text-primary-50'
  ],
  success: [
    'bg-success-200',
    'text-success-900',
    'border-success-500',
    'dark:bg-success-800',
    'dark:border-success-900',
    'dark:text-success-50'
  ],
  danger: [
    'bg-danger-200',
    'text-danger-900',
    'border-danger-500',
    'dark:bg-danger-800',
    'dark:border-danger-900',
    'dark:text-danger-50'
  ],
  information: [
    'bg-information-200',
    'text-information-900',
    'border-information-500',
    'dark:bg-information-800',
    'dark:border-information-900',
    'dark:text-information-50'
  ],
  warning: [
    'bg-warning-200',
    'text-warning-900',
    'border-warning-500',
    'dark:bg-warning-800',
    'dark:border-warning-900',
    'dark:text-warning-50'
  ]
}

export const variants = cva(
  ['rounded', 'gap-4', 'text-base', 'space-y-4', 'shadow-md', 'border', 'p-4'],
  {
    variants: {
      variant
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
