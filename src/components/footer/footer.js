
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const  styles = {
    footer:{
        height: "80px",
        "background-color": "#3F51B5",
        color: "white"
    }
}


class Footer extends Component {
    render() {
        return (
            <div style={styles.footer}>
                <Grid container direction="column" justify="center" style={{ height: "100%" }}>
                    <Grid><Typography color="inherit" variant="h5" align="center">Let's get in touch</Typography></Grid>
                </Grid>
            </div>
        )
    }
}

export default Footer;