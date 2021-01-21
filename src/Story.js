import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({image, profSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profSrc} />
            <h4 className="story__name">{title}</h4>
        </div>
    )
}

export default Story
