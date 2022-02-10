

import classes from './SkillsItem.module.css';


const SkillsItem = (props) => {
  
  



 
  

  return (
    <li className={classes.meal} onClick={props.onClick}  >
      <div>
        <h3>{props.name}</h3>
      
      </div>
    </li>
  );
};

export default SkillsItem;