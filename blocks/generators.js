  Blockly.Python['moveAward'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    
    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

    var moveAward = block.getFieldValue('moveAward');
    var speed = block.getFieldValue('speed');
    var code = `moveAward(${moveAward}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveAward',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.on()',
      '  pwm1.duty(speed)',
      '  RMotor.on()',
      '  pwm2.duty(speed)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;

  };

  Blockly.Python['moveBack'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveBack = block.getFieldValue('moveBack');
    var speed = block.getFieldValue('speed');
    var code = `moveBack(${moveBack}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveBack',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.off()',
      '  pwm1.duty(0)',
      '  RMotor.off()',
      '  pwm2.duty(0)',
      '  LMotor2.on()',
      '  pwm3.duty(speed)',
      '  RMotor2.on()',
      '  pwm4.duty(speed)',
      '  time.sleep(duration)']);
    return code;

  };

  Blockly.Python['moveLeft'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveLeft = block.getFieldValue('moveLeft');
    var speed = block.getFieldValue('speed');
    var code = `moveLeft(${moveLeft}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveLeft',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.off()',
      '  pwm1.duty(0)',
      '  RMotor.on()',
      '  pwm2.duty(speed)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',  
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;

  };

  Blockly.Python['moveRight'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveLeft = block.getFieldValue('moveRight');
    var speed = block.getFieldValue('speed');
    var code = `moveRight(${moveLeft}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveRight',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.on()',
      '  pwm1.duty(speed)',
      '  RMotor.off()',
      '  pwm2.duty(0)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',  
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;

  };
//////////////////////////////////////////////
Blockly.Python['Forward'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Forward(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Forward',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;

};

Blockly.Python['Backward'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Backward(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Backward',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.on()',
    '  pwm3.duty(speed)',
    '  RMotor2.on()',
    '  pwm4.duty(speed)']);
  return code;

};

Blockly.Python['Left'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Left(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Left',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;

};

Blockly.Python['Right'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Right(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Right',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;

};
