import styles from './CoinChart.module.css'
import {Line} from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'

const CoinChart = () => {
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
  return (
    < div className={styles.chart}>
      Hello coin chart
      <Line
       data = {{
        labels: labelsData.map((ele)=> ele.month) ,
        datasets: [
        {
          label: "coin",
          data: subData.map((ele)=>ele.data),
          backgroundColor: "blue",
          borderColor: "blue"
        },
        {
          label: "jain",
          data: [1,2,2,3,5,3,2,1,6,4],
          backgroundColor: "orange",
          borderColor: "orange"
        }
        ],
       }}
      />
    </div>
  )
}
export default CoinChart


