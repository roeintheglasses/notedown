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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
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
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: '---> Lists all notes',
    handler: function () {
        console.log(chalk.bold.inverse('Listing all notes!'))
    }
})

yargs.command({
    command: 'read',
    describe: '---> Reads a note',
    handler: function () {
        console.log(chalk.bold.inverse('Read notes!'))
    }
})


yargs.parse()
console.log(chalk.green.bold.inverse("Script Success!!"))