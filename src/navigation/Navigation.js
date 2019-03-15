import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileToggle: false,
            mobileView: true,
        }
    }

    updateDimension = () => {
        if (window.innerWidth > 500) {
            this.setState({ mobileView: false });
        } else {
            this.setState({ mobileView: true });
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            mobileToggle: !prevState.mobileToggle
        }));
    }

    componentDidMount() {
        this.updateDimension();
        window.addEventListener("resize", this.updateDimensions)
    }

    render() {
        const { children } = this.props
        return (
            <div>Hi nav bar
                <main>
                    {children}
                </main>
            </div>
        );
    }

}

export default Navigation;