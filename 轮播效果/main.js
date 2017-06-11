$(function () {
    var slider = {
        sWrap: $(".slider-wrap"),
        width: $(".slider").width(),
        imgNow: 0,
        prev: function () {
            var th = this;
            if (th.imgNow > 0) {
                th.imgNow--;
                var target = -(th.width * th.imgNow) + "px";
                $(".slider-wrap").stop().animate({
                    "margin-left": target
                }, 500);
            } else {
                th.imgNow = th.num - 2;
                var target = -(th.width * (th.imgNow)) + "px";
                $(".slider-wrap").css("margin-left", -(th.width * (th.num - 1)) + "px");
                $(".slider-wrap").stop().animate({ "margin-left": target }, 500, function () {
                });
            }
            $(".nav-wrap ul li").eq(th.imgNow).addClass("active").siblings("li").removeClass("active");
        },
        next: function () {
            var th = this;
            if (th.imgNow < th.num - 2) {
                th.imgNow++;
                var target = -(th.width * th.imgNow) + "px";
                $(".slider-wrap").stop().animate({
                    "margin-left": target
                }, 500);
            } else {
                th.imgNow = 0;
                var target = -(th.width * (th.num - 1)) + "px";
                $(".slider-wrap").stop().animate({ "margin-left": target }, 500, function () {
                    $(".slider-wrap").css("margin-left", 0);
                });
            }
            $(".nav-wrap ul li").eq(th.imgNow).addClass("active").siblings("li").removeClass("active");
        },
        interval: function () {
            timer = setInterval(function () { slider.next(); }, 2000);
            $(".slider-wrap").on({
                mouseenter: function () { clearInterval(timer); },
                mouseleave: function () { clearInterval(timer); slider.interval(); }
            });
        },
        appendItem: function () {
            for (var i = 0; i < this.num - 1; i++) {
                var dom = "<li></li>";
                $(".nav-wrap ul").append(dom);
            }
        },
        clickItem: function (index) {
            $(".nav-wrap ul li").eq(index).addClass("active").siblings("li").removeClass("active");
            var count;
            if (index > this.imgNow) {
                count = index - this.imgNow;
                for (var i = 0; i < count; i++) {
                    slider.next();
                };
            } else {
                count = this.imgNow - index;
                for (var i = 0; i < count; i++) {
                    slider.prev();
                };
            }
        },
        init: function () {
            $(".slider-wrap .slider").eq(0).clone().appendTo(".slider-wrap");
            this.num = $(".slider-wrap .slider").length;
            $(".prev").on("click", function () { slider.prev(); });
            $(".next").on("click", function () { slider.next(); });
            slider.appendItem();
            $(".nav-wrap ul li").on("click", function () {
                var index = $(this).index();
                slider.clickItem(index);
            });
            $(".nav-wrap ul li").eq(0).click();
            // slider.interval();
        }
    }
    slider.init();
})