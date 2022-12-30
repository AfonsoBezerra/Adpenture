import Image from 'next/image';
import { PinOutlineIcon, StarSIcon } from "@stylesComponents/icons"
import { EventCardStyle } from "./style"
import { iDestination } from 'interfaces/iDestination';

interface EventProps { 
  title: string,
  local: iDestination[],
  ratting?: number,
  image: string
}

const EventCard = ({title, local, ratting,image} : EventProps) =>{
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
            <div className="ratting">
              <StarSIcon />
              <span>{ratting}</span>  
            </div>
          </div>
        </div>
      </EventCardStyle>
    )
}

export default EventCard