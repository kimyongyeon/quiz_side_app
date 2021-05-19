import React from 'react'

import { Form, Input, InputNumber, Button, Radio, Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

interface Props {

}

export const QuizMain = (props: Props) => {

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div>

            

            <h1>Quiz Main</h1>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="제목" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'age']} label="단수고르기" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <Radio>단수 고르기</Radio>
                </Form.Item>
                <Form.Item name={['user', 'website']} label="복수고르기">
                    <Radio>복수 고르기</Radio>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        다음
                    </Button>
                </Form.Item>
            </Form>

            <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>퀴즈목록</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

        </div>
    )
}


