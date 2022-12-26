import { ProfileStyle } from "./style"

interface ProfileProps{
  width: string;
  imgPath: string;
  color: string
}

const Profile =({imgPath, width, color}: ProfileProps) => {
  return (
    <ProfileStyle componetSize={width} componentColor={color}>
      <div className="img">
       <img src={imgPath} alt="pessoa" />
      </div>
    </ProfileStyle>
  )
}

export default Profile