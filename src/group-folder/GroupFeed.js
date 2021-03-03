import { Avatar } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import React from 'react'
import FeedContent from './FeedContent'
import './GroupFeed.css'

function GroupFeed() {
    return (
        <div className="groupFeed">
            {/**.groupFeed__news */}
            <div className="groupFeed__news">
                {/** newsFeed__content*/}
                <div className="newsFeed">
                    <div className="newsFeed__content">
                    <div className="newsFeed__contentLeft">
                        <Avatar src="https://pbs.twimg.com/profile_images/816823236868440064/AYZTywkL_400x400.jpg" />
                    </div>
                        <div className="newsFeed__contentRight">
                            <h4 className="contentRight__poster" >Dusan Nemec posted something in <h4 className="bold">CoolGuys at Google</h4></h4>
                            <h5 className="contentRight__status"> <FiberManualRecord className="icon" /> Active 2 minutes ago </h5>
                        </div>
                    </div>
                    <div className="newsFeed__content">
                        <div className="newsFeed__contentLeft">
                            <Avatar src="https://pbs.twimg.com/profile_images/807626860527894528/sa4nPGvr_400x400.jpg" />
                        </div>
                        <div className="newsFeed__contentRight">
                            <h4 className="contentRight__poster" >Marcus Holloway posted something in <h4 className="bold">DedSec</h4></h4>
                            <h5 className="contentRight__status"> <FiberManualRecord className="icon" /> Active 33 minutes ago </h5>
                        </div>
                    </div>
                    <div className="newsFeed__content">
                        <div className="newsFeed__contentLeft">
                            <Avatar src="https://pbs.twimg.com/profile_images/942189459344420864/K8oTbiCe_400x400.jpg" />
                        </div>
                        <div className="newsFeed__contentRight">
                            <h4 className="contentRight__poster" >Robert Gray posted something in <h4 className="bold">Lo-fi addicts</h4></h4>
                            <h5 className="contentRight__status"> <FiberManualRecord className="icon" /> Active 4 hours ago </h5>                        </div>
                    </div>
                </div>
            </div>
            <div className="groupFeed__content">
               {/**FeedContent.js */}
               <FeedContent 
               profPic="https://pbs.twimg.com/profile_images/816823236868440064/AYZTywkL_400x400.jpg" 
               image="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.0-9/151980907_3911367028895161_1818703618169926504_o.jpg?_nc_cat=109&ccb=3&_nc_sid=730e14&_nc_eui2=AeGwwJrU723d_xw3AFJelcrnqvsteBzLb8aq-y14HMtvxgsRZ_hsXdS9UGNWAJ61K6PZuHc_4PlDz6UNY0oYJBjj&_nc_ohc=3KnsfBUwOdQAX_KbLJj&_nc_ht=scontent.fmnl8-2.fna&oh=226c1d25bcff27d03c4fb37bf13a896c&oe=60599232" 
               username="Dusan Nemec" 
               timestamp="Tues, 23 Feb 2021 08:46:46 GMT" 
               message="💭 Intro to #DeepLearning 
               Tune in to #TFEverywhere 2021 North America on February 26 to hear Josh Gordon speak on neural networks, Deep Dream, 
               and TensorFlow code examples!" />
               <FeedContent 
               profPic="https://pbs.twimg.com/profile_images/807626860527894528/sa4nPGvr_400x400.jpg" 
               image="https://external.fmnl8-2.fna.fbcdn.net/safe_image.php?d=AQEQN4z1RTPsJxVq&w=500&h=261&url=https%3A%2F%2Fi1.wp.com%2Ftechlomedia.in%2Fwp-content%2Fuploads%2F2018%2F12%2FBest-private-browsers.png&cfs=1&ext=jpg&_nc_eui2=AeFWmOBpkRNixfkBPjqubt-B4uw4L2xLpQLi7DgvbEulAkBbwunnLblqstO3CRviNs1IJKEB0O9k6qmmTVAmAd48&_nc_cb=1&_nc_hash=AQEPgQFE8soxOD49" 
               username="Marcus Holloway" 
               timestamp="Wed, 17 Feb 2021 23:12:00 GMT" 
               message="These browsers block trackers and ads automatically."
               />
               <FeedContent 
               profPic="https://pbs.twimg.com/profile_images/942189459344420864/K8oTbiCe_400x400.jpg" 
               image="https://external.fmnl8-2.fna.fbcdn.net/safe_image.php?d=AQFmPZDWDvtEUdmo&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3lncFeI53Vw%2Fmaxresdefault.jpg&cfs=1&ext=jpg&_nc_eui2=AeH1xWyS7r_a-FyVAiVp9s60EdGrNQZNIJkR0as1Bk0gmfCxfmq6O1Ju6uE0UQKc0M8z9iRyriC4WkFzvgBDLqzl&_nc_cb=1&_nc_hash=AQElQl-UGbl5R_dG" 
               username="Robert Gray" 
               timestamp="Sat, 23 Feb 2021 03:00:46 GMT" 
               message="Guys, hope you're having a great day! 
               If you want to see how I made a 90s Boom Bap Beat with Horns, go ahead, check this video out!
               Also, if you want to see more, please Co sider subscribing!
               Much love!
               YFGP"
               />
            </div>
        </div>
    )
}

export default GroupFeed
