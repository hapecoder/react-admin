/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: '最近7天用户访问量',
        left: '50%',
        show: false,
        textAlign: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd',
            },
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
    },
    legend: {
        right: 20,
        orient: 'vertical',
    },
    xAxis: {
        type: 'category',
        data: [
            '2022-03-01',
            '2022-03-02',
            '2022-03-03',
            '2022-03-04',
            '2022-03-05',
            '2022-03-06',
            '2022-03-07',
        ],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5'],
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9',
            },
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 10,
            },
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5'],
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9',
            },
        },
        axisLabel: {
            margin: 0,
            textStyle: {
                fontSize: 8,
            },
        },
    },
    series: [
        {
            name: '管理员',
            type: 'line',

            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['2', '1', '1', '5', '3', '0', '1'],

            itemStyle: {
                normal: {
                    color: '#58c8da',
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                },
            },
        },
        {
            name: '游客',
            type: 'line',

            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['12', '7', '2', '5', '8', '3', '2'],

            itemStyle: {
                normal: {
                    color: '#cfcf00',
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                },
            },
        },
    ],
};

const EchartsViews = () => (
    <ReactEcharts
        option={option}
        style={{ height: '350px', width: '100%' }}
        className={'react_for_echarts'}
    />
);

export default EchartsViews;
