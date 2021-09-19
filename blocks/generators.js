Blockly.Python['ultrasonic_read'] = function(block) {
  Blockly.Python.definitions_['import_ultrasonic'] = 'import Ultrasonic';
  
  var value_trig = Blockly.Python.valueToCode(block, 'trig', Blockly.Python.ORDER_ATOMIC);
  var value_echo = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
  
  var code = `Ultrasonic.read(${value_trig}, ${value_echo})`;
  return [code, Blockly.Python.ORDER_NONE];
};
