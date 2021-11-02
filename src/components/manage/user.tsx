import React from 'react';
import { Table, Button, Switch } from 'antd';

const columns = [
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        sorter: (a: any, b: any) => a.username.localeCompare(b.username),
    },
    {
        title: '权限等级',
        dataIndex: 'role',
        key: 'role',
        sorter: (a: any, b: any) => a.role.localeCompare(b.role),
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '是否启用',
        key: 'enabled',
        render: (text: any, record: any) => (
            <div>
                <Switch checked={record.enabled} />
            </div>
        ),
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
        username: 'admin',
        nickName: 'null',
        gender: '男',
        role: '管理员',
        enabled: true,
        phone: 13737369023,
        createTime: '2020-11-23 11:04:37',
        key: 1,
    },
    {
        username: 'tom',
        nickName: 'null',
        gender: '男',
        role: '管理员',
        enabled: false,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 2,
    },
    {
        username: 'tony',
        nickName: 'null',
        gender: '男',
        role: '维护人员',
        enabled: false,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 3,
    },
    {
        username: 'jerry',
        nickName: 'null',
        gender: '男',
        role: '维护人员',
        enabled: false,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 4,
    },
    {
        username: 'jack',
        nickName: 'null',
        gender: '男',
        role: '普通用户',
        enabled: true,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 5,
    },
    {
        username: 'ted',
        nickName: 'null',
        gender: '男',
        role: '普通用户',
        enabled: true,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 6,
    },
    {
        username: 'alice',
        nickName: 'null',
        gender: '男',
        role: '普通用户',
        enabled: true,
        phone: 12345,
        createTime: '2020-11-23 11:04:37',
        key: 7,
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
                        <span className="text-2x mr-l">人员管理</span>
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
