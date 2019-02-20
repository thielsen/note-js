(function(exports) {
  function NoteList() {
    this.notes = [];
    this.id = 0
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  NoteList.prototype.add = function(text) {
    note = new Note(text, this.id);
    this.notes.push(note);
    this.id++
  };

  exports.NoteList = NoteList;
})(this);