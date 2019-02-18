// Test framework

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
        console.log('F')
      }
    }
  }
}

function expect (e) {
  return matcher(e)
}

// Code

function Note(text) {
  this.text = text
}

Note.prototype.read = function() {
  return this.text
}

function NoteList() {
  this.list = []
}

NoteList.prototype.add = function(text) {
  note = new Note(text)
  this.list.push(note)
}

NoteList.prototype.returnNotes = function() {
  return this.list
}

// Tests

note = new Note('This is the first test note')
notes = new NoteList()

describe('note', () => {
  it('shows text when read', () => {
    const output = note.read()
    expect(output).toBe('This is the first test note')
  })
})

describe('noteList', () => {
  it('shows notes when added', () => {
    notes.add('This is the first test note')
    const output = notes.returnNotes()
    expect(output[0]).toBe(note)
  })
})