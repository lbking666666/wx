Page({
  data:{
    thumb:'',
    nickName:'',
    telNumber:'',
    focus:false,
    disabled:true
  },
  onLoad:function(options){
    var that = this;
    wx.getStorage({//从本地缓存中异步获取指定 key 对应的内容。
      key: 'key',
      success: function(res) {//接口调用的回调函数,res = {data: key对应的内容}
          var json = res.data;
          var data = JSON.parse(json);//将json字符串转化为json对象
          that.setData({//接受一个对象，以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value。
            thumb : data.thumb,
            nickName : data.nickname,
            telNumber : data.username 
          })
      },
      fail:function(){
        wx.navigateTo({
          url:'../login/login'
        })
      }
    })
  },
  onShow:function(){
      var value = wx.getStorageSync('key');
      if(!value){//如果没有登陆或者没有缓存
          
          wx.navigateTo({//打开登录页面
            url: '../login/login'
          })
      }
  },
  bindButtonTap: function() {//设置昵称
    this.setData({
      focus: Date.now(),//获得焦点
      disabled:false//不禁用
    })
  },
  bindExit:function(){
    wx.clearStorage();
    wx.navigateTo({
      url:'../login/login'
    })
  }
})