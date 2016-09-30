Page({
  data:{
   title:'',
   tel:'',
   adress:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var data = JSON.parse(options.data)//将json字符串转化为json对象
    this.setData({
      title: data.title,
      tel:data.tel,
      adress:data.adress,
      img:data.img
    })
  }
})