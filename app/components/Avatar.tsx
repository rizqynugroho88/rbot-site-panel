import clsx from 'clsx'

const sizeVariants = {
  sm: 'w-3 h-3',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
}

type AvatarProps = {
  size?: keyof typeof sizeVariants
  src?: string
  className?: string
}

function Avatar({ size = 'md', src = '/Avatar.png', className }: AvatarProps) {
  return (
    <img
      className={clsx(
        'flex-none rounded-full object-cover',
        sizeVariants[size],
        className,
      )}
      src={src}
    />
  )
}

export { Avatar }
