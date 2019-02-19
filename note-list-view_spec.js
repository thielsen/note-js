var emptyNoteList = new NoteList()
var emptyTestNoteListView = new NoteListView(emptyNoteList)

var oneTestNoteList = new NoteList()
oneTestNoteList.add('Favourite ham: ham')
var oneTestNoteListView = new NoteListView(oneTestNoteList)

var multiTestNoteList = new NoteList()
multiTestNoteList.add('Favourite cat: cat')
multiTestNoteList.add('Favourite dog: big')
var multiTestNoteListView = new NoteListView(multiTestNoteList)

var char30NoteList = new NoteList()
char30NoteList.add('1234567890abcdefghij..........')
var char30NoteListView = new NoteListView(char30NoteList)

describe('noteListView', () => {
  it('outputs an empty string when no notes present', () => {
    var output = emptyTestNoteListView.returnHTML()
    expect(output).toBe("<ul></ul>")
  })
  it('outputs html string when one note is present', () => {
    var output = oneTestNoteListView.returnHTML()
    expect(output).toBe('<ul><li><div>Favourite ham: ham</div></li></ul>')
  })
  it('outputs html string when multiple notes are present', () => {
    var output = multiTestNoteListView.returnHTML()
    expect(output).toBe('<ul><li><div>Favourite cat: cat</div></li><li><div>Favourite dog: big</div></li></ul>')
  })
  it('only outputs first 20 characters', () => {
    var output = char30NoteListView.returnHTML()
    expect(output).toBe('<ul><li><div>1234567890abcdefghij</div></li></ul>')
  })
})