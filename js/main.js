/*console.log(eval("("+localStorage.getItem("localNum")+")"));
console.log(eval("("+localStorage.getItem("localWords")+")"));
console.log(eval("("+localStorage.getItem("localMean")+")"));
console.log(eval("("+localStorage.getItem("localYinbiao")+")"));*/

// 接受数据
var num = eval("("+localStorage.getItem("localNum")+")")
var wordsGroup = eval("("+localStorage.getItem("localWords")+")");
var yinbiaoGroup = eval("("+localStorage.getItem("localYinbiao")+")");
var meanGroup = eval("("+localStorage.getItem("localMean")+")");
var end = document.getElementById('end');//关闭
var planA = document.getElementById('plan-a');//A按钮
var planB = document.getElementById('plan-b');//B按钮
var wordsShow = document.getElementById('words');//单词显示
var yinbiaoShow = document.getElementById('yinbiao');//音标显示
var meanShow = document.getElementById('mean');//意思显示
var inp = document.getElementById('inp');//输入框
var examine = document.getElementById('examine');//提交按钮
var prev = document.getElementById('prev');//上一个按钮
var next = document.getElementById('next');//下一个按钮
var correct = document.getElementById('result-correct');//正确显示
var error = document.getElementById('result-error');//错误显示
var nextEnable = false;//先一个按钮使能

// 获取当前界面高
var mainBox = document.getElementById("main");
mainBox.style.height = document.documentElement.clientHeight + "px";
// plan点击事件
planA.onclick = function(){
	wordsShow.style.visibility = 'visible';
	planA.style.backgroundColor = '#45e3d4';
	planB.style.backgroundColor = 'silver';
}
planB.onclick = function(){
	wordsShow.style.visibility = 'hidden';
	planA.style.backgroundColor = 'silver';
	planB.style.backgroundColor = '#45e3d4';
}

// 取词首先赋值
var i=0;
wordsShow.innerHTML = wordsGroup[0];
yinbiaoShow.innerHTML = yinbiaoGroup[0];
meanShow.innerHTML = meanGroup[0];

// 显示函数
function show(){
	wordsShow.innerHTML = wordsGroup[i];
	yinbiaoShow.innerHTML = yinbiaoGroup[i];
	meanShow.innerHTML = meanGroup[i];
	inp.value = '';
	nextEnable = false;
	correct.style.display = 'none';
	error.style.display = 'none';
}

// 鼠标点击上一个事件
prev.onclick = function(){
	if (i <= 0) {
		alert('到达最前');
	}else{
		i--;
		show();
	}
}

// 鼠标点击下一个事件
next.onclick = function(){
	next.style.backgroundColor = '#fff';
	if(nextEnable){
		if (i >= num-1) {
			alert('恭喜你已经答完所有题');
		}else{
			i++;
			show();
		}
	}
}

// 提交按钮
examine.onclick = function(){
	if(inp.value == wordsShow.innerHTML){
		nextEnable = true;
		correct.style.display = 'block';
		error.style.display = 'none';
		next.style.backgroundColor = '#3ec185';
	}else{
		correct.style.display = 'none';
		error.style.display = 'block';
	}
}
// 键盘事件
document.onkeydown = function(e){
	var e = e||window.event;
	// console.log(e.keyCode);
	if(e.keyCode == 13){//回车事件
		if(inp.value == wordsShow.innerHTML){
			nextEnable = true;
			correct.style.display = 'block';
			error.style.display = 'none';
			next.style.backgroundColor = '#3ec185';
		}else{
			correct.style.display = 'none';
			error.style.display = 'block';
		}
	}
	if(e.keyCode == 37){//左箭头事件
		if (i <= 0) {
			alert('到达最前');
		}else{
			i--;
			show();
		}
	}
	if(e.keyCode == 39){//右箭头事件
		next.style.backgroundColor = '#fff';
		if(nextEnable){
			if (i >= num-1) {
				alert('恭喜你已经答完所有题');
			}else{
				i++;
				show();
			}
		}
	}
}

//关闭事件
end.onclick = function(){
	logout();
}

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