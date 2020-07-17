const robot = {
    converter: require('./robot/converter'),
    video: require('./robot/video'),
    text: require('./robot/text')
}
async function main(){
    const input = robot.text()
    await robot.video(input)
    await robot.converter()
}
main()