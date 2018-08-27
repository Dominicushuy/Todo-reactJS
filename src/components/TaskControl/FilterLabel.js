import React, { Component } from 'react'

export default class FilterLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName : ""
    }
  }
  

  onClick = (value) =>{
    this.props.onSortLabel(value);
    this,this.setState({
      labelName : value
    })
  }

  render() {
    return (
    <div className="filter filter--label">
        <ul className="list-unstyled text-left">Nhãn
          <li className="py-1 display-5 lead" 
              onClick={() => this.onClick("FrontEnd")}
          >
            <i className="fa fa-circle mr-2" />
            Frontend
            <span className={ labelName === "FrontEnd" ? "control_selected" : "" } ></span>
          </li>
          <li className="py-1 display-5 lead"
              onClick={() => this.onClick("BackEnd")}
          >
            <i className="fa fa-circle mr-2" />
            Backend
            <span className={ labelName === "BackEnd" ? "control_selected" : "" } ></span>
          </li>
          <li className="py-1 display-5 lead"
              onClick={() => this.onClick("API")}
          >
            <i className="fa fa-circle mr-2" />
            API
            <span className={ labelName === "API" ? "control_selected" : "" } ></span>
          </li>
          <li className="py-1 display-5 lead"
              onClick={() => this.onClick("Issue")}
          >
            <i className="fa fa-circle mr-2" />
            Issue
            <span className={ labelName === "Issue" ? "control_selected" : "" } ></span>
          </li>
        </ul>
    </div>
    )
  }
}
