import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Pie } from '@ant-design/plots'

const DemoPie = () => {
  const data = [
    {
      type: '4.5-6k',
      value: 31
    },
    {
      type: '6-8k',
      value: 94
    },
    {
      type: '9-10k',
      value: 128
    },
    {
      type: '10-15k',
      value: 329
    },
    {
      type: '15-20k',
      value: 205
    },
    {
      type: '20-30k',
      value: 153
    },
    {
      type: '30-50k',
      value: 42
    }
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}'
    },
    interactions: [
      {
        type: 'pie-legend-active'
      },
      {
        type: 'element-active'
      }
    ]
  }
  return <Pie {...config} />
}
export default DemoPie
