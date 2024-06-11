import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {



  state = {
    input: "",
    items: []
  };

  //for  storing input value into variable
  handleChange = event => {
    this.setState({
      input: event.target.value
    });



  };
  //storing items when click enter
  storeItems = event => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: ""
    })

  };

  deleteItem = key => {
    const allItems = this.state.items;
    allItems.splice(key, 1);
    this.setState({
      items: allItems
    });
  };

  render() {
    //destructuring  for storing input value for avoiding repetition
    const { input, items } = this.state;
    
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input type="text" placeholder="enter items...."
            value={input} onChange={this.handleChange}
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}<i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i>
            </li>))}

        </ul>
      </div>
    )
  }
}
