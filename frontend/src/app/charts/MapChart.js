import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from "echarts";
import IcelandSvg, { ReactComponent as Star } from '../assets/img/iceland.svg'

console.log(Star)

const OPTIONS = {
    tooltip: {},
    geo: {
        tooltip: {
            show: true
        },
        // map: 'iceland_svg',
        roam: true
    },
    series: {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        symbolSize: function (params) {
            return (params[2] / 100) * 15 + 5;
        },
        itemStyle: {
            color: '#b02a02'
        },
        encode: {
            tooltip: 2
        },
        data: [
            [488.2358421078053, 459.70913833075736, 100],
            [770.3415644319939, 757.9672194986475, 30],
            [1180.0329284196291, 743.6141808346214, 80],
            [894.03790632245, 1188.1985153835008, 61],
            [1372.98925630313, 477.3839988649537, 70],
            [1378.62251255796, 935.6708486282843, 81]
        ]
    }
};

const MapChart = () => {
    const [option, setOption] = useState({});

    useEffect(() => {
        setOption(OPTIONS);
        // echarts.registerMap("iceland_svg", { svg: Star });
    }, []);

    return (
        // <ReactECharts
        //     option={option}
        //     lazyUpdate={true}
        //     className="w-full sm:w-3/4 p-10 !h-[500px] border" />
        <div>
            {/* <img src={IcelandSvg}/> */}
            <Star className='w-[300px] h-[300px]' />
        </div>
    );
};

export default MapChart;