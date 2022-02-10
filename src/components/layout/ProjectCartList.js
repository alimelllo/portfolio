import classes from './ProjectCartList.module.css';

const ProjectCartList = (props) =>{
    return(<li className={classes.list}>
{props.listitem}
    </li>)
}

export default ProjectCartList;