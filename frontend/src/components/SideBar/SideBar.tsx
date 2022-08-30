import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Nav,
         NavIcon,
         SideBarNav,
         SidebarWrap,
         Lista,
         HeaderTitle
} from "./styles";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { LinkMenu } from "../../@types/menu";
import { useFetch } from "../../hooks/useFetch";

export const SideBar: React.FC = () => {
    const [sideBar, setSideBar] = useState(false);
    const { data: menus } = useFetch<LinkMenu[]>("menu");
    const showSideBar = () => setSideBar(!sideBar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </NavIcon>
                    <HeaderTitle>OI</HeaderTitle>
                </Nav>
                <SideBarNav sideBar={sideBar}> 
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSideBar} />
                        </NavIcon>
                        <Lista>
                            {menus?.length && menus.map((item) => {
                                return <SideBarItem
                                    id={item.id}
                                    key={item.id}
                                    nome={item.nome}
                                    rota={item.rota ?? item.rota}
                                    pai_id={item.pai_id ?? item.pai_id}
                                    possuifilhos={item.possuifilhos ?? item.possuifilhos}
                                />
                            } )}
                        </Lista>
                    </SidebarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    )
};