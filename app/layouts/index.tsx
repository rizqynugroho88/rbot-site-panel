import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'remix'
import { ContainerWrapper } from '~/components/Container'
import { Header } from '~/components/Header'
import { Navbar } from '~/components/Navbar'

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

export { MainLayout }
