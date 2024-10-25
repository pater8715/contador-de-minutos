input.onButtonPressed(Button.A, function () {
    Contando = true
})
input.onButtonPressed(Button.AB, function () {
    Contando = false
    minutos = 0
    segundos = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Contando = false
})
let segundos = 0
let minutos = 0
let Contando = false
Contando = false
minutos = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (Contando == true) {
        basic.showNumber(minutos)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        segundos += 1
    } else {
        basic.showIcon(IconNames.Sad)
    }
    if (segundos == 10) {
        minutos += 1
        segundos = 0
    }
})
