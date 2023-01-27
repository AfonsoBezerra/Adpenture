
import BoxFriends from "@components/boxFriends"
import CarrosselDestination from "@components/carroselDestination"
import EventBox from "@components/eventBox"
import Footer from "@components/footer"
import Header from "@components/header"
import MapBox from "@components/mapBox"
import StartContainer from "@components/startAdventury"
import { useLayoutContextNotification } from "context/notification"
import { useLayoutContextSide } from "context/SideBar"
import { useContext } from "react"
import { BodyStyle } from "./style"

const IndexNavigation = () => {
  const {active,activeProfile,setActive, setProfile} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  return (
    <BodyStyle active={active || activeProfile} onClick={() => {
      active && setActive(false)
      activeProfile && setProfile(false)
      openNotify && setOpenNotify(false)
    }}>
      <Header />
      <Footer />
    </BodyStyle>
  )
}

export default IndexNavigation