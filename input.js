let connection;
let buffer = [];
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up")
  }
  if (data === 'a') {
    connection.write("Move: left")
  }
  if (data === 's') {
    connection.write("Move: down")
  }
  if (data === 'd') {
    connection.write("Move: right")
  }
  buffer.push(data);
  if(buffer.length > 5) buffer.length = 0;
  console.log(buffer);
  connection.write(`Say: ${buffer.join('')}`);
}
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
module.exports = setupInput;