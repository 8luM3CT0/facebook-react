import { Avatar } from '@material-ui/core'
import React from 'react'
import './News.css'

function News() {
    return (
        <div className="news">
            <div className="news__left">
                {/** Avatar*/}
                <Avatar />
            </div>
            <div className="news__right">
                {/**h4-> name posted something in group */}
                <h4 className="news__name">Name</h4>
                {/**h5 -> circle icon and active certain time ago */}
                <h5 className="status">Status</h5>
            </div>
        </div>
    )
}

export default News
