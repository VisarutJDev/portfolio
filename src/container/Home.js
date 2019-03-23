import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Card,
} from "@material-ui/core";
import { PageHeader, AboutMe } from 'components'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experience_year: new Date(2017, 6, 1),
            now: new Date(),
            birthday: new Date(1995, 4, 19),
        }
    }

    componentDidMount() {
        const { experience_year, now, birthday } = this.state
        var startMonth = experience_year.getFullYear() * 12 + experience_year.getMonth();
        var endMonth = now.getFullYear() * 12 + now.getMonth();
        var monthInterval = (endMonth - startMonth);
        var yearsOfExperience = Math.floor(monthInterval / 12);
        var monthsOfExperience = monthInterval % 12;

        var ageDifMs = now - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch

        this.setState({
            year: yearsOfExperience,
            month: monthsOfExperience,
            age: Math.abs(ageDate.getUTCFullYear() - 1970),
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
                    <AboutMe
                        year={this.state.year}
                        month={this.state.month}
                        age={this.state.age}
                    />
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
   
    space_bottom: {
        marginBottom: "100px",
    },

});
export default withStyles(styles_component)(Home);