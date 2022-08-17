import React, { useState } from "react";
import { LinkMenu } from "../../@types/menu";
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'
// import { Lista, ListContainer, SubListContainer, SubLista } from "./styles";
import { StyledLink, StyledMenuText } from "./styles";

export const SideBarItem: React.FC<LinkMenu> = ({ id, nome, rota, pai_id, ...props }) => {
    const [ subMenu, setSubMenu ] = useState(false);

    const showSubMenu = () => setSubMenu(!subMenu);

    return (
        <>
            <StyledLink to={rota || "#" }>
                <StyledMenuText>
                    <RiIcons.RiDashboardFill />
                    <span>{nome}</span>
                </StyledMenuText>
                {pai_id === null && (
                    <AiIcons.AiOutlineUp onClick={showSubMenu}/>
                )}
            </StyledLink>
        </>
    )
}