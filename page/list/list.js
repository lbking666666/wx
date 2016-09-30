var app = getApp();//获得全局函数
function listData(page,that){//加载列表数据
  that.setData({
    hidden:false//调用时显示加载提示
  });
  wx.request({
        url:app.globalUrl+'/Api/Brand/bindexFy',//通过实例化全局函数获得url
        data:'p1='+page+'',//传递页数
        header:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'//content-Type post 格式
            //'Content-Type':'application/json; charset=utf-8'//get 格式
        },
        method:"POST",//post 方式
        success:function(res){
            var json = res.data.data.list;//列表数据json对象
            var flag = res.data.flag;
            that.setData({
              list:json,//传入到list中
              hidden:true,//隐藏加载提示
              flag:flag
            })
        }
    })
}
Page({
  data:{
    page:'1',
    list:[],
    scrollTop:0,
    hidden:true,
    flag:''
  },
  onLoad:function(options){
    var that = this;
    listData(this.data.page,that);
  },
  upper:function(e){//滚动条滚动到顶部
    var page = e.currentTarget.dataset.page;//获得当前的页数
    var that = this;
    if(page>1){
      var pages = parseInt(page)-1;//上一页
      listData(pages,that);
      this.setData({
        page:pages
      })
    }
  },
  lower:function(e){//滚动条滚动到底部的时候
    var page = e.currentTarget.dataset.page;//获得当前的页数
    var pages = parseInt(page)+1;//下一页
    var flag = e.currentTarget.dataset.flag;
    var that = this;
    if(flag == 'T'){//判断是否存在下一页 如果存在为“T”，不存在为“F”
      listData(pages,that);
      this.setData({
        page:pages,
        scrollTop:page//设置滚动条到顶部
      })
    }
  },
  conlink:function(e){//列表点击事件
    var data = JSON.stringify(e.currentTarget.dataset);//接受当前组件的一些属性值集合
    wx.navigateTo({
      url:'../detail/detail?data='+data+''//传递参数到详情页
    })
  },
})