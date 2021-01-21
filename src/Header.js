import { Avatar, IconButton } from '@material-ui/core'
import { Add, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { auth } from './firebase'
import './Header.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'


function Header() {
    const[{user}, dispatch] = useStateValue();

    const signOut = () => {
        auth.signOut();
    }

    return (
        <div className="header">
            {/**header left */}
            <div className="header__left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png" 
                        alt=""
                        className="header__logo"
                    />
                <div className="header__input">
                    <Search />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/**header center */}
            <div className="header__center">
                    <div className="header__option header__option--active">
                        <Link to="/">
                            <Home className="icon__home" fontSize="large" />
                        </Link>
                    </div>
                 <div className="header__option">
                    <Flag fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
            {/**header right */}
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton className="iconBtn">
                    <Add />
                </IconButton>
                <IconButton className="iconBtn">
                    <Forum />
                </IconButton>
                <IconButton className="iconBtn">
                    <NotificationsActive />
                </IconButton>
                <IconButton onClick={() => auth.signOut()} className="iconBtn">
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
