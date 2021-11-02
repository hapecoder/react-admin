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
        title: '用户',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: '操作类型',
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
        level: '登录',
        user: 'admin',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:19:24',
    },
    {
        level: '修改人员',
        user: 'admin',
        description: '修改用户：guest ',
        createTime: '2021-12-12 19:08:51',
    },
    {
        level: '登录',
        user: 'admin',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:09:24',
    },
    {
        level: '登录',
        user: 'guest',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:09:04',
    },
    {
        level: '修改权限',
        user: 'admin',
        description: '修改 游客 权限 ',
        createTime: '2021-12-12 19:08:51',
    },
    {
        level: '登录',
        user: 'admin',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:08:24',
    },

    {
        level: '开启均衡',
        user: 'admin',
        description: '开启前电压极差为：0.12V',
        createTime: '2021-12-12 19:05:52',
    },
    {
        level: '登录',
        user: 'guest',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:04:52',
    },
    {
        level: '登录',
        user: 'guest',
        description: '登录ip为10.67.35.27',
        createTime: '2021-12-12 19:03:24',
    },
];

const BasicTable = () => (
    <Table
        columns={columns}
        dataSource={data}
        className="pa-l"
        title={() => <span className="text-2x">系统日志</span>}
    />
);

export default BasicTable;
