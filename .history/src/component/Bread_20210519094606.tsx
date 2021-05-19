import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {

}

export const Bread = ({ children}) => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

