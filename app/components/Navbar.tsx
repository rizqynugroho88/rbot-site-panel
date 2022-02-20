import clsx from 'clsx'
import { NavLink, NavLinkProps } from 'remix'
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
        <RNavLink to="/" children="Home" />
        <RNavLink to="/" children="Home" />
        <RNavLink to="/" children="Home" />
      </ContainerWrapper>
    </nav>
  )
}

function RNavLink(props: NavLinkProps) {
  return (
    <NavLink
      to={props.to}
      className={clsx(
        'block w-full rounded-md bg-gray-700 p-4',
        props.className,
      )}
    >
      <H6>{props.children}</H6>
    </NavLink>
  )
}

export { Navbar }
