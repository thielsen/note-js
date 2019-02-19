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
        console.log('%c.', "color: green")
      } else {
        console.error('F')
      }
    },
    isA: function (assertion) {
      if (e instanceof assertion) {
        console.log('%c.', "color: green")
      } else {
        console.error('F')
      }
    },
    contains: function (assertion) {
      console.log(e.indexOf(assertion))
      console.log(e)
      console.log(assertion)
      if (e.indexOf(assertion) !== -1) {
        console.log('%c.', "color: green")
      } else {
        console.error('F')
      }
    } 
  }
}

function expect (e) {
  return matcher(e)
}