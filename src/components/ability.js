import React from 'react'
import {
    withStyles,
    Grid,
    Typography,
} from "@material-ui/core";
import gopher from 'img/gopher.gif'

const Ability = ({ classes }) => {
    return (
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
                    <span className={classes.space_left}>{"My Ability"}</span>
                </Typography>
            </Grid>
            <Grid
                spacing={8}
                container
                alignItems="flex-start"
                direction="row"
                justify="center"
                className={classes.content_header}
            >
                <Grid item xs={false} md={5}>
                    <Typography paragraph className={classes.paragraph}>
                        {"Frist 6 month, start to work with C# to create dll that connect with PHP API. "}
                        {"In the present work mainly using Golang in back-end development."}
                        {"Use angularjs in front-end development. This cause me to have HTML5 and javsrcript skill."}
                        {"And also use Reactjs in front-end development in freelance job. "}
                        {"I use react-redux to use redux store and connected component with the pieces of the data it needs from the store. "}
                        {"Not just the programming language that I know. I also have English skill to communicate with foreigner co-worker."}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography paragraph className={classes.paragraph}>
                        <span className={classes.text_lead}>Programming</span><br/>
                        <span className={classes.text_follow}>GoLang, C#, PHP, JAVA, Javascript, mySQL</span><br/>
                        <span className={classes.text_lead}>Web</span><br/>
                        <span className={classes.text_follow}>Reactjs, HTML5</span><br/>
                        <span className={classes.text_lead}>language</span><br/>
                        <span className={classes.text_follow}>English. (TOEIC 690. Since April 8, 2017)</span><br/>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <img src={gopher} alt="" className={classes.gopher_img}></img>
                </Grid>
            </Grid>
        </Grid>
    );
}

const styles_component = theme => ({
    content_container: {
        padding: "90px 5% 16px 5%",
        // padding: "8px 5% 16px 5%",
        flexGrow: "1",
        backgroundColor: theme.palette.white_blue,
        flexDirection: "column"
    },
    space_left: {
        paddingLeft: "25px",
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
    paragraph: {
        margin: "5px 15px 4px 15px",
        fontSize: "22px",
        textAlign: "center"
    },
    text_lead: {
        fontWeight: '800',
        margin: "0 15px 0 15px",
    },
    text_follow: {
        margin: "0 15px 0 15px",
    },
    gopher_img: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
    },
});
export default withStyles(styles_component)(Ability);