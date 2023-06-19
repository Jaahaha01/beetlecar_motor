import machine
import time

class BeetleCarMotor:
    def __init__(self, pin1, pin2, pin3, pin4):
        self.LMotor = machine.Pin(pin1, machine.Pin.OUT)
        self.LMotor2 = machine.Pin(pin2, machine.Pin.OUT)
        self.RMotor = machine.Pin(pin3, machine.Pin.OUT)
        self.RMotor2 = machine.Pin(pin4, machine.Pin.OUT)
        
        self.pwm1 = machine.PWM(self.LMotor)
        self.pwm2 = machine.PWM(self.RMotor)
        self.pwm3 = machine.PWM(self.LMotor2)
        self.pwm4 = machine.PWM(self.RMotor2)
    
    def stop(self):
        self.pwm1.duty(0)
        self.pwm2.duty(0)
        self.pwm3.duty(0)
        self.pwm4.duty(0)
    
    def set_speed(self, pwm, speed):
        if speed >= 0 and speed <= 1023:
            pwm.duty(speed)
    
    def move_forward(self, duration, speed):
        self.set_speed(self.pwm1, speed)
        self.set_speed(self.pwm2, speed)
        self.set_speed(self.pwm3, 0)
        self.set_speed(self.pwm4, 0)
        time.sleep(duration)
        self.stop()
    
    def move_backward(self, duration, speed):
        self.set_speed(self.pwm1, 0)
        self.set_speed(self.pwm2, 0)
        self.set_speed(self.pwm3, speed)
        self.set_speed(self.pwm4, speed)
        time.sleep(duration)
        self.stop()
    
    def move_left(self, duration, speed):
        self.set_speed(self.pwm1, 0)
        self.set_speed(self.pwm2, speed)
        self.set_speed(self.pwm3, 0)
        self.set_speed(self.pwm4, 0)
        time.sleep(duration)
        self.stop()
    
    def move_right(self, duration, speed):
        self.set_speed(self.pwm1, speed)
        self.set_speed(self.pwm2, 0)
        self.set_speed(self.pwm3, 0)
        self.set_speed(self.pwm4, 0)
        time.sleep(duration)
        self.stop()

beetlecar = BeetleCarMotor(27, 14, 25, 26)
