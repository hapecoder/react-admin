import React from 'react';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
    Card,
} from 'antd';
import EchartsProjects from './chart'
import EchartsResult from './result'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 4 },
};


const Demo = () => {
    const [isShowSetting, setShowSetting] = React.useState(true)
    const [setting, setSetting] = React.useState(null)
    const [data, setData] = React.useState<string[]>([])
    const onFinish = (values: any) => {
        setSetting(values);
        setShowSetting(false)
    };

    const onFileChange = function (e: any) {
        console.log(e)
        // var file = e.target.files[0];
        var file = e.file.originFileObj;
        //读取为二进制
        var reader = new FileReader();
        reader.readAsText(file, 'utf-8');
        reader.onload = function () {
            let str = reader.result as string;
            if (str) {
                let nums = str.split('\r\n')
                nums.pop()
                setData(nums)
            }
        }
    }

    return (
        isShowSetting ? (
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'series': 16,
                    'soe': 95,
                    'soh': 100,
                    'cap': 1.1,
                    'select': 'lpf',
                    'select2': 'thevenin',
                    'min': 2.0,
                    'max': 3.6,
                }}
            >
                <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
                    <span className="ant-form-text text-2x mt-l mb-m">电池参数设置</span>
                </Form.Item>
                <Form.Item
                    name="select"
                    label="电池类型"
                    hasFeedback
                    rules={[{ message: 'Please select your battery type!' }]}
                >
                    <Select placeholder="Please select a battery type">
                        <Option value="lpf">磷酸铁锂</Option>
                        <Option value="ncm">三元锂</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="select2"
                    label="等效电路模型"
                    hasFeedback
                    rules={[{ message: 'Please select your battery type!' }]}
                >
                    <Select placeholder="Please select a battery type">
                        <Option value="thevenin">Thevenin</Option>
                        <Option value="rint">Rint</Option>
                        <Option value="pngv">PNGV</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="串联数">
                    <Form.Item name="series" noStyle>
                        <InputNumber min={1} max={100} />
                    </Form.Item>
                </Form.Item>

                <Form.Item label="初始SOE">
                    <Form.Item name="soe" noStyle>
                        <InputNumber min={1} max={100} step="0.1" formatter={value => `${value}%`} />
                    </Form.Item>
                </Form.Item>

                <Form.Item label="初始SOH">
                    <Form.Item name="soh" noStyle>
                        <InputNumber min={1} max={100} step="0.1" formatter={value => `${value}%`} />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="额定容量">
                    <Form.Item name="cap" noStyle>
                        <InputNumber min={0.1} max={10} step="0.01" formatter={value => `${value}Ah`} />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="最小截止电压">
                    <Form.Item name="min" noStyle>
                        <InputNumber
                            min={1}
                            max={5}
                            step="0.1"
                            formatter={value => ` ${value}V`}
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="最大截止电压">
                    <Form.Item name="max" noStyle>
                        <InputNumber
                            min={1}
                            max={5}
                            step="0.1"
                            formatter={value => ` ${value}V`}
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
                    <Button type="primary" htmlType="submit">
                        开始模拟
                    </Button>
                </Form.Item>
            </Form>) : (
            <Row justify="center">
                <Col span={12} className="mt-l pa-l">
                    <Card title="工况曲线导入" style={{ height: '550px' }}>
                        <Upload onChange={onFileChange} className="mb-m" accept="*.csv">
                            <Button icon={<UploadOutlined />}>导入CSV文件</Button>
                        </Upload>
                        {/* <input placeholder="res" type="file" accept="*" onChange={onFileChange} />
                        <progress id="pro" value="0" /> */}
                        <div className="mt-m" style={{ visibility: (data.length > 0 ? "visible" : "hidden") }}>
                            <EchartsProjects data={data} />
                        </div>

                    </Card>
                </Col>
                <Col span={12} className="mt-l pa-l">
                    <Card title="仿真结果" style={{ height: data.length > 0 ? '' : '550px' }}>
                        <div style={{ visibility: (data.length > 0 ? "visible" : "hidden") }}>
                            <EchartsResult data={data} setting={setting} type={'soe'} />
                        </div>
                        <div style={{ visibility: (data.length > 0 ? "visible" : "hidden") }}>
                            <EchartsResult data={data} setting={setting} type={'vol'} />
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    );
};

export default Demo;
