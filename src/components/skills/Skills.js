import Card from '../layout/Card';
import SkillsItem from './SkillsItem';
import classes from './Skills.module.css';


const DUMMY_Data = [
  {
    id: 'm1',
    name: 'HTML',
    description: '',
    price: 22.99,
    detail: [ 'making declaretive and reuseable code ',
    '  important tags and elements to use as a developer',
' seo related tags to use',
' simplifyied code and components',
'more than 3 years experince in html'
]
  },
  {
    id: 'm2',
    name: 'CSS',
    description: '',
    price: 16.5,
    detail: [ 'including css preprocessors like scss , sass ',
    ' responsive design layout & fundemental',
' bootstrap & tailwind as a framework',
' more than 24 templates inculding css feauters'
]
  }, 
  {
    id: 'm10',
    name: 'Bootstrap',
    description: '',
    price: 18.99,
    detail: [ 'worked with bootstarp grid system and flex box ',
    '  implementing responsive designs',
' declaretive pieaces of code'
]
  },
  {
    id: 'm3',
    name: 'JavaScript',
    description: '',
    price: 12.99,
    detail: [ ' experienced at importand feauters of javascirpt including :',
    '  fundemental basic to advanced',
' es6 feauters in use ',
' reuseable and declaretive code ',
'functional programming ',
'asynchornus concepts and feauters',
'dom events and fetch requests',
'connecting to a backend ',
'api concepts and feauters '
]
  },
  {
    id: 'm4',
    name: 'REACT',
    description: '',
    price: 18.99,
    detail: [ ' react fundemental (hooks , jsx , state mangement)',
    '  working with functional components',
    'more than 12 react app templates',
' familiar with context and redux',
' react router and dynamic routing in use',
'readable and reusable components',
'connecting to a backend server (firebase mostly used)',
'familar with next js ',
'3rd party libraries and npm packages'
]
  },
  {
    id: 'm4.5',
    name: 'Git',
    description: '',
    price: 18.99,
    detail: [ 'important feauters of git in use',
    ' familiar with scrum and teamwork flow',
' git commands ',
' moore than 22 templates pushed to git',
]
  }, 
  {
    id: 'm9',
    name: 'Next JS',
    description: '',
    price: 18.99,
    detail: [ 
    ' familiar with basics of ssr',
'  connecting to a backend and http requests'
]
  },
 
  {
    id: 'm10',
    name: 'rest api',
    description: '',
    price: 18.99,
    detail: [ ' worked with pagination ',
    ' familiar with basic fundemental ',
' api methods to include',
'familiar with axios and postman'
]
  },
];



const Skills = (props) => {





  const skillsList = DUMMY_Data.map((meal) => (
 
    <SkillsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      onClick={ () => {
       props.onShowCart(meal)
      }}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card >
        <ul>{skillsList}</ul>
      </Card>
    </section>
  );
};

export default Skills;