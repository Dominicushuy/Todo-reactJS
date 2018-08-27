import React, { Component } from 'react'

export default class FilterStatus extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selected  : 0,
    }
  }
  

  onClick = (value) =>{
    this.props.onSortStatus(value);
    this.setState({
      selected : value
    })
  }  

  render() {
    let {selected } = this.state
    return (
    <div className="filter filter--progress">
        <ul className="list-unstyled text-left">Lọc
          <li className="py-1 display-5 lead"
              onClick={() => this.onClick(1)}
          >
            <i className="fa fa-spinner mr-2" />
            Đang tiến hành
            <span className={ selected === 1 ? "control_selected" : "" } ></span>
          </li>
          <li  className="py-1 display-5 lead"
                onClick={() => this.onClick(2)}
          >
            <i className="fa fa-anchor mr-2" />
            Chưa bắt đầu
            <span className={ selected === 2 ? "control_selected" : "" } ></span>
          </li>
          <li  className="py-1 display-5 lead"
               onClick={() => this.onClick(3)}
          >
            <i className="fa fa-check-square-o mr-2 " />
            Hoàn thành
            <span className={ selected === 3 ? "control_selected" : "" } ></span>
          </li>
          <li className="py-1 display-5 lead"
              onClick={() => this.onClick(4)}
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
            <span className={ selected === 4 ? "control_selected" : "" } ></span>
          </li>
        </ul>
    </div>
    )
  }
}
