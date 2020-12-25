input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        if (sprite.get(LedSpriteProperty.Y) == 2) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
            led.plot(2, 2)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
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
sprite = game.createSprite(0, 0)
basic.forever(function () {
    move()
    if (sprite.isDeleted()) {
        sprite = game.createSprite(0, 0)
        move()
    }
})
