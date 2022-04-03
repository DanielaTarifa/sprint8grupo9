import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>                    
                    <td>{props.category}</td>
                    <td>{props.dues}</td>
                    <td>{props.stock}</td>
                </tr>
            )
    }
    
        

export default ChartRow;