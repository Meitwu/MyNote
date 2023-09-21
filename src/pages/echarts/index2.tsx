import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Column } from '@ant-design/plots'

const DemoColumn = () => {
  const data = [
    {
      year: ' 百度',
      value: 101,
      value1: 101,
      type: '社招前端岗位'
    },
    {
      year: ' 阿里巴巴',
      value: 123,
      value1: 123,
      type: '社招前端岗位'
    },
    {
      year: ' 腾讯',
      value: 412,
      value1: 412,
      type: '社招前端岗位'
    },
    {
      year: ' 字节跳动',
      value: 701,
      value1: 701,
      type: '社招前端岗位'
    },
    {
      year: '美团',
      value: 156,
      value1: 156,
      type: '社招前端岗位'
    },
    {
      year: '网易',
      value: 77,
      value1: 77,
      type: '社招前端岗位'
    },
    {
      year: '快手',
      value: 44,
      value1: 44,
      type: '社招前端岗位'
    },
    {
      year: 'B站',
      value: 30,
      value1: 30,
      type: '社招前端岗位'
    },
    {
      year: '米哈游',
      value: 11,
      value1: 11,
      type: '社招前端岗位'
    },

    {
      year: '京东',
      value: 38,
      value1: 38,
      type: '社招前端岗位'
    },
    {
      year: '小米',
      value: 42,
      value1: 42,
      type: '社招前端岗位'
    },
    {
      year: '拼多多',
      value: 28,
      value1: 28,
      type: '社招前端岗位'
    },
    {
      year: '携程',
      value: 9,
      value1: 9,
      type: '社招前端岗位'
    },
    {
      year: '58同城',
      value: 10,
      value1: 10,
      type: '社招前端岗位'
    },
    {
      year: '360',
      value: 10,
      value1: 10,
      type: '社招前端岗位'
    },

    {
      year: ' 百度',
      value: 1056,
      value1: 1056,
      type: '社招技术岗位'
    },
    {
      year: ' 阿里巴巴',
      value: 1552,
      value1: 1552,
      type: '社招技术岗位'
    },
    {
      year: ' 腾讯',
      value: 3679,
      value1: 3679,
      type: '社招技术岗位'
    },
    {
      year: ' 字节跳动',
      value: 6384,
      value1: 6384,
      type: '社招技术岗位'
    },
    {
      year: '美团',
      value: 944,
      value1: 944,
      type: '社招技术岗位'
    },
    {
      year: '网易',
      value: 422,
      value1: 422,
      type: '社招技术岗位'
    },
    {
      year: '快手',
      value: 683,
      value1: 683,
      type: '社招技术岗位'
    },
    {
      year: 'B站',
      value: 297,
      value1: 297,
      type: '社招技术岗位'
    },
    {
      year: '米哈游',
      value: 123,
      value1: 123,
      type: '社招技术岗位'
    },
    {
      year: '京东',
      value: 510,
      value1: 510,
      type: '社招技术岗位'
    },
    {
      year: '小米',
      value: 436,
      value1: 436,
      type: '社招技术岗位'
    },
    {
      year: '拼多多',
      value: 449,
      value1: 449,
      type: '社招技术岗位'
    },
    {
      year: '携程',
      value: 66,
      value1: 66,
      type: '社招技术岗位'
    },
    {
      year: '58同城',
      value: 93,
      value1: 93,
      type: '社招技术岗位'
    },
    {
      year: '360',
      value: 80,
      value1: 80,
      type: '社招技术岗位'
    }
  ]
  const config = {
    data,
    title: {
      text: 'Weekly Sales',
      style: {
        textAlign: 'center',
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    isStack: true,
    isPercent: true,
    xField: 'year',
    yField: 'value',
    titlt: '大厂',
    yAxis: {
      label: {
        formatter: (value) => {
          return `${value * 100}%`
        }
      }
    },
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      formatter: (value) => {
        return value.value1
      },
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position'
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap'
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color'
        }
      ]
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  }
  return <Column {...config} />
}

export default DemoColumn
