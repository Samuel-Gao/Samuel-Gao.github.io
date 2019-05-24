import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class AboutMe extends Component {
    render() {
        return (
            <section className={this.props.classes}>
                <Grid container direction="column" alignItems="center" justify="space-evenly" spacing={40}>
                    <Grid item><Typography variant="h3" align="center" color="primary">Consulting Services</Typography></Grid>
                    <Grid item xs={10} md={5}><Typography variant="body2" align="center" style={{fontSize:"18px"}} color="textSecondary">
                        I am a software development consultant focusing on accepting proposals for web application projects. Email me to get started.
                        </Typography></Grid>
                    <Grid item><Button variant="outlined" color="primary" size="large" href="mailto:samuel.yongxin@gmail.com">Hire Me</Button></Grid>
                </Grid>
            </section>
        )
    }
}

export default AboutMe;
