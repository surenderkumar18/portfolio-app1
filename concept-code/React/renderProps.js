// By lifting state up

import React, { useState } from "react";
import "./styles.css";

function Input() {
  const [value, setValue] = useState("");

  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Temp in °C'
    />
  );
}

export default function App() {
  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input />
      <Kelvin />
      <Fahrenheit />
    </div>
  );
}

function Kelvin({ value = 0 }) {
  return <div className='temp'>{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className='temp'>{(value * 9) / 5 + 32}°F</div>;
}


// -- By render props

import React, { useState } from "react";
import "./styles.css";

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}


// -----------------Othe Example ------------------

import React, { useState, useEffect } from 'react';

// Mouse component using render prop
const Mouse = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
};

// Usage of Mouse component with render prop
const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Move the mouse around!</h1>
      <Mouse
        render={({ x, y }) => (
          <h2>
            The mouse position is ({x}, {y})
          </h2>
        )}
      />
    </div>
  );
};

export default App;


// --- Toggle --------btn    

import React, { useState } from 'react';

const Toggle = ({ render }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return render({ on, toggle });
};

// Usage
const App = () => (
  <Toggle
    render={({ on, toggle }) => (
      <div>
        <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
        {on && <p>The toggle is ON</p>}
      </div>
    )}
  />
);

export default App;


/// Product page -----------

const Products = ({ render }) => {
  // Fetching products can be done here.
  return <>{render(products)}</>;
};

const HomePage = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Products
        render={products => (
          <ul>
            {products?.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

