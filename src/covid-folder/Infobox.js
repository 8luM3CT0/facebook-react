import React from 'react'
import './Infobox.css'
import {Card, CardContent, Typography} from '@material-ui/core'

function Infobox({title, cases, isRed, isGray, isGreen, active, total, ...props }) {
    return (
        <div className="infoBox">
            <Card 
            onClick={props.onClick}
            className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} 
            ${isGray && 'infoBox--gray'} 
            ${isGreen && 'infoBox--green'}`}
            >
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">
                        {title}
                    </Typography>
                    <h2
                    className={`infoBox__cases ${isRed && !isGray && 'infoBox__cases--green'}`}>
                        {cases}
                    </h2>
                    <Typography className="infoBox__total" color="textSecondary">
                            {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Infobox
