import { IconButton, Avatar } from '@material-ui/core'
import { AddCircle, Call, Gif, Info, InsertPhoto, NoteAdd, ThumbUp, Videocam, EmojiEmotions } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import './ChatPage.css'
import firebase from 'firebase'


function ChatPage() {
    const [input, setInput] = useState('');
    const {chatId} = useParams();
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();
    const [chatName, setChatName] = useState('');

    useEffect(() => {
        if(chatId){
            db.collection('chat').doc(chatId).onSnapshot((snapshot) => setChatName(snapshot.data().name));

            db.collection('chat').doc(chatId).collection('chats').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [chatId])

    console.log(chatName)

    const sendMessage = e => {
        e.preventDefault();
        console.log('Input here =>>', input);

        db.collection('chat').doc(chatId).collection('chats').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    }

    return (
        <div className="chatPage">
            <div className="chatPage__header">
                <div className="chatPage__headerinfo">
                    <strong className="chat__name">{chatName}</strong>
                    <p>Last seen: {" "} {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                    <IconButton className="iconBtn1st">
                        <Call />
                    </IconButton>
                    <IconButton className="iconBtn">
                        <Videocam />
                    </IconButton>
                    <IconButton className="iconBtn">
                        <Info />
                    </IconButton>
            </div>
            {/**chatPage message */}
            <div className="chatPage__messages">
                {messages.map(chat => (
                     <p className={`chatPage__messageSpan ${chat.name === user.displayName && "chatPage__messageReceiver"} `}>
                         <span className="chatPage__sender">{chat.name}</span>
                        {chat.message}
                    </p>
                ))}
            </div>
            {/**chatPage input*/}
            <div className="chatPage__input">
                <AddCircle className="addCircle" />
                <Gif className="gif" />
                <NoteAdd className="note" />
                <InsertPhoto className="photo" />

                <form>
                    <input 
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>Send Message</button>
                </form>
                <EmojiEmotions className="emoji" />
                <IconButton className="iconBtnEnd">
                    <ThumbUp className="thumb" />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatPage
