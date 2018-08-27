import React, { Component } from 'react'

export default class PopupControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : []
        }
    }
    
    onGetData = () =>{
        this.props.onGetData()
    }
    onNewTask = () =>{
        this.props.onNewTask()
    }
  render() {
    return (
      <div>
        <button type="button"
                className="btn my-3 btn--getData"
                onClick={this.onGetData}
            >
            <i className="fa fa-pencil-square-o" />
            Get data
        </button>
        <button type="submit" 
                className="btn my-3 btn--newTask" 
                data-toggle="modal" 
                data-target="#modalTask"
                onClick={this.onNewTask}
        >
            <i className="fa fa-pencil-square-o" />
            Tạo Task mới
        </button>
      </div>
    )
  }
}
