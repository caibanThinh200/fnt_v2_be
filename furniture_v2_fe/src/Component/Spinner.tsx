import React, { Component } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx'

interface Props {
  className?: string,
  children?: any,
  size: any,
  spinning?: boolean
}

const Spinner: React.FC<Props> = ({
  className,
  children,
  size,
  ...restProps
}: Props) => {

  const spinIcon = <LoadingOutlined spin />;

  return (
    <Spin {...restProps} indicator={spinIcon} size={size} className={clsx('ydl-spinner', className)} >
      {children}
    </Spin>
  )
}


export default Spinner
