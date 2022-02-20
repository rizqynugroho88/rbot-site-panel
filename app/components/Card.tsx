import clsx from 'clsx'
import { ReactNode } from 'react'

const cardSizeVariantStyle = {
  xs: 'col-span-1',
  sm: 'col-span-2',
  md: 'col-span-4',
  lg: 'col-span-8',
  xl: 'col-span-full',
}

type CardProps = {
  children: ReactNode
  size?: keyof typeof cardSizeVariantStyle
}

function Card({ children, size = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        'min-h-[7rem] rounded-md bg-blue p-3 ',
        cardSizeVariantStyle[size],
      )}
    >
      {children}
    </div>
  )
}

export { Card }
