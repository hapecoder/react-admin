import React from 'react';
import { Table, Button } from 'antd';

const columns = [
    {
        title: '时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: '程度',
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
        level: '轻度',
        description: '第1节电池电压上限轻度警告',
        createTime: '2020-07-12 19:08:51',
    },
    {
        level: '轻度',
        description: '第8节电池电压上限轻度警告',
        createTime: '2020-07-12 19:08:51',
    },
    {
        level: '轻度',
        description: '第1节电池电压上限轻度警告',
        createTime: '2020-07-12 19:08:52',
    },
    {
        level: '轻度',
        description: '第8节电池电压上限轻度警告',
        createTime: '2020-07-12 19:08:52',
    },
    {
        level: '轻度',
        description: '第1节电池电压上限轻度警告',
        createTime: '2020-07-12 19:09:24',
    },
    {
        level: '轻度',
        description: '第16节电池电压上限轻度警告',
        createTime: '2020-07-12 19:09:24',
    },
    {
        level: '轻度',
        description: '第1节电池电压上限轻度警告',
        createTime: '2020-07-12 19:09:24',
    },
];

const BasicTable = () => (
    <Table
        columns={columns}
        dataSource={data}
        className="pa-l"
        title={() => <span className="text-2x">异常信息</span>}
    />
);

export default BasicTable;
