import React, { useState, useEffect } from 'react'
import { Tree } from 'antd'
import axios from 'axios'

const { TreeNode } = Tree

function AntdTree(props) {
  const [treeData, setTreeData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('/api/tree')
    setTreeData(response.data)
  }

  const handleNodeClick = async (selectedKeys, info) => {
    const nodeKey = selectedKeys[0]
    const response = await axios.get(`/api/tree/${nodeKey}`)
    const updatedNode = response.data
    setTreeData(
      treeData.map((node) => {
        if (node.key === updatedNode.key) {
          return updatedNode
        }
        return node
      })
    )
  }

  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode {...item} key={item.key} />
    })

  return <Tree onSelect={handleNodeClick}>{renderTreeNodes(treeData)}</Tree>
}

export default AntdTree
