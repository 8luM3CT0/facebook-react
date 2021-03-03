import { Avatar } from '@material-ui/core'
import React from 'react'
import './Messages.css'

function Messages() {
    return (
        <div className="messages" >
            <div className="message">
                <Avatar className="messages__avatar" />
                <p>Here's the message</p>
                <small>02/05/2021</small>
            </div>
        </div>
    )
}

export default Messages;
