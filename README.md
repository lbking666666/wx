# 微信小程序
<p>之前的做过一个webAPP的项目的部分数据接口拿入到微信小程序中，搭建一个简单的小程序</p>
<h3>登陆：</h3>
<p>进入小程序首先进入登陆页面，登陆接口已经把登陆的参数写成固定，可以直接点击登陆按钮登陆</p>
<h3>首页:</h3>
<p>之前是一个地图展示范围内有多少商家选择扩大范围之后商家数量会有变化，这个地址的定位也已经写成固定的位置，因为除哈尔滨之外没有数据，
分类每个车辆品牌下面有多少的商家。<br><b>技术点:</b>1.嵌套的多层的数据怎么在页面中循环渲染出来;<br>2.滑块移动后调用数据;<br>3.点击切换的tab的实例</p>
<h3>列表：</h3>
<p>因为不能模拟下拉和上拉所以只能用上下滚动模拟实现加载分页数据，点击列表中的一个可以进入详情页面。<br>
<b>技术点:</b>页面点击后传递参数到新页面</p>
<h3>我的：</h3>
<p>登陆页面之后会将登陆成功后的数据缓存到本地，在我的页面里面渲染出来。退出按钮可清除本地缓存<br><b>技术点：</b>数据缓存、获取、清除</p>

