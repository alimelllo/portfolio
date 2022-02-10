import { Route ,  Redirect , Switch} from 'react-router-dom';
import React, { Fragment , useState } from 'react';
import Header from './components/layout/Header';
import Summary from './components/home/Summary';
import Skills from './components/skills/Skills';
import Firstview from './components/home/Fisrtview';
import Cart from './components/layout/Cart';
import './App.css';
import Project from './components/projects/Project.js';
import ProjectCart from './components/layout/ProjectCart';
import AboutMe from './components/about me/AboutMe';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [projectcartisShown , setprojectCart] = useState(false);


  const skillsCartHandler = (item) =>{
setCartIsShown(item);
  }
 
  const projectCartHandler = (item) =>{
    setprojectCart (item);
      }
     
  const HideCartHandler = () => {
setCartIsShown(false);
setprojectCart(false);
  }

  return (
    <div className='App'>
    
      <Header />
      {cartIsShown && <Cart data={cartIsShown} onClose={HideCartHandler} />}
      {projectcartisShown && <ProjectCart data={projectcartisShown} onClose={HideCartHandler} />}
      <main>
      <Switch>
        
      <Route path='/skills'>
      <Skills onShowCart={skillsCartHandler} />
          
          </Route>

          <Route path='/projects'>
      <Project onShowCart={projectCartHandler} />
          
          </Route>

          <Route path='/aboutme'>
      <AboutMe />
          
          </Route>
         <Route path='/' >
        <Redirect to="/home"/> 
      
      <Summary/> 
      <Firstview />
      
       </Route>
  </Switch>

          
          </main>
    </div>
  );
}

export default App;
