Page({
  data:{
  },
 
  onLoad: function(options){
    console.log(options.id)
    this.setData({
      movieId: options.id
    })
  }

})