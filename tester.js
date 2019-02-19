function describe (description, test) {
  console.log(description)
  test()
}

function it (message, func) {
  describe('  ' + message, func)
}

function matcher (toCompare) {
  return {
    toBe: function (assertion) {
      if (toCompare === assertion) {
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    },
    isA: function (assertion) {
      if (toCompare instanceof assertion) {
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    },
    contains: function (assertion) {
      if (toCompare.indexOf(assertion) !== -1) {
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    } 
  }
}

function expect (toCompare) {
  return matcher(toCompare)
}

