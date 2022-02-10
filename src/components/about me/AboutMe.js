import classes from './AboutMe.module.css';
import image from '../img/memoji.jpeg';
import { Fragment } from 'react';
import codeicon from '../img/codeicon.png';
import uxicon from '../img/uxicon.png';
import vscode from '../img/vscode.png';


const AboutMe = () =>{
    return(<Fragment>
        <div className={classes.maincontainer}>
<div className={classes.left}>
<div className={classes.piccontainer}>
    <img className={classes.image} src={image}></img>
</div>
<h2>ali melllo </h2>
<h2>Junior Front End Developer</h2>
</div>


<div className={classes.right}>
<div className={classes.row}>
    <div className={classes.rowitem}><h3>Location</h3> <p>Tehran -- iran</p></div>
   <div className={classes.rowitem}><h3>Subject</h3> <p>React Development</p> </div>
   <div className={classes.rowitem}><h3>Experience</h3> <p>Mid Level</p></div>
</div>
<div className={classes.row}>
    <div className={classes.rowitem}><h3>Langueges</h3> <p>English ( Advanced )</p> </div>
   <div className={classes.rowitem}><h3>Courses</h3> <p>Udemy - W3 - Crousera</p> </div>
   <div className={classes.rowitem}><h3>Degree</h3> <p>Computer Assosiate</p></div>
</div>

<div className={classes.row}>
    <div className={classes.rowitem}><h3>Email</h3> <p>ali.melllo@yahoo.com</p> </div>
   <div className={classes.rowitem}> <h3>Phone </h3> <p>0904 632 9661</p></div>
   <div className={classes.rowitem}><h3>Whats App</h3> <p>0933 446 3731</p></div>
</div>
</div>
        </div>

<div className={classes.footer}>

<div className={classes.footeritem}><img className={classes.footerimage} src={codeicon}></img><h4> + 32 Temlates</h4><h2>UI/UX </h2></div>
<div className={classes.footeritem}><img className={classes.footerimage} src={uxicon}></img> <h4> +3 years Experience</h4><h2>Projects</h2></div>
<div className={classes.footeritem}><img className={classes.footerimage} src={vscode}></img><h4> + 2 Partnership</h4><h2> Development</h2></div>

</div>

</Fragment>

    );
};
export default AboutMe;