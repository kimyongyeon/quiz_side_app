import React from 'react'
import { Button } from 'antd';
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
                <Button type="primary">Button</Button>
            </div>
        </div>
    )
}

