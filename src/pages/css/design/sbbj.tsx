import styled from '@emotion/styled'
const Boxcontainer = styled('div')({
  color: 'aliceblue',
  '.header': {
    width: '100%',
    height: '30px',
    background: ' #d5d5d5'
  },
  '.content': {
    overflow: 'hidden',
    padding: ' 0 180px'
  },
  '.footer': {
    width: '100%',
    height: '30px',
    background: '#d5d5d5'
  },
  '.middle': {
    position: 'relative',
    width: '100%',
    float: 'left',
    height: '80px',
    background: 'green'
  },
  '.left': {
    position: 'relative',
    width: '180px',
    float: 'left',
    left: '-180px',
    height: '80px',
    marginLeft: '-100%',
    background: '#ffd447'
  },
  '.right': {
    position: 'relative',
    width: '180px',
    float: 'left',
    right: '-180px',
    height: '80px',
    marginLeft: '-180px',
    background: 'pink'
  }
})

export default function Sbbj() {
  return (
    <Boxcontainer>
      <div className="header">header</div>
      <div className="content">
        <div className="middle">content-middle</div>
        <div className="left">content-left</div>
        <div className="right">content-right</div>
      </div>
      <div className="footer">footer</div>
    </Boxcontainer>
  )
}
