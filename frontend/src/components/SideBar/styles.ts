import styled from "styled-components";
import { Link } from "react-router-dom";

interface SideBarNavProps {
    sideBar: boolean,
};

export const Nav = styled.div`
    background: #222324;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavIcon = styled(Link)`
    margin-left: 1rem;
    font-size: 1rem;
    height: 55px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SideBarNav = styled.nav<SideBarNavProps>`
    background: #222324;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sideBar }) => (sideBar ? '0%' : '-100%')};
    transition: 400ms;
    /* z-index: 1000; */
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

export const Lista = styled.div`
    width: 100%;
    list-style: none;
    height: 100vh;
    color: #eee;
    justify-content: space-between;

    /* > a {
        text-decoration: none;
        
        &:hover {
            background: #333030;
            cursor: pointer;
        }
    }   */
`;

export const HeaderTitle = styled.h2`
    color: #eee;
    padding-left: 15px;
`;

export const BlackHole = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
;
`;