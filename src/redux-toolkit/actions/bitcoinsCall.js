import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const FetchAllBitcoins = createAsyncThunk("bitcoins/fetch", 
     async () => {
     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
       const res = await axios.get(url)
       return res.data
     }

)
export default FetchAllBitcoins