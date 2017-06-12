$(function () {
    var tab = {
        animation:function(index){
            var target = -(300 * index);
            $(".tab-tb").animate({"margin-left":target},700);
        },
        thClick: function (index) {
            $(".tab-th > a").eq(index).addClass("active").siblings().removeClass("active");
            this.animation(index);
        },
        init: function () {
            console.log()
            $(".tab-th > a").on("click", function () {
                var index = $(this).index();
                tab.thClick(index);
            });
            $(".tab-th a").eq(0).click();
        }
    }
    tab.init();
})