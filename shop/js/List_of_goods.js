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
	//点击显示 点击隐藏
	var list = false;
	$("#more").click(function() {

		if (list) {
			$(".floor3 .list").css("display", "none");
			$(".floor3 i").eq(0).css("display", "inline-block");
			$(".floor3 i").eq(1).css("display", "none");
			list = false;
		} else {
			$(".floor3 .list").css("display", "block");
			$(".floor3 i").eq(1).css("display", "inline-block");
			$(".floor3 i").eq(0).css("display", "none");
			list = true;
		}
	})
	//把第四个的magin值去掉
	// var numbers=$(".floor4 .center ul>li").length / 4
	// for(var s=0;s<numbers;s++){
	// 	$(".floor4 .center ul>li").eq(s*4+3).css("marginRight","0")
	// }
	//滑过显示笨张大图
	$(".floor4 .center .smallPhoto img").hover(function() {
		$(this).addClass("red");
		$(this).siblings().removeClass("red");
		$(this).parent().siblings(".photo").children("a").css("display", "none");
		$(this).parent().siblings(".photo").children("a").eq($(this).index()).css("display", "inline-block");
		$(this).parent().siblings(".centerTxt").children("a").css("display", "none");
		$(this).parent().siblings(".centerTxt").children("a").eq($(this).index()).css("display", "inline-block");
		$(this).parent().siblings(".speend").children("span").css("display", "none");
		$(this).parent().siblings(".speend").children("span").eq($(this).index()).css("display", "inline-block");
		$(this).parent().siblings(".speend").children("s").css("display", "none");
		$(this).parent().siblings(".speend").children("s").eq($(this).index()).css("display", "inline-block");
		$(this).parent().siblings(".TheLabel").children("div").css("display", "none");
		$(this).parent().siblings(".TheLabel").children("div").eq($(this).index()).css("display", "inline-block");
	});
	//下面的轮播图
	var starts = 0;
	var TwoSwiper = parseInt($(".favouriteList li").css("width").replace("px", "")) + 14;
	$(".favouriteList ul").css("width", TwoSwiper * $(".favouriteList li").length);
	$(".twoBtn button").click(function() {
		clearInterval(sem)
		$(".favouriteList ul").animate({ left: -$(this).index() * TwoSwiper * 5 }, 1000);
		starts = -$(this).index() * TwoSwiper * 5;
		$(this).addClass("redd");
		$(this).siblings().removeClass("redd");
		movers()
	});
	var sem
	movers()
	function movers() {
		sem = setInterval(function() {
			if (starts == 0) {
				$(".favouriteList ul").animate({ left: -TwoSwiper * 5 }, 1000);
				starts = 1;
				$(".twoBtn button").eq(starts).addClass("redd");
				$(".twoBtn button").eq(starts).siblings().removeClass("redd");
			} else {
				$(".favouriteList ul").animate({ left: 0 }, 1000);
				starts = 0;
				$(".twoBtn button").eq(starts).addClass("redd");
				$(".twoBtn button").eq(starts).siblings().removeClass("redd");
			}
		}, 10000)
	}
	$(".favouriteList ul").hover(function() {
		clearInterval(sem)
	}, function() {
		movers()
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
	var state = true;
	$("#sorting").click(function() {
		$(this).css("color", "#f60");
		$(".floor4 .topRight>div").eq(0).find("a").css("color","black")
		var $li = $(".floor4 .center ul li").toArray();
		if (state) {
			//排序
			$li.sort(function(itemA, itemB) {
				var ageA = $(itemA).find(".speend span").eq(0).text().replace("元", "");
				var ageB = $(itemB).find(".speend span").eq(0).text().replace("元", "");
				return ageB - ageA;
			})
			$(".floor4 .center ul").append($li);
			$(this).find("i").eq(0).css("display", "inline-block");
			$(this).find("i").eq(1).css("display", "none");
			state = false;
		} else {
			$li.sort(function(itemA, itemB) {
				var ageA = $(itemA).find(".speend span").eq(0).text().replace("元", "");
				var ageB = $(itemB).find(".speend span").eq(0).text().replace("元", "");
				return ageA - ageB;
			})
			$(this).find("i").eq(0).css("display", "none");
			$(this).find("i").eq(1).css("display", "inline-block");
			$(".floor4 .center ul").append($li);
			state = true;
		}

	})
	//存储Cookie
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	//获取Cookie
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			var arrC = c.split("=");
			if (arrC[0] == cname) {
				return arrC[1];
			}
		}
		return "";
	}
	//点击存储Cookie
	$(".floor5 .bigBox .btn").click(function() {
		// 获取商品数据-goods
		var id = $(this).parent().data("id");
		var name = $(this).siblings(".txts").text().trim();
		var photo = $(this).siblings("div").eq(0).find("img").attr('src');
		var price = $(this).siblings(".price").text().replace("元", "");
		var goods = {
			id: id,
			name: name,
			photo: photo,
			price: price,
			num: 1,
		}
		// 1.提取cookie中购物车数组
		var cart = getCookie('cart');
		if (cart) {
			// 2.JSON转换成数组
			cart = JSON.parse(cart);
		} else {
			cart = [];
		}
		// 3.在cart查找此商品，
		var i = cart.findIndex(function(item, index) { return item.id == id; });
		if (i >= 0) {
			// 如果有，数量+1
			cart[i].num += 1;
		} else {
			// 如果无，push进数组
			cart.push(goods);
		}
		// 4.转换成JSON
		cart = JSON.stringify(cart);
		// 5.存储至cookie
		setCookie('cart', cart);
		//弹出添加成功
		$(this).siblings(".success").stop().animate({top:0});
		var number=$(this).parents("li").index();
		setTimeout(function () {
			$(".floor5 .bigBox li").eq(number).find(".success").stop().animate({top:-30})
		},500)
	})
})
