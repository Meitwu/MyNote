import styled from '@emotion/styled'
const Gridbox = styled('div')({
  display: 'grid', //inline-grid为内联grid布局，宽度被指定
  //   gridTemplateColumns: ' 40px 50px auto 50px', //每列占据的空间
  gridTemplateColumns: ' 40px 50px 1fr 50px', //每列占据的空间
  gridTemplateRows: '25% 70px auto',
  gridColumnGap: '3px', //列间距
  gridRowGap: '3px', //行间距
  '.item': {
    background: '#f56a05'
  }
})
export default function () {
  return (
    <Gridbox>
      <div className="item"></div>
      <div className="item">
        <p className="sub-item"></p>
      </div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item">
        <p className="sub-item"></p>
      </div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item">
        <p className="sub-item"></p>
      </div>
      <div className="item"></div>
    </Gridbox>
  )
}
