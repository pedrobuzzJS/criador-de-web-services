import React, { useState } from "react";
import { LinkMenu } from "../../@types/menu";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'
import { 
    LinkContainer,
    StyledMenuText,
    Container,
    OpenContainer,
    ImgContainer
} from "./styles";

export const SideBarItem: React.FC<LinkMenu> = ({ id, icone, nome, pai_id, rota, filhos, possuifilhos, ...props }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const openSubMenuList = () => setIsOpen(!isOpen);

    if (filhos) {
        return (
            <>
                <Container isSubMenuOpen={isOpen}>
                    <LinkContainer to={rota || "#"}>
                        <StyledMenuText>
                            <RiIcons.RiDashboardFill />
                            <span>{nome}</span>
                            A
                        </StyledMenuText>
                            {filhos && (
                                <ImgContainer isSubMenuOpen={isOpen}>
                                    <AiIcons.AiOutlineUp onClick={openSubMenuList}/>
                                </ImgContainer>
                                )
                            }
                    </LinkContainer>
                    { filhos.map((child, index) => 
                    <SideBarItem
                        key={index}
                        id={child.id}
                        nome={child.nome}
                        icone={child.icone}
                        rota={child.rota}
                        possuifilhos={child.possuifilhos}
                        filhos={child.filhos ?? child.filhos}
                        pai_id={child.pai_id}
                    />) }
                </Container>
            </>
        );
    } else {
        return (
            <OpenContainer>
                <LinkContainer to={rota || "#"}>
                    <StyledMenuText>
                        <RiIcons.RiDashboardFill />
                        <span>{nome}</span>
                        B
                    </StyledMenuText>
                </LinkContainer>
            </OpenContainer>
        );
    };
};