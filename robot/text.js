const { question } = require('readline-sync')

function robot() {
    return question('> Enter the youtube video link: ')
}

module.exports = robot