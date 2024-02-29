
import { useSelector } from 'react-redux'
import './coinDivStyle.css'
const CoinDiv = () => {

  const {data,error} = useSelector(s=>s.eachcoin)
  console.log("coinDiv: ",data)
  
  return (
    < div className='card-div' >
      <div className="coin-card">
        <img src={data.image.thumb} width="50" height="50" alt="coin-img"/>
        <div>
          <h4> {`${data.symbol.toUpperCase()}-USD`}</h4>
          <p>{data.id}</p>
        </div>
        <div>
          <button>+2.75%</button>
          <button>H</button>
        </div>
        <p>{data.market_data.current_price.usd}</p>
        <p>${data.market_data.market_cap.usd}</p>
        <p>${data.market_data.total_volume.usd}</p>
      </div>
      
    </div>
  )
}
export default CoinDiv
