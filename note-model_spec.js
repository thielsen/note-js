var testNote = new Note('This is the first test note', 0)

describe('note', () => {
  it('shows text when read', () => {
    var output = testNote.read()
    expect(output).toBe('This is the first test note')
  })
  it('has a note identifier of 0', () => {
    var output = testNote.checkId()
    expect(output).toBe(0)
  })
})