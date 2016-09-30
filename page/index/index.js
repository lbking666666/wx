var app = getApp();//获得全局函数
/** 获得位置返回数量函数 **/
function tude(zoom,that){
  wx.getLocation({//获取当前的地理位置
       type:'wgs84',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
       success:function(res){
         var lat = res.latitude;//纬度，浮点数，范围为-90~90，负数表示南纬
         var longt = res.longitude;//经度，浮点数，范围为-180~180，负数表示西经
         wx.request({
            url:app.globalUrl+'/Api/index/index',
            //data:'lat='+lat+'&longt='+longt+'&zoom='+zoom+'',//传递经度、纬度、缩放比例
            data:'lat=45.803775&longt=126.534967&zoom='+zoom+'',
            header:{
              'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'//content-Type post 格式
            },
            method:'POST',
            success:function(res){
              var tab = res.data.data;
              console.log(tab)
                that.setData({
                  num:res.data.num,//返回商家数量
                  hidden:true,
                  tab:tab
                })
            }
          })
       }
    })
}
function typeLogin(){
    var value = wx.getStorageSync('key');
    if(!value){//如果没有登陆或者没有缓存
        wx.navigateTo({//打开登录页面
          url: '../login/login'
        })
    }
}
Page({
  data:{
    zoom:'2',
    num:'',
    hidden:false,
    tab:[],
    showindex:'0'
  },
  onLoad:function(options){
    //typeLogin();
    var zoom = this.data.zoom;//初始时提取data中的zoom
    var that = this;
    tude(zoom,that);//执行函数
    
  },
  onShow:function(){
    typeLogin();
  },
  sliderchange:function(e){//滑动选择器,完成一次拖动后触发的事件
    var that = this;
    that.setData({
      hidden:false
    })
    var zoom = e.detail.value;//返回value的值 event.detail = {value: value}
    tude(zoom,that);
  },
  changeindex:function(e){//tabhd 点击时获得当前的index
    this.setData({
      showindex:e.currentTarget.dataset.index
    })
  }
})