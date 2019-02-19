var testNote = new Note('This is the first test note')

describe('note', () => {
  it('shows text when read', () => {
    var output = testNote.read()
    expect(output).toBe('This is the first test note')
  })
})