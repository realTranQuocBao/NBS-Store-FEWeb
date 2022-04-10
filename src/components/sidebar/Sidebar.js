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


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState({});
    // toggle menu
    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <OpenIconStyle
                onClick={handleToggleSidebar}
                className="sidebar-icon-menu">
                <OpenIcon />
            </OpenIconStyle>
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