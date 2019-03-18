Page({
  data:{
  },
 
  onLoad: function(options){
    
    console.log(options.id)
    this.setData({
      movieId: options.id
    })

    var that = this//设置that来把this引进success函数
    //request请求调用是异步的，即不会阻塞还会紧接着继续进行下面的代码
     wx.request({
        //url: 'https://api.douban.com/v2/movie/subject'+options.movieId,
        //url: 'https://liudongtushuguan.cn/v2/movie/subject' + options.movieId,
        //发给第三方的转换代理


        /*method:"GET",//默认就是get方法
        //豆瓣禁止威信小程序访问api可以在中间设置一个，，，，转换代理
        data: {
          x:1,y:2
        },
        header: {
        },*/

        /*回调函数,res是对服务器返回的数据进行处理生成的一个js对象*/

        //不管回调成功了还是返回的是403forbidden，或者404notfound都所做request回调成功
        //返回值（存在data属性）类型可以是多种的，如果是返回html类型就是返回html代码，要是
        //返回json代码，就会在进行进一步处理转换成一个js对象存在data中，亦如果是一个对象数组
        //则转换成一个js的对象数组
        //
        //header属性也是存为一个js对象
        //statusCode显示的是状态代码，如：403，404
        success: function(res){
          console.log(res) 
          that.setData({})
          //在success中使用this.setData()会报错，因为this是指向success
          //解决方法：在进入success函数前，先新建一个别的对象把this存起来（that）
        },

        fail: function(){
          
        },
        //不管是成功还是失败这个函数都会被调用
        complete: function(){

        }
      }) 
  },
  onShareAppMessage: function(){
    return{
      title:"向你推荐："+this.data.balabala
    }
  }

  
  
})

//wx.showNavigationBarLoading()加载动画
//wx.hideNavigationBarLoading()隐藏加载动画
//wx.setNavigationBarTitle({
//  title:""+///+""
//})


//页面事件处理函数
//onPullDownRefresh
//onReachButtom
//onPageScroll滑动的时候被调用
//onShareAppMessage