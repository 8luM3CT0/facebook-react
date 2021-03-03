import React from 'react'
import './Group.css'

function Group({image, name, status}) {
    return (
        <div className="group" >
            <div className="group__left">
                {/**image */}
                <img className="image" src={image} alt=""/>
            </div>
            <div className="group__right">
                {/**h4 -> name of group */}
                <h4 className="name">{name}</h4>
                {/**h5 -> active status */}
                <h5 className="status">{status}</h5>
            </div>
        </div>
    )
}

export default Group
