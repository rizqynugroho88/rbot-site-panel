import clsx from 'clsx'
import { useGlobalCtx } from '~/context/GlobalContext'
import { ContainerWrapper } from './Container'
import { IconHamburger } from './Icon'
import { H4, H6 } from './Typography'

function Header({ className }: { className?: string }) {
  const { navOpen, setNavOpen } = useGlobalCtx()

  return (
    <header
      className={clsx(
        'flex justify-between border-b-2 border-gray-700',
        className,
      )}
    >
      <ContainerWrapper className="flex items-center gap-5">
        <div
          className={clsx(
            'h-7 w-7 cursor-pointer transition-all duration-700',
            {
              'rotate-45 scale-150': navOpen,
            },
          )}
          onClick={() => setNavOpen(!navOpen)}
        >
          <IconHamburger />
        </div>
        <H4 as={'h1'}>Header</H4>
      </ContainerWrapper>
      <Profile />
    </header>
  )
}

function Profile() {
  return (
    <div className="flex items-center gap-5 p-5">
      {/* Avatar */}
      <div className="h-7 w-7 bg-gray-200" />
      {/* Username */}
      <H6 as={'h6'} className="italic">
        Username
      </H6>
    </div>
  )
}

export { Header }
