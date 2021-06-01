import { randomPosition } from './src/utlis.js'

function runAway(runner, height, width) {
    runner.style.top = randomPosition(height)
    runner.style.left = randomPosition(width)
}

function init() {
    const runner = document.getElementById("runner")
    const runnerLength = parseInt(runner.style.width)
    const width = document.body.clientWidth - runnerLength
    const height = document.body.clientWidth - runnerLength
    console.log({ runner, width, height })
    runner.addEventListener("mouseover", () => runAway(runner, height, width))
}


window.onload = init()