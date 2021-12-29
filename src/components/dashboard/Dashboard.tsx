/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline, Statistic, Button } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import { SyncOutlined } from '@ant-design/icons';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import MyIcon from '../ui/Icons';
class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon
                                            type="icon-dianya"
                                            className="text-2x text-danger"
                                        />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">电压</div>
                                        <h2>55.2V</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon
                                            type="icon-dianliu"
                                            className="text-2x text-success"
                                        />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">电流</div>
                                        <h2>-0.6A</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon type="icon-wendu" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">温度</div>
                                        <h2>18.125℃</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon
                                            type="icon-dianchifang"
                                            className="text-2x text-info"
                                        />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">SOE</div>
                                        <h2>93.3%</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon
                                            type="icon-jiankang"
                                            className="text-2x text-success"
                                        />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">SOH</div>
                                        <h2>99.1%</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MyIcon type="icon-gonglv" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">SOP</div>
                                        <h2>--W</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>均衡管理</h3>
                                    <small>已开启</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <Row gutter={16} className="mb-l">
                                    <Col span={8}>
                                        <Statistic
                                            title="电压最大值"
                                            value={'3.35V'}
                                            prefix={<ArrowDownOutlined />}
                                            valueStyle={{ color: '#cf1322' }}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <Statistic
                                            title="电压最小值"
                                            value={'3.29V'}
                                            prefix={<ArrowUpOutlined />}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <Statistic
                                            title="电压极差"
                                            value={'0.06V'}
                                            prefix={<ArrowDownOutlined />}
                                            valueStyle={{ color: '#cf1322' }}
                                        />
                                    </Col>
                                </Row>
                                <Row gutter={16} className="mb-m">
                                    <Button type="primary" block>
                                        关闭均衡
                                    </Button>
                                </Row>
                                <Row gutter={16} className="mb-m">
                                    <Button type="primary" block>
                                        均衡记录
                                    </Button>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>最新异常情况</h3>
                                    <small>3个轻度警报，1个中度警报，0个严重警报</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <Timeline mode="left">
                                    <Timeline.Item color="green" label="2021/11/1 上午11:39:17">
                                        <p>第16节电池</p>
                                        <p>电压上限警告</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green" label="2021/11/1 上午11:39:01">
                                        {' '}
                                        <p>第12节电池</p>
                                        <p>电压上限警告</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="yellow" label="2021/11/1 上午11:23:54">
                                        <p>第2节电池</p>
                                        <p>电压过低警告</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green" label="2021/11/1 上午10:49:37">
                                        {' '}
                                        <p>第12节电池</p>
                                        <p>电压上限警告</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined type="sync" />
                                </span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
