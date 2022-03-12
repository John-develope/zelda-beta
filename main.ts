controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Link,
    [img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 7 7 7 7 7 7 7 . d . . 
        . . d 7 7 7 7 7 7 7 7 7 7 d . . 
        . . d e 7 7 7 7 7 7 7 7 e d . . 
        . . d d e e 7 7 7 7 e e d d . . 
        . . . d e e e 7 7 e e e d . . . 
        . . . e 7 e e e e e e 7 e . . . 
        . . e e 7 7 7 7 7 7 7 e e . . . 
        . . e e 7 7 7 7 7 7 7 e e d . . 
        . . . e e 7 7 7 7 7 7 e e d . . 
        . . . 7 7 e e e e e e 7 d d . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . e e e 7 7 7 7 7 e . . . . 
        . . . e e e e . . e e . . . . . 
        . . . . e e . . . . . . . . . . 
        `,img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 7 7 7 7 7 7 7 . d . . 
        . . d 7 7 7 7 7 7 7 7 7 7 d . . 
        . . d e 7 7 7 7 7 7 7 7 e d . . 
        . . d d e e 7 7 7 7 e e d d . . 
        . . . d e e e 7 7 e e e d . . . 
        . . . e 7 e e e e e e 7 e . . . 
        . . . e e 7 7 7 7 7 7 7 e e . . 
        . . d e e 7 7 7 7 7 7 7 e e . . 
        . . d e e 7 7 7 7 7 7 e e . . . 
        . . d d 7 e e e e e e 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e 7 7 7 7 7 e e e . . . 
        . . . . . e e . . e e e e . . . 
        . . . . . . . . . . e e . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Link)
    Link.setImage(img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 e e e e e e 7 . d . . 
        . . d . e e e e e e e e . d . . 
        . . d d e d 7 d d 7 d e d d . . 
        . . d d e d e d d e d e d d . . 
        . . . d d d d d d d d d d e . . 
        . . . 7 7 d d e e d d 7 7 e . . 
        . e e e e e d d d d 7 7 e e e . 
        e e d e e e e 7 7 7 7 7 d e e . 
        e d d d e e d e e 7 7 d d d e . 
        e e d e e e d 7 e e e e d d d . 
        e e d e e e d e e 7 7 7 7 d . . 
        e e e e e e d 7 7 7 7 7 . . . . 
        . d d d d d e . . e e e . . . . 
        . . . . e e e . . e e e . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Link,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . e e e e 7 7 7 7 7 . . . . 
        . . e e e e e e 7 7 d 7 7 7 . . 
        . . . e e e e e e d d 7 7 7 7 . 
        . . . d 7 d d e d d d 7 7 . 7 . 
        . d d d e d d e d d e e 7 . . . 
        . e . d d d d d d e e e . . . . 
        . e . d d d d 7 7 7 7 . . . . . 
        . e d e e d d d 7 7 e e 7 . . . 
        . e d e 7 d d d e e e e e . . . 
        . e . e 7 7 d d e e e e e 7 . . 
        . e . . e 7 7 7 e e e e 7 7 . . 
        . e . 7 e e e e 7 7 7 7 7 e e . 
        . . e e 7 7 7 7 7 7 7 7 e e e . 
        . . . e e e . . . . . e e e . . 
        `,img`
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . e e e e 7 7 7 7 7 . . . 
        . . . e e e e e e 7 7 d 7 7 7 . 
        . . . . e e e e e e d d 7 7 7 7 
        . e . . d 7 d d e d d d 7 7 . 7 
        . e d d d e d d e d d e e 7 . . 
        . e . . d d d d d d e e e . . . 
        . e . . d d d d 7 7 7 7 . . . . 
        . e d e e e 7 7 7 7 7 7 7 e . . 
        . e d e e 7 7 7 d d d 7 e e e . 
        . e . e e 7 7 7 d d d e e e e . 
        . e . . . e 7 7 7 d d e e e e . 
        . e . . . e e e e 7 7 e e 7 . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . e e e e 7 7 7 7 7 . . . . 
        . . e e e e e e 7 7 d 7 7 7 . . 
        . . . e e e e e e d d 7 7 7 7 . 
        . . . d 7 d d e d d d 7 7 . 7 . 
        . d d d e d d e d d e e 7 . . . 
        . e . d d d d d d e e e . . . . 
        . e . d d d d 7 7 7 7 . . . . . 
        . e d e e d d d 7 7 e e 7 . . . 
        . e d e 7 d d d e e e e e . . . 
        . e . e 7 7 d d e e e e e 7 . . 
        . e . . e 7 7 7 e e e e 7 7 . . 
        . e e e e e e e 7 7 7 7 7 7 . . 
        . . e e e 7 7 7 7 7 7 7 7 e e . 
        . . . e e e . . . . . e e e . . 
        `,img`
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . e e e e 7 7 7 7 7 . . . 
        . . . e e e e e e 7 7 d 7 7 7 . 
        . . . . e e e e e e d d 7 7 7 7 
        . e . . d 7 d d e d d d 7 7 . 7 
        . e d d d e d d e d d e e 7 . . 
        . e . . d d d d d d e e e . . . 
        . e . . d d d d 7 7 7 7 . . . . 
        . e d e e e 7 7 7 7 7 7 7 e . . 
        . e d e e 7 7 7 d d d 7 e e e . 
        . e . e e 7 7 7 d d d e e e e . 
        . e . . . e 7 7 7 d d e e e e . 
        . e . . . e e e e 7 7 e e 7 . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Link)
    Link.setImage(img`
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 7 7 7 e e e e . . . . 
        . 7 7 7 d 7 7 e e e e e e . . . 
        7 7 7 7 d d e e e e e e . . . . 
        7 . 7 7 d d d e d d 7 d . . e . 
        . . 7 e e d d e d d e d d d e . 
        . . . e e e d d d d d d . . e . 
        . . . . 7 7 7 7 d d d d . . e . 
        . . e 7 7 7 7 7 7 7 e e e d e . 
        . e e e 7 d d d 7 7 7 e e d e . 
        . e e e e d d d 7 7 7 e e . e . 
        . e e e e d d 7 7 7 e . . . e . 
        . . 7 e e 7 7 e e e e . . . e . 
        . 7 7 7 7 7 7 7 7 7 7 . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Link)
    Link.setImage(img`
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . e e e e 7 7 7 7 7 . . . 
        . . . e e e e e e 7 7 d 7 7 7 . 
        . . . . e e e e e e d d 7 7 7 7 
        . e . . d 7 d d e d d d 7 7 . 7 
        . e d d d e d d e d d e e 7 . . 
        . e . . d d d d d d e e e . . . 
        . e . . d d d d 7 7 7 7 . . . . 
        . e d e e e 7 7 7 7 7 7 7 e . . 
        . e d e e 7 7 7 d d d 7 e e e . 
        . e . e e 7 7 7 d d d e e e e . 
        . e . . . e 7 7 7 d d e e e e . 
        . e . . . e e e e 7 7 e e 7 . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Link,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 e e e e . . . 
        . . 7 7 7 d 7 7 e e e e e e . . 
        . 7 7 7 7 d d e e e e e e . . . 
        . 7 . 7 7 d d d e d d 7 d . . . 
        . . . 7 e e d d e d d e d d d . 
        . . . . e e e d d d d d d . e . 
        . . . . . 7 7 7 7 d d d d . e . 
        . . . 7 e e 7 7 d d d e e d e . 
        . . . e e e e e d d d 7 e d e . 
        . . 7 e e e e e d d 7 7 e . e . 
        . . 7 7 e e e e 7 7 7 e . . e . 
        . e e 7 7 7 7 7 e e e e 7 . e . 
        . e e e 7 7 7 7 7 7 7 7 e e . . 
        . . e e e . . . . . e e e . . . 
        `,img`
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 7 7 7 e e e e . . . . 
        . 7 7 7 d 7 7 e e e e e e . . . 
        7 7 7 7 d d e e e e e e . . . . 
        7 . 7 7 d d d e d d 7 d . . e . 
        . . 7 e e d d e d d e d d d e . 
        . . . e e e d d d d d d . . e . 
        . . . . 7 7 7 7 d d d d . . e . 
        . . e 7 7 7 7 7 7 7 e e e d e . 
        . e e e 7 d d d 7 7 7 e e d e . 
        . e e e e d d d 7 7 7 e e . e . 
        . e e e e d d 7 7 7 e . . . e . 
        . . 7 e e 7 7 e e e e . . . e . 
        . 7 7 7 7 7 7 7 7 7 7 . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 e e e e . . . 
        . . 7 7 7 d 7 7 e e e e e e . . 
        . 7 7 7 7 d d e e e e e e . . . 
        . 7 . 7 7 d d d e d d 7 d . . . 
        . . . 7 e e d d e d d e d d d . 
        . . . . e e e d d d d d d . e . 
        . . . . . 7 7 7 7 d d d d . e . 
        . . . 7 e e 7 7 d d d e e d e . 
        . . . e e e e e d d d 7 e d e . 
        . . 7 e e e e e d d 7 7 e . e . 
        . . 7 7 e e e e 7 7 7 e . . e . 
        . . 7 7 7 7 7 7 e e e e e e e . 
        . e e 7 7 7 7 7 7 7 7 e e e . . 
        . . e e e . . . . . e e e . . . 
        `,img`
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 7 7 7 e e e e . . . . 
        . 7 7 7 d 7 7 e e e e e e . . . 
        7 7 7 7 d d e e e e e e . . . . 
        7 . 7 7 d d d e d d 7 d . . e . 
        . . 7 e e d d e d d e d d d e . 
        . . . e e e d d d d d d . . e . 
        . . . . 7 7 7 7 d d d d . . e . 
        . . e 7 7 7 7 7 7 7 e e e d e . 
        . e e e 7 d d d 7 7 7 e e d e . 
        . e e e e d d d 7 7 7 e e . e . 
        . e e e e d d 7 7 7 e . . . e . 
        . . 7 e e 7 7 e e e e . . . e . 
        . 7 7 7 7 7 7 7 7 7 7 . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Link)
    Link.setImage(img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 7 7 7 7 7 7 7 . d . . 
        . . d 7 7 7 7 7 7 7 7 7 7 d . . 
        . . d e 7 7 7 7 7 7 7 7 e d . . 
        . . d d e e 7 7 7 7 e e d d . . 
        . . . d e e e 7 7 e e e d . . . 
        . . . e 7 e e e e e e 7 e . . . 
        . . . e 7 7 7 7 7 7 7 7 e . . . 
        . . d e 7 7 7 7 7 7 7 7 e d . . 
        . . d e e 7 7 7 7 7 7 e e d . . 
        . . d d 7 e e e e e e 7 d d . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . e e e 7 7 7 7 e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . . e e . . . . e e . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Link,
    [img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 e e e e e e 7 . d . . 
        . . d . e e e e e e e e . d . . 
        . . d d e d 7 d d 7 d e d d . . 
        . . d d e d e d d e d e d d . . 
        . . . d d d d d d d d d d e . . 
        . . . 7 7 d d e e d d 7 7 e . . 
        . e e e e e d d d d 7 7 e e e . 
        e e d e e e e 7 7 7 7 7 d e e . 
        e d d d e e d e e 7 7 d d d e . 
        e e d e e e d 7 e e e e d d d . 
        e e d e e e d e e 7 7 7 7 d . . 
        e e e e e e d 7 7 7 7 7 . . . . 
        . d d d d d e . . e e e . . . . 
        . . . . e e e . . . . . . . . . 
        `,img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . d . 7 e e e e e e 7 . d . . 
        . . d . e e e e e e e e . d . . 
        . . d d e d 7 d d 7 d e d d . . 
        . . d d e d e d d e d e d d . . 
        . . . d d d d d d d d d d e . . 
        . . . 7 7 d d e e d d 7 7 e . . 
        . e e e e e d d d d 7 7 e e e . 
        e e d e e e e 7 7 7 7 7 d e e . 
        e d d d e e d e e 7 7 d d d e . 
        e e d e e e d 7 e e e e d d d . 
        e e d e e e d e e 7 7 7 7 d . . 
        e e e e e e d 7 7 7 7 7 . . . . 
        . d d d d d e . . e e e . . . . 
        . . . . . . . . . e e e . . . . 
        `],
    200,
    true
    )
})
let Link: Sprite = null
Link = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . d . 7 e e e e e e 7 . d . . 
    . . d . e e e e e e e e . d . . 
    . . d d e d 7 d d 7 d e d d . . 
    . . d d e d e d d e d e d d . . 
    . . . d d d d d d d d d d e . . 
    . . . 7 7 d d e e d d 7 7 e . . 
    . e e e e e d d d d 7 7 e e e . 
    e e d e e e e 7 7 7 7 7 d e e . 
    e d d d e e d e e 7 7 d d d e . 
    e e d e e e d 7 e e e e d d d . 
    e e d e e e d e e 7 7 7 7 d . . 
    e e e e e e d 7 7 7 7 7 . . . . 
    . d d d d d e . . e e e . . . . 
    . . . . e e e . . e e e . . . . 
    `, SpriteKind.Player)
Link.y += 100
controller.moveSprite(Link)
scene.cameraFollowSprite(Link)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    music.playMelody("G C G C5 A B A - ", 120)
    music.playMelody("G C G D C D - - ", 120)
})
