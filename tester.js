const describe = (description, test) => {
  console.log(description)
  test()
}

const it = (message, func) => describe('  ' + message, func)

const matcher = (e) => ({
  toBe: (asssertion) => {
    if (e === assertion) {
      console.log('.')
      return true
    } else {
      console.log('F')
      return false
    }
  }
})

const expect = (e) => matcher(e)

module.exports = {
  describe,
  expect,
  it,
  matcher
}