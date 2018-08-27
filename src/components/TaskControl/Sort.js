import React, { Component } from 'react'

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort : 1,
    }
  }
  onChange = (event) =>{
    this.setState({
      sort : event.target.value
    })
    this.props.onSort(event.target.value);
  }
  
  render() {
    let {sort} = this.state
    return (
    <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select className="form-control"
                name="sort"
                value={sort}
                onChange={this.onChange}
        >
          <option value={1} >Từ A đến Z</option>
          <option value={-1} >Từ Z đến A</option>
        </select>
    </div>
    )
  }
}
