import React from 'react'
import './MSidebarIcon.css'

function MSidebarIcon({active, text, Icon}) {
    return (
        <div className="mSidebarIcon">
            <Icon className="mSidebar__icon" />
            <h2>{text}</h2>
        </div>
    )
}

export default MSidebarIcon
