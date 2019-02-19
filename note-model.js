(function(exports) {
  function Note(text) {
    this.text = text
    this.id = 0
  }

  Note.prototype.read = function() {
    return this.text
  }

  Note.prototype.check_id = function() {
    return this.id
  }

  exports.Note = Note;
})(this)