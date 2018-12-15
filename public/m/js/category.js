$(function(){
    // 内容滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false, 
    });

    // 分类左侧的数据渲染
    //1.使用ajax请求左侧的API接口 /category/queryTopCategory
    //2.拿到数据,创建数据的模板
    //3.调用模板,生成html的结构
    //4.把html放到页面上
    $.ajax({
        url:'/category/queryTopCategory',
        success:function(data){
            console.log(data);
            
        }
    })

})