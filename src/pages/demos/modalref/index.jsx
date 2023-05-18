import React, { useState, useRef, useEffect } from 'react'
import { Modal } from 'antd'
import { ReactDOM } from 'react'
import styled from '@emotion/styled'
function MyComponent() {
  const [visible, setVisible] = useState(true)
  const iframeRef = useRef(null)

  const ModalBox = styled(Modal)({
    '.ant-modal-mask': {
      display: 'none'
    }
  })

  const handleOk = () => {
    // 获取iframe中的内容
    console.log(iframeRef.current.contentDocument.body.innerHTML)
    setVisible(false)
  }
  useEffect(() => {
    setVisible(false)
  }, [])
  const iframeDom = <iframe ref={iframeRef} src="https://example.com" />
  // const modalInstance = ReactDOM.createPortal(<Modal />, 'div')
  return (
    <>
      <button onClick={() => setVisible(true)}>打开 Modal</button>
      <button onClick={() => console.log(iframeRef, iframeDom)}>
        打开 Modal
      </button>
      <ModalBox
        mask={false}
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        {iframeDom}
      </ModalBox>
    </>
  )
}
export default MyComponent
