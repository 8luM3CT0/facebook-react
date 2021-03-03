import React from 'react'
import Video from './Video'
import './VidFeed.css'

function VidFeed() {
    return (
        <div className="vidFeed">
            {/**vidFeed__container */}
                {/**Video.js */}
                <Video name="Dusan Nemec" profPic="" timestamp="02/19/2019, Sat at 18:00" title="Please work" description="Just please work" image="" />
                <Video name="Ian Dobb" profPic="" timestamp="01/13/2021, Wed at 01:32 " title="A testig title" description="I always put something here just in case" image="" />
                <Video name="" profPic="" timestamp="" title="" description="" image="" />
                <Video name="" profPic="" timestamp="" title="" description="" image="" />
                <Video name="" profPic="" timestamp="" title="" description="" image="" />
        </div>
    )
}

export default VidFeed
