
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import reuse from './../../resource/reuse.svg';
import flask from './../../resource/flask.svg';
import responsive from './../../resource/responsive.svg';
import Typography from '@material-ui/core/Typography';
import {IconLarge} from './../icon/icon';
import {Button} from '@material-ui/core';

class Philosophy extends Component{
    render(){
        return (
            <section className={this.props.classes}>
            <Grid container justify="center" alignItems="flex-end" spacing={40}>
              <Grid item xs={12}><Typography variant="h3" align="center" color="primary">Development Philosophy</Typography></Grid>
  
              <Grid item md={2} xs={12} align="center">
                <IconLarge src={reuse}/>
                <Typography variant="h6" align="center" color="secondary">REUSABLE</Typography>
                </Grid>
              <Grid item md={2} xs={12} align="center">
                <IconLarge src={responsive}/>
                <Typography variant="h6" align="center" color="secondary">EXTENDABLE</Typography>
                </Grid>
              <Grid item md={2} xs={12} align="center">
                <IconLarge src={flask}/>
                <Typography variant="h6" align="center" color="secondary">TESTABLE</Typography>
                </Grid>
            </Grid>
            
            <Grid container justify="center" spacing={40}>
              <Grid item xs={10} md={5}>
              <Typography  variant="body2" align="center" style={{fontSize:"18px"}} color="textSecondary">
                I believe code should be programmed in ways that can be easily reused with minimal effort,
                open for extension but close for modification and can be easily auto tested.
                </Typography>
              </Grid>
              <Grid item xs={12} align="center"><Button variant="outlined" color="primary" size="large" href="Samuel-Gao-Resume.pdf">VIEW RESUME</Button></Grid>
            </Grid>
          </section>
        )
    }
}

export default Philosophy;