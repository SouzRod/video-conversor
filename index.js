const robot = {
    convert: require('./robot/convert'),
    video: require('./robot/video'),
    text: require('./robot/text')
}
async function main(){
    const input = robot.text()
    await robot.video(input)
    await robot.convert()
}
main()