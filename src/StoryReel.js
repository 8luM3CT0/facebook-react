import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://i.ytimg.com/vi/-XdYIoKiyZM/maxresdefault.jpg"
            profSrc="https://pm1.narvii.com/6374/2112810319f8d90459b8487f10701298be3cd0be_hq.jpg"
            title="Dusan Nemec"
            />
            <Story 
            image="https://i.ytimg.com/vi/r7244-oyO0w/maxresdefault.jpg"
            profSrc="https://upload.wikimedia.org/wikipedia/en/9/94/Red_Hood_%28Jason_Todd%29.png"
            title="Jason Todd"
            />
            <Story 
            image="https://i.ytimg.com/vi/hWFDujYzvbI/maxresdefault.jpg"
            profSrc="https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s900-c-k-c0x00ffffff-no-rj"
            title="Joma Tech"
            />
            <Story 
            image="https://i.ytimg.com/vi/sS6O7Yp5xmg/maxresdefault.jpg"
            profSrc="https://yt3.ggpht.com/ytc/AAUvwngjI6cbAvpcKi0PpIc7vllAmDHt_tXWCOA_CEserA=s900-c-k-c0x00ffffff-no-rj"
            title="Josh & Katie"
            />
            <Story 
            image="https://i.ytimg.com/vi/eDXFQgIxPrM/maxresdefault.jpg"
            profSrc="https://yt3.ggpht.com/ytc/AAUvwniAIuJTf8tYaEkS8CxoEtSi04EvKpr3ou1tTKLFkg=s900-c-k-c0x00ffffff-no-rj"
            title="TechLead"
            />
        </div>
    )
}

export default StoryReel
