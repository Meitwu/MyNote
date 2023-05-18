import styled from '@emotion/styled'
const Boxcontainer = styled('div')({
  color: 'aliceblue',
  '.header': {
    width: '100%',
    height: '30px',
    background: ' #d5d5d5'
  },
  '.content': {
    overflow: 'hidden'
  },
  '.footer': {
    width: '100%',
    height: '30px',
    background: '#d5d5d5'
  },
  '.middle': {
    width: '100%',
    float: 'left'
  },
  '.inner-middle': {
    width: '100%',
    height: '80px',
    background: 'green'
  },
  '.left': {
    width: '100px',
    float: 'left',
    height: '80px',
    marginLeft: '-100%',
    background: '#ffd447'
  },
  '.right': {
    width: '100px',
    float: 'left',
    height: '80px',
    left: '-100%',
    marginLeft: '-100px',
    background: 'pink'
  }
})

export default function Sfybj() {
  return (
    <Boxcontainer>
      <div className="header"></div>
      <div className="content">
        <div className="middle">
          <div className="inner-middle"></div>
        </div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="footer"></div>
    </Boxcontainer>
  )
}
