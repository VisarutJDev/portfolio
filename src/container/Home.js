import React, { Component } from 'react';
import {
    withStyles,
    Grid,
} from "@material-ui/core";

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid id="mainContainer" className={classes.root}>
                <h1>HI Home!</h1>
            </Grid>
        );
    }
}

const styles_component = theme => ({
    root: {
        flexGrow: "1",
        display: "flex",
        minHeight: "94%",
        margin: 0,
        backgroundColor: theme.palette.secondary.main
    },
});
export default withStyles(styles_component)(Home);