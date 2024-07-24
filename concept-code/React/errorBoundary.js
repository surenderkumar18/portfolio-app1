import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
const CounterComp = (props) => {
  const badCode = (count) => {
    if (count > 2) throw new Error("Break the page!!!!!!!");
  };

  badCode(props.count);

  const handleClick = () => {
    props.counterOnClick();
  };
  return (
    <>
      {props.text}: {props.count}&nbsp; &nbsp;
      <button type='button' onClick={handleClick}>
        Counter
      </button>
      <hr></hr>
    </>
  );
};

const ErrorPage = () => {
  const [count, setCount] = useState(0);
  const [countError, setCountError] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementCounterError = () => {
    setCountError((prevCount) => prevCount + 1);
  };

  return (
    <>
      <CounterComp
        counterOnClick={incrementCounter}
        count={count}
        text={"Counter break App when > 2 :"}
      />
      <ErrorBoundary
        fallback={<h1>Something went wrong with Counter Component!!!!!</h1>}
      >
        <CounterComp
          counterOnClick={incrementCounterError}
          count={countError}
          text={"Counter with error boundary::"}
        />
      </ErrorBoundary>
    </>
  );
};
