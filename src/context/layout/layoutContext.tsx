import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { RootCss } from "../../styles/global";
import { defaultTheme } from "../../styles/global/theme/default";
import { DarkTheme } from "../../styles/global/theme/dark";
import { iLayoutContextProvider } from "../../interfaces/iLayoutContext";
export const LayoutContext = createContext<iLayoutContextProvider>({} as iLayoutContextProvider);

interface iLayoutContext {
  children: React.ReactNode;
}

export const LayoutProvider = ({children}: iLayoutContext)  => {
  const [theme, setTheme] = useState(true)

  const contextValues = useMemo(() => ({theme, setTheme}), [theme])

  return(
    <ThemeProvider theme={theme ? defaultTheme : DarkTheme}>
      <RootCss />
      <LayoutContext.Provider value={contextValues}>
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  )
} 