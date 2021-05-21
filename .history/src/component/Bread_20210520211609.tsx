import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Bread = ({ children: any }) => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{children}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

