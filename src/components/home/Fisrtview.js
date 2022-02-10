import { Fragment } from 'react';
import clock from '../img/clock-icon.jpeg';
import classes from './Firstview.module.css';
import chart from '../img/chart.jpeg';
import rocket from '../img/rocket.jpeg';

function Firstview(){
return (
<Fragment>
<div className={classes.container}>
    <div className={classes.item}>
    <img src={clock} className={classes.img}></img>
    <h2 className={classes.imgdescribtion}> <span>Daily Learning & working</span></h2>
    </div>


    <div className={classes.item}>
    <img src={chart} className={classes.img}></img>
    <h2 className={classes.imgdescribtion}><span> Through Quiz & Teamwork</span></h2>
    </div>


    <div className={classes.item}>
    <img src={rocket} className={classes.img}></img>
    <h2 className={classes.imgdescribtion}> <span>High Approch </span></h2>
    </div>
</div>
</Fragment>
)

}
export default Firstview;