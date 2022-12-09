import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo";
import { SideItems } from "../../util/sideBar";
import { ArrowIcon, LogOutIcon, RightArrowAltIcon } from "../../styles/components/icons";
import { SidebarStyle } from "./style";
import { useLayoutContextSide } from "context/SideBar";
import { useLayoutContextNotification } from "context/notification";
import { useRouter } from "next/router";

const Sidebar = () => {
  const {active,setActive} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  const router = useRouter();
  return (
  <SidebarStyle arial-hidden onClick={() => {
    openNotify && setOpenNotify(false)
  }} className={active ? 'active' : ''}>
    <div className="header">
      <div className="logo">
        <Logo/>
      </div>
      <button type="button" onClick={() => setActive(false)}>
        <ArrowIcon  />
      </button>
    </div>
    <div className="body">
      <ul>
        {
          SideItems.map(items => {
            return (
              <li key={items.id}>
                <div className={router.asPath === items.ref ? 'content active': 'content'}>{items.icon} 
                  <span className="text">{items.label}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="container">
        <img src="./barraca.png" alt="barraca" />
        <div className="start">
          <div className="text">
            Start your Adventure
            <span>Create Adventure with your friends</span>
          </div>
          <button type="button"><RightArrowAltIcon /></button>
        </div>
      </div>
    </div>
    <div className="footer">
      <LogOutIcon />
      <span className="text">Logout</span>
    </div>
  </SidebarStyle>
  )
}

export default Sidebar;