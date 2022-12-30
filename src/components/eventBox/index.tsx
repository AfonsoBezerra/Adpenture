import { iEvents } from "interfaces/iEvents"
import { EventsMock } from "mock/events"
import { EventBoxStyle } from "./style"
import Image from 'next/image';
import EventCard from "@components/eventCard";
import { DestinationMock } from "mock/destination";
import { FriendsMock } from "mock/friends";

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
          const friends = FriendsMock.filter(friends => event.idFriends.includes(friends.id) && friends.isFriend)
          console.log(friends, 'friends')
          return (
            <EventCard key={event.id} title={event.name} friends={friends} local={local} image={event.image} />
          )
        })}
      </div>
    </EventBoxStyle>
  )
}

export default EventBox