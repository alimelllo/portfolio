import classes from './Project.module.css';
import Card from '../layout/Card';
import ProjectItem from './ProjectItem';
import rest_image from '../img/rest.jpeg';
import react from '../img/react.png';
import js from '../img/js.png';
import html from'../img/html.png';
import css from '../img/css.png';
import bootstrap from '../img/bootstrap.png';
import library from '../img/library.jpeg';
import buttons from '../img/buttons.jpeg';
import crypto from '../img/crypto.jpeg';
import bank from '../img/bank.jpeg';


const DUMMY_projects_Data = [
    {
      id: 'm1',
      name: 'Books store',
      description: 'built with react',
      price: 22.99,
      image:library,
      logo:[html,css,react],
      git:'https://github.com/alimelllo/books-store',
      detail: [ ' built with react & javascirot',
        '  using create react app',
    'including add to cart items to buy ',
  ' fully responsive layout',
  'declaretive and reusable code'
    ],link:"https://books-store-5ca0f.web.app/"
    },
    {
      id: 'm2',
      name: 'game',
      description: 'Tap game',
      price: 16.5,
      image:buttons,
      logo:[js,css,html],
      git:'https://github.com/alimelllo/remember-game-',
      detail: [ ' built with vanilla javascirot',
      '  simple tap game using css styles',
' fully responsive layout',
'declaretive and reusable code'
  ],link:"https://alisgame.netlify.app"
    },
    {
      id: 'm3',
      name: 'Crypto Currency',
      description: 'shop decription',
      price: 12.99,
      image:crypto,
      logo:[css,html,bootstrap],
      git:'https://github.com/alimelllo/sarafi-template',
      detail: [ ' built with bootstrap & html',
      '  simple crypto web template',
  ' realworld project',
' fully responsive layout',
'declaretive and reusable code'
  ],link:"https://epic-minsky-947f9c.netlify.app"
    },
    {
      id: 'm4',
      name: 'Shop Template',
      description: 'rrrr',
      price: 18.99,
      image:rest_image,
      logo:[bootstrap,css,html],
      git:'https://github.com/alimelllo/shop-template',
      detail: [ ' built with bootstrap & html',
      '  including neomorphic design',
' fully responsive layout',
'declaretive and reusable code'
  ],link:""
    },
    {
      id: 'm5',
      name: 'Bank Template',
      description: 'rrrr',
      price: 18.99,
      image:bank,
      logo:[js,css,html],
      git:'https://github.com/alimelllo',
      detail: [ ' built with css & javascript',
      '  including advanced dom events',
' no responsive layout',
'declaretive and reusable code'
  ],link:"https://quirky-sinoussi-6fcbfb.netlify.app"
    },
]

  
  const Project = (props) => {
  
  
  
  
  
    const projectsList = DUMMY_projects_Data.map((meal) => (
   
      <ProjectItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        image={meal.image}
        onClick={ () => {
         props.onShowCart(meal)
        }}
    logoarr={meal.logo}
       
      />
    ));
  



    return (
      <section className={classes.meals}>
        
          {projectsList}
        
      </section>
    );
  };
  
  export default Project;