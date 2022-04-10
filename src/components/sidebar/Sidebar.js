import React from 'react'
import {
    Icon,
    SidebarContent,
    CloseIcon,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';
import './../../assets/css/sidebar.css';


const Sidebar = ({ isOpen, handleToggleSidebar }) => {

    return (
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
    )
}

export default Sidebar