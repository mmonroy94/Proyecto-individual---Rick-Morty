import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import styles from './Detail.module.css';

const Detail = () => {
    const {id} = useParams();

    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div className={styles.detailsContainer}>
            <p>CHARACTER'S DETAILS</p>
                <div className={styles.characterImage}>
                    <img src={character.image} alt={character.name}/>
                    <h2>{character.name}</h2>
                </div>
                
                <div className={styles.characterInfo}>
            
                    <h3>Specie:</h3>
                    <p>{character.species}</p>
                    <h3>Gender:</h3>
                    <p>{character.gender}</p>
                    <h3>Status:</h3>
                    <p>{character.status}</p>
                    <h3>Origin:</h3>
                    <p>{character.origin && character.origin.name}</p> 
                    <h3>Location:</h3>
                    <p>{character.location && character.location.name}</p>
                </div>
                

        </div>
    )
}

export default Detail;