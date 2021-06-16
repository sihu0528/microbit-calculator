input.onButtonPressed(Button.A, function () {
    첫번째수 += 1
    basic.showNumber(첫번째수)
})
input.onGesture(Gesture.Shake, function () {
    if (더하기빼기곱하기나누기 == 1) {
        basic.showNumber(첫번째수 + 두번째수)
    } else {
        if (더하기빼기곱하기나누기 == 2) {
            basic.showNumber(첫번째수 - 두번째수)
        } else {
            if (더하기빼기곱하기나누기 == 34) {
                basic.showNumber(첫번째수 * 두번째수)
            } else {
                if (더하기빼기곱하기나누기 == 4) {
                    if (첫번째수 % 두번째수 > 0) {
                        basic.showString("" + Math.floor(첫번째수 / 두번째수) + "..." + 첫번째수 % 두번째수)
                    } else {
                        basic.showNumber(첫번째수 / 두번째수)
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    더하기빼기곱하기나누기 += 1
    if (더하기빼기곱하기나누기 % 4 == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        더하기빼기곱하기나누기 = 1
    } else {
        if (더하기빼기곱하기나누기 % 4 == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            더하기빼기곱하기나누기 = 2
        } else {
            if (더하기빼기곱하기나누기 % 4 == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                더하기빼기곱하기나누기 = 3
            } else {
                if (더하기빼기곱하기나누기 % 4 == 0) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    더하기빼기곱하기나누기 = 4
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    두번째수 += 1
    basic.showNumber(두번째수)
})
let 더하기빼기곱하기나누기 = 0
let 첫번째수 = 0
let 두번째수 = 0
두번째수 = 0
첫번째수 = 0
더하기빼기곱하기나누기 = 0
