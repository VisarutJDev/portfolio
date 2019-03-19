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
import backgroundImage from 'img/bg2.jpg'
const PageHeader = ({ title, classes }) => {
    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            
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
                </Typography>
       
                <Typography
                    align="center"
                    variant="display4"
                    gutterBottom
                    className={classes.title}
                >
                    <div className="typewriter">
                        <Content
                            prefix={"I'm a "}
                            strings={[
                                'Software Developer',
                                'Full-Stack Developer',
                                'Lazy-Dev'
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
        fontSize: "50px",
        color: theme.palette.white,
        margin: "0px"
    },
    root: {
        height: "100vh",
        paddingTop: "56px",
        paddingBottom: "36px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0px",
        margin: "0",
        backgroundImage: `url(${backgroundImage})`
    },
    nav_logo: {
        margin: "auto",
        width: 216,
        height: 216,
    },
});

export default withStyles(component_styles)(PageHeader);
