import React from 'react'
import aboutMe from 'img/about_me.jpg'
import Content from 'components/content'
import {
    withStyles,
    Grid,
    Typography,
    Hidden,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@material-ui/core";
const AboutMe = ({ classes, year, month, age }) => {
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
                            <Hidden smDown>
                                <Typography paragraph className={classes.paragraph}>
                                    {"Hello world! My name is Visarut Junsone. I am a Full-Stack Developer, before that my position is Software Solution Developer"}
                                    {"and I'm very passionate and dedicated to my work. With "}{year}{" year and "}{month}{" month"}
                                    {" as devloper, I specializing in back-end and web development and love to understand the surronding knowledge, "}
                                    {"Enjoys to solve the problem and learning new technologies and tool if the need arises."}
                                </Typography>
                            </Hidden>
                            <Hidden mdUp>
                                <Typography paragraph className={classes.paragraph_mobile}>
                                    {"Hello world! My name is Visarut Junsone. I am a Full-Stack Developer, before that my position is Software Solution Developer"}
                                    {"and I'm very passionate and dedicated to my work. With "}{year}{" year and "}{month}{" month"}
                                    {" as devloper, I specializing in back-end and web development and love to understand the surronding knowledge, "}
                                    {"Enjoys to solve the problem and learning new technologies and tool if the need arises."}
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid item>
                            <Hidden smDown>
                                <TableBody>
                                    <Typography variant="title">
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Birthday"}
                                            </TableCell>
                                            <TableCell>
                                                {"19.04.1995"}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"Age"}
                                            </TableCell>
                                            <TableCell>
                                                {age}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"City"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bangkok, Thailand"}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"Interest"}
                                            </TableCell>
                                            <TableCell>
                                                {"Basketball, teachnologies"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Study"}
                                            </TableCell>
                                            <TableCell>
                                                {"Khon Kaen University"}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"Degree"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bachelor"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Website"}
                                            </TableCell>
                                            <TableCell>
                                                <a href="https://medium.com/@visarutjwork">{"medium.com/@visarutjwork"}</a>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"Degree"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bachelor"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Phone"}
                                            </TableCell>
                                            <TableCell>
                                                {"+66 88 247 1476"}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"Facebook"}
                                            </TableCell>
                                            <TableCell>
                                                <a href="https://www.facebook.com/plugz.junson">{"Visarut Junsone"}</a>
                                            </TableCell>
                                        </TableRow>
                                    </Typography>
                                </TableBody>
                            </Hidden>
                            <Hidden mdUp>
                                <TableBody>
                                    <Typography variant="title">
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Birthday"}
                                            </TableCell>
                                            <TableCell>
                                                {"19.04.1995"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Age"}
                                            </TableCell>
                                            <TableCell>
                                                {age}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"City"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bangkok, Thailand"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Interest"}
                                            </TableCell>
                                            <TableCell>
                                                {"Basketball, teachnologies"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Study"}
                                            </TableCell>
                                            <TableCell>
                                                {"Khon Kaen University"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Degree"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bachelor"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Website"}
                                            </TableCell>
                                            <TableCell>
                                                <a href="https://medium.com/@visarutjwork">{"medium.com/@visarutjwork"}</a>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Degree"}
                                            </TableCell>
                                            <TableCell>
                                                {"Bachelor"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Phone"}
                                            </TableCell>
                                            <TableCell>
                                                {"+66 88 247 1476"}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {"Facebook"}
                                            </TableCell>
                                            <TableCell>
                                                <a href="https://www.facebook.com/plugz.junson">{"Visarut Junsone"}</a>
                                            </TableCell>
                                        </TableRow>
                                    </Typography>
                                </TableBody>
                            </Hidden>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Download CV
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const styles_component = theme => ({
    button: {
        margin: theme.spacing.unit * 3,
        backgroundColor: theme.palette.button_color,
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
    about_me_img: {
        maxWidth: "100%",
        margin: "20px"
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
    },
    content_container: {
        padding: "8px 5% 16px 5%",
        flexGrow: "1",
        backgroundColor: theme.palette.white,
        flexDirection: "column"
    },
    space_left: {
        paddingLeft: "25px",
    },
    paragraph_mobile: {
        margin: "5px 15px 4px 15px",
        fontSize: "22px",
        textAlign: "center"
    }
});
export default withStyles(styles_component)(AboutMe);