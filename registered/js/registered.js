$(function() {
	var ss = true;
	$(".phoneLogInBtn span").click(function() {
		$(".account").css("display", "none");
		$(".messsage").css("display", "block");
		$(".Qr_code").css("display", "none");
		$(".logInBottom ").css("display", "block");
		ss = false;
	});
	$(".userNameLogIn span").click(function() {
		$(".messsage").css("display", "none");
		$(".account").css("display", "block");
		$(".Qr_code").css("display", "none");
		$(".logInBottom ").css("display", "block");
		ss = true;
	});
	$(".rightPay").click(function() {
		$(".messsage").css("display", "none");
		$(".account").css("display", "none");
		$(".Qr_code").css("display", "block");
		$(".logInBottom ").css("display", "none");
		$(this).addClass("orange");
		$(this).siblings().removeClass("orange");
	});
	$(".leftPay").click(function() {
		if (ss) {
			$(".messsage").css("display", "none");
			$(".account").css("display", "block");
			$(".Qr_code").css("display", "none");
			$(".logInBottom ").css("display", "block");
		} else {
			$(".account").css("display", "none");
			$(".messsage").css("display", "block");
			$(".Qr_code").css("display", "none");
			$(".logInBottom ").css("display", "block");
		}
		$(this).addClass("orange");
		$(this).siblings().removeClass("orange");
	});
	
	$("#logIn").click(function () {
		var one=$("#one").val();
		if(/^1[3456789]\d{9}$/.test(one) || /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/.test(one)){
			$("#txt1").css("display","none");
		}else{
			$("#txt").css("display","block");
			return;
		}
		var two=$("#one2").val();
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(two)){
			location.assign("../index/index.html");
		}else{
			$("#txt1").css("display","block");
			$("#txt").css("display","none");
		}
	})
	$("#btn2").click(function () {
		var ones=$("#inpone").val();
		if(/^1[3456789]\d{9}$/.test(ones)){
			$("#four2").css("display","none");
		}else{
			$("#four1").css("display","block");
			return;
		}
		var twoa=$("#inpone2").val();
		console.log(twoa)
		if(/^\d/.test(twoa)){
			location.assign("../index/index.html");
		}else{
			$("#four2").css("display","block");
			$("#four1").css("display","none");
		}
		
	})
})
