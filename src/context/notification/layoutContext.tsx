import { createContext, useMemo, useState } from "react";
import { iNotificationProvider } from "../../interfaces/iNotification";
export const LayoutContext = createContext<iNotificationProvider>({} as iNotificationProvider);

interface iLayoutContext {
  children: React.ReactNode;
}

export const LayoutProviderNotification = ({children}: iLayoutContext)  => {
  const [notification, setNotification] = useState(true);
  const [openNotify, setOpenNotify] = useState(false)
  const contextValues = useMemo(() => ({notification, setNotification,openNotify, setOpenNotify}), [notification, openNotify])

  return(
      <LayoutContext.Provider value={contextValues}>
        {children}
      </LayoutContext.Provider>
  )
} 