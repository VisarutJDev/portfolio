import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Card,
    Typography,
} from "@material-ui/core";
import { PageHeader } from 'components'
import aboutMe from 'img/about_me.jpg'
import Content from 'components/content'

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
                    <PageHeader
                        title="Visarut Junsone"
                    />
                    <div className={classes.space_bottom} />
                    <Grid item className={classes.content_container}>
                        <Grid
                            spacing={0}
                            container
                            alignItems="center"
                            direction="row"
                            justify="space-between"
                            className={classes.content_header}
                        >
                            <Typography variant="headline" className={classes.content_header_label}>
                                <span className={classes.space_left}>{"About Me"}</span>
                            </Typography>
                        </Grid>
                        <Grid
                            spacing={24}
                            container
                            alignItems="flex-start"
                            direction="row"
                            justify="flex-start"
                            className={classes.content_header}
                        >
                            <Grid item>
                                <img src={aboutMe} alt="" className={classes.about_me_img}></img>
                            </Grid>
                            <Grid item>
                                <Typography variant="headline" className={classes.content_about_me}>
                                    <div className="typewriter">
                                        <Content
                                            prefix={"I'm Visarut Junsone and "}
                                            strings={[
                                                'Software Solution Developer',
                                                'Full-Stack Developer',
                                                'Lazy-Dev'
                                            ]}
                                        />
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            spacing={0}
                            container
                            alignItems="center"
                            direction="row"
                            justify="space-between"
                            className={classes.content_subheader}
                        >

                        </Grid>
                    </Grid>
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
    about_me_img: {
        width: 363,
        height: 422,
        margin: "20px"
    },
    space_bottom: {
        marginBottom: "100px",
    },
    space_left: {
        paddingLeft: "25px",
    },
    content_container: {
        padding: "8px 5% 16px 5%",
        flexGrow: "1",
        backgroundColor: theme.palette.white,
        flexDirection: "column"
    },
    content_header: {
        margin: "0px",
    },
    content_header_label: {
        fontWeight: '800',
        height: "48px",
        margin: "12px 0 4px 0",
        color: theme.palette.jet_black,
        borderLeft: "6px solid",
    },
    content_subheader: {
        margin: "0px",
        backgroundColor: theme.palette.white_blue,
    },
    content_about_me: {
        fontWeight: '800',
        height: "48px",
        margin: "12px 0 4px 0",
        color: theme.palette.jet_black,
    }
});
export default withStyles(styles_component)(Home);