
//https://api.coingecko.com/api/v3/coins/list
// import { APIList } from '../../apiCalls/list'
// import { useEffect } from 'react'

// import '../grid/style.css'
// import { useState } from "react"

// const GridCom = () => {
//   const [apiData, setApi] = useState([])
//   // useEffect(()=>{
//   //   data =  APIList()
//   // },[])
//   async function callApi(){
//     const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
//     const data = await result.json()
//     console.log(data)
//     setApi(data)
//     console.log("state:",apiData)
//   }
//   return (
//     <div className='cards'>
//       {
//         apiData.map((ele)=>(
//           <div className='card'>
//             <div className='img-sec'>
//               <img src={ele.image} width="50px" height="50px"/>
//               <div>
//                 <h1>{ele.symbol}</h1>
//                 <p>{ele.id}</p>
//               </div>
//             </div>
//             <h2>${ele.current_price}</h2>
//             <p>Total Volume: ${ele.total_volume}</p>
//             <p>Market Cap: ${ele.market_cap}</p>
//           </div>
//         ))
//       }
//       <button onClick={callApi}>call api</button>
//     </div>
//   )
// }
// export default GridCom

import React from "react";
import './style.css'
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
const GridCom = ()=>{
  const {isLoad,data, error} = useSelector(state=>state.bitcoins)
  console.log(isLoad,data,error)
  const navigate = useNavigate()
  return(
      <div className='cards'>
        {
        data?.map((ele)=>(
          <div className='card' onClick={()=>navigate(`/coin/${ele.id}`)}>
            <div className='img-sec'>
              <img src={ele.image} width="50px" height="50px" alt="pic"/>
              <div>
                <h1>{ele.symbol}</h1>
                <p>{ele.id}</p>
              </div>
            </div>
            <h2>${ele.current_price}</h2>
            <p>Total Volume: ${ele.total_volume}</p>
            <p>Market Cap: ${ele.market_cap}</p>
          </div>
        ))
      }
    </div>
  )
}
export default GridCom
