import React, { Component } from 'react';
import './App.css';
import * as actions from './actions/index';
import  { connect } from 'react-redux';

// import components
import FilterStatus from './components/TaskControl/FilterStatus';
import FilterLabel from './components/TaskControl/FilterLabel';
import FilterPriority from './components/TaskControl/FilterPriority';
import Sort from './components/TaskControl/Sort';
import SearchControl from './components/TaskView/SearchControl';
import TaskList from './components/TaskView/TaskList';
import Model from "./components/Model";
import PopupControl from "./components/PopupControl"
import { findIndex } from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskEdit : [],
      searchValue : "",
      sortStatus : 0,
      sortLabel : "",
      sortPriority:0,
      sortValue : 1 //1 tang , -1: giam
    }
  }
  s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000 ).toString(16).substring(1); 
  }

  generateID = ()=>{
    return s4() + s4() + '-' + s4() + s4() + '-' +s4()
  }

  onGetData = () =>{
    let { data } = this.props;
    this.props.onGetData(data);
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks 
      })
    }
  }

  onSubmit = (data) =>{
    let {tasks} = this.state;
    data.user_1 = data.user_1 ? 'Nghĩa Văn' : null;
    data.user_2 = data.user_2 ? 'Minh Tuấn' : null;
    data.user_3 = data.user_3 ? 'Trung Hiếu' : null;
    data.user_4 = data.user_4 ? 'Tấn Khải' : null;
    data.label_1 = data.label_1 ? 'FrontEnd' : null;
    data.label_2 = data.label_2 ? 'BackEnd' : null;
    data.label_3 = data.label_3 ? 'API' : null;
    data.label_4 = data.label_4 ? 'Issue' : null;

    let userArr = [data.user_1,data.user_2,data.user_3,data.user_4];
    let labelArr = [data.label_1,data.label_2,data.label_3,data.label_4];
    let newUserArr = [];
    let newLabelArr = [];
    userArr.map((user) =>{
      if(user !==null ){
        newUserArr.push(user)
      }
      return newUserArr
    })
    labelArr.map((label) =>{
      if(label !==null ){
        newLabelArr.push(label)
      }
      return newLabelArr
    })

    if(localStorage.getItem('taskEdit')){
      let task = {
        id : data.id,
        name : data.name,
        labelArr : newLabelArr,
        status : parseInt(data.status,10),
        priority : parseInt(data.priority,10),
        userArr : newUserArr,
        description : data.description    
        }
        let index = this.findIndex(data.id);
        tasks[index] = task
    }else{
      data.id = this.generateID();
      let task = {
            id : data.id,
            name : data.name,
            labelArr : newLabelArr,
            status : parseInt(data.status,10),
            priority : parseInt(data.priority,10),
            userArr : newUserArr,
            description : data.description    
            }
          tasks.push(task);
    }

    this.setState({
      tasks : tasks
    })

  localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findIndex(id){
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach((task,index) =>{
      if(task.id === id){
        result = index
      }
    })
    return result;
  }

  onNewTask = () =>{
    this.setState({
      taskEdit : {
        userArr : ["Nghĩa Văn","Minh Tuấn","Trung Hiếu","Tấn Khải"],
        labelArr : ["FrontEnd","BackEnd","API","Issue"]
      },
      sortPriority : 0,
      sortStatus : 0,
      onSortLabel : ""
    })
    localStorage.removeItem('taskEdit')
    
  }

  onUpdate = (task) =>{
    this.setState({
      taskEdit : task
    })
    localStorage.setItem('taskEdit' ,JSON.stringify(task))
  }

  onDelete = (id) =>{
    let {tasks} = this.state;
    let index = findIndex(id);
    tasks.splice(index, 1);
    this.setState({
      tasks : tasks
    })
  }

  onSearch = ( value ) =>{
    this.setState({
      searchValue : value
    })
    
  }

  onSortStatus = (value) =>{
    this.setState({
      sortStatus : value
    })
  }
  onSortLabel = (value) =>{
    this.setState({
      sortLabel : value
    })
  }
  onSortPriority = (value) =>{
    this.setState({
      sortPriority : parseInt(value,10)
    })
  }

  onSort = (value) =>{
    this.setState({
      sortValue : parseInt(value,10)
    })
  }

  render() {
    let {taskEdit , searchValue , sortLabel , sortStatus ,sortPriority, sortValue } = this.state;
    // Search
    let { tasks } = this.props;

    if(searchValue){
      tasks = tasks.filter((task) =>{
        return task.name.toLowerCase().indexOf(searchValue.toLowerCase()) !==-1;
      })
    }

    if(sortStatus){
      tasks = tasks.filter((task) =>{
        return task.status === sortStatus;
      })
    }
    
    if(sortPriority){
      tasks = tasks.filter((task) =>{
        return task.priority === sortPriority
      })
    }

    if(sortLabel){
      var label = null
      tasks = tasks.filter((task) =>{
        return (
          label = task.labelArr.find((ele) =>{
            return ele === sortLabel
          })
        )
      })
    }

    if(sortValue){
      tasks.sort((a ,b)=>{
        if(a.name > b.name) return sortValue ;
        else if( a.name < b.name ) return -sortValue;
        else return 0;
      })
    }

    return (
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                  <img src="./img/avatar.jpg" className="ml-2 user" alt="avatar" />
                  <h3 className="text-white d-inline font-weight-light ml-2">Nguyễn Lê Gia Huy</h3>
                </div>
                {/* PopupControl */}
                <PopupControl onGetData={this.onGetData}
                              onNewTask={this.onNewTask}
                ></PopupControl>
                {/* Filter */}
                <div className="px-3">
                  {/* Statsus */}
                  <FilterStatus onSortStatus={this.onSortStatus} ></FilterStatus>
                  {/* Label */}
                  <FilterLabel onSortLabel={this.onSortLabel} ></FilterLabel>
                  {/* Priority */}
                  <FilterPriority onSortPriority={this.onSortPriority} ></FilterPriority>
                  {/* Sort */}
                  <Sort onSort={this.onSort} ></Sort>
                </div>
              </div>
              {/* DISPLAY */}
              <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between">
                        <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* Search */}
                      <SearchControl onSearch={this.onSearch} ></SearchControl>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  {/* Task List */}
                  <TaskList tasks={tasks}
                            onUpdate = {this.onUpdate}
                            onDelete = {this.onDelete}
                   ></TaskList>
                </div>
              </div>
            </div>
          </div>
          {/* The Modal */}
          <Model  onSubmit={this.onSubmit}
                  taskEdit = {taskEdit}
           ></Model>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    data : state.data,
    tasks : state.tasks
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onGetData : (data) =>{
      dispatch(actions.getData(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
