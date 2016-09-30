var app = getApp();//获得全局函数
Page({
  data:{
        toggle:false,//页面登陆提示信息 隐藏
        modalHidden:true
  },
  formSubmit:function(e){//登陆函数
        var that = this;
        var user = e.detail.value.user;//获得form表单中的用户名的值
        var pass = e.detail.value.pass;//获得form表单中的密码的值
        wx.request({
            url:app.globalUrl+'/Api/LoginReg/Login',//通过实例化全局函数获得url
            //data : "username="+user+"&password="+pass+"",//data 拼接字符串
            data : "username=15145090813&password=198764",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'//content-Type post 格式
                //'Content-Type':'application/json; charset=utf-8'//get 格式
            },
            method:"POST",//post 方式
            success:function(res){//收到开发者服务成功返回的回调函数，res = {errMsg: "request:ok", data: Object, statusCode: 200}
                var json = JSON.stringify(res.data);//将JSON对象转化为JSON字符串
                if(res.data.status == "1"){//返回status的值为1 登陆成功
                    wx.navigateBack()//关闭页面并返回上一个页面
                    wx.setStorage({//将数据异步存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容
                        key:"key",
                        data:json
                    })
                }else{//登陆失败
                    console.log(res.data);
                    that.setData({
                        modalHidden:false
                    })
                }
                that.setData({//无论成功失败返回值
                     msg : res.data.content
                })   
            },
            complete:function(){//接口调用结束的回调函数（调用成功、失败都会执行）
                that.setData({
                    toggle:true//页面登陆提示信息 显示
                })
            }
        })
    }
})