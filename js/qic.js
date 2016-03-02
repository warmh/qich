
$(function (){
	//首页
	/*用p = 1 ;代表场外，p = 0 代表场内*/
	function setCookie(name,value,days) {//设置cookie
		var dates=new Date();
		dates.setDate(dates.getDate()+days);
		document.cookie=name+"="+escape(value)+"; expires="+dates;
	}
	function getCookie(name){//获取cookie
		var arr=unescape(document.cookie).split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr2=arr[i].split('=');
			if (arr2[0]==name) {
				return arr2[1];
			};
		};
		return false;
	}
	$('#sm').click(function (){
		$('.con1-sm').css('display','block');
	})
	$('#sm-btn').click(function (){
		$('.con1-sm').css('display','none');
	})

	$('#con1-option1').click(function (){
		// setCookie('place','0','7');
		setCookie('place','0',7);
		$('.con1-confirm').css('display','block');
	})
	$('#con1-option2').click(function (){
		setCookie('place','1',7);
		$('.con1-confirm').css('display','block');
	})
	$('.con1-sure').click(function (){
		$('.con1-confirm').css('display','none');
		location.href = "chouj.html";
	})
	$('.con1-r').click(function (){
		$('.con1-confirm').css('display','none');

	})

	//抽奖页面
	$('#chj ul li').click(function (){
		var x=$('#chj ul li').index(this);
		var p=getCookie('place');
		var a=(Math.floor(Math.random()*100))%9;
		var timer2=null;
		if(getCookie('val') == 1){
			location.href = "sorry.html";
		}else{
			$('#chj ul li').eq(x).css({transform:'rotateX(0deg) rotateY(360deg) translateZ(0px)',webkitTransition:' -webkit-transform 2s',transition:' -moz-transform 2s',transition:'transform 2s'});
			setCookie('val','1',7);
			timer2 = setTimeout(function (){
				if(p == 0){
					if(a == 0||a == 1|| a==2||a==3||a==4){
						location.href = "choujg1.html";
					}else{
						location.href = "choujg3.html";
					}
				}else if(p == 1){
					var b=(Math.floor(Math.random()*100))%3;
					if(a == 0||a == 1|| a==2||a==3||a==4){
						if(b == 0){
							location.href = "choujg2.html";
						}else if(b == 1){
							location.href = "choujg2-3.html";
						}else{
							location.href = "choujg2-2.html";

						}
					}else{
						location.href = "choujg3.html";
					}
				}
			},1800)
		}
	})
	//抽奖结果页1
	$('#cjjg1-wx').click(function (){
		$('#cjjg1-wx-share').css('display','block');
	})
	$('#cjjg1-wx-share').click(function (){
		$('#cjjg1-wx-share').css('display','none');
	})

	//抽奖结果页2
	$('#cjjg2-wx').click(function (){
		$('#cjjg2-wx-share').css('display','block');
	})
	$('#cjjg2-wx-share').click(function (){
		$('#cjjg2-wx-share').css('display','none');
	})
	$('#con4-btn').click(function (){
		$('#y30-succeed').css('display','none')
	})
	// 抽奖结果页1
	$('#con3-btn').click(function (){
		location.href='kaihuijia.html';
	})
	//启辰开回家页面，输入手机号码，姓名
	$('#gz').click(function (){
		$('#con1-gz').css('display','block');/*规则*/
	})
	$('#gz-btn').click(function (){
		$('#con1-gz').css('display','none');/*我知道了*/
	})
	$('#home-wx').click(function (){
		$('#home-wx-share').css('display','block');/*微信分享*/
	})
	$('#home-wx-share').click(function (){
		$('#home-wx-share').css('display','none');/*微信分享提示消失*/
	})
	
	$('#sr-name').click(function (){
		$('#sr-name input').val(null);
		$('#sr-name input').css('color','#000');
	})
	$('#sr-phone').click(function (){
		$('#sr-phone input').val(null);
		$('#sr-phone input').css('color','#000');
	})
	$('#con5-btn').click(function (){
		if($.trim($('#sr-name input').val()).length == 0 || $.trim($('#sr-phone input').val()).length == 0){
			alert('不能为空！');
		}else{
			$('#con1-succeed').css('display','block')
		}
	})
	$('#succeed-btn').click(function (){
		$('#con1-succeed').css('display','none')
		location.href="qic.html";
	})
	// 话费充值，输入手机号
	$('#y10 .con1-w').click(function (){
		if($.trim($('#y10 input').val()).length == 0){
			alert("不能为空！")
		}else{
			$('#y10-succeed').css('display','block')
		}
	})
	$('#y20 .con1-w').click(function (){
		if($.trim($('#y20 input').val()).length == 0){
			alert("不能为空！")
		}else{
			$('#y20-succeed').css('display','block')
		}
	})
	$('#cjjg2 .con1-w').click(function (){
		if($.trim($('#y30').val()).length == 0){
			alert("不能为空！")
		}else{
			$('#y30-succeed').css('display','block')
		}
	})
	$('#y10-btn').click(function (){
		location.href="qic.html";
	})
	$('#y20-btn').click(function (){
		location.href="qic.html";
	})
	$('#y30-btn').click(function (){
		location.href="qic.html";
	})
})
