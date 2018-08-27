import React, { Component } from 'react'

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelArr : []
    }
  }
  
  componentWillMount(){
    this.setState({
      labelArr : this.props.task.labelArr
    })
  }

  onGetColor = (label) =>{
    let labelColor = null;
    switch (label) {
      case "FrontEnd":
       labelColor = "#389E0D";
       break;
      case "BackEnd":
       labelColor = "#722ED1";
        break;
      case "API":
        labelColor = "#13C2C2";
        break;
      case "Issue":
        labelColor = "#CF1322";
        break;
      default:
        labelColor = null;
        break;
    }
    return labelColor;
  }

  onSetImg(user){
    let srcImg = null;
    switch (user) {
      case "Nghĩa Văn":
        srcImg = "./img/user_1.jpg";
        break;
      case "Minh Tuấn":
        srcImg = "./img/user_2.jpg";
        break;
      case "Trung Hiếu":
        srcImg = "./img/user_3.jpg";
        break;
      case "Tấn Khải":
        srcImg = "./img/user_4.jpg";
        break;
      default:
        srcImg = null;
        break;
    }
    return srcImg;
  }

  onUpdate = () =>{
    this.props.onUpdate(this.props.task);
  }
  onDelete = () =>{
    this.props.onDelete(this.props.task.id)
  }

  render() {
    let { task, index } = this.props;
    let eleLabel  = task.labelArr.map((label, index) =>{
      return <i className="fa fa-circle" key={index} style={{ color : this.onGetColor(label) }} />
    })
    let eleUser = task.userArr.map((user, index) =>{
        return <img src={this.onSetImg(user)} key={index} className="user" alt="username" />
    })
  
    return (
    <tr>
        <td className="text-center">{index +1} </td>
        <td className="text-center"> {task.name} </td>

        {/* Label */}
        <td className="text-center">
          {eleLabel}
        </td>

        {/* priority */}
        <td className={(task.priority === 1 ? "text-info font-weight-bold text-center" 
                        : (task.priority === 2 ? "text-success font-weight-bold text-center"
                        :"text-danger font-weight-bold text-center" ))}
        >
          { (task.priority === 1 ? 'Thấp' : (task.priority === 2 ? "Trung Bình" : "Cao" )) }
        </td>

        {/* ImgUSer */}
        <td className="text-center">
          {eleUser}
        </td>

        <td className="text-center">
          <button type="button"
                  className="btn btn-outline-primary mr-1" 
                  data-toggle="modal" 
                  data-target="#modalTask"
                  onClick={this.onUpdate}
           >Sửa</button>
          <button type="button" 
                  className="btn btn-outline-danger"
                  onClick={this.onDelete}
                  >
                  Xóa
          </button>
          <select name=""
                  className="form-control mt-2"
                  defaultValue={task.status}
          >
            <option value="1" > Đang tiến hành</option>
            <option value="2" > Chưa bắt đầu</option>
            <option value="3" > Hoàn thành</option>
            <option value="4" > Hủy bỏ</option>
          </select>
        </td>
        <td className="text-center">
          <i className={
            (task.status === 1 ? "fa fa-spinner mr-2"
            : (task.status === 2 ? "fa fa-anchor mr-2"
            : (task.status === 3 ? "fa fa-check-square-o mr-2" 
            : "fa fa-trash-o mr-2"
            )))
          } />
        </td>
    </tr>
    )
  }
}
