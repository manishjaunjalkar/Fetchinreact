
import {React, useEffect, useState} from "react";
import TableRow from "./TableRow";

const Data = ()=>{
const [curr,setCurr]=useState("");

    useEffect(()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then((res)=>  res.json())
    .then((json)=> setCurr(json))
    .catch((err)=>{
        return console.log(err)
    })
  
    },[])
   

    return(
   
        <thead id="thead">
           
            {
             curr!=="" &&
             curr.map((value,index)=>{
            return<TableRow key={index} id={value.id} symbol={value.symbol} name ={value.name} image ={value.image} curr_value={value.current_price} total_volume={value.total_volume} atl= {value.atl} market_cap={value.market_cap}
            />
           })
            }
        
        </thead>
    )
    
}
export default Data;