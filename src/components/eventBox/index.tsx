import { iEvents } from "interfaces/iEvents"
import { EventsMock } from "mock/events"
import { EventBoxStyle } from "./style"
import Image from 'next/image';
import EventCard from "@components/eventCard";
import { DestinationMock } from "mock/destination";

const EventBox = () => {
  return (
    <EventBoxStyle>
      <div className="header">
        <h1>Events</h1>
        <a>See more</a>
      </div>
      <div className="cardsEvents">
        {EventsMock.map((event : iEvents) => {
        const local = DestinationMock.filter(local => {
            return local.id === event.idDestination
          })
          console.log(local, 'local')
          return (
            <EventCard key={event.id} title={event.name} local={local} image={event.image} />
          )
        })}
      </div>
    </EventBoxStyle>
  )
}

export default EventBox