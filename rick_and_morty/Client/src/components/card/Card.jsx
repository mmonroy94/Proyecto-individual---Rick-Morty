import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import styles from './Card.module.css';

// COMPONENTE PRESENTACIONAL - HIJO DEL COMP. FUNCIONAL CARDS

const Card = ({id, name, gender, image, onClose, addFav, removeFav, myFavorites}) => {
// el removeFav y addFav que recibimos por props corresponde a las props retornadas por la función mapDispatchToProps. 
   const [isFav,setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, gender, image, onClose});
         // la info se le pasan como propiedades individuales que hacen parte de un objeto, a addFav porque las props fueron recibidas por el comp. haciendo destructuring
      }
   }

   return (
      <div className={styles.cardContainer}>
         <button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
         <img src={image} alt='imagen'/>
         <NavLink to={`/detail/${id}`}>
            <h3>{name}</h3>
         </NavLink>
         <div className={styles.cardDetails}>
            <div className={styles.infoDetails}>
               <p className={styles.idDetail}>ID : {id}</p>
               <p className={styles.genderDetail}>Gender : {gender}</p>
            </div>
            <button onClick={handleFavorite} className={styles.favButton}>{isFav ? '❤️' : '🤍'}</button>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return{
      myFavorites : state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav : (character) => {dispatch(addFav(character))},
      // Las props se pueden pasar desde este momento como un objeto character y van a contener lo que inicialmente se pasó en el handleFavorite.
      removeFav : (id) => {dispatch(removeFav(id))}
   }
}
// Y el removeFav y addFav ejecutado en las funciones de cada prop del mapDispatchToProps vienen de la importación del archivo actions.js.
// El id se pasa en una especie de cadena que comienza desde el handdleFaavorite, pasa a la prop de mapDispatchToProps para luego ser entregada a la función contenida por en el dispatch y luego recibida por la action.
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);