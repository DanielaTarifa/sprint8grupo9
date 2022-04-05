import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>                    
                    <td>{props.category}</td>
                    <td>{props.description}</td>
                    <td ><a className="btn btn-danger" target="_blank" rel="nofollow" href = {props.detail}>Detalle</a></td>
                  
                </tr>
            )
    }
    
        

export default ChartRow;