var testNoteList = new NoteList()
var testNoteController = new NoteController(testNoteList)

describe('NoteController', () => {
  it('is instantiated properly', () => {
    expect(testNoteController).isA(NoteController)
  })
  it('changes inner html', () => {
    testNoteList.add('Fave animal: dog')
    testNoteController.updateHTML()
    expect(document.body.innerHTML).contains('Fave animal: dog')
  })
})


