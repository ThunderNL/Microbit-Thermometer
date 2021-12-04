input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() - 25.5)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() + 25.5)
})
led.setBrightness(0)
basic.forever(function () {
    if (input.temperature() == -5) {
        basic.showLeds(`
            . . # # #
            . . # . .
            # # # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == -4) {
        basic.showLeds(`
            . . # . #
            . . # . #
            # # # # #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == -3) {
        basic.showLeds(`
            . . # # #
            . . . . #
            # # # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == -2) {
        basic.showLeds(`
            . . # # #
            . . . . #
            # # # # #
            . . # . .
            . . # # #
            `)
    }
    if (input.temperature() == -1) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # # . . #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 0) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # . #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 1) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 2) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . # . .
            . . # # #
            `)
    }
    if (input.temperature() == 3) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 4) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 5) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 6) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 7) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 8) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 9) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 10) {
        basic.showLeds(`
            . . # # #
            . . # . #
            # . # . #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 11) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . . #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 12) {
        basic.showLeds(`
            . . # # #
            . . . . #
            # . # # #
            . . # . .
            . . # # #
            `)
    }
    if (input.temperature() == 13) {
        basic.showLeds(`
            . . # # #
            . . . . #
            # . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 14) {
        basic.showLeds(`
            . . # . #
            . . # . #
            # . # # #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 15) {
        basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 16) {
        basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 17) {
        basic.showLeds(`
            . . # # #
            . . . . #
            # . . . #
            . . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 18) {
        basic.showLeds(`
            . . # # #
            . . # . #
            # . # # #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 19) {
        basic.showLeds(`
            . . # # #
            . . # . #
            # . # # #
            . . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 20) {
        basic.showLeds(`
            . . # # #
            # . # . #
            . . # . #
            # . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 21) {
        basic.showLeds(`
            . . . . #
            # . . . #
            . . . . #
            # . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 22) {
        basic.showLeds(`
            . . # # #
            # . . . #
            . . # # #
            # . # . .
            . . # # #
            `)
    }
    if (input.temperature() == 23) {
        basic.showLeds(`
            . . # # #
            # . . . #
            . . # # #
            # . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 24) {
        basic.showLeds(`
            . . # . #
            # . # . #
            . . # # #
            # . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 25) {
        basic.showLeds(`
            . . # # #
            # . # . .
            . . # # #
            # . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 26) {
        basic.showLeds(`
            . . # # #
            # . # . .
            . . # # #
            # . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 27) {
        basic.showLeds(`
            . . # # #
            # . . . #
            . . . . #
            # . . . #
            . . . . #
            `)
    }
    if (input.temperature() == 28) {
        basic.showLeds(`
            . . # # #
            # . # . #
            . . # # #
            # . # . #
            . . # # #
            `)
    }
    if (input.temperature() == 29) {
        basic.showLeds(`
            . . # # #
            # . # . #
            . . # # #
            # . . . #
            . . # # #
            `)
    }
    if (input.temperature() == 30) {
        basic.showLeds(`
            # . # # #
            . . # . #
            # . # . #
            . . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 31) {
        basic.showLeds(`
            # . . . #
            . . . . #
            # . . . #
            . . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 32) {
        basic.showLeds(`
            # . # # #
            . . . . #
            # . # # #
            . . # . .
            # . # # #
            `)
    }
    if (input.temperature() == 33) {
        basic.showLeds(`
            # . # # #
            . . . . #
            # . # # #
            . . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 34) {
        basic.showLeds(`
            # . # . #
            . . # . #
            # . # # #
            . . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 35) {
        basic.showLeds(`
            # . # # #
            . . # . .
            # . # # #
            . . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 36) {
        basic.showLeds(`
            # . # # #
            . . # . .
            # . # # #
            . . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 37) {
        basic.showLeds(`
            # . # # #
            . . . . #
            # . . . #
            . . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 38) {
        basic.showLeds(`
            # . # # #
            . . # . #
            # . # # #
            . . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 39) {
        basic.showLeds(`
            # . # # #
            . . # . #
            # . # # #
            . . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 40) {
        basic.showLeds(`
            # . # # #
            # . # . #
            . . # . #
            # . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 41) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . . . . #
            # . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 42) {
        basic.showLeds(`
            # . # # #
            # . . . #
            . . # # #
            # . # . .
            # . # # #
            `)
    }
    if (input.temperature() == 43) {
        basic.showLeds(`
            # . # # #
            # . . . #
            . . # # #
            # . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 44) {
        basic.showLeds(`
            # . # . #
            # . # . #
            . . # # #
            # . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 45) {
        basic.showLeds(`
            # . # # #
            # . # . .
            . . # # #
            # . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 46) {
        basic.showLeds(`
            # . # # #
            # . # . .
            . . # # #
            # . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 47) {
        basic.showLeds(`
            # . # # #
            # . . . #
            . . . . #
            # . . . #
            # . . . #
            `)
    }
    if (input.temperature() == 48) {
        basic.showLeds(`
            # . # # #
            # . # . #
            . . # # #
            # . # . #
            # . # # #
            `)
    }
    if (input.temperature() == 49) {
        basic.showLeds(`
            # . # # #
            # . # . #
            . . # # #
            # . . . #
            # . # # #
            `)
    }
    if (input.temperature() == 50) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
})
