import React, { Component } from 'react'
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    let { tasks } = this.props;
    let eleTask = tasks.map((task, index) =>{
      return  <TaskItem key={task.id}
                        task = {task}
                        index = {index}
                        onUpdate = {this.props.onUpdate}
                        onDelete = {this.props.onDelete}
              ></TaskItem>
    })
    return (
    <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Công việc</th>
            <th className="text-center">Nhãn</th>
            <th className="text-center">Độ ưu tiên</th>
            <th className="text-center">Người thực hiện</th>
            <th className="text-center">Xử lý</th>
            <th className="text-center">Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {eleTask}
        </tbody>
    </table>
    )
  }
}
