$(function() {
	// 划过显示登入
	$(".headerRight>div").eq(0).hover(function() {
		$(".headerRight>div .person").stop().slideDown(100);
	}, function() {
		$(".headerRight>div .person").stop().slideUp(100);
	})
	//li的第五个去marginRight
	$(".floor5 ul li").length;
	for (var m = 0; m < $(".floor5 ul li").length; m++) {
		if (m % 5 == 0) {
			$(".floor5 ul li").eq(m + 4).css("marginRight", "0")
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
	}, 3000)
	//获取页面的Cookie函数
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
	//存储Cookie
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	
	// 1.页面加载完成，获取cookie中的cart数据
	var cart = getCookie('cart');
	if (cart) {
		cart = JSON.parse(cart);
	} else {
		cart = [];
	}
	// 2.渲染数据
	cart.forEach(function(item, index) {
		var $item = $('<div class="item" data-id="'+item.id+'">' +
			'<div class="checks_box removes" judge="">' +
			'<i class="fa fa-check" aria-hidden="true"></i>' +
			'</div>' +
			'<img src="' + item.photo + '">' +
			'<div>' +
			'<a href="">' + item.name + '</a>' +
			'</div>' +
			'<div class="unitPriceShop">' +
			item.price + "元" +
			'</div>' +
			'<div>' +
			'<button class="downlBtn"><i class="fa fa-minus" aria-hidden="true"></i></button><input class="inpts" value="' +
			item.num + '"></input><button class="downrBtn"><i class="fa fa-plus"' +
			'aria-hidden="true"></i></button>' +
			'</div>' +
			'<div class="pay">' +
			item.price * item.num + "元" +
			'</div>' +
			'<div class="X">' +
			'<div class="x">' +
			'<i class="fa fa-times" aria-hidden="true"></i>' +
			'</div>' +
			'</div>' +
			'</div>');
		$('#shopCart').append($item);
	});
	//点击获取总价格
	function allPaySprice() {
		var mun = 0;
		for (var m = 0; m < $("#shopCart .checks_box").length; m++) {
			var $judeg = $("#shopCart .checks_box").eq(m).attr("judge");
			if ($judeg == "gread") {
				// console.log($("#shopCart .item").eq(m).find(".pay"))
				var ss = $("#shopCart .item").eq(m).find(".pay").text().replace("元", "");
				ss = parseFloat(ss).toFixed(2);
				ss = parseFloat(ss);
				mun += ss;
			}
		}
		$(".bigNumber").text(mun)
	}
	//点击获取选中的数
	var shopNumber = 0;
	function choose() {
		shopNumber = 0;
		for (var number = 0; number < $(".checks_box").length; number++) {
			var gread = $(".checks_box").eq(number).attr("judge");
			if (gread == "gread") {
				shopNumber++
			};
		};
		$("#shopNumber").text(shopNumber);
	};
	choose()
	//点击减按钮
	$(".downlBtn").click(function() {
		var sss = $(this).siblings(".inpts").val().replace("元", "") - 1;
		var price = $(this).parent().siblings(".unitPriceShop").text().replace("元", "");
		if (sss > 0) {
			$(this).siblings(".inpts").val(sss);
			$(this).parent().siblings(".pay").text(sss * price + "元")
		} else {
			alert("不能小于1")
			return;
		}
		var number = (sss * price).toFixed(2);
		var tt = number.substring(number.length - 2, number.length + 1)
		if (tt == "00") {
			number = parseInt(number)
		}
		$(this).parent().siblings(".pay").text(number + "元");
		allPaySprice()
	})
	//点击添加按钮
	$(".downrBtn").click(function() {
		var sss = $(this).siblings(".inpts").val().replace("元", "");
		sss = parseFloat(sss) + 1;
		var price = $(this).parent().siblings(".unitPriceShop").text().replace("元", "");
		$(this).siblings(".inpts").val(sss);
		//点击获取总价格
		var number = (sss * price).toFixed(2);
		var tt = number.substring(number.length - 2, number.length + 1)
		if (tt == "00") {
			number = parseInt(number)
		}
		$(this).parent().siblings(".pay").text(number + "元");
		allPaySprice()
		choose()
	})
	// 点击许多复现框 实现全选
	$("#shopCart .checks_box").click(function() {
		if ($(this).attr("judge") == "") {
			//删除滑过显示灰色
			$(this).removeClass("removes")
			$(".checks").removeClass("removes")
			$(this).css("backgroundColor", "#ff6700");
			$(this).attr("judge", "gread");
			$("#shopCart .checks_box").attr("judge")
			var allNumber = 0;
			for (var s = 0; s < $("#shopCart .checks_box").length; s++) {
				var numbers = $("#shopCart .checks_box").eq(s).attr("judge");
				if (numbers == "gread") {
					allNumber++;
				}
			}
			if (allNumber == $("#shopCart .checks_box").length) {
				$(".checks").css("backgroundColor", "#ff6700");
				$(".checks").attr("Future", "gread")
			}
			//获取总价格
			allPaySprice()
			choose()
		} else {
			//添加滑过显示灰色
			$(this).addClass("removes")
			$(".checks").addClass("removes")
			$(this).css("backgroundColor", "#fff");
			$(this).attr("judge", "")
			$(".checks").attr("Future", "");
			if ($(".checks").attr("Future") == "") {
				$(".checks").css("backgroundColor", "#fff");
			}
			allPaySprice()
			choose()
		}
		//钱数大于0显示
		if ($(".bigNumber").text() <= 0) {
			$("#btnBox").find(".alterMessage").css("display", "block");
			$("#btnBox").find("i").css("display", "block");
			$("#btnBox").find("button").removeClass("btn");
		} else {
			$("#btnBox").find(".alterMessage").css("display", "none");
			$("#btnBox").find("i").css("display", "none");
			$("#btnBox").find("button").addClass("btn");
		}
	})
	// 点击全选 选中下面所有小盒子或者不选中
	$(".checks").click(function() {
		if ($(".checks").attr("Future") == "") {
			//删除滑过显示灰色
			$(this).removeClass("removes")
			$(".checks_box ").removeClass("removes")
			$(this).css("backgroundColor", "#ff6700");
			$(".checks").attr("Future", "gread");
			$("#shopCart .checks_box").css("backgroundColor", "#ff6700");
			$("#shopCart .checks_box").attr("judge", "gread");
			allPaySprice()
			choose()
		} else {
			//添加滑过显示灰色
			$(this).addClass("removes")
			$(".checks_box").addClass("removes")
			$(this).css("backgroundColor", "#fff");
			$(".checks").attr("Future", "");
			$("#shopCart .checks_box").css("backgroundColor", "#fff");
			$("#shopCart .checks_box").attr("judge", "");
			allPaySprice()
			choose()
		}
		//钱数大于0显示
		if ($(".bigNumber").text() <= 0) {
			$("#btnBox").find(".alterMessage").css("display", "block");
			$("#btnBox").find("i").css("display", "block");
			$("#btnBox").find("button").removeClass("btn");
		} else {
			$("#btnBox").find(".alterMessage").css("display", "none");
			$("#btnBox").find("i").css("display", "none");
			$("#btnBox").find("button").addClass("btn");
		}
	})
	//转换
	$("#shopCart").on("click", ".x", function() {
		$(this).parents(".item").remove()
		//删除cookie里面的数组
		var id=$(this).parents(".item").data("id");
		// 1.提取cookie中购物车数组
		var cart = getCookie('cart');
			// 2.JSON转换成数组
		cart = JSON.parse(cart);
		cart.forEach(function (item, index) {
			if(id==item.id){
				cart.splice(index,1)
			}
		})
		// 4.转换成JSON
		cart = JSON.stringify(cart);
		// 5.存储至cookie
		setCookie('cart', cart);
		allPaySprice()
		choose()
		$("#numberss").text($(".itemBox .item").length);
		console.log($(".itemBox .item").length)
		nones();
	})
	// 一共多少商品
	$("#numberss").text($("#shopCart .item").length);
	
	//点击按钮判断 .btn为加的class
	$("#btnBox").on("click", ".btn", function() {
		location.assign("./order.html")
		// 上传选中的商品的cookie;
		var pay=[];
		for (var payNumber = 0; payNumber < $(".itemBox .item").length; payNumber++) {
			var $judge=$(".checks_box").eq(payNumber).attr("judge");
			var nums=0;
			nums++;
			if($judge=="gread"){
				var id=$(".itemBox .item").eq(payNumber).data("id");
				var name=$(".itemBox .item").eq(payNumber).children("div").eq(1).text();
				var photo = $(".itemBox .item").eq(payNumber).find("img").attr('src');
				var price = $(".itemBox .item").eq(payNumber).find(".unitPriceShop").text().replace("元","");
				var number = $(".itemBox .item").eq(payNumber).find(".inpts").val();
				var goods={
					id:id,
					name: name,
					photo: photo,
					price: price,
					number: number,
				}
				pay.push(goods);
			}
		}
		var classs=$("#shopCart").data("class");
		// 1.提取cookie中购物车数组
		var pays = getCookie('pays');
		if (pays) {
			// 2.JSON转换成数组
			pays = JSON.parse(pays);
		} else {
			pays = [];
		}
		// 3.在pays查找此商品，
		if(pays==""){
			pays.push(pay);
		}else{
			pays = [];
			pays.push(pay);
		}
		// 4.转换成JSON
		pays = JSON.stringify(pays);
		// 5.存储至cookie
		setCookie('pays', pays);
		nones();
	});
	function nones() {
		if($(".itemBox .item").length==0){
			$(".floor1 .container").css("display","none")
			$(".floor1 .none").css("display","block")
		}
	}
	nones();
	$("#goShopping").click(function () {
		location.assign("List_of_goods.html")
	})
	
})
