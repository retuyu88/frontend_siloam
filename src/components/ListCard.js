import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography"
import { CardContent } from '@material-ui/core';

const ListCard = ({text}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
            <Typography style={styles.task} gutterBottom>{text}</Typography>
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
    }
}

export default ListCard
