import { Link } from 'react-router-dom';
import React from 'react';
import { Fragment } from 'react';
import classes from './Header.module.css';
import git from '../img/git.png';

function Header (){
    return (
<Fragment>
    


<div className={classes.headerBody}>
    
    
    <div className={classes.home} >
          <Link to="/home" className={classes.home}>Home</Link>
          </div>
    
    
    <div className={classes.navBody}>
        
    
<div className={classes.linkContainer}>
    <Link className={classes.links} to="/aboutme">
About me
    </Link>
</div>
<div className={classes.linkContainer}>
    <Link to="/skills" className={classes.links} >
Skills
    </Link>
</div>
<div className={classes.linkContainer}>
    <Link className={classes.links} to="/projects">
Projects 
    </Link>
</div>
</div>


<div className={classes.gitcontainer}> 
<a href='https://github.com/alimelllo'>
<img className={classes.git } href="https://github.com/alimelllo" src={git}></img>
</a>
</div>
</div>
</Fragment>

    )
}
export default Header;