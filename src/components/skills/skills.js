import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class Skills extends Component {
    render() {
        return (
            <section className={this.props.classes}>
                <Grid container justify="center" spacing={40}>
                    <Grid item xs={12}><Typography variant="h3" align="center" color="primary">Toolbox</Typography></Grid>
                    <Grid item xs="auto" sm={5} md={2}><Typography variant="h5" color="secondary" >Professional</Typography></Grid>
                    <Grid item xs ="auto" sm={5} md={3}><Typography variant="subtitle1" color="default" >
                        <ul>
                            <li>React / Vue.js </li>
                            <li>State Management (Redux) </li>
                            <li>Backend (Node.js) </li>
                            <li>HTML5 / CSS3 </li>
                            <li>Javascript (ES6) </li>
                            <li>SQL (MySQL) / NoSQL (MongoDB) </li>
                            <li>Material UI / Bootstrap / Foundation </li>
                            <li>Firebase </li>
                            <li>Version Control (Git) </li>
                            <li>Model-View-Controller </li>
                            <li>Agile Methodology </li>
                        </ul>

                    </Typography></Grid>
                    <Grid item xs="auto" sm={5} md={2}><Typography variant="h5" color="secondary" >Experienced</Typography></Grid>
                    <Grid item xs="auto" sm={5} md={3}><Typography variant="subtitle1" color="default" >
                        <ul>
                            <li>Java / Python / C </li> 
                            <li>Webpack / Maven / Gradle / Jennkins </li>
                            <li>JUnit / PyUnit / Selenium </li>
                            <li>AWS / Google Cloud </li>
                            <li>Microservices</li>
                        </ul>
                    </Typography></Grid>
                </Grid>
            </section>
        );
    }
}

export default Skills;