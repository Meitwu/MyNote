import { Card } from 'antd'
const { Meta } = Card
const CardBox = ({ children, title, description }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Card
        hoverable
        style={{
          width: 200
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
        <Meta title={title} />
      </Card>
      <Card
        hoverable
        style={{
          marginLeft: 16
          //   width: 200
        }}
      >
        {description}
      </Card>
    </div>
  )
}
export default CardBox
