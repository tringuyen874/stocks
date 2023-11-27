import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard.jsx';
import UnsafeScriptsWarning from "./components/UnsafeScriptsWarning";

class App extends Component {

  state = {
    hasError: false,
    showSpinner: true
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('some error has occured');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  hideSpinner = () => {
    this.setState({showSpinner: false});
  }

  render() {
    if (this.state.hasError) {
      return <UnsafeScriptsWarning />;
    }
    return (
      <div className="App">
        <Dashboard hideSpinner={this.hideSpinner} showSpinner={this.state.showSpinner} />
        {/* <SignUp/> */}
      </div>
      // <Router>
      //   <div className="App">
      //     <Routes>
      //       <Route path="/signup" component={SignUp} />
      //       <Route path="/dashboard" component={Dashboard} />
      //       {/* Add more routes as needed */}
      //     </Routes>
      //   </div>
      // </Router>
    );
  }
}

export default App;
