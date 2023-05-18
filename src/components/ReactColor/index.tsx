import { SetStateAction, useContext } from 'react'
import { Popover } from 'antd'
import { SketchPicker } from 'react-color'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { UserContext } from '@/store/context'
import { state } from '@/store/state'

const dynamicStyle = (props: { color?: string; bgcolor: string }) =>
  css`
    color: ${props.color};
    background: ${props.bgcolor};
    cursor: pointer;
    width: 150px;
    height: 30px;
  `
const Container = styled.div`
  ${dynamicStyle};
`

const ReactColor = () => {
  const {
    state: { theme },
    dispatch
  } = useContext(UserContext)

  console.log('state', state)
  return (
    <Popover
      content={
        <SketchPicker
          color={theme}
          onChange={(e: { hex: SetStateAction<string> }) => {
            // setSubtitleFontColor(e.hex)
            console.log('theme', e.hex)
            dispatch({ type: 'theme', payload: e.hex })
          }}
          onChangeComplete={(e: { hex: SetStateAction<string> }) => {
            // setSubtitleFontColor(e.hex)
            console.log('theme', e.hex)
            dispatch({ type: 'theme', payload: e.hex })
          }}
        />
      }
      trigger="click"
    >
      <div className="create-hotnews-video-popup-operate-item-titleset-item-operate font-color-set">
        <Container bgcolor={theme}>{theme}</Container>
        <div
          className="font-color-set-show"
          style={{ backgroundColor: theme }}
        ></div>
      </div>
    </Popover>
  )
}

export default ReactColor
