var end = document.getElementById('indexend');

end.onclick = function(){
	logout();
}
// 获取当前界面高
var mainBox = document.getElementById("main");
mainBox.style.height = document.documentElement.clientHeight + "px";
// 关闭窗口
function logout(){
	if(confirm("确定要退出吗？")){
	// 移动端|PC端
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
	   window.location.href="about:blank";
	}else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
	   window.opener=null;window.open('about:blank','_self','').close();
	}else {
	   window.opener = null;
	   window.open("about:blank", "_self");
	   window.close();
	}
	// 微信端
	WeixinJSBridge.call('closeWindow');
	}
}