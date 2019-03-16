import React, { Component } from 'react';
import { withStyles, AppBar, Toolbar, Avatar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { isMdScreen } from "../utils/dimension";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer_open: isMdScreen(window.innerWidth),
        }
    }

    onDrawerToggle = () => {
        this.setState({ drawer_open: !this.state.drawer_open });
    };

    componentDidMount() {

    }

    render() {
        const { drawer_open } = this.state
        const { children, classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.app_bar}>
                    <Toolbar>
                        <div className={classes.hamburger_box}>
                            <MenuIcon classes={{ root: classes.hamburger_button }} onClick={this.onDrawerToggle} />
                        </div>
                        <Avatar
                            // src={navLogo}
                            className={classNames(classes.nav_logo)}
                        />
                        <Typography
                            variant="title"
                            color="inherit"
                            noWrap
                            className={classes.nav_header}
                        >
                            VJ Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classNames(classes.content, classes.content_left, {
                    [classes.content_shift]: drawer_open,
                    [classes.content_shift_left]: drawer_open
                })}>
                    {children}
                </main>
            </div>
        );
    }

}

const styles_component = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        display: "flex",
        width: "100%"
    },
    nav_logo: {
        margin: "0 8px 0 24px",
    },
    app_bar: {
        backgroundColor: theme.palette.white,
        color: theme.palette.jet_black,
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        }
    },
    nav_header: {
        flex: 1,
        fontWeight: "800",
        fontSize: "36px",
        marginTop: "-4px"
    },
    hamburger_box: {
        boxSizing: "content-box",
        border: "1px solid " + theme.palette.gainsboro,
        borderRadius: "6px",
        '&:active': {
            backgroundColor: theme.palette.jet_black,
        },
    },
    hamburger_button: {
        padding: "0px 4px 0px 4px",
        display: "flex",
        color: theme.palette.jet_black,
        '&:active': {
            color: theme.palette.white,
        },
    },
    content_left: {
        [theme.breakpoints.up("md")]: {
            marginLeft: 0
        }
    },
    content_shift: {
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    },
    content_shift_left: {
        [theme.breakpoints.up("md")]: {
            marginLeft: 0
        }
    },
});
export default withRouter(withStyles(styles_component)(Navigation));