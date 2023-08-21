import React from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import ErrorAlert from './components/errorAlert/ErrorAlert.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx'
import { useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';

const App = () => {
//HOOK UseState que contiene un arreglo de characters que va a contener objetos que representarán un character individualmente
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   let email = 'henry@gmail.com'
   let password = 'abc123' 

   const navigate = useNavigate()

// FUNCIÓN onSearch --> El id lo esta recibiendo desde el comp SearchBar, con el evento onClick del button. 
// axios permite hacer peticiones a una api o servidor, se le pasa la url y se le concatena el id que recibimos por parametro para poder obtener info especifica de lo que esta solicitando el usuario. 
// .then recibe la respuesta de la api. axios retorna un objeto muy grande y dentro de la prop data se encuentra la respuesta de la api.
const onSearch = (id) => {
   if (characters.some(character => character.id === Number(id))) {
      window.alert(`El personaje con ID ${id} ya existe`);
      return; 
   }
   if (Number(id)>826 || Number(id)<1) {
      window.alert('El ID ingresado no existe. Porfavor ingresa un número entre 1 y 826.');
      return; 
   }

   //De esta manera conectamos al FRONT y el BACK. La petición se hace directamente a nuestro servidor. Por esto no es necesario una API KEY.
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(response => response.data)
   .then((data) => {
     if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
   });
}
//Función onClose de dá funcionalidad al botón de cierre de cada card
// Con filter generamos un nuevo array apartir de la lectura del array existente y exluimos el character que tenga el mismo id recibido por parametro.
// 
const onClose = (id) => {
      const charactersFiltered = characters.filter (character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

//Simulación de login 
   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate ('/home');
      }
   }

   // De esta manera me va a mantener en la ruta del formulario y solo podre acceder si se completa el login
   // Cuando el access este en false de ejecuta el && y solo me llevará a '/', si esta en true no se ejecuta el && y procede a navegar al /home
   React.useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();
   return (
      <div className='App'>
         {
         location.pathname !== '/' ? <Nav onSearch={onSearch}/> : null
         }
   
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<ErrorAlert />}/>
         </Routes>
      </div>
   );
}


export default App;
