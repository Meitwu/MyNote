interface datatype {
  key: 'string'
  children: datatype[]
  [key: string]: any
}
//统计父节点的
export function Filterparent(
  data: datatype[],
  parentkey: string[] = [],
  parentlabel: string[] = []
) {
  return (data || []).map((item) => {
    return {
      ...item,
      parentkey: parentkey.concat([item.key]),
      parentlabel: parentlabel.concat([item.label]),
      children: item.children
        ? Filterparent(
            item.children,
            parentkey.concat([item.key]),
            parentlabel.concat([item.label])
          )
        : undefined
    }
  })
}
