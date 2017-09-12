// 定义根据class获取dom节点的函数
function getByClass(oParent,clsName){
	var aObj=oParent.getElementsByTagName('*');
	var result=new Array();
	for(var i=0;i<aObj.length;i++){
		var aCls=aObj[i].className.split(' ');
		var ex=false;
		for(var j=0;j<aCls.length;j++){
			if (aCls[j]==clsName) {
				ex=true;
			}
		}
		if(ex){
			result.push(aObj[i]);
		}
	}
	return result;
}

// var oHeader=document.getElementById('header');
// var oTop=document.getElementById('top');
// var oContent=document.getElementById('content');
// var oAlertBox=document.getElementById('alert-box');
// var oSetfav=getByClass(oHeader,'setfav')[0];
// var oInput=oTop.getElementsByTagName('input')[0];
// var aComments=getByClass(oContent,'comments');
// var oLoginA=getByClass(oHeader,'login')[0].getElementsByTagName('a')[0];
// var oRegisterA=getByClass(oHeader,'login')[0].getElementsByTagName('a')[1];
// var oCloseBox=getByClass(oAlertBox,'close-box')[0];
// var oLoginBox=getByClass(oAlertBox,'login-box')[0];
// var oRegisterBox=getByClass(oAlertBox,'register-box')[0];
// //点击收藏慕课，弹出提示框
// oSetfav.onclick=function(){
// 	alert('请使用快捷键Ctrl+D收藏页面');
// }
// // 登录、注册弹出层
// oLoginA.onclick=function(){
// 	oAlertBox.style.display='block';
// 	oLoginBox.style.display='block';
// }
// oRegisterA.onclick=function(){
// 	oAlertBox.style.display='block';
// 	oRegisterBox.style.display='block';
// }
// oCloseBox.onclick=function(){
// 	oAlertBox.style.display='none';
// 	oLoginBox.style.display='none';
// 	oRegisterBox.style.display='none';
// }
