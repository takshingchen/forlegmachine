function up () {
    设置所有舵机(-30, 0, 0, 30, 30, 0, 0, -30, 360)
    basic.pause(200)
}
function 跳舞1 () {
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(-40, 0, 0, 0, 0, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, -40, 0, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, -40, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 0, 40, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(-40, 0, 0, 0, 0, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 40, 0, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, -40, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 0, 40, 0, 0, 0, 360)
    basic.pause(200)
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, 0, 360)
    basic.pause(200)
}
function 跳舞2 () {
    // 第1步8个舵机的角度依次输入，起始位置角度都为0
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, 0, 360)
    // 等待第一步的舵机到达目标的角度后，再到第二步变换第二步角度
    basic.pause(300)
    设置所有舵机(-20, -45, 45, 20, 20, 45, -45, -20, 360)
    basic.pause(300)
    设置所有舵机(25, -45, 45, -25, 20, 45, -45, -20, 360)
    basic.pause(300)
    设置所有舵机(-20, -45, 45, 20, -25, 45, -45, 25, 360)
    basic.pause(300)
    设置所有舵机(25, -45, 45, -25, 20, 45, -45, -20, 360)
    basic.pause(300)
    设置所有舵机(-20, -45, 45, 20, -25, 45, -45, 25, 360)
    basic.pause(300)
    设置所有舵机(25, -45, 45, -25, 20, 45, -45, -20, 360)
    basic.pause(300)
    设置所有舵机(-20, -45, 45, 20, -25, 45, -45, 25, 360)
    basic.pause(300)
    设置所有舵机(25, -45, 45, -25, 20, 45, -45, -20, 360)
    basic.pause(300)
    设置所有舵机(-20, -34, 45, 20, -25, 45, -45, 25, 360)
    basic.pause(300)
    设置所有舵机(0, 0, 0, 0, 0, 0, 0, 0, 300)
    basic.pause(300)
}
input.onButtonPressed(Button.A, function () {
    if (模式 == 0) {
        up()
    }
    if (模式 == 1) {
        dowm()
    }
    if (模式 == 2) {
        跳舞1()
    }
    if (模式 == 3) {
        跳舞2()
    }
    if (模式 == 4) {
    	
    }
    模式 = 模式 + 1
    if (模式 >= 4) {
        模式 = 0
    }
})
function 设置所有舵机 (舵机1角度: number, 舵机2角度: number, 舵机3角度: number, 舵机4角度: number, 舵机5角度: number, 舵机6角度: number, 舵机7角度: number, 舵机8角度: number, 转动速度: number) {
    ServoBit.setServo(0, 舵机1角度)
    ServoBit.setServo(1, 舵机2角度)
    ServoBit.setServo(2, 舵机3角度)
    ServoBit.setServo(3, 舵机4角度)
    ServoBit.setServo(4, 舵机5角度)
    ServoBit.setServo(5, 舵机6角度)
    ServoBit.setServo(6, 舵机7角度)
    ServoBit.setServo(7, 舵机8角度)
}
function dowm () {
    设置所有舵机(20, 0, 0, -30, -30, 0, 0, 20, 360)
    basic.pause(200)
}
let 模式 = 0
ServoBit.centreServos()
模式 = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # #
        . # . . #
        . # . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . # # .
        . . . . .
        `)
})
