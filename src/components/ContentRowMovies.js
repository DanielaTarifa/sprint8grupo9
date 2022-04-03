import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 21,
    icon: "fas fa-desktop"
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Total de Categorías', 
    color:'success', 
    cuantity: '79',
    icon:'fas fa-bookmark'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total de usuarios' ,
    color:'warning',
    cuantity:'49',
    icon:'fas fa-user'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;