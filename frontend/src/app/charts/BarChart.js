import React from 'react';
import ReactECharts from 'echarts-for-react';

const OPTIONS = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    ]
};

const BarChart = () => {
    return (
        <ReactECharts option={OPTIONS} className="w-full sm:w-3/4 p-10 !h-[500px] border" />
    );
};

export default BarChart;