$(function() {
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
	// 划过显示登入
	$(".headerRight>div").eq(0).hover(function() {
		$(".headerRight>div .person").stop().slideDown(100);
	}, function() {
		$(".headerRight>div .person").stop().slideUp(100);
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
	}, 3000);

	var switchUp = "open";
	$(".orderDetails").click(function() {
		if (switchUp == "open") {
			$(".topUnder").slideDown(100);
			switchUp = "off";
			$("#getShopMessage").css("display","none")
		} else {
			$(".topUnder").slideUp(100)
			switchUp = "open";
			$("#getShopMessage").css("display","block")
		}
	})
	//获取cookie中对应的数据
	var num=location.search.split("=")[1];
	var saveAdd=getCookie('saveAdd');
	saveAdd = JSON.parse(saveAdd);
	var name;
	var city;
	var phone;
	var txts;
	saveAdd.forEach(function (item,index,arr) {
		if(num==item.dataNumber){
			name=item.name;
			phone=item.phone;
			city=item.city;
			txts=item.txts;
		}
	})
	$(".personalMessage").text(name+" "+phone+" "+city+" "+txts);
	
	
	//获取订单中的商品名称和价格
	var pays=getCookie('pays');
	pays = JSON.parse(pays);
	var allPay=0;
	pays[0].forEach(function (item,index,arr) {
		var newDiv=$("<div>"+item.name+"</div>")
		$(".shopNames").append(newDiv);
		allPay+=item.price*item.number
	})
	$(".payPrice .orange").eq(0).text(allPay)
	
	
	
	
})
