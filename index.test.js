const pyzip = require('./index')

describe('invalid params, return empty array', () => {
  test('no params', () => {
    expect(pyzip()).toEqual([])
    expect(pyzip([1, 2, 3])).toEqual([])
  })

  test('other types', () => {
    expect(pyzip('', '')).toEqual([]) // string
    expect(pyzip(1, 2)).toEqual([]) // number
    expect(pyzip(undefined, undefined)).toEqual([]) // undefined
    expect(pyzip(1, '2')).toEqual([]) // combined
  })
})

describe('valid params', () => {
  test('normal case', () => {
    const result = pyzip(['a', 'b', 'c', 'd'], [1, 2, 3, 4])
    const expected = [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
    expect(result).toEqual(expected)
  })

  test('not the same length, return less', () => {
    const result = pyzip(['a', 'b', 'c', 'd'], [1, 2, 3, 4])
    const expected = [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
    expect(result).toEqual(expected)
  })

  test('not the same length 2, return less', () => {
    const result = pyzip(['a', 'b'], [1, 2, 3])
    const expected = [['a', 1], ['b', 2]]
    expect(result).toEqual(expected)
  })

  test('more than 2 args', () => {
    const result = pyzip(['a', 'b', 'c'], [1, 2, 3, 4], ['A', 'B'])
    const expected = [['a', 1, 'A'], ['b', 2, 'B']]
    expect(result).toEqual(expected)
  })

  test('empty array', () => {
    expect(pyzip([], [])).toEqual([])
  })
})
