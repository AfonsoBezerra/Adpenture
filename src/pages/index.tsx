import Body from "@components/sections/index/body";
import ProfileCard from "@components/sections/index/profile";
import { ContainerIndex } from "@stylesComponents/ContainertIndex";
import Sidebar from "../components/sidebar";
import { useLayoutContext } from "../context/layout"

export default function Home() {
  const { setTheme, theme } = useLayoutContext();
  return (
    <ContainerIndex>
      <Sidebar />
      <Body />
      <ProfileCard/>
      {/* <button onClick={() => setTheme(!theme) } >Click me</button> */}
    </ContainerIndex>
  )
}
