import styled from "styled-components";
import { FaRegTimesCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContent = styled.aside`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 300px;
    background: #fff;
    transition: .3s ease-in-out;
    top: 0;
    display: grid;
    align-items: center;
    left: ${({ isOpen }) => (!isOpen ? '0px' : '-1000px')};
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;
export const OpenIconStyle = styled.div`
    z-index: 999;
    position: fixed;
    left: 0;
    line-height: 45px;
    cursor: pointer;
    font-size: 24px;
    color: #014c8f;
    background: #fff;
    padding: 0 15px 0 15px;
    border-radius: 0 5px  5px 0 ;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, 
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const CloseIcon = styled(FaRegTimesCircle)`
    color: #014c8f;
`;
export const OpenIcon = styled(FaBars)`
    color: #014c8f;
`;
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-column: 1fr;
    grid-template-row: repeat(3, 80px);
    @media screen and (max-width: 480px) {
        grid-template-row: repeat(3, 60px);
    }
`;
export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    list-style-type: none;
    color: #014c8f;
    transition: .2s ease-in-out;
    font-size: 16px;
    font-weight: bold;
    padding: 0 0 0 30px;
    margin-bottom: 20px;
    &:hover {
        color: #e31837;
        transition: .2s ease-in-out;
        cursor: pointer;
    }
`;
export const IconSidebarLink = styled.i`
    width: 30px;
`;
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    transition: .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #fff;
        transition: .2s ease-in-out;
        color: #010606;
    }
`;
