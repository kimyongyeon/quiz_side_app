import React from 'react'

import { Form, Input, InputNumber, Button, Radio, Breadcrumb, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const layout = {
    labelCol: { span: 4 },
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
        <>
            <h1>Quiz Main</h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="제목" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'first']} label="단수고르기" rules={[{ required: true }]}>
                    <Radio>단수 고르기</Radio>
                </Form.Item>
                <Form.Item name={['user', 'second']} label="복수고르기" rules={[{ required: true }]}>
                    <Radio>복수 고르기</Radio>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        다음
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


