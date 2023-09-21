// 翻转字符串

function reversestring(str) {
  // reverse函数
  const strarr = str.split('').reverse().join('')
  return strarr
  //unshift添加到尾部
  // const newarr = []
  // str.split('').forEach((item) => {
  //   newarr.unshift(item)
  // })
  // return newarr.join('')
}
console.log('回文', reversestring('abcdef'))

//判断回文字符串
function isreverse(str) {
  if (str === reversestring(str)) {
    return '是回文字符串'
  }
  return '不是回文字符串'
}
console.log('回文：', isreverse('abcba'))

//1，1，2，3，5，8，13，2 (编写一个函数，输出斐波那契数列的前 n 项)

function numlist(num) {
  const arr = []
  for (let i = 0; i < num; i++) {
    if ([0, 1].includes(i)) {
      arr.push(1)
    } else {
      arr.push(arr[i - 2] + arr[i - 1])
    }
  }
  return arr.join(',')
}

console.log('斐波那契数列', numlist(5))

//数组去重
function Filterarr(arr) {
  const newarr = []
  if (arr && Array.isArray(arr)) {
    arr.forEach((item, i) => {
      if (!newarr.includes(item)) {
        newarr.push(item)
      }
    })
  } else {
    throw new Error('function must be params a Array type')
  }
  return newarr
}

console.log(
  '数组去重',
  Filterarr([{ name: 1 }, { name: 1 }, 1, 2, 3, 4, 4, 4, 2, 3, 6])
)
