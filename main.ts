input.onButtonPressed(Button.A, function () {
    if (true) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            if (sprite.get(LedSpriteProperty.Y) == 2) {
                basic.showIcon(IconNames.Heart)
                game.addScore(1)
            } else {
                basic.showIcon(IconNames.No)
                game.addScore(-1)
            }
        } else {
            basic.showIcon(IconNames.No)
            game.addScore(-1)
        }
        while (game.score() == 5) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showString("you won")
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showString("you won")
            basic.pause(5000)
            game.setScore(0)
            sprite.delete()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    basic.showString("restart")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
function move () {
    for (let index = 0; index < 5; index++) {
        sprite.move(1)
        basic.pause(70)
    }
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Right, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.Right, 90)
        basic.pause(70)
        sprite.move(1)
    }
    for (let index = 0; index < 5; index++) {
        sprite.move(1)
        basic.pause(70)
    }
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Left, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.Left, 90)
    }
    for (let index = 0; index < 5; index++) {
        sprite.move(1)
        basic.pause(70)
    }
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Right, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.Right, 90)
    }
    for (let index = 0; index < 5; index++) {
        sprite.move(1)
        basic.pause(70)
    }
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Left, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.Left, 90)
    }
    for (let index = 0; index < 5; index++) {
        sprite.move(1)
        basic.pause(70)
    }
    sprite.turn(Direction.Right, 180)
    sprite.move(5)
    sprite.turn(Direction.Right, 90)
    sprite.move(5)
    sprite.turn(Direction.Right, 90)
    basic.pause(70)
}
let sprite: game.LedSprite = null
basic.showString("PRESS HERE 5 TIMES")
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
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
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showString("IN THE MIDDLE")
sprite = game.createSprite(2, 2)
basic.forever(function () {
    move()
    if (sprite.isDeleted()) {
        sprite = game.createSprite(0, 0)
        move()
    }
    if (pins.analogReadPin(AnalogPin.P0) == 10) {
        if (true) {
            if (sprite.get(LedSpriteProperty.X) == 2) {
                if (sprite.get(LedSpriteProperty.Y) == 2) {
                    basic.showIcon(IconNames.Heart)
                    game.addScore(1)
                } else {
                    basic.showIcon(IconNames.No)
                    game.addScore(-1)
                }
            } else {
                basic.showIcon(IconNames.No)
                game.addScore(-1)
            }
            while (game.score() == 1) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    # # # # #
                    . . . . .
                    `)
                basic.showString("you won")
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    # # # # #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    # # # # #
                    . . . . .
                    `)
                servos.P0.setAngle(180)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    # # # # #
                    . . . . .
                    `)
                basic.showString("you won")
                basic.pause(5000)
                game.setScore(0)
                sprite.delete()
            }
        }
    }
})
