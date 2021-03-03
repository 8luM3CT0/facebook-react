import { Add, DynamicFeed, Explore, NotificationsActive, Search, Settings } from '@material-ui/icons'
import React from 'react'
import Group from './Group'
import './GroupSidebar.css'

function GroupSidebar() {
    return (
        <div className="groupSidebar">
            {/**groupSidebar__top */}
            <div className="groupSidebar__top">
                {/**span -> h2 (Groups) && SettingsIcon */}
                <span className="sidebar__header"><h2>Groups</h2><Settings className="settings" /></span>
                { /*inputbar below -> SearchIcon && placeholder = Search Groups */}
                <span className="sidebar__search"> <Search className="searchIcon" /> <input type="text" placeholder="Search Groups" /></span>
                {/**Icon -> DynamicFeed (Your Feed)*/}
                <span className="sidebarOption" ><DynamicFeed fontSize="medium" className="iconSidebar" /><h3>Your Feed</h3></span>
                {/**Icon -> Explore (Discover) */}
                <span className="sidebarOption" ><Explore fontSize="medium" className="iconSidebar" /> <h3>Discover</h3></span>
                {/**Icon -> NotificationsActive (Notifications) */}
                <span className="sidebarOption" ><NotificationsActive fontSize="medium" className="iconSidebar" /> <h3>Notifications</h3></span>
                {/**button -> AddIcon && Create New Group */}
                    <div className="groupSidebar__create">
                        <Add />
                        <h4>Create New Group</h4>
                    </div>
            </div>
            <div className="groupSidebar__mid">
                {/**h3 -> Groups You Manage */}
                <h3>Groups You Manage</h3>
                {/**Group component */}
                <Group image="https://codeahoy.com/img/google-logo-handmade.jpg" name="CoolGuys at Google" status="Active 1 week ago" />
                <Group image="https://pbs.twimg.com/media/DypjPJ_WkAA7wQ2.jpg" name="A group about dogs and nothing more" status="Active now" />
            </div>
            <div className="groupSidebar__bottom">
                <h3>Your Groups</h3>
                {/**Group component */}
                <Group 
                image="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.0-9/119629820_10157692552973553_7829563233187412123_n.png?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFoogNXWe-InAMR90am0PEbQqM5TuaK7PVCozlO5ors9eDO3B_NsXpOqz8Wtt0aIIu7Ol_S0PiKo0Djn55m44Pk&_nc_ohc=-KDE5h-pxPcAX-sUioA&_nc_ht=scontent.fmnl8-2.fna&oh=932d38a77e9101611002bbf440639bc0&oe=605C2618" 
                name="Facebook for Developers" 
                status="12 new posts" />
                <Group 
                image="https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.0-8/15289248_269068140162594_1580546814749307408_o.png?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFAKMlBy6g7uIZPgNCMBj7dKRw_0NFTfikpHD_Q0VN-KfP-WiK3E6kryP000cA36Uloqz91cXXrrWyQ-NK6D2K2&_nc_ohc=96_h4zqkUmgAX9MiDPs&_nc_ht=scontent.fmnl8-2.fna&oh=44a1463f8fa9509c936f2e218888b508&oe=60592F55" 
                name="Clever Programmer" 
                status="2 new posts" />
                <Group 
                image="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/125210079_1539671749553991_4221383907067534471_n.jpg?_nc_cat=105&ccb=3&_nc_sid=825194&_nc_eui2=AeFtaQnuwjhzFnef5_uqNBQjo1aqiXqFd4qjVqqJeoV3ihTrFG5Jtj8dlXBvzjcaGDxRXvNl6SvwsLOg9mJ3TbWT&_nc_ohc=8XPpQ_xDerUAX-u3qD1&_nc_ht=scontent.fmnl8-1.fna&oh=77027eff56429c6c6da4c8bd1b000974&oe=605999F6" 
                name="Python Programming Beginner" 
                status="6 new posts" />
                <Group
                 image="https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.0-8/25394936_1782401828460311_1013624595484374996_o.jpg?_nc_cat=104&ccb=3&_nc_sid=825194&_nc_eui2=AeHCoqogiqX10dh_6HJvToxT6KozLKyVKU3oqjMsrJUpTUZl4AzXTOrTgIZKAPx3naRdE7Zog_xwKbnXFjJTIFRo&_nc_ohc=3HYlsavwNj8AX-o0Ln2&_nc_ht=scontent.fmnl8-2.fna&oh=f763d652cd51fda75aae47fca5ccafa7&oe=60594CED" 
                 name="Angular 11 Developers" 
                 status="99+ new posts" 
                 />
                <Group 
                image="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.0-9/100086181_2984360258307859_6553743386409435136_o.jpg?_nc_cat=103&ccb=3&_nc_sid=825194&_nc_eui2=AeHVCXvAIrSi4NmRbXsi9JFWpxmY9J5BGemnGZj0nkEZ6dOGEbKGJRDPSwp7aY80pQMSpIzsIqx3oNc9JRUgE6Pp&_nc_ohc=K86d0aO66YEAX_bsdlR&_nc_ht=scontent.fmnl8-2.fna&oh=e101ea63933140cb42e1298b527a77d3&oe=605B7FF5" 
                name="Flutter Developer Community" 
                status="20 new posts" 
                />
                <Group 
                image="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/16472968_10154957806104603_872230980534509389_n.jpg?_nc_cat=101&ccb=3&_nc_sid=825194&_nc_eui2=AeHZBnsuUqy-71xxKOeYgWfIKDxZdcJT_cgoPFl1wlP9yJeOGf0Cwn5kFkTG1T2DjX7ahbNf4F-1fxiTdgkej8xO&_nc_ohc=2eCVoHzKclYAX_PKwD4&_nc_ht=scontent.fmnl8-1.fna&oh=984179a218309e0a965af49da9c936db&oe=605A971D" 
                name="Salesforce Administration" 
                status="7 new posts" 
                />
                <Group 
                image="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/20604643_452367065130364_4077841363892831069_n.jpg?_nc_cat=100&ccb=3&_nc_sid=825194&_nc_eui2=AeHQLwvjKtalMswyNMgfslUPiLBStmpyXvKIsFK2anJe8vYywbMvVfXxwHZl95tzzYJCc_a3GjBW8eehSbKu6er6&_nc_ohc=5PVYxCU3cuMAX_gGlLL&_nc_ht=scontent.fmnl8-1.fna&oh=0948a9145a1dcb7a8f29d9b097ae6908&oe=605AA8AA" 
                name="Mobile App Developers" 
                status="15 new posts" 
                />
                <Group 
                image="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/64504858_708579459561781_8170971097894748160_o.png?_nc_cat=100&ccb=3&_nc_sid=825194&_nc_eui2=AeHDt9SXTQmE_grkXK5qjY5OjaA3DtA9lveNoDcO0D2W9_zDpNXvl7R7yzCjhwxO2_BVpJxH4nnMTmx_uJQGUyvn&_nc_ohc=mxfrOtMzx8gAX8aCgRa&_nc_ht=scontent.fmnl8-1.fna&oh=635a94eae26e0ba524f8a8788340b57d&oe=605ABF87" 
                name="Web Design & Development" 
                status="99+ new posts" 
                />
                <Group 
                image="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/92963502_1082032745495186_8594076808784117760_o.jpg?_nc_cat=101&ccb=3&_nc_sid=825194&_nc_eui2=AeERkBER7HEPn_6zK-6-fymFMk2hWb4EaB8yTaFZvgRoH0hO9ximY83UuvHR7fiNhHoJwg1vFi4lvsmXsU61qBzm&_nc_ohc=vhhHTaz_g1gAX-p2UYY&_nc_ht=scontent.fmnl8-1.fna&oh=243ad12f057adcaa76d922d75ea941e8&oe=605B20AB" 
                name="Codegiant - Cutting Edge Developers" 
                status="11 new posts" 
                />
            </div>
        </div>
    )
}

export default GroupSidebar
