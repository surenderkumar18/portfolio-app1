// Enum example
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move(Direction.Up); // Output: Moving UP
move(Direction.Down); // Output: Moving DOWN
