import React, { useState, useTransition } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  const [searchQuery, setSearchQuery] = useState([])
  const [loading, startTransition] = useTransition()

  const handleChange = (e) => {
    setValue(e.target.value)
    // 延迟更新
    startTransition(() => {
      setSearchQuery(Array(20000).fill(e.target.value))
    })
  }

  return (
    <div className="App">
      <p>
        useTransition
        用于降低渲染优先级（分别用来包裹计算量大的function和value，歼敌优先级，减少重复渲染次数）
      </p>
      <input value={value} onChange={handleChange} />
      {loading ? (
        <p>loading...</p>
      ) : (
        searchQuery.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  )
}
