led.enable(false)
let estado = [0, 0, 0]
let tiempo = 0
let cadencia = [100, 3000, 5000]
basic.forever(function () {
    tiempo = input.runningTime()
    for (let index = 0; index <= 2; index++) {
        estado[index] = tiempo / cadencia[index] % 2
    }
    pins.digitalWritePin(DigitalPin.P2, estado[0])
    pins.digitalWritePin(DigitalPin.P3, estado[1])
    pins.digitalWritePin(DigitalPin.P4, estado[2])
})
