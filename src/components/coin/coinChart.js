import styles from './CoinChart.module.css'
import {Line} from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'
import { useEffect, useState } from 'react'
import GetCoinPrice from '../../functions/getPriceData'
import { ToDate } from '../../functions/convertToDate'

const CoinChart = ({coinId}) => {
  const [chartData, setChartData] = useState([])
  const labelsData = [
    {
      month: "29/1"
    },
    {
      month: "30/1"
    },
    {
      month: "31/1"
    },
    {
      month: "1/2"
    },
    {
      month: "3/2"
    },
    {
      month: "4/2"
    },
    {
      month: "5/2"
    },
    {
      month: "6/2"
    },
    {
      month: "7/2"
    },
    {
      month: "8/2"
    },
    {
      month: "9/2"
    },
    {
      month: "10/2"
    },
    {
      month: "11/2"
    },
    {
      month: "12/2"
    },
    {
      month: "13/2"
    },
    {
      month: "14/2"
    },
    {
      month: "15/2"
    },
    {
      month: "16/2"
    },
    {
      month: "17/2"
    },
    {
      month: "18/2"
    },
    {
      month: "19/2"
    },
    {
      month: "20/2"
    },
    {
      month: "21/2"
    },
    {
      month: "22/2"
    },
    {
      month: "23/2"
    },
    {
      month: "24/2"
    },
    {
      month: "25/2"
    },
    {
      month: "26/2"
    },
    {
      month: "27/2"
    },
    {
      month: "28/2"
    },

  ]

  const subData = [
    {
      data: "2"
    },
    {
      data: "4"
    },
    {
      data: "3"
    },
    {
      data: "2"
    },
    {
      data: "5"
    },
    {
      data: "3"
    },
    {
      data: "4"
    },
    {
      data: "5"
    },
    {
      data: "6"
    },
    {
      data: "5"
    },
    {
      data: "7"
    },
    {
      data: "7"
    },
    {
      data: "6"
    },

    {
      data: "5"
    }
  ]
   useEffect( async ()=>{
    const chartData = await GetCoinPrice(coinId)
    setChartData(chartData)
    console.log("chart:",chartData)
    
  },[])
  
  return (
    < div className={styles.chart}>
      Hello coin chart
      <Line
       data = {{
        labels: chartData?.map((ele)=> ToDate(ele[0])) ,
        datasets: [
        {
          label: "coin",
          data: chartData?.map((ele)=> (ele[1])),
          backgroundColor: "blue",
          borderColor: "blue"
        },
        ],
       }}
      />
    </div>
  )
}
export default CoinChart


