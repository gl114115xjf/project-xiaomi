$(function() {
	//渲染
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
	}, 3000)
	//将开始时的textarea的文本变为空
	var mss = $(".AddShippingAddress .txt .center textarea").text().trim();
	$(".AddShippingAddress .txt .center textarea").text(mss)
	// 获取焦点时触发
	$(".AddShippingAddress .message input").focus(function() {
		$(this).siblings(".txtss").animate({ top: -8, fontSize: 12 })
		$(this).siblings(".txtss").css("zIndex", "10")
		$(this).addClass("orangss")
		$(this).siblings(".txtss").addClass("oranges")
	})
	// 失去焦点
	$(".AddShippingAddress .message input").blur(function() {
		if ($(this).val() == "") {
			$(this).siblings(".txtss").animate({ top: 10, fontSize: 14 })
			$(this).siblings(".txtss").css("zIndex", "1")
			$(this).removeClass("orangss")
			$(this).siblings(".txtss").removeClass("oranges")
		} else {
			$(this).removeClass("orangss")
			$(this).siblings(".txtss").removeClass("oranges")
		}
	});
	//详情地址  获取焦点
	$(".AddShippingAddress .txt .center .inptItenm").focus(function() {
		$(this).siblings(".xiangxi").animate({ top: -8, fontSize: 12 }, 20)
		$(this).siblings(".xiangxi").css("zIndex", "10")
		$(this).parent().addClass("athher");
		if ($(this).val() == "") {
			$(this).siblings(".Detailed").fadeIn(200);
			$(this).on("input propertychange", function() {
				if ($(this).val() == "") {
					$(this).siblings(".Detailed").css("display", "block")
				} else {
					$(this).siblings(".Detailed").css("display", "none")
				}
			})
		} else {
			$(this).siblings(".Detailed").css("display", "none")
		}
	})
	//详情地址  失去焦点
	$(".AddShippingAddress .txt .center .inptItenm").blur(function() {
		if ($(this).val().trim() == "") {
			$(this).siblings(".Detailed").fadeOut(200)
			$(this).siblings(".xiangxi").animate({ top: 9, fontSize: 13.5 }, 20)
			$(this).siblings(".xiangxi").css("zIndex", "2")
			$(this).parent().removeClass("athher");
		} else {
			$(this).siblings(".xiangxi").css("zIndex", "2")
			$(this).parent().removeClass("athher");
		}
	})
	var state = "push";
	//点击弹窗地址显示
	$(".addAddress").click(function() {
		$(".AddShippingAddress").css("display", "block");
		$(".AddShippingAddress").animate({ top: 0, opacity: 1 }, 500);
		// 状态变为添加
		state = "push";
		$(".txtss11").val("");
		$(".txtss22").val("");
		$(".city .tttt span").text("选择省/市/区");
		$("textarea").val("");
		$(".inptItenm1").val("")
		$(".AddShippingAddress .message .txtss").css({"top":'10px',"fontSize":"13.5px"})
		$(".AddShippingAddress .xiangxi").css({"top":'10px',"fontSize":"13.5px"})
	});
	var parentIndex = 0;
	$(".address").on("click", ".Modify", function() {
		$(".AddShippingAddress").css("display", "block");
		$(".AddShippingAddress").animate({ top: 0, opacity: 1 }, 500);
		//状态变为修改
		state = "ModifyThe";
		var name = $(this).parents(".addAddress1").find(".titles .fl").text();
		var title = $(this).parents(".addAddress1").find(".titles .fr").text();
		var number = $(this).parents(".addAddress1").find(".txtTwo .num").text();
		var adds = $(this).parents(".addAddress1").find(".txtTwo .ad").text();
		var label1 = $(this).parents(".addAddress1").find(".detailedAdd").text();
		$(".txtss11").val(name);
		$(".txtss22").val(number);
		$(".city .tttt span").text(adds);
		$("textarea").val(label1);
		$(".inptItenm1").val(title)
		parentIndex = $(this).parents(".addAddress1").index();
		$(".AddShippingAddress .message .txtss").css({"top":'-8px',"fontSize":"12px"})
		$(".AddShippingAddress .xiangxi").css({"top":'-8px',"fontSize":"2px"})
	})
	//点击弹窗地址隐藏
	$(".AddShippingAddress .error").click(function() {
		$(".AddShippingAddress").animate({ top: -30, opacity: 0 }, 500);
		setTimeout(function() {
			$(".AddShippingAddress").css("display", "none");
		}, 500)
	})
	$(".AddShippingAddress .bottom .btns").eq(1).click(function() {
		$(".AddShippingAddress").animate({ top: -30, opacity: 0 }, 500);
		setTimeout(function() {
			$(".AddShippingAddress").css("display", "none");
		}, 500)
	})
	// 弹框中获取焦点边框改变
	$(".searCityName").focus(function() {
		$(this).siblings(".texts").addClass("colorss");
		$(this).on("input propertychange", function() {
			if ($(this).val() == "") {
				$(this).siblings(".texts").css("display", "block")
			} else {
				$(this).siblings(".texts").css("display", "none")
			}
		})
		//文字改变时触发事件
		$(this).on("input propertychange",function () {
			if($(this).val()==""){
				$(this).siblings(".texts").css("display", "block");
			}else{
				$(this).siblings(".texts").css("display", "none");
			}
		})
	})
	//失去焦点
	$(".searCityName").blur(function() {
		$(this).siblings(".texts").removeClass("colorss");
	})
	// 表单验证
	$(".AddShippingAddress .bottom .btns").eq(0).click(function() {
		var name = $(".txtss11").val();
		var phone = $(".txtss22").val();
		var city = $(".city .tttt span").text();
		var txts = $("textarea").val();
		var label = $(".inptItenm1").val()
		//至少4位数字字母下户线
		if (/[\u4e00-\u9fa5_a-zA-Z0-9_]{2,10}/.test(name)) {
			$(".AddShippingAddress .message .fl .errorss").css("display", "none")
		} else {
			$(".AddShippingAddress .message .fl .errorss").css("display", "block")
			return;
		}
		//手机号码
		if (/^[1]([3-9])[0-9]{9}$/.test(phone)) {
			$(".AddShippingAddress .message .fr .errorss").css("display", "none")
		} else {
			$(".AddShippingAddress .message .fr .errorss").css("display", "block")
			return;
		}
		//所在城市
		if (city == "选择省/市/区") {
			$(".AddShippingAddress .city .errorss").css("display", "block")
			return;
		} else {
			$(".AddShippingAddress .city .errorss").css("display", "none")
		}
		//^(?=.*?[\u4E00-\u9FA5])[a-zA-Z0-9\-\_\u4E00-\u9FA5]{5,100}
		if (/^[\u4E00-\u9FA5]{5,32}$/.test(txts)) {
			$(".AddShippingAddress .readTxt1 .errorss").css("display", "none")
		} else {
			$(".AddShippingAddress .readTxt1 .errorss").css("display", "block")
			return;
		}
		//最长为5个字
		if (/^[\u4E00-\u9FA5]{0,5}$/.test(label) || label == "") {
			$(".AddShippingAddress .readTxt2 .errorss").css("display", "none")
		} else {
			$(".AddShippingAddress .readTxt2 .errorss").css("display", "block")
			return;
		}
		if (state == "push") {
			//cookie里面的dataNumber从哪位开始
			var dataNumber=0;
			var saveAdd = getCookie('saveAdd');
			if (saveAdd) {
				// 2.JSON转换成数组
				var bigNumber=0;
				saveAdd = JSON.parse(saveAdd);
				saveAdd.forEach(function (item,index) {
					if(saveAdd[index].dataNumber>bigNumber){
						bigNumber=saveAdd[index].dataNumber
					}
				})
				dataNumber=bigNumber+1;
			} else {
				dataNumber=0;
			}
			// 存入cookie
			var add={
				dataNumber:dataNumber,
				name:name,
				phone:phone,
				city:city,
				txts:txts,
				label:label,
			}
			// 1.提取cookie中购物车数组
			var saveAdd = getCookie('saveAdd');
			if (saveAdd) {
				// 2.JSON转换成数组
				saveAdd = JSON.parse(saveAdd);
			} else {
				saveAdd = [];
			}
			// 3.在saveAdd查找此商品，
			saveAdd.push(add);
			// 4.转换成JSON
			saveAdd = JSON.stringify(saveAdd);
			// 5.存储至cookie
			setCookie('saveAdd', saveAdd);
			//验证完成后渲染数据
			var $add = $(
				`<div class="addAddress1 fl" check="" data-number="${add.dataNumber}">
							<div class="titles clearBox">
								<div class="fl">${name}</div>
								<div class="fr">${label}</div>
							</div>
							<div class="txtTwo">
								<div class="num">${phone}</div>
								<div class="ad">${city}</div>
								<div class="detailedAdd">${txts}</div>
							</div>
							<div class="Modify">
								修改
							</div>
						</div>`
			);
			$(".addAddress").before($add)
			$(".AddShippingAddress").animate({ top: -30, opacity: 0 }, 500);
			setTimeout(function() {
				$(".AddShippingAddress").css("display", "none");
			}, 500)
		} else {
			$(".addAddress1").eq(parentIndex).find(".titles .fl").text(name)
			$(".addAddress1").eq(parentIndex).find(".titles .fr").text(label)
			$(".addAddress1").eq(parentIndex).find(".txtTwo .num").text(phone)
			$(".addAddress1").eq(parentIndex).find(".txtTwo .ad").text(city)
			$(".addAddress1").eq(parentIndex).find(".detailedAdd").text(txts)
			$(".AddShippingAddress").animate({ top: -30, opacity: 0 }, 500);
			setTimeout(function() {
				$(".AddShippingAddress").css("display", "none");
			}, 500)
		}
	})
	//判断点击
	$(".address").on("click", ".addAddress1", function() {
		// if(this).attr("check")
		if ($(this).attr("check") == "") {
			$(this).siblings(".addAddress1").attr("check", "");
			$(this).css("borderColor", "#ff6700");
			$(this).siblings(".addAddress1").css("borderColor", "#e0e0e0");
			$(this).attr("check", "check")
		}
	})
	
	//点击结算判断是否选折地址跳转页面
	$("#btn1").click(function() {
		var ChosenAddress;
		var ginseng=0;
		for (var long = 0; long < $(".addAddress1").length; long++) {
			var check = $(".addAddress1").eq(long).attr("check");
			if (check == "check") {
				ChosenAddress=true;
				ginseng=$(".addAddress1").eq(long).data("number")
				break;
			}
		}
		if(ChosenAddress){
			location.assign("pay.html?ginseng="+ginseng)
		}else{
			$(".notChoose").css("display","block");
			$(".notChoose").animate({top:0,opacity:1},500)
		}
	})
	//点击按钮关闭
	$(".btnTwo").click(function () {
		$(".notChoose").animate({top:-10,opacity:0},500);
		setTimeout(function () {
			$(".notChoose").css("display","none");
		},500)
	})
	// 1.页面加载完成，获取cookie中的saveAdd数据
	var saveAdd = getCookie('saveAdd');
	if (saveAdd) {
		saveAdd = JSON.parse(saveAdd);
	} else {
		saveAdd = [];
	}
	// 2.渲染数据
	saveAdd.forEach(function(item, index) {
		//验证完成后渲染数据
		var $add = $(
			`<div class="addAddress1 fl" check="" data-number="${item.dataNumber}">
						<div class="titles clearBox">
							<div class="fl">${item.name}</div>
							<div class="fr">${item.label}</div>
						</div>
						<div class="txtTwo">
							<div class="num">${item.phone}</div>
							<div class="ad">${item.city}</div>
							<div class="detailedAdd">${item.txts}</div>
						</div>
						<div class="Modify">
							修改
						</div>
					</div>`
		);
		$(".addAddress").before($add)
	});
	// 1.页面加载完成，获取cookie中的pays数据
	var pays = getCookie('pays');
	if (pays) {
		pays = JSON.parse(pays);
	} else {
		pays = [];
	}
	pays.forEach(function (item, index) {
		// 2.渲染数据
		pays[index].forEach(function(item, index) {
			var $item = $(`<div class="items clearBox data-id="${item.id}"">
							<div class="fl">
								<img src="${item.photo}">
							</div>
							<div class="fl name">
								${item.name}
							</div>
							<div class="fl price">
								<span>${item.price}</span>
								<span>元</span>
								<span>X</span>
								<span>${item.number}</span>
							</div>
							<div class="fl allPrice">
								<span>${item.number*item.price}</span>
								<span>元</span>
							</div>
						</div>`);
			$('.shopList').append($item);
		});
	})
	//将总价格赋值于应支付价格
	var allPay=0
	for(var allPr=0;allPr<$(".shopList .items").length;allPr++){
		allPay+=parseFloat($(".shopList .items").eq(allPr).find(".allPrice span").eq(0).text());
	}
	$(".pays").text(allPay);
	$("#all").text(allPay+"元");
	$("#lengths").text($(".items").length+"件");
})
