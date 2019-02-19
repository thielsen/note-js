(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.updateHTML = function() {
    var html = this.noteListView.returnHTML()
    document.getElementById('app').innerHTML = html
  }

  exports.NoteController = NoteController
})(this)

