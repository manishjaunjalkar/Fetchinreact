import React from "react";

const TableRow=(props)=>{

return(
   
        <tr className="tr">
             <td id="image">
                <img width="50px" src={props.image}/>
             </td>
             <td>{props.name}</td>
             <td  id="symbol"> {props.symbol.toUpperCase()}</td>
            <td>${props.curr_value}</td>
            <td>${props.total_volume}</td>
            <td style={{color:"green"}}>{props.atl}%</td>
            <td>Mkt Cap:${props.market_cap}</td>
        </tr> 

    
)

}
export default TableRow;