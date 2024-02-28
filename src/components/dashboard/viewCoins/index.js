
import '../viewCoins/style.css'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import FetchAllBitcoins from '../../../redux-toolkit/actions/bitcoinsCall'
import GridCom from '../grid'
import ListCom from '../list'

const ViewCoinsCom = () => {

  const [whichCom, setWhichCom] = useState(true)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(FetchAllBitcoins())
  },[])
  function display(e){
    console.log(e.target.className)
    if(e.target.className == "grid"){
      setWhichCom(true)
    }
    else{
      setWhichCom(false)
    }
  }

  return (
    <div>
       <div className="view-coins">
        <button className="grid" onClick={(e)=>display(e)}>Grid</button>
        <button className="list" onClick={(e)=>display(e)}>List</button>
       </div>
       <div>
        {
        whichCom ? <GridCom/> : <ListCom/>
        }
       </div>
    </div>
  )
}
export default ViewCoinsCom
