import Profile from "@components/profile";
import { VipCrownIcon } from "@stylesComponents/icons";
import { FriendInviteStyle } from "./style";

interface FriendInviteProps{
    name: string;
    img: string;
    isFriend: boolean;
    isPrime: boolean
}

const FriendInvite = ({img, isFriend, name,isPrime}: FriendInviteProps) => {
    return (
        <FriendInviteStyle isFriend={isFriend}>
            <div className="content" >
                <Profile color="#FECA05" imgPath={img} width="35px"/>
                <div className="container">
                    <h3>{name}</h3>
                    {isPrime ?
                        (
                            <div className="subtitle">
                                <span>Premium Member</span>
                                <VipCrownIcon/>
                           </div>
                        ) 
                    : 
                        (
                            <div className="subtitle">
                                <span>Member</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="buttonInvite">
                <button type="button">
                    <h3>Invite</h3>
                </button>
            </div>
        </FriendInviteStyle>
    )
}

export default FriendInvite