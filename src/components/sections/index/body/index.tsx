
import CarrosselDestination from "@components/carroselDestination"
import Header from "@components/header"
import StartContainer from "@components/startAdventury"
import { useLayoutContextNotification } from "context/notification"
import { useLayoutContextSide } from "context/SideBar"
import { useContext } from "react"
import { BodyStyle } from "./style"

const Body = () => {
  const {active,activeProfile,setActive, setProfile} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  return (
    <BodyStyle style={{ overflow: 'hidden'}} arial-hidden onClick={() => {
      active && setActive(false)
      activeProfile && setProfile(false)
      openNotify && setOpenNotify(false)
    }}>
      <Header />
      <section className="main">
        <StartContainer  isSideBar={false}/>
        <CarrosselDestination />
      </section>
    </BodyStyle>
  )
}

export default Body