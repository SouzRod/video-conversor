const fs = require('fs')
const youtubedl = require('youtube-dl')
const home = require('../utils/home')

async function robot(input) {
  const hash = input.split('v=')[1]
  const video = youtubedl(input, ['--format=18'], { cwd: __dirname })
  let fileName = await getVideoInfo(video, hash)
  await makeVideoPipe(video, fileName)
  return true
}

async function getVideoInfo(video, hash) {
  return new Promise((resolve, reject) => {
    video.on('info', function (info) {
      console.log(`> ${info._filename.replace(`-${hash}.mp4`, '').replace(/\(\w*\s*\w*|\w*\s*\w*\s*\w*\)/g, '')} video download starts`)
      return resolve(info._filename.replace(`-${hash}`, '').replace(/\(\w*\s*\w*|\w*\s*\w*\s*\w*\)/g, ''))
    })
  })
}

async function makeVideoPipe(video, fileName) {
  return new Promise((resolve, reject) => {
    video.pipe(fs.createWriteStream(`${home}/videos/A1A1-${fileName}`))
    return resolve(fileName)
  })
}

module.exports = robot