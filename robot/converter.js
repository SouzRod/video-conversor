const converter = require('video-converter');
const home = require('../utils/home')
const fs = require('fs')

async function robot() {
    setTimeout(() => {
        readdir(`${home}/videos/`)
            .then(fileName => {
                converter.setFfmpegPath("/usr/local/bin/ffmpeg", function (err) {
                    if (err) throw err;
                });

                converter.convert(`${home}/videos/${fileName[0]}`, `${home}/musicas/${fileName[0].replace('.mp4', '.mp3').replace('A1A1-', '')}`, function (err) {
                    if (err) throw err;
                    console.log("> Video successfully downloaded");
                });
                fs.unlinkSync(`${home}/videos/${fileName[0]}`)
            })
    }, 500)
}

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) => {
            if (err) {
                reject(err)
            } else {
                resolve(paths)
            }
        })
    })
}
module.exports = robot