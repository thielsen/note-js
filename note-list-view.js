(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {
    list = this.noteList.returnNotes().map(
      note => `<li><div>${note.read()}</div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }

  exports.NoteListView = NoteListView
})(this)
