import React, { useMemo, useState } from 'react'
import { Modal, Button, message } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // 导入编辑器样式
import './custom-styles.css' // 你的自定义样式文件
import useSetState from '@/hooks/usesetstae'
const RichTextEditor = (props) => {
  const { value, onChange } = props
  const InputRef = React.useRef()
  const [state, setstate] = useSetState({
    imgopen: false,
    src: '',
    file: undefined
  })

  const handleChange = (html) => {
    // setEditorHtml(html)
    // onChange(html)
  }
  // 自定义工具栏
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        // 或者针对某一个配置项的key值，进行配置
        [{ header: [1, 2, false] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        ['link', 'image'],
        ['clean'],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ color: [] }, { background: [] }]
      ],
      handlers: {
        image: () => {
          setstate({ imgopen: true })
        }
      }
    }
  }

  const hideUploadCancel = () => {
    setstate({ imgopen: false })
  }
  const hideUploadOk = () => {
    setstate({ imgopen: false })
  }
  function changeImageBeforeUpload(e) {
    const file = e.target.files[0]
    if (!file) {
      return
    }
    let src
    // 匹配类型为image/开头的字符串
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      src = URL.createObjectURL(file)
    } else {
      message.error('图片上传只支持JPG/PNG格式,请重新上传！')
      return
    }
    if (file.size / 1024 / 1024 > 5) {
      message.error('图片上传大小不要超过5MB,请重新上传！')
      return
    }
    setstate({
      src: src,
      file: file
    })
  }

  function selectImage() {
    InputRef.current && InputRef.current.click() //点击modal的html结构中的input标签
  }

  const reactQuillcom = useMemo(() => {
    return (
      <div className="rich-text-editor">
        <ReactQuill
          modules={modules}
          value={value}
          onChange={handleChange}
          placeholder="Write something..."
        />
      </div>
    )
  }, [modules, value])

  return (
    <div>
      <Button
        onClick={() => {
          setstate({ imgopen: true })
        }}
      >
        11
      </Button>
      {reactQuillcom}
      <Modal
        title="上传图片"
        open={state.imgopen}
        onCancel={hideUploadCancel}
        onOk={hideUploadOk}
        maskClosable={false}
        mask={false}
        width={500}
      >
        <div className="top_btn top_btn_upload">
          <div>
            <Button
              onClick={selectImage}
              style={{ background: '#18ade4', border: 'none', color: '#fff' }}
            >
              选择图片
            </Button>
            <input
              ref={InputRef}
              type="file"
              accept="image/*"
              style={{ width: '100px', border: 'none', visibility: 'hidden' }}
              onChange={changeImageBeforeUpload}
            />
          </div>
          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            {state.src ? (
              <img
                src={state.src}
                alt=""
                style={{ maxWidth: '100%', height: '300px' }}
              />
            ) : (
              <div
                style={{
                  background: '#f2f2f2',
                  width: '100%',
                  height: '300px'
                }}
              ></div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default RichTextEditor
