import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import About from '../about/About'
import styles from './Nav.module.css';

//Recibe por PROPS la función para agregar objetos al local state characters
//Hay que poner a disposición del comp. SearchBar las PROPS recibidas
const Nav = ({onSearch}) => {
    return(
        <nav className={styles.navBar}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' alt='logoRick&Morty'/>
            <hr/>
            <ul className={styles.navList}>
                <li><NavLink to ='/home' className={styles.navLink}>Inicio</NavLink></li>
                <li><NavLink to ='/about' className={styles.navLink}>Sobre mi</NavLink></li>
                <li><NavLink to ='/favorites' className={styles.navLink}>Favoritos</NavLink></li>            
            </ul>
            <hr/>
            <SearchBar onSearch={onSearch} className={styles.searchBar}/>
            <NavLink to ='/'>Cerrar sesión</NavLink>           
        </nav>

    )
}

export default Nav;