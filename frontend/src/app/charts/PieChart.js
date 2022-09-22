import React from 'react'
import ReactECharts from 'echarts-for-react'

const OPTIONS = {
  grid: {
    left: '0%',
    right: '0%',
    height: '100%',
  },
  color: ['#A8E5FF', '#76D6FF', '#0BB5FF', '#006089', '#004969'],
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: true,
    // orient: 'vertical',
    left: '0%',
    // top: 'center',
  },
  animation: false,
  series: [
    {
      name: '# of wallet addresses by NFT holdings',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: '1 NFT' },
        { value: 735, name: '2 NFTs' },
        { value: 580, name: '3 NFTs' },
        { value: 484, name: '4 NFTs' },
        { value: 300, name: '> 4 NFTs' },
      ],
    },
  ],
}

const PieChart = (props) => {
  return (
    <ReactECharts option={OPTIONS} className={'w-full ' + props.className} />
  )
}

export default PieChart
