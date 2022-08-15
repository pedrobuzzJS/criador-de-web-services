import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// export const Lista = styled.ul`
//     width: 250px;
//     height: 100vh;
//     color: #eee;
//     justify-content: space-between;

//     > a {
//         text-decoration: none;
        
//         &:hover {
//             background: #333030;
//             cursor: pointer;
//         }
//     }
    
// `;

export const StyledLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10;
    padding-left: 15px;
    padding-right: 15px;
    list-style: none;
    height: 40px;
    text-decoration: none;
    font-size: 18px;
    border-bottom: 1px #e1e9fc solid;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        transition: 150ms;
        cursor: pointer;
    }

    > svg {
        transform: rotate(90deg);
        transition: 350ms;

        &:hover {
            transform: rotate(180deg);
            transition: 350ms;
        }
    }
`;

export const StyledMenuText = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface SubSideBarDropDownToggle {
    subMenuToggle: boolean
}

export const StyledSubList = styled.li<SubSideBarDropDownToggle>`
    display: ${({ subMenuToggle }) => (subMenuToggle ? '' : 'none')};;
    transition: 350ms;
`;