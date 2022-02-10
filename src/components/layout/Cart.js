import Modal from './Modal';
import {react,useState }from 'react';
import classes from './Cart.module.css';
import SkillsCartList from './SkillsCartList';
let hasproject;

const Cart = (props) => {

  if(props.data.image){
  hasproject=true;
}else{
hasproject=false;}
 
const skills_detail = props.data.detail.map((listitem) => (
 
  <SkillsCartList
    listitem={listitem}  
      />));

return (
    <Modal onClose={props.onClose}>
         <h1 className={classes.name} >{props.data.name}</h1>
         <div className={classes.logo}></div>
      <div className={classes.total}>
       <ul>
{skills_detail}
       </ul>

      </div>
     
      <div className={classes.actions}><img className={classes.image} src={props.data.image}></img>
       
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
       
      </div>
    </Modal>
  );
};

export default Cart;