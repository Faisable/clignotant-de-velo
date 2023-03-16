def clignote_gauche():
    Gauche.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    basic.pause(500)
    Gauche.show_color(neopixel.colors(NeoPixelColors.BLACK))
    basic.pause(500)

def on_button_pressed_a():
    for index in range(3):
        clignote_gauche()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    stop.show_color(neopixel.colors(NeoPixelColors.RED))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    droite.show_color(neopixel.colors(NeoPixelColors.ORANGE))
input.on_button_pressed(Button.B, on_button_pressed_b)

droite: neopixel.Strip = None
stop: neopixel.Strip = None
Gauche: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Gauche = strip.range(0, 2)
stop = strip.range(0, 5)
droite = strip.range(3, 2)

def on_forever():
    pass
basic.forever(on_forever)
