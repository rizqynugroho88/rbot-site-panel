import clsx from 'clsx'
import { ReactNode } from 'react'

type GridProps = {
  children: ReactNode
  rowGap?: boolean
}

function Grid({ children, rowGap = false }: GridProps) {
  return (
    <div
      className={clsx(
        'relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6',
        { 'gap-y-4 lg:gap-y-6': rowGap },
      )}
    >
      {children}
    </div>
  )
}

/**
 * Use for development only! It renders the grid columns and gaps as page overlay
 */
function GridLines() {
  // if (ENV.NODE_ENV !== 'development') {
  if (false) {
    throw new Error('<GridLines />  should only be used during development')
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 select-none">
      <Grid>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-screen items-start bg-black text-black opacity-10 dark:bg-white dark:text-white"
          >
            <div className="w-full pt-4 text-center text-lg text-black dark:text-white">
              {idx + 1}
            </div>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export { Grid, GridLines }
