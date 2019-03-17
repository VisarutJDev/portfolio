import React from "react";
import {
    withStyles,
    Typography,
    Grid,
    Avatar
} from "@material-ui/core";
import './typing.css'
import Content from './content'
import navLogo from 'img/picture_logo.jpg';
import classNames from "classnames";

const PageHeader = ({ title, classes }) => {
    return (
        <Grid className={classes.root}>

            <Typography
                align="center"
                variant="headline"
                gutterBottom
                className={classes.title}
            >
                <Avatar
                    src={navLogo}
                    className={classNames(classes.nav_logo)}
                />
                {title}
                <div className="typewriter">
                    <Content
                        strings={[
                            'Software Solution Developer',
                            'Full-Stack Developer',
                            'LazyDev'
                        ]}
                    />
                </div>
            </Typography>

            <div className={classes.divider} />

        </Grid>
    );
};

const component_styles = theme => ({
    divider: {
        height: "4px",
        width: 180,
        margin: "6px auto 0 auto",
        backgroundColor: theme.palette.white,
        transition: theme.transitions.create("opacity")
    },
    title: {
        fontWeight: "600",
        fontSize: "42px",
        color: theme.palette.white,
        margin: "0px"
    },
    root: {
        paddingTop: "56px",
        paddingBottom: "36px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0px",
        margin: "0"
    },
    nav_logo: {
        margin: "auto",
        width: 216,
        height: 216,
    },
});

export default withStyles(component_styles)(PageHeader);
