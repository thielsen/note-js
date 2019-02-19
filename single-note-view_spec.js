var note = new Note('Favourite thing: Cat')
var singleNoteView = new SingleNoteView(note)

describe('singleNoteView', () => {
  it('shows the note on the page', () => {
    expect(singleNoteView.viewNote()).toBe('Favourite thing: Cat')
  })
})
