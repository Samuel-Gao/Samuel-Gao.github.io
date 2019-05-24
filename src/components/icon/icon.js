import React, { Component } from 'react';

class IconLarge extends Component {
    render() {
        const { src } = this.props;
        return (
            <img src={src} alt="" width="75px" height="75px"></img>
        )
    }
}

class IconSmall extends Component{
    render() {
        const { src } = this.props;
        return (
            <img src={src} alt="" width="32px" height="32px"></img>
        )
    }
}

export {IconLarge, IconSmall};