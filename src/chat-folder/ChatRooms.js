import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './ChatRooms.css'
//for going into the chat groups
import {Link} from 'react-router-dom'
//for user actions
import {useStateValue} from '../StateProvider'
//to allow db actions
import db from '../firebase'


function ChatRooms({id, name, selected}) {
    const [{user}, dispatch] = useStateValue();
    const [chats, setChats] = useState('');

    useEffect(() => {
        if(id){
            db.collection('chat')
            .doc(id)
            .collection('chats')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setChats(snapshot.docs.map(doc => doc.data().id)))
        }
    },[id])

    console.log(name);


    return (
        <div className={`chatRooms ${selected && 'selected'}`}>
            <Link to={`/chat/${id}`}>
                <Avatar className="chatRooms__avatar" src={user.photo} />
                <div className="chatRooms__info">
                    <h3>{name}</h3>
                    <p>{chats[0]?.message}</p>
                </div>
                </Link>
        </div>
    )
}

export default ChatRooms
