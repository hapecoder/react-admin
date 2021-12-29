/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Row, Col, Card, Cascader, Form, Button, InputNumber, TimePicker } from 'antd';


let base = +new Date();
let date = [];

let data = [Math.random()];

for (var i = 1; i < 2000; i++) {
    var now = new Date((base += 1000));
    date.push([String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0'), String(now.getSeconds()).padStart(2, '0')].join(':'));
    data.push(Math.random() - 0.5 + data[i - 1]);
}
let current = '组端电流'
const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt: any) {
            return [pt[0], '10%'];
        },
    },
    title: {
        left: 'center',
        text: '历史数据图-' + current,
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10,
        },
        {
            start: 0,
            end: 10,
            handleIcon:
                'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
            },
        },
    ],
    series: [
        {
            name: current,
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)',
                        },
                    ]),
                },
            },
            data: data,
        },
    ],
};
const options = [
    {
        value: 'zuduan',
        label: '组端',
        children: [
            {
                value: 'zv',
                label: '电压',
            },
            {
                value: 'za',
                label: '电流',
            },
            {
                value: 'zc',
                label: '温度',
            },
            {
                value: 'zsoe',
                label: 'SOE',
            },
            {
                value: 'zsoh',
                label: 'SOH',
            },
            {
                value: 'zsop',
                label: 'SOP',
            },
        ],
    },
    {
        value: 'danti',
        label: '单体',
        children: [
            {
                value: 'dv',
                label: '电压',
            },
            {
                value: 'da',
                label: '电流',
            },
            {
                value: 'dc',
                label: '温度',
            },
            {
                value: 'dsoe',
                label: 'SOE',
            },
            {
                value: 'dsoh',
                label: 'SOH',
            },
            {
                value: 'dsop',
                label: 'SOP',
            },
        ],
    },
]
function displayRender(label: any) {
    return label.join('');
}
function onChange(value: any) {
    console.log(value);
}
class EchartsArea extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">

                            <Card title={<span className="text-2x mr-l">数据选择</span>} bordered={false} >
                                <Form
                                    layout="inline"
                                    style={{ display: 'flex', justifyContent: 'center' }}

                                >
                                    <Form.Item label="数据类型">
                                        <Cascader
                                            options={options}
                                            expandTrigger="hover"
                                            displayRender={displayRender}
                                            onChange={onChange}
                                            defaultValue={['zuduan', 'za']}
                                        />
                                    </Form.Item>
                                    <Form.Item label="电池节数">
                                        <InputNumber min={1} max={16} defaultValue={1} disabled />
                                    </Form.Item>
                                    <Form.Item label="时间选择">
                                        <TimePicker.RangePicker />
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary">查询</Button>
                                    </Form.Item>

                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <ReactEcharts
                                    option={option}
                                    style={{ height: '500px', width: '100%' }}
                                    className={'react_for_echarts'}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default EchartsArea;
