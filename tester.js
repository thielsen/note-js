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
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    },
    isA: function (assertion) {
      if (e instanceof assertion) {
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    },
    contains: function (assertion) {
      if (e.indexOf(assertion) !== -1) {
        console.log('%cPASS', "color: green")
      } else {
        console.error('FAIL')
      }
    } 
  }
}

function expect (e) {
  return matcher(e)
}