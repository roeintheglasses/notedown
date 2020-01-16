const validator = require('validator')
const yargs = require('yargs')

const notes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: '---> Adds a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        message: {
            describe: 'Note Message',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.message)
    }
})

yargs.command({
    command: 'remove',
    describe: '---> Removes a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: '---> Lists all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: '---> Reads a note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()