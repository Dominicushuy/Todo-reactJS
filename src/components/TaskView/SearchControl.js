import React, { Component } from 'react'

export default class SearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword : "" 
    }
  }

  onChange = (event) =>{
    this.setState({
      keyword : event.target.value
    })
    this.props.onSearch(event.target.value)
  }

  render() {
    let { keyword} = this.state
    return (
    <div className="form-group text-left my-0">
        <input  type="text" 
                className="form-control" 
                placeholder="Tìm kiếm công việc"
                name= "keyword"
                value={keyword}
                onChange={this.onChange} 
        />
    </div>
    )
  }
}
