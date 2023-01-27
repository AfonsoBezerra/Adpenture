import IndexNavigation from "@components/sections/navigation";
import ProfileCard from "@components/sections/index/profile";
import { ContainerIndex } from "@stylesComponents/ContainertIndex";
import Sidebar from "../components/sidebar";
import { useLayoutContext } from "../context/layout"

export default function Navigation() {
  const { setTheme, theme } = useLayoutContext();
  return (
    <ContainerIndex>
      <Sidebar />
      <IndexNavigation />
      <ProfileCard/>
      {/* <button onClick={() => setTheme(!theme) } >Click me</button> */}
    </ContainerIndex>
  )
}