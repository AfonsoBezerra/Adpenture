import { ArrowIcon, MenuUnfoldIcon, VipCrownIcon } from "@stylesComponents/icons";
import { useLayoutContextSide } from "context/SideBar";
import { ProfileCardStyle } from "./style"

const ProfileCard =() => {
  const {activeProfile, setProfile} = useLayoutContextSide();
  return (
    <ProfileCardStyle className={activeProfile? 'active' : ''}>
      <div className="header">
        <h1>My Profile</h1>
        <button onClick={() => setProfile(false)}>
          <MenuUnfoldIcon  />
        </button>
      </div>
      <div className="body">
        <div className="container">
          <div className="profile">
            <div className="circle"></div>
          </div>
          <div className="name">
            <h2>Afonso Bezerra</h2>
            <div className="subtitle">
             <span>Premium Member</span>
             <VipCrownIcon/>
            </div>
          </div>
        </div>
      </div>
    </ProfileCardStyle>
  )
}

export default ProfileCard