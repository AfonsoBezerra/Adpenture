import { MapBoxStyle } from "./style"
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState } from "react";
import MyMapComponent from "@components/mapa";
import dynamic from "next/dynamic";

const MapBox = () => {
  const [from, setFrom] = useState<number[]>([28.385233, -81.563873]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  return (
    <MapBoxStyle>
      <Wrapper apiKey={`${apiKey}`}>
        <MyMapComponent center={{lat: 51.505, lng: -0.09}} zoom={11}/>
      </Wrapper>
    </MapBoxStyle>
  )
}

export default MapBox