import { Avatar } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react'
import './PageRow.css'

function PageRow({name, image, notifs}) {
    return (
        <div className="pageRow">
             <div className="pageRow__left">
                 {/**Avatar */}
                 <Avatar className="pageRow__avatar" src={image} />
             </div>
             <div className="pageRow__right">
                {/**Name of the page */}
                <h5 className="pageRow__name">
                    {name}
                </h5>
            {/**Circle -> color: blue and a number 
             * will probably be in a span 
             * */}
             <span className="pageRow__notif">
                 <FiberManualRecordIcon className="circle" />
                 <h5>{notifs}</h5>
             </span>
             </div>
        </div>
    )
}

export default PageRow
