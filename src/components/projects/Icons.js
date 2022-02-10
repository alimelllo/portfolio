import classes from './Icons.module.css';

const Icons = (props) => {

    return(
        <div className={classes.imageitem}>
        <img className={classes.logo} src={props.icon}></img>
        </div>
    )
}
export default Icons ;