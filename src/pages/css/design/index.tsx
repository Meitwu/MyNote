import React from 'react'
import { Collapse } from 'antd'
import Sbbj from './sbbj'
import Sfybj from './sfybj'
import Gridbj from './grid'
import './index.less'

const { Panel } = Collapse

const App: React.FC = () => (
  <Collapse accordion>
    <Panel header="三栏--圣杯布局" key="1">
      <Sbbj />
    </Panel>
    <Panel header="三栏--双飞翼布局" key="2">
      <Sfybj />
    </Panel>
    <Panel header="Grid 布局" key="3">
      <Gridbj />
    </Panel>
  </Collapse>
)

export default App
