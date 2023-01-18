import { ProfileStyle } from "./style"

interface ProfileProps{
  width: string;
  imgPath?: string;
  color: string;
  howmuch?: number;
  className?: any;
  id?: any;
}

const Profile =({imgPath, width, color, howmuch, className, id}: ProfileProps) => {
  return (
    <ProfileStyle componetSize={width} className={className} id={id} componentColor={color}>
      <div className="img">
        {imgPath ? <img src={imgPath} alt="pessoa" /> : <div className="howmuch">+{howmuch}</div>}
       
      </div>
    </ProfileStyle>
  )
}

export default Profile