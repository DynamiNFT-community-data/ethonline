import React from 'react'
import ReactECharts from 'echarts-for-react'

const OPTIONS = {
  // grid: { top: 8, right: 8, bottom: 24, left: 36 },
  grid: {
    left: '6%',
    right: '0%',
    height: '70%',
    align: 'left',
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'Tweets',
      data: [
        ["1 Aug '22", 820],
        ["8 Aug '22", 932],
        ["15 Aug '22", 901],
        ["22 Aug '22", 934],
        ["29 Aug '22", 1290],
        ["5 Sep '22", 1330],
        ["11 Sep '22", 1320],
      ],
      type: 'line',
      // smooth: true,
    },
    {
      name: 'Discord messages',
      data: [
        ["1 Aug '22", 150],
        ["8 Aug '22", 200],
        ["15 Aug '22", 120],
        ["22 Aug '22", 250],
        ["29 Aug '22", 300],
        ["5 Sep '22", 275],
        ["11 Sep '22", 300],
      ],
      type: 'line',
      // smooth: true,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const LineChart = (props) => {
  return (
    <ReactECharts option={OPTIONS} className={'w-full ' + props.className} />
  )
}

export default LineChart
