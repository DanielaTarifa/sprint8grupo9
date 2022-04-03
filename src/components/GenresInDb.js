import React from "react";
import {useState, useEffect} from 'react';

function GenresInDb() {
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
      fetch("api/productos")
      .then(response=>response.json()
      ).then(data => {
              setCategories(data.countByCategory)
              
          
      })
      .catch(error => console.log(error))
  },[])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por Categoría
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              categories.map((category,i)=>{
                return(
                  <div className="col-lg-6 mb-4" key={i}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{category.name}<br></br> {category.count}</div>
                  </div>
                </div>
                )
                
              })
              
            }
          
            
          </div>
        </div>
      </div>
    </div>
  );

}
export default GenresInDb;