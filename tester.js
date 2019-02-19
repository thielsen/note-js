function describe (description, test) {
  console.log(`%c${description}`, "color: blue")
  test()
}

function it (message, func) {
  describe('  ' + message, func)
}

function matcher (toCompare) {
  return {
    toBe: function (assertion) {
      if (toCompare === assertion) {
        console.log('%c    PASS', "color: green")
      } else {
        console.error('    FAIL')
      }
    },
    isA: function (assertion) {
      if (toCompare instanceof assertion) {
        console.log('%c    PASS', "color: green")
      } else {
        console.error('    FAIL')
      }
    },
    contains: function (assertion) {
      if (toCompare.indexOf(assertion) !== -1) {
        console.log('%c    PASS', "color: green")
      } else {
        console.error('    FAIL')
      }
    } 
  }
}

function expect (toCompare) {
  return matcher(toCompare)
}

