import { Avatar, IconButton } from '@material-ui/core'
import { Create, Search, Settings, VideoCall } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import ChatRooms from './ChatRooms'
import './ChatSidebar.css'
//for chat groups
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import db from '../firebase'

function ChatSidebar({addGroup}) {

    const [chats, setChats] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe =  db.collection('chat').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => 
                ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ))
        return () => {
            unsubscribe();
        };
    }, [])

        const createChat = () => {
            const chatName = prompt('Enter a new chat group: ')
            if(chatName){
                db.collection('chat').add({
                    name: chatName,
                })
            }
        };
    return (
        <div className="chatSidebar">
            <div className="chatSidebar__top">
                <Avatar className="chatSidebar__avatar" src={user.photoURL} />
                <h2>Chats</h2>
                <IconButton className="chatSidebar__iconBtn">
                    <Settings />
                </IconButton>
                <IconButton className="chatSidebar__iconBtn">
                    <VideoCall />
                </IconButton>
                <IconButton className="chatSidebar__iconBtn">
                    <Create onClick={createChat} />
                </IconButton>
            </div>
            <div className="chatSidebar__input">
                    <Search className="chatSidebar__search" />
                    <input placeholder="Search Messenger" />
            </div>
            <div className="chatSidebar__chats">
                {
                    chats.map(chat => (
                        <ChatRooms key={chat.id} id={chat.id} name={chat.data.name} />
                    ))
                }
            </div>    
        </div>
    )
}

export default ChatSidebar
