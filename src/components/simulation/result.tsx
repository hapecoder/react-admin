/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';


const option = (data: any, setting: any, type: any) => {
    let len = data.length
    let xAxis = Array.from(new Array(len).keys());
    let temp = setting.soe
    let initSOE = temp
    let SOEList = new Array(len)
    let volList = new Array(len)
    let opt = { name: 'SOE', color: '#Fccf0A', title: 'SOE(%)' }
    SOEList = xAxis.map((e, i) => {
        if (i === 0) return initSOE
        else {
            temp += Number(data[i - 1])
            if (temp > 100) temp = 100
            if (temp < 0) temp = 0
            return temp
        }

    })
    if (type === 'vol') {
        opt = { name: '电压', color: '#F27f0A', title: '电压(V)' }
        volList = SOEList.map(e => {
            e = e * 0.01
            return 2.29837949 * e ** 3 - 3.87574858 * e ** 2 + 2.08591928 * e + 2.83460016
        })
    }
    return {
        title: { text: opt.name + '仿真曲线', x: 'right' },
        xAxis: {
            name: '时间(S)',
            nameLocation: 'center',
            nameGap:25,
            data: xAxis,
            boundaryGap: false,
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            name: opt.title,
            nameLocation: 'center',
            nameGap:35,
            axisTick: {
                show: false,
            },
            scale: true
        },
        grid: {
            left: 15,
            right: 10,
            bottom: 25,
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
        legend: {
            // data: [opt.name],
        },
        series: [
            {
                name: opt.name,
                itemStyle: {
                    normal: {
                        color: opt.color,
                        lineStyle: {
                            color: opt.color,
                            width: 2,
                        },
                    },
                },
                smooth: true,
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                data: type === 'vol' ? volList : SOEList,
                animationDuration: 2800,
                animationEasing: 'cubicInOut',
            },
        ],
    };
}
const EchartsProjects = (props: any) => {
    const data = props.data
    const setting = props.setting
    const type = props.type
    // console.log(data, setting)
    return (
        <ReactEcharts
            option={option(data, setting, type)}
            style={{ height: '360px', width: '100%' }}
            className={'react_for_echarts'}
        />)
};

export default EchartsProjects;
