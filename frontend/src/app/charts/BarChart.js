import React from 'react'
import ReactECharts from 'echarts-for-react'

let OPTIONS = {
  grid: {
    left: '0%',
    right: '0%',
    height: '70%',
  },
  color: ['#0BB6FF'],
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      data: [
        ["1 Aug '22", 20],
        ["8 Aug '22", 30],
        ["15 Aug '22", 20],
        ["22 Aug '22", 15],
        ["29 Aug '22", 20],
        ["5 Sep '22", 30],
      ],
      type: 'bar',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
}

const BarChart = (props) => {
  if (props.type === 'discord-active') {
    OPTIONS = { ...OPTIONS, color: ['#5865F2'] }
  }

  if (props.title) {
    OPTIONS = { ...OPTIONS, title: { text: props.title } }
  }
  return (
    <ReactECharts option={OPTIONS} className={'w-full' + props.className} />
  )
}

export default BarChart
