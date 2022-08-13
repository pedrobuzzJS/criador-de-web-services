import React, { useState, useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Nav,
         NavIcon,
         SideBarNav,
         SidebarWrap,
         Lista
} from "./styles";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { LinkMenu } from "../../@types/menu";
import { useFetch } from "../../hooks/useFetch";

export const SideBar: React.FC = () => {
    const [sideBar, setSideBar] = useState(false);
    const { data: links, error, isFetching } = useFetch<LinkMenu[]>("menu");
    // const [ firstLevelLink, firstLevelLink ] = useState>();
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
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSideBar} />
                        </NavIcon>
                        <Lista>
                            {links?.map((item, index) => {
                                return <SideBarItem
                                    id={item.id}
                                    key={index}
                                    nome={item.nome}
                                    rota={item.rota}
                                    pai_id={item.pai_id}
                                />
                            } )}
                        </Lista>
                    </SidebarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    )
};