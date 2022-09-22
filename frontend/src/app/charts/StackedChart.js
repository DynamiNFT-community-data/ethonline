import React from 'react'
import ReactECharts from 'echarts-for-react'

const OPTIONS = {
  color: ['#5865F2', '#60B9F4'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Discord', 'Twitter'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '3%',
    containLabel: true,
    width: '100%',
    height: '80%',
  },
  xAxis: [
    {
      type: 'time',
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: 'Discord',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [
        ['2019-10-10', 120],
        ['2019-10-11', 132],
        ['2019-10-12', 101],
        ['2019-10-13', 134],
        ['2019-10-14', 90],
        ['2019-10-15', 230],
        ['2019-10-16', 500],
        ['2019-10-17', 520],
        ['2019-10-18', 525],
      ],
    },
    {
      name: 'Twitter',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [
        ['2019-10-10', 820],
        ['2019-10-11', 932],
        ['2019-10-12', 901],
        ['2019-10-13', 934],
        ['2019-10-14', 1290],
        ['2019-10-15', 1330],
        ['2019-10-16', 1320],
        ['2019-10-17', 1325],
        ['2019-10-18', 1400],
      ],
    },
  ],
}
const StackedChart = (props) => {
  return (
    <ReactECharts option={OPTIONS} className={'w-full ' + props.className} />
  )
}

export default StackedChart
