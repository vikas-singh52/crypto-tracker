
import { createAsyncThunk } from "@reduxjs/toolkit";

const FetchEachCoin = createAsyncThunk("eachcoin/fetch", 
     async (ecoin) => {
     const url = `https://api.coingecko.com/api/v3/coins/${ecoin}`
       const res = await fetch(url)
       const data = await res.json()
       return data
     }

)
export default FetchEachCoin
