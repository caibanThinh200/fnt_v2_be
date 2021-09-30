import React, { useState, useEffect } from 'react'
import { Modal as AntModal, Button, Spin } from 'antd'
import clsx from 'clsx'
import Wrapper from './Wrapper'
import { CloseOutlined } from '@ant-design/icons'
import Spinner from './Spinner'

interface Props {
  className?: string,
  children?: React.FC,
  visible?: boolean,
  loading?: boolean,
  classBody?: string,
}

const Modal: React.FC<Props> = ({
  className,
  children,
  visible = false,
  loading = false,
    classBody,
  ...restProps
}: Props) => {

  const [visibleState, setVisibleState] = useState(visible)

  useEffect(() => setVisibleState(visible), [visible])

  return (
    <AntModal
      {...restProps}
      visible={visibleState}
      className={clsx('', className)}
      // wrapClassName="ydl-modal-wrap"
      bodyStyle={{ padding: 0 }}
      // closable={false}
    >

      <Spinner spinning={loading} size="large">
        <Wrapper className="modal-content">
        {/*  <Wrapper className="modal-header flex flex-row justify-content-end">*/}
        {/*    <Button type="ghost" className="flex items-center justify-center p-2" onClick={onClose}>*/}
        {/*      <CloseOutlined className="text-3xl" />*/}
        {/*    </Button>*/}
        {/*  </Wrapper>*/}
          <Wrapper className={`modal-body ${classBody || ""}`}>
            {children}
          </Wrapper>
        </Wrapper>
      </Spinner>
    </AntModal>
  )
}


export default Modal
