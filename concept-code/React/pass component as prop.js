/**
 * The goal therefore is to use this Icon prop value as a component inside the Button component. 
 * In addition, if the Icon prop is set, the CSS classes are again extended to add the 
 * icon-button class:
 */

// --- app.js

import Button from "./Button";
import HomeIcon from "./HomeIcon";
import PlusIcon from "./PlusIcon";

function App() {
  return (
    <div id='app'>
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode='filled'>Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode='outline'>Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode='text'>Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode='text'>
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode='filled' disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log("Clicked!")}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;

// --- Button.js

export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

// --  PlusIcon.js

export default function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
  );
}


// --- HomeIcon.js

export default function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clipRule="evenodd"
      />
    </svg>
  );
  
}


// --- css

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#f3f0f8, #d6d2db);
  color: #e5d9f1;
  min-height: 100vh;
}

section {
  margin: 1rem auto;
  max-width: 30rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #030a1b;
}

.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}

.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}

.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}

.outline-button:hover {
  background: #cbd8fc;
}

.text-button {
  color: #2658d6;
}

.text-button:hover {
  background: #cbd8fc;
}




