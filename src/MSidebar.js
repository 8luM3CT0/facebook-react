import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import  SettingsIcon  from '@material-ui/icons/Settings'
import React from 'react'
import './MSidebar.css'
import MSidebarIcon from './MSidebarIcon'
import { IconButton } from '@material-ui/core'
import { Add, Build, DirectionsRun, DriveEta, Favorite, Group, Home, House, Inbox, MusicNote, Nature, Notifications, PermIdentity, Pets, PhoneIphone, Search, ShoppingCart, Videocam, VideogameAsset } from '@material-ui/icons';

function MSidebar() {
    return (
        <div className="mSidebar">
            <div className="mSidebar__top">
                <h4>Marketplace</h4>
                {/**mSidebarIcons */}
                <IconButton className="iconButton">
                    <SettingsIcon />
                </IconButton>
            </div>
            <div className="mSidebar__input">
                <Search />
                <input placeholder="Search Marketplace" />
            </div>

            <div className="mSidebar__mid">
                {/**mSidebarIcons */}
                    <MSidebarIcon  Icon={StoreMallDirectoryRoundedIcon} text="Browse All" />
                    <MSidebarIcon  Icon={Notifications} text="Notifications" />
                    <MSidebarIcon  Icon={Inbox} text="Inbox" />
                    <MSidebarIcon Icon={ShoppingCart} text="Cart" />
                    <MSidebarIcon Icon={PermIdentity} text="Your Account" />
            </div>

            <div className="mSidebar__listing">
                    <Add />
                    <h4>Create New Listing</h4>
            </div>

            <hr />
            
            <div className="mSidebar__filters">
                <h3>Filters</h3>
                <h4>Palo Alto, California - Within 124 miles</h4>
            </div>

            <hr />

            <div className="mSidebar__bottom">
                {/**mSidebarIcons */}
                <MSidebarIcon Icon={DriveEta} text="Vehicles" />
                <MSidebarIcon Icon={House} text="Property Rentals" />
                <MSidebarIcon Icon={Home} text="Home Goods" />
                <MSidebarIcon Icon={PhoneIphone} text="Electronics" />
                <MSidebarIcon Icon={Build} text="Home Improvement Supplies" />
                <MSidebarIcon Icon={MusicNote} text="Musical Instruments" />
                <MSidebarIcon Icon={Videocam} text="Entertainment" />
                <MSidebarIcon Icon={DirectionsRun} text="Sporting Goods" />
                <MSidebarIcon Icon={Nature} text="Garden & Outdoor" />
                <MSidebarIcon Icon={Favorite} text="Family" />
                <MSidebarIcon Icon={Pets} text="Pet Supplies" />
                <MSidebarIcon Icon={VideogameAsset} text="Toys & Games" />
                <MSidebarIcon Icon={Group} text="Groups" />
            </div>
        </div>
    )
}

export default MSidebar
