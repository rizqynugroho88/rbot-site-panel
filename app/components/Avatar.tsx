import clsx from 'clsx'

const sizeVariants = {
  sm: '',
  md: '',
  lg: '',
}

type AvatarProps = {
  size?: keyof typeof sizeVariants
  src?: string
  className?: string
}

function Avatar({ size = 'md', src, className }: AvatarProps) {
  return (
    <img
      className={clsx(
        'h-16 w-16 flex-none rounded-full object-cover',
        className,
      )}
      src={src}
    />
  )
}

export { Avatar }
