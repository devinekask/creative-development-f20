# Week 1 - Arduino

As a "warming up" challenge, we're returning to Arduino. We've covered the Arduino basics in [our fall 2019 workshop](https://github.com/devinekask/arduino-workshop-f19)

Challenge: Enhance the experience of an existing object with your Arduino. You've got 4 hours 🔥🔥🔥

We've provided you with a couple of demo projects to start from, depending on the end result you're aiming for:

## [Electron + Johnny-Five](projects/p01-electron-johnny-five)

Use this template when you'll provide your app with a UI, and when you're able to control your electronics using Johnny-Five. 

## [Electron + Serialport](projects/p02-electron-serialport)

Use this template when you'll provide your app with a UI, but your components are not supported by Johnny-Five. You'll need to write your own serial protocol to communicate with your Arduino.

There's [a basic arduino sketch included](projects/p02-electron-serialport/sketch_serial_write), which writes the current running timestamp on the serial port.

## [Nodejs + Johnny-Five](projects/p03-nodejs-johnny-five)

Use this template when you won't use a UI, and when you're able to control your electronics using Johnny-Five. 

## [Nodejs + Serialport](projects/p04-nodejs-serialport)

Use this template when you won't use a UI, but your components are not supported by Johnny-Five. You'll need to write your own serial protocol to communicate with your Arduino.

There's [a basic arduino sketch included](projects/p04-nodejs-serialport/sketch_serial_write), which writes the current running timestamp on the serial port.