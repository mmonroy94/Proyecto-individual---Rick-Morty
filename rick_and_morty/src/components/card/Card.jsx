import React from 'react';
import styles from './Card.module.css';
import {NavLink} from 'react-router-dom';

// COMPONENTE HIJO - SU PADRE ES CARDS

const Card =({id,name, status, species, gender, origin, image, onClose}) => {

   return (
      <div className={styles.cardContainer}>
         <div className={styles.cardImg}>
            <button onClick={() => onClose(id)}>X</button>
            <img src={image} alt='imagen'/>
            <NavLink to={`/detail/${id}`}>
               <h2>{name}</h2>
            </NavLink>
         </div>
         <div className={styles.cardDetails}>
            <p>{status}</p>
            <p>Specie: {species}</p>
         </div>
      </div>
   )
}
        
//             <p>Género: {gender}</p>
//             <p>Origen: {origin.name}</p>

export default Card;