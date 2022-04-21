import React, { useState } from 'react'
import {
    OpenIconStyle,
    Icon,
    SidebarContent,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    OpenIcon
} from './SidebarElements';
import Draggable from 'react-draggable';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState({});
    // toggle menu
    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Draggable axis="y">
            <OpenIconStyle
                onClick={handleToggleSidebar}
                className="sidebar-icon-menu">
                <OpenIcon />
            </OpenIconStyle>
            </Draggable>
            <SidebarContent isOpen={isOpen} >
                <Icon onClick={handleToggleSidebar}>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/'>HOME PAGE</SidebarLink>
                    <SidebarLink to='/'>INTRODUCE</SidebarLink>
                    <SidebarLink to='/'>PRODUCT</SidebarLink>
                    <SidebarLink to='/'>SPORT SHOES</SidebarLink>
                    <SidebarLink to='/'>RUNNING SHOES</SidebarLink>
                    <SidebarLink to='/'>BASKETBALL SHOES</SidebarLink>
                    <SidebarLink to='/'>NEWS</SidebarLink>
                    <SidebarLink to='/'>CONTACT</SidebarLink>
                </SidebarMenu>
            </SidebarContent>
        </>
    )
}

export default Sidebar