import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'remix'
import { ContainerWrapper } from '~/components/Container'
import { H4, H6 } from '~/components/Typography'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-full grid-cols-12 grid-rows-max-content">
      <Navbar />
      {/* Wrapper */}
      <div className="col-span-full row-span-full lg:col-start-4 xl:col-start-3">
        <Header />
        <ContainerWrapper>{children}</ContainerWrapper>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="flex justify-between border-b-2 border-gray-700">
      <ContainerWrapper>
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

export { MainLayout }
