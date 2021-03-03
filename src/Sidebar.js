import { Avatar } from '@material-ui/core'
import { AddBox, Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, Twitter, VideoLibrary, GroupRounded } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}  title={user.displayName}/>
            <Link to="/covid">
                <SidebarRow className="sidebar__covid" Icon={AddBox} title="COVID-19 Information Center" />
            </Link>
            <Link to="/page" >
                <SidebarRow className="sidebar__pages" Icon={EmojiFlags} title="Pages" />
            </Link>
            <SidebarRow className="sidebar__friends" Icon={People} title="Friends" />
            <Link to="/chat/:chatId">
                <SidebarRow className="sidebar__messenger" Icon={Chat} title="Messenger" />
            </Link>
            <Link to="/marketplace">
                <SidebarRow className="sidebar__marketplace" Icon={Storefront} title="Marketplace" />
            </Link>
            <Link to="/video">
                <SidebarRow className="sidebar__videos" Icon={VideoLibrary} title="Watch" />
            </Link>
            <Link to="/group">
                <SidebarRow className="sidebar__groups" Icon={GroupRounded} title="Groups" />
            </Link>
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
