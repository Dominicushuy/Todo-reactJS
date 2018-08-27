import React, { Component } from 'react';

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name : "",
            description:"",
            priority: 1,
            status : 1,
            user_1 : false,
            user_2 : false,
            user_3 : false,
            user_4 : false,
            label_1 : false,
            label_2 : false,
            label_3 : false,
            label_4 :false
        }
    }
    
    onChange = (event) =>{
        let name = event.target.name
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmit = () =>{
        this.props.onSubmit(this.state)
    }
    componentWillReceiveProps(){
      if(localStorage.getItem('taskEdit')){
        let task = JSON.parse(localStorage.getItem('taskEdit'))
        let user = task.userArr;
        let label = task.labelArr;
        this.setState({
        id: task.id,
        name : task.name,  
        user_1 : (user[0] === "Nghĩa Văn") ? true : false,
        user_2 : (user[0] === "Minh Tuấn" || user[1] ==="Minh Tuấn") ? true : false,
        user_3 : (user[0] === "Trung Hiếu" || user[1] ==="Trung Hiếu" || user[2] === "Trung Hiếu") ? true : false,
        user_4 : (user[0] === "Tấn Khải" || user[1] ==="Tấn Khải" || user[2] === "Tấn Khải" || user[3] === "Tấn Khải") ? true : false,
  
        label_1 : (label[0] === "FrontEnd") ? true : false,
        label_2 : (label[0] === "BackEnd" || label[1] ==="BackEnd") ? true : false,
        label_3 : (label[0] === "API" || label[1] ==="API" || label[2] === "API") ? true : false,
        label_4 : (label[0] === "Issue" || label[1] ==="Issue" || label[2] === "Issue" || label[3] === "Issue") ? true : false
        })
      }else{
        this.setState({
          name : "",id: "", name : "",description:"", priority: 1,status : 1,
          user_1 : false, user_2 : false , user_3 : false , user_4 : false,
          label_1 : false ,label_2 : false, label_3 : false, label_4 : false
        })
      }
    }
  
  render() {
    let { name, description, priority, status ,user_1,user_2 ,user_3 ,user_4, label_1, label_2, label_3 ,label_4 } = this.state
    let { taskEdit } =this.props;
    
    return (
    <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title"> {taskEdit.id === undefined ? "Thêm công việc" : "Sửa công việc"} </h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="form-group">
                <label >Tên công việc:</label>
                <input  type="text" 
                        className="form-control" 
                        name="name"
                        value={name}
                        onChange={this.onChange}
                         />
              </div>
              <div className="form-group">
                <label >Mô tả:</label>
                <textarea   className="form-control"
                            rows={2} id="description" 
                            name="description"
                            value={description}
                            onChange={this.onChange}
                             />
              </div>
              <div className="form-group">
                <label >Độ ưu tiên:</label>
                <select   className="form-control" 
                            id="priority"
                            name="priority"
                            value={priority}
                            onChange={this.onChange}
                            >
                  <option value={1} >Thấp</option>
                  <option value={2} >Trung bình</option>
                  <option value={3} >Cao</option>
                </select>
              </div>
              <div className="form-group">
                <label >Trạng thái :</label>
                <select   className="form-control"
                            name="status"
                            value={status}
                            onChange={this.onChange}
                            >
                  <option value={1} >Đang tiến hành</option>
                  <option value={2} >Chưa bắt đầu   </option>
                  <option value={3} >Hoàn thành</option>
                  <option value={4} >Hủy bỏ</option>
                </select>
              </div>
              <label >Người thực hiện:</label>
              <br />
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            name="user_1"
                            checked =  { taskEdit.userArr !==undefined && user_1  }
                            onChange={this.onChange}
                  />Nghĩa Văn
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = { taskEdit.userArr !==undefined && user_2  }
                            name="user_2"
                            onChange={this.onChange} 
                  />Minh Tuấn
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.userArr !==undefined && user_3 }
                            name="user_3"
                            onChange={this.onChange} 
                  />Trung Hiếu
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.userArr !==undefined && user_4  }
                            name="user_4"
                            onChange={this.onChange}
                   />Tấn Khải
                </label>
              </div>
              <br /><br />
              <label >Nhãn:</label>
              <br />
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.labelArr !==undefined && label_1 }
                            name="label_1"
                            onChange={this.onChange} 
                  />Frontend
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.labelArr !==undefined && label_2 }
                            name="label_2"
                            onChange={this.onChange}
                   />Backend
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.labelArr !==undefined && label_3 }
                            name="label_3"
                            onChange={this.onChange}
                   />API
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input    type="checkbox" 
                            className="form-check-input" 
                            checked = {taskEdit.labelArr !==undefined && label_4 }
                            name="label_4"
                            onChange={this.onChange} 
                  />Issue
                </label>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
                <button type="submit" 
                        className="btn btn-success mr-3" 
                        onClick={this.onSubmit} 
                        data-dismiss="modal">
                {taskEdit.id === undefined ? "Thêm" : "Sửa"}
                </button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
