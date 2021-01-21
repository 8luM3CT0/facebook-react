import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, MoreHoriz, NearMe, ThumbUp } from '@material-ui/icons';
import React, {forwardRef} from 'react'
import './Post.css'

const Post = forwardRef(({profPic, image, username, timestamp, message}, ref) => {
    return (
        <div ref={ref} className="post">
                <div className="post__top">
                    <MoreHoriz className="post__dots" />
                    <Avatar 
                    className="post__avatar"
                    src={profPic}/>
                    <div className="post__topInfo">
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>
                <div className="post__bottom">
                    <p>{message}</p>
                </div>
                <div className="post__image">
                    <img src={image} alt=""/>
                </div>
                <div className="post__options">
                    <div className="post__option">
                        <ThumbUp />
                    </div>
                    <div className="post__option">
                        <ChatBubbleOutline />
                    </div>
                    <div className="post__option">
                        <NearMe />
                    </div>
                    <div className="post__option">
                        <AccountCircle />
                        <ExpandMoreOutlined />
                    </div>
                </div>
        </div>
        )
    }
);

export default Post
