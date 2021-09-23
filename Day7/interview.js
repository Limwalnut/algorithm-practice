const arr = [1, [23, 45, [1, 3, 5]]]

let flatArr = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatArr(cur) : cur)
  }, [])
}

console.log(flatArr(arr))
