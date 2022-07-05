// var $ = mdui.$;
	
function tip(){
	mdui.dialog({
      	title: '公告',
      	content: '这是一个APP的下载页！！',
      	buttons: [
        	{
          		text: '我知道啦',
        	}
      	]
    });
}

var second=0;
var minute=0;
var hour=0;
window.setTimeout("interval();",1000);
function interval()
{
	second++;
	if(second==60)
	{
		second=0;minute+=1;
	}
	if(minute==60)
	{
		minute=0;hour+=1;
	}
	$('#stayTime').text(minute+'分'+second+'秒');
	window.setTimeout("interval();",1000);
}
function qqShare(url,title,summary,pics){
    var urlPath = "https://connect.qq.com/widget/shareqq/index.html?url="+ encodeURI(url) +
                  "&desc=&title=" + title +
                  "&summary=" + summary +
                  "&pics=" + pics;
    window.open (urlPath, 'qq分享', 'height=637, width=1053, top=195,left=459, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
}