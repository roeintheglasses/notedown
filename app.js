const validator = require('validator')
const chalk = require('chalk')
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
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
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
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: '---> Lists all notes',
    handler: () => {
        console.log(chalk.bold.inverse('Listing all notes!'))
    }
})

yargs.command({
    command: 'read',
    describe: '---> Reads a note',
    handler: () => {
        console.log(chalk.bold.inverse('Read notes!'))
    }
})

yargs.parse()