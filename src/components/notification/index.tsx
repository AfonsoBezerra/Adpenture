import Profile from "@components/profile";
import { NotificationsIcon } from "@stylesComponents/icons"
import { useLayoutContextNotification } from "context/notification/useLayoutContext"
import { noticationMock } from "mock/notications";
import { useState } from "react";
import { NotificationContainer } from "./style"

const Notication =() => {
  const {notification,setNotification, openNotify, setOpenNotify} = useLayoutContextNotification()
  return (
    <>
      <NotificationContainer arial-hidden onClick={() => {
        setOpenNotify((prev: any) => !prev)
        setNotification(false)
        }}>
          <NotificationsIcon />
          {notification && 
            <span />
          }
          <div className={openNotify ? 'container active' : 'container'}>
            <ul>
              {noticationMock.map(notify => (
                <li key={notify.id}>
                  <Profile width="30px" color="#FECA05" imgPath={notify.img}/>
                  <div className="title">
                    <h2>{notify.title}</h2>
                    <h5>{notify.subtitle}</h5>
                  </div>
                </li>
              ))}
              <li className="final">
                See More
              </li>
            </ul>
          </div>
      </NotificationContainer>
    </>
  )
}
export default Notication