basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.clearScreen()
basic.pause(500)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    . # . # .
    # . # . #
    `)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
