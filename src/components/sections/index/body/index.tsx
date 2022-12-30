
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

const Body = () => {
  const {active,activeProfile,setActive, setProfile} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  return (
    <BodyStyle active={active || activeProfile} arial-hidden onClick={() => {
      active && setActive(false)
      activeProfile && setProfile(false)
      openNotify && setOpenNotify(false)
    }}>
      <Header />
      <section className="main">
        <StartContainer  isSideBar={false}/>
        <CarrosselDestination />
        <div className="friend-map">
          <div className="column">
            <MapBox />
            <BoxFriends />
          </div>
          <EventBox />
        </div>
      </section>
      <Footer />
    </BodyStyle>
  )
}

export default Body