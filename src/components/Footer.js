import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    footer: {        
        backgroundColor: '#AA1111',
        color: "white"        
    },
    column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}));

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid container alignItems="center" direction="row" justify="center">
                <Grid item xs={6} className={classes.column}>
                    <h4>React</h4>
                    <ul>
                        <li>Design</li>
                        <li>Design</li>
                    </ul>
                </Grid>
                <Grid item xs={6} className={classes.column}>
                    <h4>React</h4>
                    <ul>
                        <li>Design</li>
                        <li>Design</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer