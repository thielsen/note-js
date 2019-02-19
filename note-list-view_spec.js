var emptyNoteList = new NoteList()
var emptyTestNoteListHTML = new NoteListHTML(emptyNoteList)

var oneTestNoteList = new NoteList()
oneTestNoteList.add('Favourite food: pesto')
var oneTestNoteListHTML = new NoteListHTML(oneTestNoteList)

var multiTestNoteList = new NoteList()
multiTestNoteList.add('Favourite food: pesto')
multiTestNoteList.add('Favourite dog: big')
var multiTestNoteListHTML = new NoteListHTML(multiTestNoteList)

describe('noteListHTML', () => {
  it('outputs an empty string when no notes present', () => {
    var output = emptyTestNoteListHTML.returnHTML()
    console.log(output)
    expect(output).toBe("<ul></ul>")
  })
  it('outputs html string when one note is present', () => {
    var output = oneTestNoteListHTML.returnHTML()
    console.log(output)
    expect(output).toBe('<ul><li><div>Favourite food: pesto</div></li></ul>')
  })
  it('outputs html string when multiple notes are present', () => {
    var output = multiTestNoteListHTML.returnHTML()
    console.log(output)
    expect(output).toBe('<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite dog: big</div></li></ul>')
  })
})