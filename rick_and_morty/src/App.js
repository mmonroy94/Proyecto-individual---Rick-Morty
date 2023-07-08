import React from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import ErrorAlert from './components/errorAlert/ErrorAlert.jsx';
import Form from './components/form/Form.jsx';
import {Routes,Route} from 'react-router-dom';
import './App.css';

const App = () => {
//HOOK UseState que contiene un arreglo de characters que va a contener objetos que representarán un character individualmente
   const [characters, setCharacters] = React.useState([])

//Función OnSearch permitirá agregar nuevos personajes al local state characters, se la pasamos como PROPS al comp. NAV
function onSearch(id) {
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

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
   
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<ErrorAlert />}/>
         </Routes>
      </div>
   );
}


export default App;
