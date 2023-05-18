import styled from '@emotion/styled'
import CardBox from '@/components/Cardbox'

const Basediv = styled('div')({
  '.ant-card-meta-title': {
    textAlign: 'center'
  },
  '.ant-card-body': {
    background: '#f7f3f7',
    color: '#695d69'
  }
})

const Sector = styled('div')({
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  backgroundColor: 'green',
  clipPath: 'polygon(50% 50%, 0% 0%, 100% 0)'
})

export default function CssDemo() {
  return (
    <Basediv>
      <CardBox
        title="css扇形"
        description={
          <pre>
            width: '100px',
            <br />
            height: '100px',
            <br />
            borderRadius: '100%', backgroundColor: 'green',
            <br />
            -webkit-clip-path: 'polygon(50% 50%, 0%0%, 100% 0)'
          </pre>
        }
      >
        <Sector />
      </CardBox>
    </Basediv>
  )
}
