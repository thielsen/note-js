(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.updateHTML = function() {
    var html = this.noteListView.returnHTML()
    document.getElementById('app').innerHTML = html
  }

  NoteController.prototype.changeContent = function() {
    var currentNote = this.showNote.bind(this)
    window.addEventListener("hashchange", currentNote)
  }

  NoteController.prototype.showNote = function() {
    this.displayNote(this.findNote(window.location.hash.split("#notes/")[1]))
  }

  NoteController.prototype.displayNote = function(note) {
    var singleNoteView = new SingleNoteView(note)
    var div = document.getElementById('app')
    div.innerHTML = singleNoteView.viewNote()
  }

  NoteController.prototype.findNote = function(id) {
    return this.noteList.returnNotes().find(function(note) {
      return String(note.id) === id
    })
  }

  NoteController.prototype.preventFormSubmit = function() {
    document.getElementById("text").addEventListener("submit", (event) => {
      event.preventDefault()
      this.noteList.add(event.target[0].value);
      this.updateHTML();
    })
  };

  exports.NoteController = NoteController
})(this)

