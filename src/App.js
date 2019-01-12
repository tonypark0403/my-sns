import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Button from './components/common/Button';
import TodoApp from './components/todo/todoApp';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/common" render={() => <Button>button</Button>} />
          <Route exact path="/" component={TodoApp} />
        </Switch>
      </div>
    );
  }
}

export default App;
