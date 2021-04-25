import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import MoreHoriz from "@material-ui/icons/MoreHoriz"
import { CardContent,CardActions, Popover } from '@material-ui/core';

const ListCard = ({text}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
            <Typography style={styles.task} gutterBottom>{text}</Typography>
            <Typography>
                <div style={styles.bottom}>
                    <div style={styles.meter}><span style={styles.fill}></span></div>
                    <Popover>
                    <MoreHoriz>OPEN</MoreHoriz>
                    </Popover>
                    
                </div>
                
            </Typography>
            </CardContent>
        </Card>
    )
}

const styles = {
    cardContainer : {
        marginBottom: 8
    },
    task :{
        fontSize : '14px',
        lineHeight: '20px',
        color : '#2F3136'
    },
    bottom : {
        display : 'flex',
        justifyContent : 'space-between'
    },
    meter : {
        position: 'relative',
        background: '#555',
        height : '20px',

    },
    fill : {
        width: '25%',
        background: '#52C41A',
        height: '100%',
        position: 'relative',
        display: 'block',
        backgroundImage: 'red',
    }

}

export default ListCard
