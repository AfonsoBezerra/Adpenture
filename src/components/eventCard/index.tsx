import Image from 'next/image';
import { AddIcon, PinOutlineIcon, StarSIcon } from "@stylesComponents/icons"
import { EventCardStyle } from "./style"
import { iDestination } from 'interfaces/iDestination';
import { iFriends } from 'interfaces/iFriends';
import Profile from '@components/profile';

interface EventProps { 
  title: string,
  local: iDestination[],
  ratting?: number,
  image: string,
  friends: iFriends[]
}

const EventCard = ({title, local, friends,image} : EventProps) =>{
  const {localization} = local[0]; 
    return (
      <EventCardStyle>
        <div className="image">
          <Image src={image} 
            alt="image" 
            width={1080} 
            height={720}  
            blurDataURL={image}
            placeholder="blur"
          >
          </Image>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <div className="line">
            <div className="localization">
              <PinOutlineIcon />
              <span>{localization}</span>
            </div>
            <div className="friends">
             {friends.slice(0,2).map(friend => (
              <>
                <Profile key={friend.id} color="#ffd23f" imgPath={friend.img} width="22px"/>
              </>
              ))}
              {friends.length > 2 ? <Profile  color="#705514" howmuch={friends.length - friends.slice(0,2).length} width="22px"/> : ''}
            </div>
          </div>
        </div>
        <button className='enterEvent'><AddIcon /> details</button>
      </EventCardStyle>
    )
}

export default EventCard