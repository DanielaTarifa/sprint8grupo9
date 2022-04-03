import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect} from 'react';

function Chart(){
    
    const [tableRowsData,setTableRowsData] = useState([]);
    useEffect(()=>{
        fetch("api/productos")
        .then(response=>
            response.json()
        ).then(data => {
            if(!data.Error){
                setTableRowsData(data.products)
                
            }else{
                setTableRowsData([]);
            }
        })
        .catch(error => console.log(error))
    },[])

    return (
        /* <!-- DataTales Example --> */
        
        <div className="card shadow mb-4">
            <h2 className="titulo">Todos los Productos</h2>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>                                
                                <th>Categoría</th>
                                <th>Detalle</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;