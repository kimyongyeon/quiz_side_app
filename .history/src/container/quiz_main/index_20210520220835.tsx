import React, { ReactNode } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Button, Radio, Breadcrumb, Layout } from 'antd';
import Util from '../../common/util';

const { Header, Content, Footer } = Layout;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
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

interface IProps {
    
}

export const QuizMain = (props: IProps) => {

    let history = useHistory();

    /**
     * 다음 클릭시 문제 항목화면으로 이동 (/quiz_reg)
     * @param values 제목, 이메일
     */
    const onFinish = (values: any) => {
        console.log(values);
        // localstorage 저장
        Util.localSaveJsonToString('q', values);
        history.push("/quiz_reg"); // 페이지 이동 
    };

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onNextClick = e => {
        console.log(e.target.value);
    }

    return (
        <>
            <h1>Quiz Main</h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="제목" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email', required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'select']} label="응답방식" rules={[{ required: true }]}>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>단수선택</Radio>
                        <Radio value={2}>복수선택</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        다음
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


