import { ADD_FAV , REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = { // Estados son exactamente iguales
    myFavorites: [], // Será el que mostramos, el original
    allCharacters: [] // Será la copia con la que trabajamos los métodos de filtrado y ordenamiento. Con el fin de no pisar al original mientras se aplican los métodos.
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
                //No se aplica el spread operator al payload porque este representa un objeto, character corresponde a un solo objeto que hace parte de un gran array que contiene diferentes characters.
                // Siempre debemos manejar copias porque no modificamos el global state sino que siempre se retorna uno nuevo.
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
            }
        // Con el método filter comprobamos el id. Es posible trabajar con el método directamente porque estamos trabajando sobre una prop cuya naturaleza es un array.
        // Además, filter retorna un nuevo array, por lo tanto nos estamos quedando con todos los characters cuyo id no coincida con el recibido por payload.
        
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return{
                ...state,
                myFavorites: action.payload === 'allGenders'
                ? [...state.allCharacters]
                : allCharactersFiltered
            }

        // El filter se aplica directamente a la prop allCharacters porque este método retorna un nuevo array

        case ORDER:
            const allCharactersCopy = [...state.allCharacters]

            return{
                ...state,
                myFavorites: action.payload === 'A' 
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        default:
            return {...state};
    }
    // En el caso del SORT es necesario crear una copia de la copia para aplicar el ordenamiento de la información y posteriormente asignarla a la prop original myFavorites que será la que se renderizará.
}

export default reducer;

