import classes from './ProjectItem.module.css';

import { Fragment , useState } from 'react';
const ProjectItem = (props) => {
  
  

 

return (
        <div className={classes.meal} onClick={props.onClick}>
          <div className={classes.title}>
            <h3>{props.name}</h3>
          
         
          </div>
         
         
      
        

       
       
        
        </div>
      );
    };
    


export default ProjectItem;