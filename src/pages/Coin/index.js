import CoinChart from "../../components/coin/coinChart"
// import CoinDesc from "../../components/coin/coinDesc"
import Header from "../../components/common/header"
import CoinDiv from "../../components/coin/coinDiv"
import { useParams } from "react-router-dom"
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import FetchAEachCoin from "../../redux-toolkit/actions/eachCoin"

const Coin = () => {

    
    const {coinId} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
      
        dispatch(FetchAEachCoin(coinId))
    },[])

  return (
    < div >
      <Header/>
      {/* <CoinDiv/> */}
      <CoinChart/>
      {/* <CoinDesc/> */}
    </div>
  )
}
export default Coin
