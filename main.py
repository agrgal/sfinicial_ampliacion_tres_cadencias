estado = [0, 0, 0]
tiempo = 0
cadencia = [200, 300, 1000]

def on_forever():
    global tiempo
    tiempo = input.running_time()
    for index in range(3):
        estado[index] = tiempo / cadencia[index] % 2
    pins.digital_write_pin(DigitalPin.P2, estado[0])
    pins.digital_write_pin(DigitalPin.P3, estado[1])
    pins.digital_write_pin(DigitalPin.P4, estado[2])
basic.forever(on_forever)
