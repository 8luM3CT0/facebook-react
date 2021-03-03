import { Bookmark, LiveTv, Movie, OndemandVideo, Search, Settings, SubscriptionsOutlined } from '@material-ui/icons'
import React from 'react'
import VidPages from './VidPages'
import './VidSidebar.css'

function VidSidebar() {
    return (
        <div className="vidSidebar">
            <div className="vidSidebar__top">
                {/**span.vidSidebar__header -> h2 = Watch && Icon = Settings (className="vid_settings") */}
                <span className="vidSidebar__header"><h2>Watch</h2> <Settings  className="vid__settings"/></span>
                {/**span.vidSidebar__input -> SearchIcon (vid__search) && input (search videos) */}
                <span className="vidSidebar__input"> <Search /> <input type="text" placeholder="Search Videos" className="vidSidebar__inputBar"/>  </span>
            </div>
            <div className="vidSidebar__mid">
                {/**Icon */}
                <span className="vidSidebar__options"><OndemandVideo className="vid__icon" /> <h3 className="vidSidebar__h2">Home</h3> </span>
                {/** span (vidSidebar__options)-> Icon() && h3(Shows) */}
                <span className="vidSidebar__options"><Movie className="vid__icon" /> <h3 className="vidSidebar__h2">Shows</h3> </span>
                {/** span (vidSidebar__options)-> Icon() && h3(Shows) */}
                <span className="vidSidebar__options"><LiveTv className="vid__icon" /> <h3 className="vidSidebar__h2">Live</h3> </span>
                {/** span (vidSidebar__options)-> Icon() && h3(Shows) */}
                <span className="vidSidebar__options"><Bookmark className="vid__icon" /> <h3 className="vidSidebar__h2">Saved Videos</h3> </span>
            </div>
            <div className="vidSidebar__bottom">
                <span className="vidSidebar__bottomHeader"><h3>Your Watchlist</h3> <h4>Manage</h4></span>
                {/**VidPages.js*/}
                <VidPages image="https://uploads-ssl.webflow.com/5fca9792945e0054a3a84b47/5fcaa8649182d48edc34031d_play-circle.svg" name="Latest Videos"  />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14Git2v-jQceuRB3F_T8Fnfu2BvlP9p_9sTnWpA=s68-c-k-c0x00ffffff-no-rj-mo" name="Joma Tech" status="6 new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14Gj0M3gv0I0Vi4KOXwTRH3eMVS2NjCEPfdLfnA=s68-c-k-c0x00ffffff-no-rj-mo" name="jedcal" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14GjNO32N5Ll_Qk4hQ1s2PYaJ67CgNi2B1fOgcQ=s68-c-k-c0x00ffffff-no-rj-mo" name="88rising" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a/AATXAJw0qZ41vP0c1-MuVov8r0OuJGt-MlpJ38L74NU63w=s900-c-k-c0xffffffff-no-rj-mo" name="Tiffintech" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo" name="Clever Programmer" status="9+ new videos" />
                <VidPages image="https://miro.medium.com/max/3150/1*Zkhl4Zz43z2_iR_ADlP-rg.png" name="Google Developers" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14Ghy4IdfZ7UrGvoA9a6E_znArVGR1iAFZdaAqw=s68-c-k-c0x00ffffff-no-rj-mo" name="Gyasi Linje" status="7 new videos" />
                <VidPages image="https://engineering.fb.com/wp-content/themes/code-fb-com/img/facebook-developers.png" name="Facebook for Developers" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14GhDmb78xpNAo3l2KkjmM4PwuM0Nj3FOh0MNdg=s68-c-k-c0x00ffffff-no-rj-mo" name="Physics Girl" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo" name="TechLead" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14Ghb-QHupY0N1ge4VeyYc4UZqK1axTe0QHJRdA=s68-c-k-c0x00ffffff-no-rj-mo" name="Jade Chynoweth" status="9+ new videos" />
                <VidPages image="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo" name="freeCodeCamp.org" status="9+ new videos" />
                <VidPages image="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/52605731_10156105105546765_378656050666012672_o.jpg?_nc_cat=1&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGo8EoQSdMb2CnLB4145q_PYtifExrNi-ti2J8TGs2L64QquIFvOXDIrtFg5vFRxQMZ2oDJ943iyr5xZULhFCmO&_nc_ohc=S8VKthCy8TIAX8D3ETF&_nc_ht=scontent.fmnl7-1.fna&oh=3b43d1caadf07ee53d5a0ac2b80f810d&oe=60609A34" name="Smosh" status="9+ new videos" />
                <VidPages image="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/141174471_107566301319907_4116765179811734927_o.jpg?_nc_cat=1&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeE3MUY8xv4AH3bIcaCih-HmxXIed7u4KlrFch53u7gqWlPpwMU8XSxeYubLBarOqRHavBaU2qZO-1Z0Db0NCGBt&_nc_ohc=P6W_FqUHYMkAX9hUkuv&_nc_ht=scontent.fmnl7-1.fna&oh=e3308c54e8c9b90c167f17db0d7b989e&oe=606046F8" name="President Joe Biden" status="9+ new videos" />
                <VidPages image="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/120107166_10158634722266870_436101834339884160_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeE4PBGk3lXEOPDk70D6YNZrD5dSe92RmjAPl1J73ZGaMAESCIrHZbdIm6ae6Bf0lZZvSe_TtrXyrFgD85WAzsuj&_nc_ohc=HcobHQzz1fkAX9AF15b&_nc_ht=scontent.fmnl7-1.fna&oh=63e5aeb9c8ef195643837764e54fdb61&oe=605FC955" name="Ken Jeong" status="9+ new videos" />
                <VidPages image="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/75602749_1158116234580882_3098817362170740736_o.png?_nc_cat=1&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFZy0XOc3UjCx4-JFlnjT4lrytCt3o-zAqvK0K3ej7MCmuB5-yc6RCPYBvrNPwoc3_jvZ3BOBWAmkozlD3H9oQu&_nc_ohc=vc5XvyV2rrEAX8XGs3E&_nc_ht=scontent.fmnl7-1.fna&oh=7856bdc13704d8eac2108ac094488b21&oe=605F343D" name="Woof Woof" status="9+ new videos" />
            </div>
        </div>
    )
}

export default VidSidebar
