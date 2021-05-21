import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {
  ch
}

export const Bread = ({ children: props.children }) => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{children}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

