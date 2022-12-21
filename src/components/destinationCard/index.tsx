import Image from 'next/image';
import { PinOutlineIcon, StarSIcon } from "@stylesComponents/icons"
import { DestinationCardStyle } from "./style"

interface DestinationProps { 
  title: string,
  localization: string,
  ratting: number,
  image: string
}

const DestinationCard = ({title, localization, ratting,image} : DestinationProps) =>{
    return (
      <DestinationCardStyle>
        <div className="image">
          <Image src={image} 
            alt="image" 
            width={200} 
            height={200}  
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
      </DestinationCardStyle>
    )
}

export default DestinationCard