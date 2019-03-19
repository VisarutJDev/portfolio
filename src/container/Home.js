import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Card,
    Typography,
    Hidden,
} from "@material-ui/core";
import { PageHeader } from 'components'
import aboutMe from 'img/about_me.jpg'
import Content from 'components/content'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experience_year: new Date(2017, 6, 1),
            now: new Date(),
        }
    }

    componentDidMount() {
        const { experience_year, now } = this.state
        var startMonth = experience_year.getFullYear() * 12 + experience_year.getMonth();
        var endMonth = now.getFullYear() * 12 + now.getMonth();
        var monthInterval = (endMonth - startMonth);
        var yearsOfExperience = Math.floor(monthInterval / 12);
        var monthsOfExperience = monthInterval % 12;
        this.setState({
            year: yearsOfExperience,
            month: monthsOfExperience
        })
    }

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
                            spacing={0}
                            container
                            alignItems="flex-start"
                            direction="row"
                            justify="space-between"
                            className={classes.content_header}
                        >
                            <Grid item xs={false} md={4}>
                                <Hidden smDown>
                                    <img src={aboutMe} alt="" className={classes.about_me_img}></img>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Grid
                                    spacing={16}
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item>
                                        <Typography variant="headline" className={classes.content_about_me}>
                                            <div className="typewriter">
                                                <Content
                                                    prefix={"I'm Visarut Junsone and "}
                                                    strings={[
                                                        'Software Developer',
                                                        'Full-Stack Developer',
                                                        'Lazy-Dev'
                                                    ]}
                                                />
                                            </div>
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph className={classes.paragraph}>
                                            {"Hello world! My name is Visarut Junsone. I am a Full-Stack Developer, before that my position is Software Solution Developer"}
                                            {"and I'm very passionate and dedicated to my work. With "}{this.state.year}{" year and "}{this.state.month}{" month"}
                                            {" as devloper, I specializing in back-end and web development and love to understand the surronding knowledge, "}
                                            {"Enjoys to solve the problem and learning new technologies and tool if the need arises."}
                                        </Typography>
                                    </Grid>
                                </Grid>
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
        // height: "100vh",
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
        maxWidth: "100%",
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
        lineHeight: "30px"
    },
    paragraph: {
        margin: "5px 15px 4px 15px",
        fontSize: "22px",
    }
});
export default withStyles(styles_component)(Home);