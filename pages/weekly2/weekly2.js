/*pages/weekly/weekly.js
 *button被点击时会把信息封装成一个事件对象传给数据处理层的某一函数
 *包含的内容:type
 *catchtap和bindtap的区别
 *bindtap绑定的元素时，当前元素不会组织冒泡事件向上传递，就是这个元素即它外部的标签都会调用自   己的事件处理函数
 *catchtap绑定的元素，会阻止冒泡事件的向上传递，即只会调用当前元素的事件处理函数
 *冒泡事件，事件在当前元素上被出发时可以向上传递给父节点
 *非冒泡事件，不能向上传递的事件，官方有关于冒泡事件的表
 */
Page({
  data: {
    
    weeklyMovieList: [
      {
        name: "教父1",
        comment: "123123123123123123123",
        imagePath: "/images/1.jpg",
        isHightlyRecommended: true,
        id:77
     },
      {
        name: "教父2",
        comment: "123123123123123123123",
        imagePath: "/images/1.jpg",
        isHightlyRecommended: true,
        id:88
     },
      {
        name: "教父3",
        comment: "123123123123123123123",
        imagePath: "/images/1.jpg",
        isHightlyRecommended: true,
        id:99
      },
      {
        name: "教父4",
        comment: "123123123123123123123",
        imagePath: "/images/1.jpg",
        isHightlyRecommended: true,
        id:66
      }
    ],
    count: 123,
    score: 61,
    count:0
    /**
    *要把渲染外观页面的数据绑定到数据处理层才能对其进行操作
     */
  },
  /**
   * 生命周期函数--监听页面加载
   * 页面被打开时就会调用onload函数
   * 就是页面的构造函数
   * 调用页面数值和设置的方法，使用this
   * 第一个被调用
   */
  onLoad: function (options) {
   this.setData({
     /**
     * 没用提前定义的话，就会自动新增一个变量
     * 还可以实现局部的更新,要加双引号
     * 视图层的数据更新不会自动的引起内部状态数据的改变
     * 即：单向绑定
     */
     currentIndex:this.data.weeklyMovieList.length - 1,
     "weeklyMovieList[2].name":"123123"
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面初始渲染完成式被调用
   * 第三个被调用
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 每一次页面被显示的时候都会被调用
   * 第二个被调用
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   * 页面每一次被隐藏的时候都会被调用
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   * 页面被关闭或卸载的时候会被调用
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  f0: function(event){
    console.log(this.data.count),
    console.log(event)
    /*
      *显示对象中包含的信息
      *console控制台,console.log在控制台显示count的值
    */
  },
  f1: function (event) {
    /*
      *不能直接this.data.count+=1
      *count的值被成功写入但是视图渲染部分没有更新
      *而且容易引起数据不一致
      *得控制页面重加载
      *使用函数时不要忘了this
      *要是有setData()方法
    */
    this.setData({
      count:this.data.count+1
      /*
       * 给谁赋值可以只写名字，赋值的值要写全
       */
    })
  },
  f3: function(event){
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
    })
  },
  f4: function(event){
    //不能event.currentTarget，这个对应的时
    var movieId = event.currentTarget.dataset.movieId
    //调用传到后台的当前被点击的view元素的data
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieId,
      //不要漏了pages前面的‘/’，不加的话时相对路径
      //设置对应的id，元素自定义属性
    })
  }
})