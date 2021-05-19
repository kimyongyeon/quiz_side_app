import React from 'react'
import { Button, Radio } from 'antd';
interface Props {

}

export const QuizMain = (props: Props) => {
    return (
        <div>
            <h1>Quiz Main</h1>
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

