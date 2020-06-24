radio.setGroup(15)
basic.forever(function () {
    radio.sendValue("x", Math.map(input.acceleration(Dimension.X), 0, 1023, 30, 140))
    radio.sendValue("y", Math.map(input.acceleration(Dimension.Y), 0, 1023, 30, 140))
    led.plotBarGraph(
    Math.map(input.acceleration(Dimension.Z), 0, 1023, 0, 5),
    0
    )
    basic.pause(50)
})
