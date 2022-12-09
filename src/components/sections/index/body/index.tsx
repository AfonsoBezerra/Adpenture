
import Header from "@components/header"
import { useLayoutContextNotification } from "context/notification"
import { useLayoutContextSide } from "context/SideBar"
import { useContext } from "react"
import { BodyStyle } from "./style"

const Body = () => {
  const {active,activeProfile,setActive, setProfile} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  return (
    <BodyStyle style={active || activeProfile ? { height:'100vh', overflow: 'hidden'  } : {} } arial-hidden onClick={() => {
      active && setActive(false)
      activeProfile && setProfile(false)
      openNotify && setOpenNotify(false)
    }}>
      <Header />
    </BodyStyle>
  )
}

export default Body