import logo from "./logo.svg";
import React from "react";
import "./App.css";

import TaskItem from "./TaskItem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        finish: "",
      },
    };
  }

  componentDidMount() {
    if (localStorage["items"]) {
      let items = JSON.parse(localStorage["items"]);
      this.setState({ items: items });
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        finish: false,
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
      this.saveToLocalStorage(items);
    }
  };

  deleteItem = (key) => {
    // console.log(this.state.items);
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
    this.saveToLocalStorage(filteredItems);
  };

  finishItem = (item) => {
    const newitems = [...this.state.items];
    const index = newitems.indexOf(item);
    newitems[index].finish = !newitems[index].finish;
    this.setState({ items: newitems });
    this.saveToLocalStorage(newitems);
  };

  saveToLocalStorage = (items) => {
    localStorage["items"] = JSON.stringify(items);
  };

 

  render() {
    return (
      <div className="container">
        <h1 className="alert alert-primary">Tasks List</h1>
        <div className="mt-5 jumbotron row">
          <div className="col col-md-12">
            <form className="form-inline" onSubmit={this.addItem}>
              <div className="flex-fill mr-2">
                <input
                  className="form-control w-100"
                  type="text"
                  placeholder="Enter task"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </form>
            <TaskItem
              items={this.state.items}
              deleteItem={this.deleteItem}
              finishItem={this.finishItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
