function describe (description, test) {
  console.log(description)
  test()
}

function it (message, func) {
  describe('  ' + message, func)
}

function matcher (e) {
  return {
    toBe: function (assertion) {
      if (e === assertion) {
        console.log('.')
      } else {
        console.error('F')
      }
    },
    isA: function (assertion) {
      if (typeof e === typeof assertion) {
        console.log('.')
      } else {
        console.error('F')
      }
    }
  }
}

function expect (e) {
  return matcher(e)
}