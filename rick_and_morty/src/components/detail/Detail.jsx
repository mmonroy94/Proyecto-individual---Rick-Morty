import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const Detail = () => {
    const {id} = useParams();

    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
            <div>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name}/>
            </div>
            <div>
                <h3>Species:</h3>
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