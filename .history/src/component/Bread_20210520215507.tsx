import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {
}

export const Bread = (children: this.props.) => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{children}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

