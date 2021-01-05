import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (bgcolor, forecolor) => makeStyles(() => ({
    root: {
        textAlign: 'center',
        backgroundColor: bgcolor
    },
    text: {
        fontSize: 20,
        color: forecolor
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: forecolor
    }
}));

function MyCard(props) {

    const classes = useStyles(props.bgcolor, props.forecolor)()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>                
                <div className={classes.text}>
                    {props.text}
                </div>
            </CardContent>
        </Card>
    );
}

export default MyCard;