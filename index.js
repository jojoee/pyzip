/**
 * Python zip
 *
 * @param {...Array} args
 * @returns {Array}
 */
function pyzip (...args) {
  let result = []

  // check args length
  if (args.length < 2) return []

  // check args type
  // and get shortest length
  // in the same loop to reduce O(n)
  let isValidArgsType = true
  let minLength = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < args.length; i++) {
    const isValidArgType = args[i] instanceof Array
    if (!isValidArgType) return [] // force exit, to reduce computation

    isValidArgsType = isValidArgsType && isValidArgType
    minLength = (minLength < args[i].length) ? minLength : args[i].length
  }

  // process
  for (let i = 0; i < minLength; i++) {
    const item = args.map(arg => arg[i])
    result.push(item)
  }

  return result
}

/* istanbul ignore next */
if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = pyzip
}
