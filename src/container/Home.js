import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Card,
} from "@material-ui/core";

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid id="mainContainer" className={classes.root}>
                <Grid
                    spacing={0}
                    container
                    component={Card}
                    elevation={2}
                    className={classes.page_container}
                >
                    <h1>HI Home!</h1>
                </Grid>
            </Grid>
        );
    }
}

const styles_component = theme => ({
    root: {
        height: "100vh",
        flexGrow: "1",
        display: "flex",
        minHeight: "94%",
        margin: 0,
        backgroundColor: theme.palette.secondary.main
    },
    page_container: {
        width: "100%",
        height: "auto !important",
        minHeight: "100%",
        // marginLeft: "54px",
        // marginRight: "54px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        flexGrow: "1"
    },
});
export default withStyles(styles_component)(Home);