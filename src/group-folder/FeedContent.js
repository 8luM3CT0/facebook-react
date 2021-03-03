import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, MoreHoriz, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './FeedContent.css'

function FeedContent({profPic, image, username, timestamp, message}) {
    return (
        <div className="feedContent" >
            <div className="feedContent__top">
                <MoreHoriz className="feedContent__dots" />
                <Avatar src={profPic} className="feedContent__avatar" />
                <div className="feedContent__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="feedContent__bottom">
                    <p>{message}</p>
                </div>
                <div className="feedContent__image">
                    <img src={image} alt=""/>
                </div>
                <div className="feedContent__options">
                    <div className="feedContent__option">
                        <ThumbUp />
                    </div>
                    <div className="feedContent__option">
                        <ChatBubbleOutline />
                    </div>
                    <div className="feedContent__option">
                        <NearMe />
                    </div>
                    <div className="feedContent__option">
                        <AccountCircle />
                        <ExpandMoreOutlined />
                    </div>
                </div>
        </div>
    )
}

export default FeedContent 
