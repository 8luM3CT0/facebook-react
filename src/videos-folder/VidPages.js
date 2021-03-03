import { Avatar } from '@material-ui/core'
import React from 'react'
import './VidPages.css'

function VidPages({name, image, status}) {
    return (
        <div className="vidPages">
            <div className="vidPages__left">
                {/**Avatar (src = image) */}
                <Avatar src={image} className="vidPages__logo" />
            </div>
            <div className="vidPages__right">
                <h4 className="vidPage__name">{name}</h4>
                <h5 className="vidPage__status">{status}</h5>
            </div>
        </div>
    )
}

export default VidPages
