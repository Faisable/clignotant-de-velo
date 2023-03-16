function clignote_droite () {
    droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    droite.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
}
function clignote_gauche () {
    Gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        clignote_gauche()
    }
})
input.onButtonPressed(Button.AB, function () {
    stop.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        clignote_droite()
    }
})
let droite: neopixel.Strip = null
let stop: neopixel.Strip = null
let Gauche: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Gauche = strip.range(0, 2)
stop = strip.range(0, 5)
droite = strip.range(3, 2)
basic.forever(function () {
	
})
