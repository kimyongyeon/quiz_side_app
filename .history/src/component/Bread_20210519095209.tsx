import { Breadcrumb } from 'antd'
import React from 'react'

interface Props {

}

export const Bread = ({pr}) => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{props}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
