import { ArrowIcon, InformationCircleIcon, MenuUnfoldIcon, PinOutlineIcon, StarSIcon, VipCrownIcon } from "@stylesComponents/icons";
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
            <div className="circle">
              <img src="/pessoa.jpg" alt="pessoa" />
            </div>
          </div>
          <div className="name">
            <h2>Afonso Bezerra</h2>
            <div className="subtitle">
             <span>Premium Member</span>
             <VipCrownIcon/>
            </div>
          </div>
        </div>
        <div className="history">
          <div className="img">
            <img src="/acampamento1.png" alt="acampa 1" />
          </div>
          <div className="text">
            <div className="textHeader"><InformationCircleIcon /></div>
            <div className="textBody">
              <div className="current">Current Travel</div>
              <div className="title">Higth Tratas</div>
              <div className="description">
                <div className="localization">
                  <PinOutlineIcon />
                  <span>Curitiba, Brazil</span>
                </div>
                <div className="ratting">
                  <StarSIcon />
                  <span>4.6</span>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src="./acampa.png" alt="acampa" />
      </div>
    </ProfileCardStyle>
  )
}

export default ProfileCard