import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {
  children: any
}

export const Bread = (children: Props) => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{children}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

