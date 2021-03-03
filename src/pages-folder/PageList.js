import React from 'react'
import Page from './Page'
import './PageList.css'

function PageList() {
    return (
        <div className="pageList">
            <h3>Pages You Manage</h3>
            {/**Page */}
            <Page name="Google" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" description="Search engine" likes="200M" follows="117M"/>
            <Page name="Instagram" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" description="Image-sharing app" likes="17M" follows="10M" />
            <Page name="Twitter" image="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" description="Microblogging app" likes="28M" follows="12M" />
            <Page name="YouTube" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" description="Video-sharing app" likes="113M" follows="101M" />
            <Page name="Microsoft" image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" description="Software company" likes="118M" follows="110M" />
            <Page  name="Pinterest" image="https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png" description="Image sharing app" likes="7.6M" follows="980K" />
            <Page  name="" image="" description="" likes="" follows="" />
            <Page  name="" image="" description="" likes="" follows="" />
            <Page  name="" image="" description="" likes="" follows="" />
        </div>
    )
}

export default PageList
