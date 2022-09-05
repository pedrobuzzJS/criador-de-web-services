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

const mm: LinkMenu[] = [
    {
        id: 1,
        nome: "P1",
        icone: "<AiIcons.AiFillHome />",
        rota: "",
        pai_id: null,
        possuifilhos: true,
        filhos: [
            {
                id: 2,
                nome: "P1 F1",
                icone: "<AiIcons.AiFillHome />",
                rota: "formc",
                pai_id: 1,
                possuifilhos: false,
            },
        ]
    },
    {
        id: 3,
        nome: "P2",
        icone: "<AiIcons.AiFillHome />",
        rota: "",
        pai_id: null,
        possuifilhos: true,
        filhos: [
            {
                id: 4,
                nome: "P2 F1",
                icone: "<AiIcons.AiFillHome />",
                rota: "",
                pai_id: 3,
                possuifilhos: true,
                filhos: [
                    {
                        id: 5,
                        nome: "F1 F2",
                        icone: "<AiIcons.AiFillHome />",
                        rota: "tipowebservicecontulta",
                        pai_id: 4,
                        possuifilhos: false,
                    }
                ]
            }
        ]
    }
];

export const SideBar: React.FC = () => {
    const [sideBar, setSideBar] = useState(false);
    const { data: menus } = useFetch<LinkMenu[]>("menu");
    const showSideBar = () => setSideBar(!sideBar);

    console.log("***", menus);

    const montaMenuList = (menuPai: LinkMenu, menuList: LinkMenu[]) => {
        
    };

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
                            {mm?.length && mm?.map((item, index) => {
                                    return <SideBarItem
                                        id={item.id}
                                        nome={item.nome}
                                        icone={item.icone}
                                        rota={item.rota}
                                        pai_id={item.pai_id}
                                        filhos={item.filhos ?? item.filhos}
                                        possuifilhos={item.possuifilhos}
                                        />
                                    }
                                )
                            }
                        </Lista>
                    </SidebarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    )
};