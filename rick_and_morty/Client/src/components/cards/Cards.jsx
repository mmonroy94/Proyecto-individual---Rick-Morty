import Card from '../card/Card';
import style from './Cards.module.css';

// COMPONENTE PADRE - SU COMPONENTE HIJO ES CARD

const Cards = ({characters, onClose}) => {
   return(
      <div className={style.divCards}>
         {
            characters.map(({id,name, status, species, gender, origin, image}) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose}
                  />
               )
               }
         )
         }
      </div>
   ) 
   }

   export default Cards;