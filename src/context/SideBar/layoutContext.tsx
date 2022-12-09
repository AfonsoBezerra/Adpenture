import { createContext, useMemo, useState } from "react";
import { iLayoutContextProviderSide } from "../../interfaces/iLayoutContextSide";
export const LayoutContext = createContext<iLayoutContextProviderSide>({} as iLayoutContextProviderSide);

interface iLayoutContext {
  children: React.ReactNode;
}

export const LayoutProviderSide = ({children}: iLayoutContext)  => {
  const [active, setActive] = useState(false);
  const [activeProfile, setProfile] = useState(false)

  const contextValues = useMemo(() => ({active, setActive,activeProfile, setProfile}), [active,activeProfile])

  return(
      <LayoutContext.Provider value={contextValues}>
        {children}
      </LayoutContext.Provider>
  )
} 