import React from 'react';
import styles from './Card.module.css';
import {NavLink} from 'react-router-dom';

// COMPONENTE HIJO - SU PADRE ES CARDS

const Card =({id,name, status, species, gender, origin, image, onClose}) => {
   return (
      <div className={styles.cardDiv}>
         <button onClick={() => onClose(id)} className={styles.cardButton}>X</button>
         <NavLink to={`/detail/${id}`}>
            <h2 className={styles.cardName}>{name}</h2>
         </NavLink>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin.name}</h2>
            <img src={image} alt='imagen'/>
      </div>
   )
}

export default Card;