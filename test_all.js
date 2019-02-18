// Test framework

const describe = (description, test) => {
  console.log(description)
  test()
}

const it = (message, func) => describe('  ' + message, func)

const matcher = (e) => ({
  toBe: (assertion) => {
    if (e === assertion) {
      console.log('.')
    } else {
      console.log('F')
    }
  }
})

const expect = (e) => matcher(e)

// Code

function Note(text) {
  this.text = text
}

Note.prototype.read = function() {
  return this.text
}

// Tests

note = new Note('This is the first test note')

describe('note', () => {
  it('shows text when read', () => {
    const output = note.read()
    expect(output).toBe('This is the first test note')
  })
})