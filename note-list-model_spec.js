var testNoteList = new NoteList()

describe('noteList', () => {
  it('shows notes when added', () => {
    testNoteList.add('This is the first test note')
    var output = testNoteList.returnNotes()
    expect(output[0].text).toBe("This is the first test note")
  })
})