import React, { Component } from 'react'

export default class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority : 0
    }
  }
  

  onChange = (event) =>{
    this.setState({
      priority : event.target.value
    })
    this.props.onSortPriority( event.target.value)
  }

  render() {
    let { priority } = this.state
    return (
    <div className="form-group text-left">
        <label >Độ ưu tiên</label>
        <select className="form-control" 
                name="priority" 
                value ={priority}
                onChange = {this.onChange}
                >
          <option className="font-weight-bold" value ={0} >Tất cả</option>
          <option className="text-info font-weight-bold" value ={1} >Thấp</option>
          <option className="text-success font-weight-bold" value ={2} >Trung bình</option>
          <option className="text-danger font-weight-bold" value ={3} >Cao</option>
        </select>
    </div>
    )
  }
}
