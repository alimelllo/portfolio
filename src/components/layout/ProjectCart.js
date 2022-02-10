import Modal from './Modal';
import react from '../img/react.png';
import classes from './ProjectCart.module.css';
import ProjectCartList from './ProjectCartList';
import Icon from './Icon';
import git from '../img/git.png';

let hasproject;
const ProjectCart = (props) => {
if(props.data.image){
  hasproject=true;
}else{
hasproject=false;}
  
const project_detail = props.data.detail.map((listitem) => (
 
    <ProjectCartList
      listitem={listitem}  
        />
  ));


const project_icons = props.data.logo.map((icon) => (
<Icon logo={icon}/>
));





return (
    <Modal onClose={props.onClose} >
        <div className={classes.container}>
            <div className={classes.left}>
         <h1>{props.data.name}</h1>
         <ul>
        {project_detail}
         </ul>
         <div className={classes.gitcontainer}><a href={props.data.git}> <img className={classes.git} src={git}></img></a></div>
       </div>
  <div className={classes.right}>
      <div className={classes.actions}>
          <div className={classes.image_container}>
         <img className={classes.image} src={props.data.image}></img>
       </div>


       
        

       
        
         <div className={classes.iconcontainer}>
       
        {project_icons} 

       </div>
       
        <div className={classes.closeandview}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>

       <a href={props.data.link}> <button className={classes['button--alt']}>view </button></a>
        </div>
      </div>
</div>

      </div>
    </Modal>
  );
};

export default ProjectCart;