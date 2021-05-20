import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icons: <IoIcons.IoIosCalendar/>,
        cName: 'nav-text'
    },
    {
        title: 'Friends',
        path: '/friends',
        icons: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icons: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icons: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]