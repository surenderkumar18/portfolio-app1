
// 1. Authentication HOC

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = // logic to determine if user is authenticated
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
};

// 
const ProtectedDashboard = withAuth(Dashboard);


// 2.  log props changes for debugging or analytics purposes.

const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log('Props updated:', props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

// 3. You want to handle errors gracefully in your components.

import React, { Component } from 'react';

const withErrorBoundary = (WrappedComponent) => {
  return class extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      console.log(error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

const ProtectedComponent = withErrorBoundary(BuggyComponent);
