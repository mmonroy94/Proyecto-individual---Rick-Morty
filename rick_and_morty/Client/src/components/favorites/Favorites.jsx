import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux,setAux] = useState(false);

    useEffect (() => {
        dispatch(orderCards('A'))
    },[])

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value)); // se ejecuta la action porque queremos su retorno y ademas espera un parametro
        setAux(true);
    }
    const handleFilter = (event) => {
            dispatch(filterCards(event.target.value));
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="allGenders">All genders</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            {
                myFavorites?.map(fav => {
                    return(
                        <Card
                            key = {fav.id}
                            id = {fav.id}
                            name = {fav.name}
                            gender = {fav.gender}
                            species = {fav.species}
                            image = {fav.image}
                            onClose = {fav.onClose}
                        />
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites : state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);