import React from 'react';
import ReactECharts from 'echarts-for-react';

const SAMPLE_OPTIONS = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
    ],
    tooltip: {
        trigger: 'axis',
    },
};

const LineChart = () => {
    return (
        <ReactECharts option={SAMPLE_OPTIONS} className="w-full sm:w-1/2 p-10" />
    );
};

export default LineChart;