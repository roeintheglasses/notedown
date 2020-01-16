const fs = require('fs')
const chalk = require('chalk')

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

const addNote = (title, message) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            message: message
        })
        saveNotes(notes)
        console.log("Title : " + title)
        console.log("Message  : " + message)
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

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellowBright.bold.inverse('\nHere are all of your notes :'))

    notes.forEach(note => {
        console.log(chalk.yellowBright.bold("\nTitle : " + note.title))
        console.log(chalk.cyan.bold("Message : " + note.message))


    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.yellowBright.bold.inverse("\nHere's your note :"))
        console.log(chalk.yellowBright.bold("\nTitle : " + noteToRead.title))
        console.log(chalk.cyan.bold("Message : " + noteToRead.message))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}