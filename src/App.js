import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {dog, fetching, onRequestDog, error} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1>Dog saga!</h1>
          {dog ? (
            <p>Keep cliking to get a new dog</p>
            ) : (
            <p>Click to get a dog</p>
          )}
          {fetching ? (
            <button disabled>Fetching...</button>
          ): (
            <button onClick={onRequestDog}>Request a dog</button>
          )}
          {error && <p style={{color: 'red'}}>Ups, error!</p>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({type: 'API_CALL_REQUEST'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
