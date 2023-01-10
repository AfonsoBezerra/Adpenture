import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo";
import { SideItems } from "../../util/sideBar";
import { ArrowIcon, LogOutIcon, RightArrowAltIcon } from "../../styles/components/icons";
import { SidebarStyle } from "./style";
import { useLayoutContextSide } from "context/SideBar";
import { useLayoutContextNotification } from "context/notification";
import { useRouter } from "next/router";
import StartContainer from "@components/startAdventury";

const Sidebar = () => {
  const {active,setActive} = useLayoutContextSide();
  const {openNotify, setOpenNotify} = useLayoutContextNotification()
  const router = useRouter();
  return (
  <SidebarStyle onClick={() => {
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
    </div>
    <StartContainer  isSideBar={true}/>
    <div className="footer">
      <LogOutIcon />
      <span className="text">Logout</span>
    </div>
  </SidebarStyle>
  )
}

export default Sidebar;