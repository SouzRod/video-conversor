const { question } = require('readline-sync')

function robot() {
    return question('Digite o link do vídeo do youtube: ')
}

module.exports = robot