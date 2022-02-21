import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'remix'
import { ContainerWrapper } from '~/components/Container'
import { Header } from '~/components/Header'
import { Navbar } from '~/components/Navbar'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid max-h-screen grid-cols-12 grid-rows-max-content">
      <Navbar />
      {/* Wrapper */}
      <div className="relative col-span-full row-span-full flex h-screen flex-col overflow-y-scroll lg:col-start-4 xl:col-start-3">
        <Header className="sticky top-0 bg-gray-900" />
        <div>
          <ContainerWrapper>{children}</ContainerWrapper>
        </div>
      </div>
    </div>
  )
}

export { MainLayout }
