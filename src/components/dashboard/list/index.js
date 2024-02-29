
import React from "react";
import { useSelector } from "react-redux";
import './style.css'
import { useNavigate } from "react-router-dom";
const ListCom = ()=>{
  const {data} = useSelector(state=>state.bitcoins)
  const navigate = useNavigate()
  return(
    <div className="list-cards">
          <table>
            <tbody>
              {
                data?.map((ele,i)=>(
                  <tr key={i} onClick={()=>navigate(`/coin/${ele.id}`)}>
                    <td><img src={ele.image} width="50px" height="50px"/></td>
                    <td>{ele.symbol}</td>
                    <td>{ele.id}</td>
                    <td>${ele.current_price}</td>
                    <td>{ele.total_volume}</td>
                    <td>{ele.market_cap}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
    </div>
  )
}
export default ListCom

/*
import React from "react";
const ListCom = ()=>{
  return(
    <div>
      Hello I am List
    </div>
  )
}
export default ListCom

*/