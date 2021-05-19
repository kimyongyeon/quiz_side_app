import React from 'react'
import { Button, Radio } from 'antd';
interface Props {

}

export const QuizMain = (props: Props) => {
    return (
        <div>

            <h1>Quiz Main</h1>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>

            <div>
                <ul>
                    <li>제목</li>
                    <li><input type="text" placeholder="제목" /></li>
                    <li>아이디</li>
                    <li><input type="text" placeholder="아이디" /></li>
                </ul>

                <div>
                    <Radio>단수 고르기</Radio>
                    <Radio>복수 고르기</Radio>
                </div>
                <div>
                    <Button type="primary">생성</Button>
                </div>
            </div>
        </div>
    )
}


