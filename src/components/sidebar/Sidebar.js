import React, { useState } from 'react'
import {
    OpenIconStyle,
    Icon,
    SidebarContent,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    OpenIcon,
    IconSidebarLink
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
                    <SidebarLink to='/'><IconSidebarLink className="fas fa-home"></IconSidebarLink>HOME PAGE</SidebarLink>
                    <SidebarLink to='/'><IconSidebarLink className="fas fa-chalkboard-teacher"></IconSidebarLink>INTRODUCE</SidebarLink>
                    <SidebarLink to='/'><IconSidebarLink className="fas fa-paper-plane"></IconSidebarLink>SHOPPING GUIDE</SidebarLink>
                    <SidebarLink to='/'><IconSidebarLink className="fas fa-newspaper"></IconSidebarLink>NEWS</SidebarLink>
                    <SidebarLink to='/'><IconSidebarLink className="fas fa-phone"></IconSidebarLink>CONTACT</SidebarLink>
                </SidebarMenu>
            </SidebarContent>
        </>
    )
}

export default Sidebar