/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';


const option = (data: any) => {
    let len = data.length
    let xAxis = Array.from(new Array(len).keys());


    return {
        title: { text: '工况曲线', x: 'right' },
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
            data: ['电流'],
        },
        series: [
            {
                name: '电流',
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
                data: data,
                animationDuration: 2800,
                animationEasing: 'cubicInOut',
            },
        ],
    };
}
const EchartsProjects = (props: any) => {
    const data = props.data
    return (
        <ReactEcharts
            option={option(data)}
            style={{ height: '360px', width: '100%' }}
            className={'react_for_echarts'}
        />)
};

export default EchartsProjects;
