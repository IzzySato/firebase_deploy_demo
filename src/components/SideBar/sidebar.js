import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="aboutUs" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                    <SidebarLink to="signUp" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
            
        </SideBarContainer>
    );
};

export default SideBar
