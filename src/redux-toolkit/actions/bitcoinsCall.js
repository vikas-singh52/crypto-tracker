import { createAsyncThunk } from "@reduxjs/toolkit";

const FetchAllBitcoins = createAsyncThunk("bitcoins/fetch", 
     async () => {
     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
       const res = await fetch(url)
       const data = await res.json()
       return data
     }

)
export default FetchAllBitcoins