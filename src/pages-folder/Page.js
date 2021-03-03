import { Avatar } from '@material-ui/core'
import { Message, Public } from '@material-ui/icons'
import React from 'react'
import './Page.css'

function Page({name, description, likes, follows, image}) {
    return (
        <div className="page">
            {/**page__title */}
            <div className="page__title">
                {/**page__titleLeft */}
                <div className="page__titleLeft">
                    {/**Avatar */}
                    <Avatar src={image} />
                </div>
                {/**page__titleRight */}
                <div className="page__titleRight">
                    {/**name */}
                    <h4>
                        {name}
                    </h4>
                    {/** description*/}
                    <span className="title__status">
                    <h5>
                        <span className="description">
                            {description}
                        </span>
                    </h5>
                    -
                    <h5>
                        <span className="likes">
                            {likes}    
                        </span> 
                        likes
                    </h5>
                    {/**likes, follows */}
                    -
                    <h5>
                        <span className="follows">
                            {follows}
                        </span>
                        follows
                        </h5>
                    </span>
                </div>
            </div>
            <div className="page__options">
                    <span className="options"><Public /> <h4>Notifications</h4></span>
                    <span className="options"><Message /><h4>Messages</h4> </span>
            </div>
        </div>
    )
}

export default Page
