import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Nav, NavIcon, SideBarNav, SidebarWrap } from "./styles";

export const SideBar: React.FC = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </NavIcon>
                </Nav>
                <SideBarNav sideBar={sideBar}> 
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSideBar} />
                        </NavIcon>
                    </SidebarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    )
}