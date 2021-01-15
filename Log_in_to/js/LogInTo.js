$(function () {
	$("#btn").click(function () {
		var ss=$("#thisInput").attr("zhengzhe");
		var zhengzhe = RegExp(ss);
		var txt=$("#thisInput").val();
		if(txt=="" || $("#phone1").css("display")=="block"){
			if(txt==""){
				$("#phone").css("display","block");
			}else{
				$("#phone1").css("display","block");
			}
		}else{
			location.assign("../index/index.html");
		}
	})
	//失去焦点
	$("#thisInput").blur(function () {
		var ss=$("#thisInput").attr("zhengzhe");
		var zhengzhe = RegExp(ss);
		var txt=$("#thisInput").val();
		if(zhengzhe.test(txt)){
			$("#phone1").css("display","none");
			$("#phone").css("display","none");
		}else{
			if(txt==""){
				$("#phone").css("display","block");
				$("#phone1").css("display","none");
			}else{
				$("#phone1").css("display","block");
				$("#phone").css("display","none");
			}
			txt=$("#thisInput").css("backgroungColor","red")
		}
	});
	
	
})