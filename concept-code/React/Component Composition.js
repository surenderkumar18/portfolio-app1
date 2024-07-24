const Input = ({ label, value, onChange }) => (
  <div>
    <label>
      {label}
      <input value={value} onChange={onChange} />
    </label>
  </div>
);

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
    <button type='submit'>Submit</button>
  </form>
);

const App = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { username, email });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label='Username: '
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label='Email: '
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form>
  );
};

export default App;
