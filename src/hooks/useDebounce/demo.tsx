import { useState } from 'react'
import useDebounce from './index'
const Search = () => {
  const [userQuery, setUserQuery] = useState('')
  const delayedQuery = useDebounce((q) => sendQuery(q), 500)
  const onChange = (e) => {
    console.log(e.target.value)
    delayedQuery(e.target.value)
  }
  const sendQuery = (query) => {
    setUserQuery(query)
  }
  return (
    <div>
      <h2>防抖hook</h2>
      <div>
        <label>Search:{userQuery}</label>
      </div>
      <div>
        <label>500ms内input的value change都不会导致userQuery变化</label>
      </div>
      <input onChange={onChange} />
    </div>
  )
}
export default Search
