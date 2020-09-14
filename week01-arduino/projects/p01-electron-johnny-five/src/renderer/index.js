const {Board, Led} = require("johnny-five");

const board = new Board({
  repl: false
});

board.on("ready", () => {
  console.log("board ready");

  const led = new Led(13);

  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});