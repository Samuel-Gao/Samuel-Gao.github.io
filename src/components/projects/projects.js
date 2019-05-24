import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import vizlly from './../../resource/vizlly.png';
import retreat from './../../resource/retreat.png';
import caseware from './../../resource/caseware.png';
import Mi9Retail from './../../resource/Mi9Retail.png';

const styles = {
    bigAvatar:{
        width: "150px",
        height: "150px",    
        // "margin-right": "60px"
    },
    card:{
        "margin-top": "50px",
        "margin-bottom": "50px"
    },
    subtitle:{
        "font-weight":"550"
    },
    avatar:{
        width:  "31.65vh",
        height: "21vh",
        "border-radius": "20px",
        "background-color": "#EDEEEF"
    }

}

function Avatar(props){
    return (
        <img alt="" src={props.image} style={styles.avatar}/>
    )
}
class ProjectCard extends Component {

    render() {
        const {image, link, title, subtitle, description} = this.props;
        return (
            
            <Grid container justify="center" style={styles.card} spacing={40}>
                <Grid item xs={12} md="auto" align="center">
                    <a href={link}><Avatar image={image}/></a>
                </Grid>
                <Grid item lg={4} md={4} sm={8} xs={11}>
                    <div>
                        <Typography variant="h5" color="secondary">{title}</Typography>
                        <Typography variant="subtitle1" gutterBottom={true} color="primary" style={styles.subtitle}>{subtitle}</Typography>
                        <Typography variant="body1" paragraph={true} color="textPrimary">
                        {description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
    }

}

class Projects extends Component {
    render(){
        const {classes} = this.props;
        const mi9RetailDescription = `
            Mi9 is a provider of enterprise software for retailers, wholesalers, and brands. 
            Very proud to be given the opportunity to work on merchandise management solutions ranked as #1 Vendor Overall on 2019 RIS Software Leaderboard, 
            featuring smart replishment, trade promotions, inventory daybook, and built-in allocation engine.
        `;

        const retreatDescription = `
            Retreat is a team full of passionate and brilliant folks, a startup power by the Cossette Lab, the same incubator that supported SnapTravel.
            I helped reworked 70% of the system related to UI/UX implementation and the backend processing. 
            Within 3 months, Retreat was ready to be launched.
        `;

        const casewareDescription = `
            At the time of joining, the Caseware performance team was mature and developed. The team had more than 5000 unit tests developed. 
            However, triggering a test suit was complex and required professional knowledge. 
            I helped build an internal admin dashboard that allows non-technical users to trigger any test suit and view result immediately.    
        `;

        const vizllyDescription = `
            I was very lucky to join the Vizlly team at the initial stage of development. I participated in every design,
            development and user migration process. Having the chance to work with enterprise level database has allowed me to gain an 
            exceptional understanding of relational database design.   
        `;
        return (
            <section className={classes}>
                <Typography variant="h3" align="center" color="primary">My Timeline</Typography>
                <ProjectCard image={Mi9Retail} link="https://mi9retail.com/" title="MI9 Retail" subtitle="Software Engineer" description ={mi9RetailDescription}/>
                <ProjectCard image={retreat} link="https://getretreat.co/" title="Retreat" subtitle="Full Stack Developer" description ={retreatDescription}/>
                <ProjectCard image={caseware} title="Caseware" link="https://www.caseware.com/ca" subtitle="Software Developer" description ={casewareDescription} />
                <ProjectCard image={vizlly} link="https://apps.vizlly.com/dms-angular/#/login" title="Vizlly" subtitle="Software Engineer in Test" description ={vizllyDescription} />
            </section>
        )
    }
}



export default Projects;