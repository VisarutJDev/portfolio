import React, { Component } from 'react'
import Typed from 'typed.js';
import { withStyles } from "@material-ui/core";

class Content extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        const { classes, prefix } = this.props
        return (
            <div className="wrap">
                <div className={classes.type_wraped}>
                    {prefix}<span
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                </div>
            </div>
        );
    }
}

const component_styles = theme => ({
    type_wraped: {
        paddingLeft: "15px",
        paddingRight: "15px",
    }
});

export default withStyles(component_styles)(Content);