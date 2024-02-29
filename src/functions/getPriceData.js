

const GetCoinPrice = async (id) => {
     const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
       const res = await fetch(url)
       const data = await res.json()
       return data.prices
     }

export default GetCoinPrice