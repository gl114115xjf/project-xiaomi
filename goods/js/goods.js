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

	//划过下载
	$(".downloadApp").hover(function() {
		$(".download fa").css("display", "block");
		$(".download").stop().slideDown(300);
	}, function() {
		$(".download").stop().slideUp(300);
		$(".download fa").css("display", "none");
	})


	//让第奇数去掉marginRight
	for (var s = 0; s < $(".version .item").length; s++) {
		if (s % 2 == 1) {
			$(".version .item").eq(s).css("marginRight", "0")
		}
	}
	for (var s = 0; s < $(".color .item").length; s++) {
		if (s % 2 == 1) {
			$(".color .item").eq(s).css("marginRight", "0")
		}
	}
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
	},3000)
	
	// 滑到位置显示
	$(window).scroll(function () {
		if($(window).scrollTop()>=824){
			$(".listLeft li:last-child").css("display","block")
		}else{
			$(".listLeft li:last-child").css("display","none")
		}
		if($(window).scrollTop()>=200){
			
			$(".floor2").css("position","fixed");
			$(".floor2").css("z-index","999");
		}else{
			$(".floor2").css("position","static");
		}
		
		
	})
	//返回头部
	$(".listLeft li:last-child").click(function () {
		$("html,body").stop(true).animate({scrollTop:0});
	});
	
	
	function getPay() {
		var munber=parseInt($("#pay span").text().replace("元",""));
		var munber1;
		var munber2;
		if($("#service1Price").text()==""){
			munber1=0;
		}else{
			munber1=parseInt($("#service1Price").text().replace("元",""));
		}
		var munber2;
		if($("#service2Price").text()==""){
			munber2=0;
		}else{
			munber2=parseInt($("#service2Price").text().replace("元",""));
		}
		$("#allPay").text(munber+munber1+munber2)
	}
	//获取容量
	$(".rightFloor3 .item").click(function () {
		$(".rightFloor3 .item").removeClass("colors")
		$(this).addClass("colors");
		$("#capacity").text($(this).text())
		$(".rightFloor1Bottom").css("display","none")
		$(".rightFloor1Bottom").eq($(this).index()).css("display","block")
		var txts=$(".rightFloor1Bottom").eq($(this).index()).find("span").text();
		var txts1=$(".rightFloor1Bottom").eq($(this).index()).find("s").text();
		$("#pay").find("span").text(txts);
		$("#pay").find("s").text(txts1);
		getPay()
	})
	//改变手机颜色
	$(".rightFloor4 .item").click(function () {
		$(".rightFloor4 .item").removeClass("colors")
		$(this).addClass("colors");
		$("#colorss").text($(this).text());
	})
	//选择小米提供的意外保护
	$(".accident").click(function () {
		$(".accident").removeClass("accidentss")
		$(this).addClass("accidentss");
		$(this).siblings().attr("adds","");
		var txt=$(this).find(".big").text();
		var spend=$(this).find(".price").text()
		$("#service1").text(txt)
		$("#service1Price").text(spend);
		if($(this).attr("adds")=="true"){
			$(this).removeClass("accidentss");
			$(this).attr("adds","");
			$("#service1").text("")
			$("#service1Price").text("");
		}else{
			$(this).addClass("accidentss");
			$(this).attr("adds","true");
		};
		getPay()
		
	})
	// 选择小米提供的延长保修
	var s=true;
	$(".noxs").click(function () {
		var txt=$(this).find(".big").text();
		var spend=$(this).find(".price").text()
		$("#service2").text(txt)
		$("#service2Price").text(spend);
		if(s){
			$(this).addClass("thisLongClass");
			s=false;
		}else{
			$(this).removeClass("thisLongClass");
			s=true;
			$("#service2").text("")
			$("#service2Price").text("");
		};
		getPay()
	})
	//选项卡  商品概述   商品参数
	$(".floor4 span").click(function () {
		$(".floor4 span").removeClass("orange");
		$(this).addClass("orange");
		$(".floor5>div").css("display","none");
		$(".floor5>div").eq($(this).index()).css("display","block");
	})
	
	//点击弹窗地址显示
	$("#alter").click(function () {
		$(".AddShippingAddress").css("display","block");
		$(".AddShippingAddress").animate({top:0,opacity:1},500);
	})
	//点击弹窗地址隐藏
	$(".AddShippingAddress .error").click(function () {
		$(".AddShippingAddress").animate({top:-30,opacity:0},500);
		setTimeout(function () {
			$(".AddShippingAddress").css("display","none");
		},500)
	})
	// 点击时文本框变化
	$(".AddShippingAddress .txt .top").focus(function () {
			$(this).parent().addClass("add");
			$(this).on("input propertychange",function () {
					if($(this).val()==""){
						$(this).siblings(".name").css("display","block")
					}else{
						$(this).siblings(".name").css("display","none")
					}
			})
	})
	$(".AddShippingAddress .txt .top").blur(function () {
		$(this).parent().removeClass("add")
	})
	//轮播图
	$(".floor3 .swipers .btn>span").click(function () {
		$(".floor3 .swipers .btn span").removeClass("btn1")
		$(this).addClass("btn1");
		$(".swipers_imgs img").animate({opacity:0},500);
		$(".swipers_imgs img").eq($(this).index()).animate({opacity:1},200);
		clearInterval(stop)
		automatic();
	})
	//点击左边按钮
	var nums=0;
	var bigNus=$(".swipers_imgs img").length;
	$(".swiperLeft").click(function () {
		nums--;
		if(nums<0){
			nums=bigNus-1
		}
		$(".swipers_imgs img").stop().animate({opacity:0},500);
		$(".swipers_imgs img").eq(nums).stop().animate({opacity:1},200);
		$(".floor3 .swipers .btn span").removeClass("btn1")
		$(".floor3 .swipers .btn span").eq(nums).addClass("btn1");
		clearInterval(stop)
		automatic();
	})
	//点击右边按钮
	$(".swiperRight").click(function () {
		nums++;
		if(nums>=bigNus){
			nums=0;
		}
		$(".swipers_imgs img").stop().animate({opacity:0},500);
		$(".swipers_imgs img").eq(nums).stop().animate({opacity:1},200);
		$(".floor3 .swipers .btn span").removeClass("btn1")
		$(".floor3 .swipers .btn span").eq(nums).addClass("btn1");
		clearInterval(stop)
		automatic();
	})
	//计时器轮播图
	var stop;
	function automatic() {
		    stop=setInterval(function () {
			nums++;
			if(nums>=bigNus){
				nums=0;
			}
			$(".swipers_imgs img").stop().animate({opacity:0},500);
			$(".swipers_imgs img").eq(nums).stop().animate({opacity:1},200);
			$(".floor3 .swipers .btn span").removeClass("btn1")
			$(".floor3 .swipers .btn span").eq(nums).addClass("btn1");
		},4000)
	}
	automatic();
	
	
	
	
	
	
	
	
	
})
