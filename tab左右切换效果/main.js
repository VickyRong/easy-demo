$(function () {
    var tab = {
        width:$(".tab-wrap").width(),
        time:500,
        animation:function(index){
            var target = -(this.width * index);
            $(".tab-tb").stop().animate({"margin-left":target},this.time);
        },
        thClick: function (index) {
            $(".tab-th > a").eq(index).addClass("active").siblings().removeClass("active");
            this.animation(index);
        },
        init: function () {
            $(".tab-th > a").on("click", function () {
                var index = $(this).index();
                tab.thClick(index);
            });
            $(".tab-th a").eq(0).click();
        }
    }
    tab.init();
})