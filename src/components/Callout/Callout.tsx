import type { PropsWithChildren } from 'react'
import { variants, type CalloutVariants } from './callout-variant'

export type Variant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'information'
  | 'warning'

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>

export const Callout = ({ title, children, variant }: CalloutProps) => {
  return (
    // user should be able to pass the markup
    <div className={variants({ variant })}>
      <h2 className='font-semibold capitalize'>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
