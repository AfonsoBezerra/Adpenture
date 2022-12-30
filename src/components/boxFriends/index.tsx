import FriendInvite from "@components/friends"
import { iFriends } from "interfaces/iFriends"
import { FriendsMock } from "mock/friends"
import { useEffect, useState } from "react"
import { BoxFriendsStyle } from "./style"

const BoxFriends = () =>  {
  return (
    <BoxFriendsStyle>
      <div className="header">
        <h1>Your Friends</h1>
        <h5>Você tem <span>46+</span> amigos</h5>
      </div>
      <div className="body">
        {FriendsMock.slice(0,8).map((friend: iFriends)=> (
          <FriendInvite isPrime={friend.isPrime} img={friend.img} name={friend.name} isFriend={friend.isFriend} key={friend.id} />
        ))}
      </div>
    </BoxFriendsStyle>
  )
}

export default BoxFriends 