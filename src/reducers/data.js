
  // RandomId
  var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000 ).toString(16).substring(1); 
  }

   var generateID = ()=>{
    return s4() + s4() + '-' + s4() + s4() + '-' +s4()
  }
   
 var initialState = [
    {
      id :generateID(),
      name : "Learn HTML,CSS,JavaScript",
      labelArr : ["FrontEnd"],
      status : 1, //1:Đang tiến hành, 2:Chưa bắt đầu , 3:Hoàn thành , 4: hủy bỏ 
      priority : 1, //1 : thấp , 2 : trung bình, 3 : cao 
      userArr : ["Nghĩa Văn"],
      description : "" 
    },
    {
      id : generateID(),
      name : "Learn Angular6",
      labelArr : ["FrontEnd","BackEnd"],
      status : 2, //1:Đang tiến hành, 2:Chưa bắt đầu , 3:Hoàn thành , 4: hủy bỏ 
      priority : 2, //1 : thấp , 2 : trung bình, 3 : cao 
      userArr : ["Nghĩa Văn","Minh Tuấn"],
      description : "" 
    },
    {
      id : generateID(),
      name : "Learn ReactJS",
      labelArr : ["FrontEnd","BackEnd","API"],
      status : 3, //1:Đang tiến hành, 2:Chưa bắt đầu , 3:Hoàn thành , 4: hủy bỏ 
      priority : 3, //1 : thấp , 2 : trung bình, 3 : cao
      userArr : ["Nghĩa Văn","Minh Tuấn","Trung Hiếu"],
      description : ""   
    },
    {
      id : generateID(),
      name : "Learn NodeJS",
      labelArr : ["FrontEnd","BackEnd","API","Issue"],
      status : 4, //1:Đang tiến hành, 2:Chưa bắt đầu , 3:Hoàn thành , 4: hủy bỏ 
      priority : 3, //1 : thấp , 2 : trung bình, 3 : cao
      userArr : ["Nghĩa Văn","Minh Tuấn","Trung Hiếu","Tấn Khải"],
      description : ""     
    }
  ]

  const data = ( state = initialState) =>{
      return [...state]
  }

  export default data;