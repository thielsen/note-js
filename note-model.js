(function(exports) {
  function Note(text, id) {
    this.text = text
    this.id = id
  }

  Note.prototype.read = function() {
    return this.text
  }

  Note.prototype.checkId = function() {
    return this.id
  }

  exports.Note = Note;
})(this)