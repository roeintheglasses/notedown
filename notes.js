const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Title : " + title)
        console.log("Body  : " + body)
        console.log(chalk.blueBright.bold.inverse('New note added!'))
    } else {
        console.log(chalk.redBright.bold.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const checkNoteExists = notes.filter((note) => {
        return note.title === title
    })
    const restOfNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (checkNoteExists.length === 0) {
        console.log(chalk.redBright.bold.inverse('Note not found!'))
    } else {
        saveNotes(restOfNotes);
        console.log('Note Title : ' + title)
        console.log(chalk.blueBright.bold.inverse('Note deleted!'))

    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}