import classes from './SkillsCartList.module.css';

const SkillsCartList = (props) => {
    return(
        (<li className={classes.skillslist}>
           
            {props.listitem}

 </li>)
            
    )
};

export default SkillsCartList;