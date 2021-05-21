import { Breadcrumb } from 'antd'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

export const Bread = ({ children: Props.children }) => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{children}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

