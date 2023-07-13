import React from 'react';
import "../styles/Search.css"
const Search = ({ cambiar }) => {

    const handlerSearch = (e) => {
        cambiar(estadoAnt => ({
            ...estadoAnt,
            titulo: e.target.value
        }))
    }

    return (
        <>
            <form  >
                <input onChange={handlerSearch} className='buscador' type="search" id="search" placeholder='Buscar productos' />
                <label htmlFor='search' className='btnBuscar'><img className='imgBuscar' src="./src/imagenes/buscar.png" alt="Search" /></label>
            </form>
        </>
    );
};

export default Search;