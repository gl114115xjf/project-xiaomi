	var Level = [
		[
			["山东"],
			[
				[
					['济南'],
					["历下区", "市中区", "天桥区", "历城区", "槐荫区", "长清区", "章丘区", "济阳区", "莱芜区", "钢城区", "平阴县", "商河县"]
				],
				[
					['烟台'],
					["莱山区", "芝罘区", "福山区", "牟平区", "蓬莱区", "莱州市", "龙口市", "莱阳市", "招远市", "栖霞市", "海阳市"]
				],
				[
					['威海'],
					["环翠区", "文登区", "乳山市", "荣成市"]
				],
				[
					['东营'],
					["东营区", "河口区", "垦利区", "广饶县", "利津县"]
				],
				[
					['淄博'],
					["张店区", "临淄区", "博山区", "淄川区", "周村区", "桓台县", "高青县", "沂源县"]
				],
				[
					['潍坊'],
					["潍城区", "寒亭区", "坊子区", "奎文区", "昌乐县", "临朐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市"]
				],
				[
					['日照'],
					["潍城区", "寒亭区", "坊子区", "奎文区", "昌乐县", "临朐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市"]
				],
				[
					['莱芜'],
					["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区", "平阴县", "济", "阳县", "商河县", "章丘市"]
				],
				[
					['菏泽'],
					["牡丹区", "定陶区", "曹县", "单县", "成武县", "鄄城县", "郓城县", "巨野县", "东明县"]
				],
				[
					['枣庄'],
					["薛城区", "峄城区", "山亭区", "市中区", "台儿庄区", "滕州市"]
				],
				[
					['德州'],
					["德城区", "陵城区", "宁津县", "齐河县", "武城县", "平原县", "夏津县", "临邑县", "庆云县", "乐陵市", "禹城市"]
				],
				[
					['滨州'],
					["滨城区", "沾化区", "惠民县", "博兴县", "阳信县", "无棣县", "邹平市"]
				],
				[
					['临沂'],
					["泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市"]
				],
				[
					['济宁'],
					["任城区", "兖州区", "鱼台县", "金乡县", "嘉祥县", "微山县", "汶上县", "泗水县", "梁山县", "曲阜市", "邹城市"]
				],
				[
					['聊城'],
					["滨城区", "沾化区", "惠民县", "博兴县", "阳信县", "无棣县", "邹平市"]
				],
				[
					['泰安'],
					["泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市"]
				]
			]
		],
		[
			["北京"],
			[
				[
					['北京市'],
					["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区"]
				]
			]
		],
		[
			["天津"],
			[
				[
					['天津市'],
					["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区汉沽区", "大港区", "东丽区西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县静海区",
						"蓟县保税区", "经济技术开发区", "高新区滨海新区"
					]
				]
			]
		]
	]
	//开始显示的省
	Level.forEach(function(item, index, arr) {
		namess = Level[index][0]
		var ss = $("<span>" + namess + "</span>");
		$(".moreaddress").append(ss)
	});
	// 、
	// var nassss='和平区、河东区、河西区、南开区、河北区、红桥区、塘沽区汉沽区、大港区、东丽区西青区、津南区、北辰区、武清区、宝坻区、宁河县静海区、蓟县保税区、经济技术开发区、高新区滨海新区';
	// console.log(nassss.split("、"))
	var number1 = 1;
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;
	var txt1;
	var txt2;
	var txt3;
	$(".moreaddress").on("click", "span", function() {
		if (number1 == 1) {
			s1 = $(this).index();
			//省下边的市
			lv1 = Level[s1][1];
			$(".moreaddress span").remove()
			lv1.forEach(function(item, index, arr) {
				namess = lv1[index][0][0];
				var ss = $("<span>" + namess + "</span>");
				$(".moreaddress").append(ss)
			});
			//把点击的那个显示在上面
			$(".searCity .citys div").eq(0).text(Level[s1][0]);
			//文本一
			txt1 = Level[s1][0];
			number1 = 2;
		} else if (number1 == 2) {
			//市下面的县
			//把点击的那个显示在上面
			s2 = $(this).index();
			var ssss = $(".searCity .citys div").eq(1).text(Level[s1][1][s2][0]);
			// console.log(Level[s1][1][$(this).index()][0].join())
			// console.log(ssss)
			lv2 = Level[s1][1][s2][1];
			$(".moreaddress span").remove()
			lv2.forEach(function(item, index, arr) {
				namess = lv2[index];
				var ss = $("<span>" + namess + "</span>");
				$(".moreaddress").append(ss)
			});
			//显示提示
			$(".searCity .citys span").css("display", "none");
			$(".searCity .citys span").eq(number1-1).css("display", "inline-block");
			//文本二
			txt2 = Level[s1][1][s2][0];
			number1 = 3;
		} else if (number1 == 3) {
			s3 = $(this).index();
			//文本三
			txt3 = Level[s1][1][s2][1][s3];
			$(".city .tttt>span").eq(0).text(txt1 + " " + txt2 + " " + txt3)
			$(".searCity").css("display", "none");
		}
	})
	//点击上面的图标上回去对应的级
	$(".searCity .citys>div").click(function() {
		for (var t = 0; t < $(".searCity .citys>div").length; t++) {
			if (t < $(this).index()) {
				continue;
			} else {
				$(".searCity .citys>div").eq(t + 1).text("");
			}
			number1 = $(this).index();
		}
		if (number1 == 0) {
			$(".moreaddress span").remove()
			Level.forEach(function(item, index, arr) {
				namess = Level[index][0];
				var ss = $("<span>" + namess + "</span>");
				$(".moreaddress").append(ss)
			});
			number1=1;
		}else if(number1==2){
			lv2 = Level[s1][1];
			$(".moreaddress span").remove()
			lv2.forEach(function(item, index, arr) {
				namess = lv2[index][0];
				var ss = $("<span>" + namess + "</span>");
				$(".moreaddress").append(ss)
			});
			number1=2;
		}
	})
	//点击搜索地址 跳转搜索地址
	$(".change span").click(function () {
		$(".searCity").eq(1).css("display", "none");
		$(".searCity").eq(0).css("display", "block");
	})

	//点击文本框 搜索框显示
	$(".city .tttt").click(function() {
		$(".searCity").eq(0).css("display", "block");
	})
	//点击手动选折地址
	$(".city .searCity").eq(0).find(".Select").click(function() {
		$(".searCity").eq(0).css("display", "none");
		$(".city .searCity").eq(1).css("display", "block");
	})
	//点击叉号关闭
	$(".searCity .cityX").click(function() {
		$(".searCity").css("display", "none");
	})

