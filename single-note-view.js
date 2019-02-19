(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.viewNote = function() {
    return `<div>${this.note.text}</div>`
  }

  exports.SingleNoteView = SingleNoteView
})(this)