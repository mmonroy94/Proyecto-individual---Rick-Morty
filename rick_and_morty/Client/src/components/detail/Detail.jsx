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

    const statusDetail = () => {
        if(character.status==='Alive'){
            return <span>Alive 🟢</span>
        }
        if(character.status==='Dead'){
            return <span>Dead 🔴</span>
        }
        if(character.status==='unknown'){
            return <span>Unknown❓</span>
        }
    }

    return(
        <div className={styles.detailsContainer}>
            <p className={styles.detailsTitle}>CHARACTER'S DETAILS</p>
            <div className={styles.characterDetails}>
                <div className={styles.characterImage}>
                    <img src={character?.image} alt={character?.name}/>
                </div>
                <hr/>
                <div className={styles.characterInfo}>
                    <h2>{character?.name}</h2>
                    <h3 className={styles.idDetails}>ID: {character?.id}</h3>
                    <p><strong>Status: </strong>{statusDetail()}</p>
                    <p><strong>Specie: </strong>{character?.species}.</p>
                    <p><strong>Gender: </strong>{character?.gender}.</p>
                    <p><strong>Origin: </strong>{character?.origin}.</p> 
                    <p><strong>Location: </strong>{character?.location}.</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;