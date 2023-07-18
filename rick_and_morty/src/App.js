import React from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import ErrorAlert from './components/errorAlert/ErrorAlert.jsx';
import Form from './components/form/Form.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';

const App = () => {
//HOOK UseState que contiene un arreglo de characters que va a contener objetos que representarán un character individualmente
   const [characters, setCharacters] = React.useState([])

   const [access, setAccess] = React.useState(false)
   let email = 'henry@gmail.com'
   let password = 'abcd1234' 

   const navigate = useNavigate()
//Función OnSearch permitirá agregar nuevos personajes al local state characters, se la pasamos como PROPS al comp. NAV
const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(response => response.data)
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
//Función onClose de dá funcionalidad al botón de cierre de cada card
   const onClose = (id) => {
      const charactersFiltered = characters.filter (character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

//Simulación de login
   const login = (userData) => {
      if(email === userData.email && password === userData.password){
         setAccess(true);
         navigate ('/home');
      }
   }

   React.useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();

   return (
      <div className='App'>
         {
         location.pathname !== '/'
         ? <Nav onSearch={onSearch}/>
         : null
         }
   
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<ErrorAlert />}/>
         </Routes>
      </div>
   );
}


export default App;
