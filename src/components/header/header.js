import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Icons
import { IconSmall } from './../icon/icon';
import GmailIcon from './../../resource/gmail.svg';
import LinkedInIcon from './../../resource/linkedin.png';
import GithubIcon from './../../resource/github.png';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
  intro:{
    height: "400px",
    "background-color": "#3F51B5"
  }
  
}
class HeaderLeft extends Component {
  render() {
    return (
      <Grid container alignItems="center" spacing={8}>
        <Grid item><MenuIcon /></Grid>
        <Grid item><Button color="inherit">About Me</Button> </Grid>
        {/* <Grid item><Button color="inherit" href="Samuel-Gao-Resume.pdf">Resume</Button> </Grid> */}
        <Grid item><Tooltip title="Comming Soon"><Button color="inherit">Blog</Button></Tooltip></Grid>
      </Grid>
    )
  }
}

class HeaderRight extends Component {
  render() {
    return (
      <Grid container spacing={0}>
        <Grid item><IconButton href="mailto:samuel.yongxin@gmail.com"><IconSmall src={GmailIcon}/></IconButton></Grid>
        <Grid item><IconButton href="https://www.linkedin.com/in/samuel-gao/"><IconSmall src={LinkedInIcon} /></IconButton></Grid>
        <Grid item><IconButton href="https://github.com/Samuel-Gao"><IconSmall src={GithubIcon} /></IconButton></Grid>
      </Grid>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container justify="space-between">
              <Grid item><HeaderLeft /></Grid>
              <Grid item><HeaderRight /></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div style={styles.intro}>
          <Grid container direction="column" justify="center" style={{ height: "100%" }}>
            <Grid item>
              <Typography variant="h3" gutterBottom={true} style={{ color: "#FFFFFF", fontWeight: "700", lineHeight:"150%" }} align="center">LET'S BUILD SOMETHING COOL!</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Header;
