/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
const numLen = 150;
function randomArray(max: number, min: number) {
    return Array(numLen)
        .fill(1)
        .map((v) => Math.random() * (max - min) + min);
}
const chartData = {
    groupv: {
        expectedData: randomArray(55, 56),
        actualData: randomArray(55, 56),
    },
    groupc: {
        expectedData: randomArray(-1, 0),
        actualData: randomArray(-1, 0),
    },
    groupt: {
        expectedData: randomArray(18, 19),
        actualData: randomArray(18, 19),
    },
    avg: {
        expectedData: randomArray(3.35, 3.36),
        actualData: randomArray(3.35, 3.36),
    },
    max: {
        expectedData: randomArray(3.35, 3.36),
        actualData: randomArray(3.35, 3.36),
    },
    min: {
        expectedData: randomArray(3.35, 3.36),
        actualData: randomArray(3.34, 3.36),
    },
    soc: {
        expectedData: randomArray(88, 100),
        actualData: randomArray(88, 100),
    },
    soh: {
        expectedData: randomArray(99, 100),
        actualData: randomArray(99, 100),
    },
};

let xAxis = (function () {
    var now: any = new Date();
    var res = [];
    var len = numLen;
    while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(now - 1000);
    }
    return res;
})();
let lineChartData = chartData.soc;

const option = {
    title: { text: 'SOC', x: 'right' },
    xAxis: {
        data: xAxis,
        boundaryGap: false,
        axisTick: {
            show: false,
        },
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 20,
        top: 30,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        padding: [5, 10],
    },
    yAxis: {
        axisTick: {
            show: false,
        },
    },
    legend: {
        data: ['expected', 'actual'],
    },
    series: [
        {
            name: 'expected',
            itemStyle: {
                normal: {
                    color: '#FF005A',
                    lineStyle: {
                        color: '#FF005A',
                        width: 2,
                    },
                },
            },
            smooth: true,
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            data: lineChartData.expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut',
        },
        {
            name: 'actual',
            smooth: true,
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#3888fa',
                    lineStyle: {
                        color: '#3888fa',
                        width: 2,
                    },
                    areaStyle: {
                        color: '#f3f8ff',
                    },
                },
            },
            data: lineChartData.actualData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut',
        },
    ],
};
const EchartsProjects = () => (
    <ReactEcharts
        option={option}
        style={{ height: '360px', width: '100%' }}
        className={'react_for_echarts'}
    />
);

export default EchartsProjects;
