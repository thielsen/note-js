'use strict'

// Test framework

function describe (description, test) {
  console.log(description)
  test()
}

function it (message, func) {
  describe('  ' + message, func)
}

function matcher (e) {
  return {
    toBe: function (assertion) {
      if (e === assertion) {
        console.log('.')
      } else {
        console.error('F')
      }
    },
    isA: function (assertion) {
      if (typeof e === typeof assertion) {
        console.log('.')
      } else {
        console.error('F')
      }
    }
  }
}

function expect (e) {
  return matcher(e)
}

// Code

function Note(text) {
  this.text = text
}

Note.prototype.read = function() {
  return this.text
}

// (function(exports) {
//   function Note(text) {
//     this.text = text
//   }

//   Note.prototype.read = function() {
//     return this.text
//   }

//   exports.Note = Note;
// })(this)



function NoteList() {
  this.list = []
}

NoteList.prototype.add = function(text) {
  var note = new Note(text)
  this.list.push(note)
}

NoteList.prototype.returnNotes = function() {
  return this.list
}

//

function NoteListHTML (noteList) {
  this.noteList = noteList
  this.output = ''
}

NoteListHTML.prototype.returnHTML = function () {
  var notesNumber = this.noteList.returnNotes
  if (notesNumber.length === 0)
    return ''
  else 
    for (var i = 0; i < this.noteList.returnNotes.length; i++)
    output = output + i.toString
}


// Tests

var testNote = Note('This is the first test note')
var testNoteList = new NoteList()

var emptyNoteList = new NoteList()
var emptyTestNoteListHTML = new NoteListHTML(emptyNoteList)

var oneTestNoteList = new NoteList()
oneTestNoteList.add('Favourite food: pesto')
var oneTestNoteListHTML = new NoteListHTML(testNoteList)

describe('note', () => {
  it('shows text when read', () => {
    var output = testNote.read()
    expect(output).toBe('This is the first test note')
  })
})

describe('noteList', () => {
  it('shows notes when added', () => {
    testNoteList.add('This is the first test note')
    var output = testNoteList.returnNotes()
    expect(output[0].text).toBe("This is the first test note")
  })
})

describe('noteListHTML', () => {
  it('outputs an empty string when no notes present', () => {
    var output = emptyTestNoteListHTML.returnHTML()
    expect(output).toBe('')
  })
  it('outputs html string when one note is present', () => {
    var output = oneTestNoteListHTML.returnHTML()
    console.log(output)
    expect(output).toBe('')
  })
})