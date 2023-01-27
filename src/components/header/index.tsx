import Notication from "@components/notification";
import Profile from "@components/profile";
import { ArrowIcon, MenuIcon, SearchIcon } from "@stylesComponents/icons"
import { useLayoutContextSide } from "context/SideBar";
import { useRouter } from "next/router"
import { HeaderStyle } from "./style"

const Header = () => {
  const router = useRouter();
  const {active,activeProfile,setActive, setProfile} = useLayoutContextSide();
  return (
  <HeaderStyle>
    <div className="content">
      <div className="pushSide menu">
        <button type="button" onClick={()=> {
          setActive((prev: any) => !prev)
          activeProfile && setProfile(false)
          }}>
          <MenuIcon/>
        </button>
      </div>
      <div className="iconsButtons" onClick={() => router.pathname !== '/' ? router.back(): ''}>
        <ArrowIcon  className={router.pathname !== '/' ? 'main': ''} />
      </div>
    </div>
    <div className="search">
      <SearchIcon/>
      <input type="text" />
    </div>
    <div className="content">
      <Notication />
        <button type="button" onClick={()=>{
          setProfile((prev: any) => !prev)
          active && setActive(false)
          }}>
          <Profile width="50px" color="#FECA05" imgPath="./pessoa.jpg"/>
        </button>
    </div>
  </HeaderStyle>
  )
}

export default Header