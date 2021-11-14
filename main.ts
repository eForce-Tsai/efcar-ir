eForce_IR.onPressEvent(RemoteButton.OK, function () {
    KSB037.stop()
    I2C_LCD1602.ShowString("[=STOP=]", 0, 1)
})
input.onButtonPressed(Button.A, function () {
    KSB037.leftward(1000)
    basic.pause(2000)
})
eForce_IR.onPressEvent(RemoteButton.UP, function () {
    I2C_LCD1602.ShowString("Forward ", 0, 1)
    KSB037.foreward(1000)
})
eForce_IR.onPressEvent(RemoteButton.RIGHT, function () {
    KSB037.stop()
    basic.pause(100)
    I2C_LCD1602.ShowString("[+RIGHT]", 0, 1)
    KSB037.leftMotor_foreward(800)
    KSB037.rightMotor_foreward(200)
})
input.onButtonPressed(Button.B, function () {
    KSB037.rightward(1000)
    basic.pause(2000)
})
eForce_IR.onPressEvent(RemoteButton.LEFT, function () {
    KSB037.stop()
    basic.pause(100)
    I2C_LCD1602.ShowString("[-LEFT-]", 0, 1)
    KSB037.rightMotor_foreward(800)
    KSB037.leftMotor_foreward(200)
})
eForce_IR.onPressEvent(RemoteButton.DOWN, function () {
    I2C_LCD1602.ShowString("Backward ", 0, 1)
    KSB037.backward(1000)
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    # # # # #
    # . . . #
    `)
eForce_IR.init(Pins.P13)
I2C_LCD1602.LcdInit(39)
KSB037.stop()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("I am Michael ", 0, 0)
basic.forever(function () {
	
})
