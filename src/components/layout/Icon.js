import classes from './Icon.module.css';

const Icon = (props) => {

    return(
        <div className={classes.imageitem}>
        <img className={classes.logo} src={props.logo}></img>
        </div>
    )
}
export default Icon ;