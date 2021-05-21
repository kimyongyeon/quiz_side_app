import React from 'react'

interface Props {

}

export const QuizSelect = (props: Props) => {
    return (
        <div>
            <h1>Quiz Select</h1>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

