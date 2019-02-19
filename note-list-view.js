(function(exports) {
  function NoteListHTML(noteList) {
    this.noteList = noteList
  }

  NoteListHTML.prototype.returnHTML = function() {
    list = this.noteList.returnNotes().map(
      note => `<li><div>${note.read()}</div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }

  exports.NoteListHTML = NoteListHTML
})(this)
