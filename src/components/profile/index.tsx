import { ProfileStyle } from "./style"

interface ProfileProps{
  width: string;
  imgPath?: string;
  color: string;
  howmuch?: number;
}

const Profile =({imgPath, width, color, howmuch}: ProfileProps) => {
  return (
    <ProfileStyle componetSize={width} componentColor={color}>
      <div className="img">
        {imgPath ? <img src={imgPath} alt="pessoa" /> : <div className="howmuch">+{howmuch}</div>}
       
      </div>
    </ProfileStyle>
  )
}

export default Profile