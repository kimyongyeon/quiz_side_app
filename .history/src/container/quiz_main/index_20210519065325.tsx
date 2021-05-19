import React from 'react'

interface Props {

}

export const QuizMain = (props: Props) => {
    return (
        <div>
            <h1>Quiz Main</h1>
            <div>
                <ul>
                    <li>제목</li>
                    <li><input type="text" /></li>
                    <li></li>
                    <li><input type="text" /></li>
                </ul>
            </div>
        </div>
    )
}

