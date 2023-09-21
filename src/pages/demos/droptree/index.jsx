import { Tree, Input, Button } from 'antd'
import useBaseRequest from '@/hooks/useBaseRequest'
import { useEffect, useState } from 'react'
import { useSetState } from 'ahooks'

const { Search } = Input
export default function EasyTree(props) {
  const { requestmethod, rendernum = 2 } = props
  const [treeData, setTreeData] = useState([])
  const [state, setState] = useSetState({
    expanded: [],
    searchValue: ''
  })

  const { run: gettreerun, runAsync: getasynctreerun } = useBaseRequest(
    requestmethod,
    {
      manual: true,
      onSuccess: (res, config) => {
        const data = res.result.data.map((item) => ({
          title: item.name,
          key: item.id,
          isLeaf: !item.hasChild
        }))
        //自动展开顶层节点
        if (!treeData.length && data && data.length) {
          setTreeData(data)
          setState({ expanded: [data[0].key] })
          getasynctreerun({ id: data[0].key, tag: 'hum' })
        } else {
          setTreeData((origin) => updateTreeData(origin, config[0]?.id, data))
        }
      }
    }
  )

  useEffect(() => {
    gettreerun({ tag: 'hum' })
  }, [])

  const onExpand = (expandedKeys, expanded) => {
    const expandnode = findnode(treeData, expanded.node.key)
    setState({ expanded: expandedKeys })
    if (
      expanded.expanded === true &&
      expandnode &&
      !expandnode?.children?.length
    ) {
      gettreerun({ id: expanded.node.key, tag: 'hum' })
    }
  }

  //渲染树节点
  const updateTreeData = (list, key, children) =>
    list.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          children
        }
      }
      if (item.children && item.children.length) {
        return {
          ...item,
          children: updateTreeData(item.children, key, children)
        }
      }
      return item
    })

  //找到节点
  const findnode = (list, key) => {
    for (let i = 0; i < list.length; i++) {
      const node = list[i]
      if (node && node.key === key) {
        return node
      }
      // 当所在层次找不到对应的key，才允许到下层children中寻找
      if (
        list.findIndex((item) => item.key === key) < 0 &&
        node &&
        node.children
      ) {
        return findnode(node.children, key)
      }
    }
  }

  const treeprops = {
    onExpand: onExpand,
    treeData: treeData,
    expandedKeys: state.expanded
  }
  //深拷贝
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    const clone = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key])
      }
    }

    return clone
  }

  // 搜索
  const onSearch = (value) => {
    const data = deepClone(treeData)
    console.log('searchByTitle', searchByTitle(value, data))
  }

  function searchByTitle(title, data) {
    const datas = []
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      if (item.title.includes(title)) {
        return [item] // 找到了目标元素，返回它本身
      }
      if (item.children && item.children.length) {
        const result = searchByTitle(title, item.children)
        if (result) {
          // return [item, ...result]; // 在子元素中找到了目标元素，返回它及其所有父元素
          datas.push([item, ...result])
        }
      }
    }
    console.log(datas)
    if (datas.length) {
      return datas
    }
    // return null // 没有找到目标元素，返回null
  }

  async function test(requestparam = [1, 2, 3]) {
    requestparam.forEach(async (item) => {
      console.log(await getasynctreerun({ id: item }))
    })
  }

  return (
    <div>
      <Search onSearch={onSearch} />
      <Button
        onClick={() => {
          test()
        }}
      >
        点击
      </Button>
      <Tree {...treeprops} />
    </div>
  )
}
