import clsx from 'clsx'
import { ReactNode } from 'react'

const variantStyle = {
  primary: 'bg-blue',
  warn: 'bg-yellow-500',
}

type ButtonProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
  variant?: keyof typeof variantStyle
}

function Button({ children, className, icon, variant = 'warn' }: ButtonProps) {
  return (
    <button
      className={clsx(
        'w-max rounded-sm px-4 py-2',
        variantStyle[variant],
        className,
      )}
    >
      {icon && <div>{icon}</div>}
      {children}
    </button>
  )
}

export { Button }
