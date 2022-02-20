import { ContainerWrapper } from './Container'
import { H4, H6 } from './Typography'

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

export { Header }
