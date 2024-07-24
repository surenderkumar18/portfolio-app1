/**
 * 3. Liskov Substitution Principle (LSP)
 * 
 * 
*/

// Button component
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;

// IconButton component
const IconButton = ({ onClick, icon }) => (
  <Button onClick={onClick}>
    <i className={`icon-${icon}`}></i>
  </Button>
);

export default IconButton;


// You should be able to use IconButton wherever Button is expected.


const App = () => (
  <div>
    <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    <IconButton onClick={() => alert('Icon Button clicked!')} icon="star" />
  </div>
);

export default App;