import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import About from '../about/About'
import styles from './Nav.module.css';

//Recibe por PROPS la función para agregar objetos al local state characters
//Hay que poner a disposición del comp. SearchBar las PROPS recibidas
const Nav = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to ='/about'>About</NavLink>
            </button>
            <button>
                <NavLink to ='/home'>Home</NavLink>
            </button>
        </div>
    )
}

export default Nav;