import React from 'react';
import { Table, Button } from 'antd';

const columns = [
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: '权限名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '权限等级',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: '详细信息',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => (
            <span>
                <Button type="primary">编辑</Button>

                <Button type="primary" danger>
                    删除
                </Button>
            </span>
        ),
    },
];

const data = [
    {
        name: '管理员',
        dataScope: '全部',
        level: 7,
        description: '-',
        key: 1,
        createTime: '2021-11-23 11:04:37',
    },
    {
        name: '维护人员',
        dataScope: '自定义',
        level: 6,
        description: '-',
        key: 2,
        createTime: '2021-11-23 10:33:32',
    },
    {
        name: '普通用户',
        dataScope: '自定义',
        level: 5,
        description: '-',
        key: 3,
        createTime: '2021-11-23 10:21:45',
    },
    {
        name: '游客',
        dataScope: '自定义',
        level: 3,
        description: '-',
        key: 4,
        createTime: '2021-11-23 08:27:15',
    },
];

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
            title={() => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="text-2x mr-l">权限管理</span>
                        <Button style={{ backgroundColor: 'green', color: 'white' }}>新增</Button>
                        <Button type="primary">编辑</Button>
                        <Button type="primary" danger>
                            删除
                        </Button>
                    </div>
                );
            }}
        />
    );
};
export default BasicTable;
