import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>                    
                    <td>{props.category}</td>
                    <td>{props.description}</td>
                    <td><button><a href = {props.detail}>Detalle</a></button></td>
                  
                </tr>
            )
    }
    
        

export default ChartRow;