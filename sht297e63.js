var vHOST="keji58.github.io";//action.weixin.qq.com

function clickStat(i){
	"undefined"!=typeof pgvSendClick&&pgvSendClick({
		hottag:i,
		virtualDomain:vHOST
	});
}
var vURL=window.location.search.slice(3);

"function"==typeof pgvMain&&pgvMain("",{
	virtualDomain:vHOST,
	virtualURL:vURL
});
for(var stat_nodes=document.querySelectorAll("[data-stat]"),i=0,l=stat_nodes.length;l>i;i++)stat_nodes[i].addEventListener("click",function(i){
	clickStat(i.target.getAttribute("data-stat"));
});
document.addEventListener("WeixinJSBridgeReady",function(){
	var i={
			img_url:SHARE_IMG_URL,
			link:window.location.href,
			title:SHARE_TITLE,
			desc:SHARE_DESC,
			img_width:"120",
			img_height:"120"
	};
	WeixinJSBridge.on("menu:share:appmessage",function(){
		WeixinJSBridge.invoke("sendAppMessage",i,function(){});
	}),WeixinJSBridge.on("menu:share:timeline",function(){
		WeixinJSBridge.invoke("shareTimeline",i,function(){});
	});
},!1);