$(function() {
    //向下动画
    $(".shop_cart").hover(function() {
            $(".shop").stop().slideDown(500);
        }, function() {
            $(".shop").stop().slideUp(500);
        })
        //logo  滑动
    $(".logo_change").hover(function() {
        $(".logo_change").animate({ marginLeft: 0 }, 100)
    }, function() {
        $(".logo_change").animate({ marginLeft: -49 }, 100)
    })

    //滑过显示列表  小
    $(".floor1 .txt>div").hover(function() {
            for (var s = 0; s < $(".floor1 .txt>div").length; s++) {
                if ($(".floor1 .txt>div")[s].style.display == "block") {
                    $(this).find(".box").css("display", "block");
                    break;
                } else {
                    $(this).find(".box").stop().slideDown(200);
                }
            }
            $(this).siblings().find(".box").css("display", "none");
        }, function() {
            $(this).parent().find(".box").stop().slideUp(500);
        })
        //轮播图
        //获取显示的宽度
    var number = $(".floor2 .container").css("width");
    var getNumber = parseInt(number.replace("px", ""));
    var newNumber = 0;
    var getImgNumber = $(".floor2 .swiper img").length;
    //给swiper定制宽度
    $(".swiper").css("width", getImgNumber * getNumber + "px");
    //鼠标滑过左右键时变色
    $(".floor2 .leftRightButton>button").hover(function() {
            $(this).css("backgroundColor", "rgba(0,0,0,0.4)")
            $(this).css("color", "#fff")
        }, function() {
            $(this).css("backgroundColor", "rgba(0,0,0,0)")
            $(this).css("color", "#ccc")
        })
        //点击左右按钮时
    $(".leftRightButton .right").click(function() {
        clearInterval(swiperss)
        newNumber = newNumber - getNumber;
        if (newNumber < -getNumber * 4) {
            newNumber = 0;
        }
        $(".floor2 .swiper").animate({ left: newNumber });
        $(".floor2 .swiperButton button").eq(newNumber / -getNumber).css("background", "#CCCCCC");
        $(".floor2 .swiperButton button").eq(newNumber / -getNumber).siblings().css("background", "#fff");
        swiperssNow();
    })
    $(".leftRightButton .left").click(function() {
            clearInterval(swiperss)
            newNumber = newNumber + getNumber;
            if (newNumber > 0) {
                newNumber = -getNumber * 4;
            }
            $(".floor2 .swiper").animate({ left: newNumber });
            $(".floor2 .swiperButton button").eq(newNumber / -getNumber).css("background", "#CCCCCC");
            $(".floor2 .swiperButton button").eq(newNumber / -getNumber).siblings().css("background", "#fff");
            swiperssNow();
        })
        //点击下面的小按钮
    $(".floor2 .swiperButton button").click(function() {
        clearInterval(swiperss)
        newNumber = -getNumber * ($(this).index())
        $(".floor2 .swiper").animate({ left: -getNumber * ($(this).index()) });
        $(this).css("background", "#CCCCCC");
        $(this).siblings().css("background", "#fff");
        swiperssNow();
    });
    //自动播放
    var swiperss

    function swiperssNow() {
        swiperss = setInterval(function() {
            newNumber = newNumber - getNumber;
            if (newNumber < -getNumber * 4) {
                newNumber = 0;
            }
            $(".floor2 .swiper").animate({ left: newNumber });
            $(".floor2 .swiperButton button").eq(newNumber / -getNumber).css("background", "#CCCCCC");
            $(".floor2 .swiperButton button").eq(newNumber / -getNumber).siblings().css("background", "#fff");
        }, 4000)
    }
    swiperssNow();
    $(".swiperImg>a").hover(function() {
            clearInterval(swiperss)
        }, function() {
            swiperssNow();
        })
        //轮播图上的列表
    $(".floor2 .leftList .listItem").hover(function() {
        $(this).find(".leftListShop").css("display", "block");
        $(this).css("background", "orange")
    }, function() {
        $(this).find(".leftListShop").css("display", "none");
        $(this).css("backgroundColor", "")
    });
    //给小米闪购盒子上面加个边框
    for (var topColor = 0; topColor < $(".purchaseCenterItem").length; topColor++) {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        $(".purchaseCenterItem")[topColor].style.borderTop = "1px solid rgb(" + r + "," + g + "," + b + ")"
    }
    //鼠标滑过时显示商品显示另一个类别
    $(".AllBox .AllBoxTopRight span").hover(function() {
            $(this).addClass("organge");
            $(this).siblings().removeClass("organge")
            $(this).parents(".AllBoxTop").siblings(".AllBoxCenter").find(".boxItemBig").eq($(this).index()).css("display",
                "block");
            $(this).parents(".AllBoxTop").siblings(".AllBoxCenter").find(".boxItemBig").eq($(this).index()).siblings().css(
                "display", "none");
        })
        //脚部图片一直变
    var getNow = true;
    setInterval(function() {

        if (getNow) {
            $(".getChangeOne").css("display", "inline-block");
            $(".getChangeTwo").css("display", "none");
            getNow = false;
        } else {
            $(".getChangeOne").css("display", "none");
            $(".getChangeTwo").css("display", "inline-block");
            getNow = true;
        }
    }, 3000)

    // 滑到位置显示
    $(window).scroll(function() {
            if ($(window).scrollTop() >= 824) {
                $(".listLeft li:last-child").css("display", "block")
            } else {
                $(".listLeft li:last-child").css("display", "none")
            }
        })
        //返回头部
    $(".listLeft li:last-child").click(function() {
        $("html,body").stop(true).animate({ scrollTop: 0 });
    });
    //划过下载
    $(".downloadApp").hover(function() {
        $(".download fa").css("display", "block");
        $(".download").stop().slideDown(300);
    }, function() {
        $(".download").stop().slideUp(300);
        $(".download fa").css("display", "none");
    })


    //第二个轮播图
    var aWidth = $(".rightAllBox a").css("width");
    aWidth = parseInt(aWidth.replace("px"))
    $(".rightAllBox").css("width", aWidth * $(".rightAllBox a").length + "px");
    //点击按钮右边
    var nums = false;
    var leftNums = true;
    var rightAllBoxNumber = 0;
    $(".purchaseRight").click(function() {
            rightAllBoxNumber -= aWidth;
            if (leftNums) {
                $(".purchaseLeft").css("color", "#999")
                $(".purchaseLeft").css("cursor", "pointer")
            }
            if (rightAllBoxNumber * 4 < -aWidth * $(".rightAllBox a").length + aWidth * 4) {
                $(this).css("color", "#e0e0e0")
                $(this).css("cursor", "auto")
                nums = true;
                rightAllBoxNumber += aWidth;
                console.log(rightAllBoxNumber)
                $(".rightAllBox").stop().animate({ left: (-aWidth * $(".rightAllBox a").length) + aWidth * 4 }, 1000);
            } else {
                $(".rightAllBox").stop().animate({ left: rightAllBoxNumber * 4 }, 1000);
            }
        })
        //点击按钮左边
    $(".purchaseLeft").click(function() {
        rightAllBoxNumber += aWidth;
        var avgnum = aWidth * $(".rightAllBox a").length % (aWidth * 4)
        if (nums) {
            rightAllBoxNumber -= aWidth
            $(".rightAllBox").stop().animate({ left: (-aWidth * $(".rightAllBox a").length) + aWidth * 4 + avgnum + 1 }, 1000);
            $(".purchaseRight").css("color", "#999")
            $(".purchaseRight").css("cursor", "pointer")
            nums = false;
        } else {
            if (rightAllBoxNumber >= 0) {
                rightAllBoxNumber = 0;
                leftNums = true;
                $(this).css("color", "#e0e0e0")
                $(this).css("cursor", "auto")
                $(".rightAllBox").stop().animate({ left: 0 }, 1000);
            } else {
                $(".rightAllBox").stop().animate({ left: rightAllBoxNumber * 4 }, 1000);
            }
        }
    })
    $(".purchaseLeft").css("color", "#e0e0e0")
    $(".purchaseLeft").css("cursor", "auto")
        //倒计时
        $(".purchaseCenterItem .time").eq(0)
        function add0(item) {
        	if(item<10){
        		return "0"+item;
        	}else{
        		return item;
        	}
        }
        function changesTime() {
            var Dates = new Date();
            dateNumber = goDates - Dates;
            aalSeconds = parseInt(dateNumber / 1000);
            seconds = aalSeconds % 60;
            points = parseInt((aalSeconds / 60) % 60);
            hours = parseInt((aalSeconds / 60 / 60) % 60)
            $(".purchaseCenterItem .bottom .time").eq(0).text(add0(hours))
            $(".purchaseCenterItem .bottom .time").eq(1).text(add0(points))
            $(".purchaseCenterItem .bottom .time").eq(2).text(add0(seconds))
        }
    var gotimes = $(".purchaseCenterItem .top").attr("dates");
    var time = $(".purchaseCenterItem .top").text().trim();
    time = time.replace("场", "");
    var goDates = new Date("" + gotimes + " " + time + "");
    var dateNumber = 0;
    var aalSeconds = 0;
    var seconds = 0;
    var points = 0;
    var hours = 0;
    var times = setInterval(function() {
        changesTime()
        if (aalSeconds < 0) {
            clearInterval(times)
        }
    }, 1000)
    changesTime()
})