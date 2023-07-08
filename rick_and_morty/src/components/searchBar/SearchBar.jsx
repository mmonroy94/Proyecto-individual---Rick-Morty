import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({onSearch}) => {
   //ESTADO LOCAL ID que va a recibir como STRING lo que input reciba
   const [id,setId] = React.useState('')
   //No se usa el spread operator porque no nos interesa almacenar los datos anteriormente recibidos
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.barContainer}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id);setId('')}} className={styles.searchButton}>Agregar</button>
      </div>
   );
   // onSearch recibe el parametro ID y debe estar dentro de un callback para que no se ejecute y pueda recibir el paramero, además estamos limpiando el campo input luego de que devuelva la card del id correspondiente.
}

export default SearchBar;