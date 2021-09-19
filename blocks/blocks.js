Blockly.defineBlocksWithJsonArray([
{
  "type": "ultrasonic_read",
  "lastDummyAlign0": "RIGHT",
  "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
  "args0": [
    {
      "type": "input_value",
      "name": "trig",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "echo",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#004098",
  "tooltip": "Attach your HC-SR04 to custom Pin",
  "helpUrl": "https://javanesse.net"
}
]);
