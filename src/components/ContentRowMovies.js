import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

function ContentRowMovies(){
const [category,setCategory] = useState([]);
useEffect(()=>{
    fetch("api/productos")
    .then(response=>response.json()
    ).then(data => {
            setCategory(data.count)
            
        
    })
    .catch(error => console.log(error))
},[])

let moviesInDB = {
    title: 'Total de productos',
    color: 'warning', 
    cuantity: category,
    icon: "fas fa-desktop"
}

/* <!-- Total awards --> */
const [categories,setCategories] = useState([]);
useEffect(()=>{
    fetch("api/productos")
    .then(response=>response.json()
    ).then(data => {
            setCategories(data.countCategory)
            
            
        
    })
    .catch(error => console.log(error))
},[])

let totalAwards = {
    title:'Total de Categorías', 
    color:'warning', 
    cuantity: categories,
    icon:'fas fa-bookmark'
}

/* <!-- Actors quantity --> */
const [users,setUsers] = useState([]);
useEffect(()=>{
    fetch("api/usuarios")
    .then(response=>response.json()
    ).then(data => {
            setUsers(data.count)
            

    })
    .catch(error => console.log(error))
},[])

let actorsQuantity = {
    title:'Total de usuarios' ,
    color:'warning',
    cuantity:users,
    icon:'fas fa-user'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;