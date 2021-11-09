import React from 'react';
import { Table, Button, Switch, Row, Col } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
const columns = [
    {
        title: '电池节数',
        dataIndex: 'key',
        key: 'key',
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: '电压',
        dataIndex: 'volt',
        key: 'volt',
        sorter: (a: any, b: any) => a.username.localeCompare(b.username),
    },
    {
        title: '电流',
        dataIndex: 'curr',
        key: 'curr',
        sorter: (a: any, b: any) => a.role.localeCompare(b.role),
    },
    {
        title: '温度',
        dataIndex: 'temp',
        key: 'temp',
    },
    {
        title: 'SOC',
        dataIndex: 'soc',
        key: 'soc',
    },
    {
        title: 'SOH',
        dataIndex: 'soh',
        key: 'soh',
    },
    {
        title: '是否均衡中',
        key: 'enabled',
        render: (text: any, record: any) => (
            <div>
                <Switch checked={record.enabled} style={{ border: 'none' }} />
            </div>
        ),
    },
];

const data = Array(16)
    .fill(0)
    .map((v, i) => {
        const a = Math.random()
        return {
            key: i + 1,
            volt: (3.339 + (a - 0.5) * 0.005).toFixed(3),
            curr: (-0.7 + Math.random() - 0.5).toFixed(1),
            temp: (18.125 + Math.random() - 0.5).toFixed(3),
            soc: (95.7 + a - 0.5).toFixed(1),
            soh: 100,
            enabled: false

        }
    })
const BasicTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
    const selectChange = (selectedRowKeys: any) => {
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: selectChange,
    };

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            className="pa-l"
            pagination={{ pageSize: 50 }}
            scroll={{ y: 550 }}
            title={() => {
                return (
                    <Row gutter={16} align="middle">
                        <Col md={20}>
                            <Row gutter={16} align="middle">
                                <span className="text-2x" style={{margin:'0 10px'}}>均衡管理</span>
                                <Button style={{ backgroundColor: 'green', color: 'white' }}>开启均衡</Button>
                                <Button type="primary">结束均衡</Button>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <span className="text-1x">电压极差：</span><span className="text-1x text-danger"><ArrowDownOutlined />0.12V</span>
                        </Col>
                    </Row>



                );
            }}
        />
    );
};
export default BasicTable;
