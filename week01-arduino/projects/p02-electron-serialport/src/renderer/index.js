const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

let port, parser;

const init = async () => {
  const ports = await SerialPort.list();

  const arduinoPort = ports.find(port => port.manufacturer && port.manufacturer.toLowerCase().indexOf('arduino') > -1);
  if (arduinoPort) {
    console.log(arduinoPort.path);
    port = new SerialPort(arduinoPort.path);
    parser = port.pipe(new Readline({ delimiter: '\r\n' }))
    parser.on('data', arduinoLineReceived);
  }
};

const arduinoLineReceived = line => {
  // console.log(line);
  // demo - we are sending strings such as "value:1234" from Arduino
  const splitted = line.split(":");
  const label = splitted[0];
  const value = parseInt(splitted[1]);
  console.log(label, value);
};

init();