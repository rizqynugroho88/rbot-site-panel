import clsx from 'clsx'
import { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode
  className?: string
}

function ContainerWrapper(props: WrapperProps) {
  return <div className={clsx('p-5', props.className)}>{props.children}</div>
}

export { ContainerWrapper }
