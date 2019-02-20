(function(exports) {
  function Note(text, id) {
    this.text = text
    this.id = id
  }

  Note.prototype.read = function() {
    return this.text
  }

  Note.prototype.check_id = function() {
    return this.id
  }

  exports.Note = Note;
})(this)