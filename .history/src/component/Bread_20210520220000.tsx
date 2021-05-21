import { Breadcrumb } from 'antd'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode;
}

export const Bread: React.FC<Ip> = ({ children }: IProps["children"]) => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{children}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

