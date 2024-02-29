
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const FetchEachCoin = createAsyncThunk("eachCoin/fetch", 
     async (ecoin) => {
     const url = `https://api.coingecko.com/api/v3/coins/${ecoin}`
       const res = await axios.get(url)
       console.log("calling Function",res.data)
       return res.data
     }

)
export default FetchEachCoin
