const Index: React.FC = () => {
  function result<T>(val: T): T {
    console.log(val)
    return val
  }

  function startClass<T extends string | number, U extends string | number>(
    a: T,
    b: U
  ): string {
    return String(a) + b
  }
  console.log('startClass', startClass('1', '1'))

  function result1<T extends string>(val: T): T {
    console.log(val.length)
    return val
  }

  function mergeArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = []
    for (const array of arrays) {
      result.push(...array)
    }
    return result
  }

  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]
  const mergedArray = mergeArrays(array1, array2)

  console.log(mergedArray) // 输出 [1, 2, 3, 4, 5, 6]

  return <div>Index</div>
}
export default Index
