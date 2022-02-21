import React, { ReactNode, useContext, useState } from 'react'

type GlobalContextProps = {
  navOpen: boolean
  setNavOpen: React.Dispatch<any>
}

const initial: GlobalContextProps = {
  navOpen: true,
  setNavOpen: () => {},
}

const GlobalContext = React.createContext<GlobalContextProps>(initial)

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(initial.navOpen)

  return (
    <GlobalContext.Provider
      value={{
        navOpen,
        setNavOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalCtx = () => {
  const consumer = useContext<GlobalContextProps>(GlobalContext)
  if (consumer === undefined) {
    throw new Error('Place consumer in Provider')
  }
  return consumer
}

export { useGlobalCtx, GlobalProvider }
