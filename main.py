def on_button_pressed_a():
    if sprite.get(LedSpriteProperty.X) == 2:
        if sprite.get(LedSpriteProperty.Y) == 2:
            basic.show_icon(IconNames.HEART)
            game.add_score(1)
        else:
            basic.show_icon(IconNames.NO)
            game.add_score(-1)
    else:
        basic.show_icon(IconNames.NO)
        game.add_score(-1)
    while game.score() == 5:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            """)
        basic.show_string("you won")
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            """)
        basic.show_string("you won")
        basic.pause(5000)
        game.set_score(0)
        sprite.delete()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    game.set_score(0)
    basic.show_string("restart")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(game.score())
input.on_button_pressed(Button.B, on_button_pressed_b)

def move():
    for index in range(5):
        sprite.move(1)
        basic.pause(70)
    if sprite.is_touching_edge():
        sprite.turn(Direction.RIGHT, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.RIGHT, 90)
        basic.pause(70)
        sprite.move(1)
    for index2 in range(5):
        sprite.move(1)
        basic.pause(70)
    if sprite.is_touching_edge():
        sprite.turn(Direction.LEFT, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.LEFT, 90)
    for index3 in range(5):
        sprite.move(1)
        basic.pause(70)
    if sprite.is_touching_edge():
        sprite.turn(Direction.RIGHT, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.RIGHT, 90)
    for index4 in range(5):
        sprite.move(1)
        basic.pause(70)
    if sprite.is_touching_edge():
        sprite.turn(Direction.LEFT, 90)
        sprite.move(1)
        basic.pause(70)
        sprite.turn(Direction.LEFT, 90)
    for index5 in range(5):
        sprite.move(1)
        basic.pause(70)
    sprite.turn(Direction.RIGHT, 180)
    sprite.move(5)
    sprite.turn(Direction.RIGHT, 90)
    sprite.move(5)
    sprite.turn(Direction.RIGHT, 90)
    basic.pause(70)
sprite: game.LedSprite = None
basic.show_string("GET 5 POINTS")
basic.show_string("PRESS HERE")
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
basic.show_string("INN THE MIDEL")
sprite = game.create_sprite(2, 2)

def on_forever():
    global sprite
    move()
    if sprite.is_deleted():
        sprite = game.create_sprite(0, 0)
        move()
basic.forever(on_forever)

def on_forever2():
    soundExpression.mysterious.play()
basic.forever(on_forever2)
