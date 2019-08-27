import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import About from './components/pages/About';
import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => this.setState({todos: res.data}))
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    
  }

  addTodo = (title) => {
    axios.post('http://127.0.0.1:8000/api/', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} >
            </Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
