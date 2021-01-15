$(function () {
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
	
	//划过下载
	$(".downloadApp").hover(function() {
		$(".download fa").css("display", "block");
		$(".download").stop().slideDown(300);
	}, function() {
		$(".download").stop().slideUp(300);
		$(".download fa").css("display", "none");
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
	
	
	
	
	
	
	
	
	
	
})