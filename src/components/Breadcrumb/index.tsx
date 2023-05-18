import { Breadcrumb } from 'antd'

export interface navtype {
  href: string
  label: string
}
const App = (props: { dataset: navtype[] }) => {
  const { dataset } = props
  return (
    <div style={{ marginLeft: 16 }}>
      <Breadcrumb
        items={dataset.map((item) => ({
          title: <a href={`#${item.href}`}>{item.label}</a>
        }))}
      />
    </div>
  )
}

export default App
