(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {
    list = this.noteList.returnNotes().map(
      note => `<li><div><a href="#notes/${note.checkId()}">${note.read().slice(0, 20)}</a></div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }

  exports.NoteListView = NoteListView
})(this)
