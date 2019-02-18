var test = require('./tester.js');
var note = require('./note-model.js');

var testnote = new note.Note()

test.describe('note', () => {
  test.it('shows text when read', () => {
    const output = note.read()
    expect(output).toBe('This is the first test note')
  })
})