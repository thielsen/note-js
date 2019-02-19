var emptyNoteList = new NoteList()
var emptyTestNoteListView = new NoteListView(emptyNoteList)

var oneTestNoteList = new NoteList()
oneTestNoteList.add('Favourite food: pesto')
var oneTestNoteListView = new NoteListView(oneTestNoteList)

var multiTestNoteList = new NoteList()
multiTestNoteList.add('Favourite food: pesto')
multiTestNoteList.add('Favourite dog: big')
var multiTestNoteListView = new NoteListView(multiTestNoteList)

describe('noteListHTML', () => {
  it('outputs an empty string when no notes present', () => {
    var output = emptyTestNoteListView.returnHTML()
    console.log(output)
    expect(output).toBe("<ul></ul>")
  })
  it('outputs html string when one note is present', () => {
    var output = oneTestNoteListView.returnHTML()
    console.log(output)
    expect(output).toBe('<ul><li><div>Favourite food: pesto</div></li></ul>')
  })
  it('outputs html string when multiple notes are present', () => {
    var output = multiTestNoteListView.returnHTML()
    console.log(output)
    expect(output).toBe('<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite dog: big</div></li></ul>')
  })
})