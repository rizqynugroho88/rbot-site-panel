import clsx from 'clsx'
import { NavLink, NavLinkProps, useLocation } from 'remix'
import { ContainerWrapper } from './Container'
import { H4, H6 } from './Typography'

function Navbar() {
  return (
    <nav className="row-span-full hidden min-h-screen border-r-2 border-gray-700 lg:col-span-3 lg:col-start-1 lg:block xl:col-span-2">
      <ContainerWrapper>
        <H4 as={'h1'}>Navbar</H4>
      </ContainerWrapper>
      <ContainerWrapper className="flex w-full flex-col gap-5">
        <RNavLink to="/" children="Home" />
        <RNavLink to="/chat" children="Chat" />
        <RNavLink to="/preference" children="Preferences" />
      </ContainerWrapper>
    </nav>
  )
}

function RNavLink(props: NavLinkProps) {
  const location = useLocation()
  const isSelected =
    props.to === location.pathname ||
    location.pathname.startsWith(`${props.to}/`)

  return (
    <NavLink
      to={props.to}
      className={clsx(
        'block w-full rounded-md p-4',
        {
          'bg-gray-300 text-black': isSelected,
          'bg-gray-700 text-white': !isSelected,
        },
        props.className,
      )}
    >
      {props.children}
    </NavLink>
  )
}

export { Navbar }
