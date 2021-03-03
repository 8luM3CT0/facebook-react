import { Add, ExpandLess, Explore, Flag, GroupAdd, Settings, ThumbUp } from '@material-ui/icons'
import React from 'react'
import PageRow from './PageRow'
import './PageSidebar.css'

function PageSidebar() {
    return (
        <div className="pageSidebar">
            <div className="pageSidebar__top">
                <span className="pageSidebar__pages"> <h3>Pages</h3><Settings className="settings" /></span>
                <span className="pageSidebar__yourPages">
                    <Flag className="flag" />
                    <h4>Your Pages</h4>
                    <ExpandLess className="less" />
                </span>
            </div>
            <div className="pageSidebar__row">
                {/**PageRow */}
                <PageRow name="Google" notifs="99+ new" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" />
                <PageRow name="Instagram" notifs="12 new" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
                <PageRow name="Twitter" notifs="10 new" image="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" />
                <PageRow name="YouTube" notifs="9 new" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" />
                <PageRow name="Microsoft" notifs="18 new" image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png " />
            </div>
            <span className="pageSidebar__button"><Add className="add" /><button className="button">Create New Page</button></span>
            <hr />
            <div className="pageSidebar__bottom">
                {/**Discover -> Icon(Explore) */}
                <span className="options"><Explore /> <h3>Discover</h3></span>
                {/**Liked Pages -> Icon(ThumbUp) */}
                <span className="options"><ThumbUp /><h3>Liked Pages</h3> </span>
                {/**Invites -> Icon(Group Add) */}
                <span className="options"><GroupAdd /><h3>Invites</h3> </span> 
            </div>
        </div>
    )
}

export default PageSidebar
