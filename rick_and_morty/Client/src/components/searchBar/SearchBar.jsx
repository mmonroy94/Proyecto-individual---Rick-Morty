import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({onSearch}) => {
   //ESTADO LOCAL ID corresponde a lo que el usuario escribe en el input.
   const [id,setId] = React.useState('')
   //No se usa el spread operator porque no nos interesa almacenar los datos anteriormente recibidos
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.barContainer}>
         <input type='search' onChange={handleChange} placeholder='Ingresa el ID del personaje' value={id}/>
         <button onClick={() => {onSearch(id);setId('')}} className={styles.searchButton}>Agregar</button>
      </div>
   );
   // el button es el encargado de ejecutar a onSearch, y desde aca le pasamos el parametro ID que corresponde al event.target.value.
   // Para pasar el parametro, la función onSearch debe ser llamada dentro de una callback para que no se ejecute
   // además estamos limpiando el campo luego de realizar la busqueda.
}

export default SearchBar;