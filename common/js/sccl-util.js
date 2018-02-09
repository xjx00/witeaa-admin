/*设置cookie*/
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

/*获取cookie*/
function getCookie(name) {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]); 
	else 
		return null; 
}

/*ajax请求*/
function ajax(url, param, datat, callback) {  
	$.ajax({  
		type: "post",  
		url: url,  
		data: param,  
		dataType: datat,  
		success: function(data){
			callback;
		},  
		error: function () {  
			alert("失败.."); 
		}
	});  
}  