const connect = require('./client');

/**
 * Establishes connection with the game server
 */
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


// console.log('Connecting ...');
connect();
setupInput();