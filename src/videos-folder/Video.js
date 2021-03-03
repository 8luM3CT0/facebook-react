import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, MoreHoriz, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Video.css'

function Video({name, timestamp, title, description, image, profPic}) {
    return (
        <div className="video">
            {/**video__top */}
            <div className="video__top">
                {/**.video__topLeft */}
                <div className="video__topLeft">
                     <div className="video__topLogo">
                        <div className="video__topLeft">
                            <Avatar src={profPic} />
                        </div>
                        <div className="video__topRight">
                            <h4 className="video__poster">{name}</h4>
                            <h5 className="video__timestamp">{timestamp}</h5>
                        </div>
                     </div>
                </div>
                <div className="video__topRight">
                     <MoreHoriz className="more__options" />
                </div>
            </div>
            <div className="video__mid">
                <div className="video__midTitle">
                    <h4 className="video__title">{title}</h4>
                    <h5 className="video__description">{description}</h5>
                </div>
                <div className="video__midImg">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="video__bottom">
                    <div className="video__options">
                        <div className="video__option">
                            <ThumbUp fontSize="small" />
                            <h5>Like</h5>
                        </div>
                        <div className="video__option">
                            <ChatBubbleOutline fontSize="small" />
                            <h5>Comment</h5>
                        </div>
                        <div className="video__option">
                            <NearMe fontSize="small" />
                            <h5>Share</h5>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Video
