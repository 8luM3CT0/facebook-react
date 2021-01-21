import { Avatar } from '@material-ui/core'
import { AddBox, Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, Twitter, VideoLibrary } from '@material-ui/icons'
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
                <SidebarRow Icon={AddBox} title="COVID-19 Information Center" />
            </Link>
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <Link to="/marketplace">
                <SidebarRow Icon={Storefront} title="Marketplace" />
            </Link>
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
