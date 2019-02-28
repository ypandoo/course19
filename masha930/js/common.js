window.select_index = 0;
window.total_page = 25;
window.pageCookie = 'masha180930';

window.rightPage = 0
window.wrongPage = 0
window.disableNextPage = 0
window.disablePrevPage = 0

window.objectURL = 'http://masha930.vnewcd.com/'

window.learnedPage = parseInt(getCookie(pageCookie));
if (!window.learnedPage) {
    window.learnedPage = 1;
}

window.currentPage = parseInt(pageName(), 10);
if (window.currentPage >= window.learnedPage) {
    window.learnedPage = window.currentPage;
    setCookie(pageCookie, window.currentPage);
}

//initialize page navigation

$(document).ready(function () {
    if(document.getElementById("page_mark"))
        document.getElementById("page_mark").innerHTML = window.currentPage + '/' + window.total_page;
        
    if(window.disableNextPage == 1){
        $("#page_next").hide()
    }

    if (window.disablePrevPage == 1) {
        $("#page_prev").hide()
    }

    var page = 0
    window.currentPage+1 < 10 ? page = '0' + (window.currentPage+1) + '.html' : page = (window.currentPage+1) + '.html'
    $(".next").attr('data', page)
    var imageURL = ""
    window.currentPage < 10 ? imageURL = '0' + (window.currentPage) + '.jpg' : imageURL = (window.currentPage) + '.jpg'
    imageURL = window.objectURL + imageURL + '?v=' + Math.round(Math.random()*100000)
    $("#page_image").attr('src', imageURL)

    loadMenu()
    
});


function loadMenu(){

    if(window.menuNum == 0)
        return

    var menus = '<a onclick="checkPage(1)"><div class="item1"></div></a>\
      <a onclick="checkPage(3)"><div class="item2"></div></a>\
      <a onclick="checkPage(10)"><div class="item3"></div></a>\
      <a onclick="checkPage(19)"><div class="item4"></div></a>\
      <a onclick="checkPage(24)"><div class="item5"></div></a>\
      <a onclick="checkPage(28)"><div class="item6"></div></a>\
      <a onclick="checkPage(33)"><div class="item7"></div></a>'
    $("#menu1").append(menus)
}

function gotoPage(right) {
    var page_num = 0
    window.rightPage = window.currentPage+1
    right == 1 ? page_num = window.rightPage : page_num = window.wrongPage

    if (page_num < 10) {
        self.location = '0' + page_num + '.html';
    } else {
        self.location = page_num + '.html';
    }
}

function gotoPrevPage(){
    var page_num = window.currentPage - 1

    if (page_num < 10) {
        self.location = '0' + page_num + '.html';
    } else {
        self.location = page_num + '.html';
    }
}



function checkPage(index) {
    if (index > window.learnedPage) {
        $('#tips_div').show();
        return;
    }

    if (index < 10) {
        window.location.href = '0' + index + '.html';
    } else {
        window.location.href = index + '.html';
    }
}

function closeTip() {
    $('#tips_div').hide();
}

function setAnimate(element, timeout, animation, duration) {
    animation = 'animated ' + animation + ' ' + duration;
    setTimeout(function () {
        $('#' + element).addClass(animation);
        // $('#' + element).hide();
    }, timeout);
}

function setPageParams() {

}

function fullscreen(){  
    elem=window.parent.document.body;  
    if(elem.webkitRequestFullScreen){  
        elem.webkitRequestFullScreen();     
    }else if(elem.mozRequestFullScreen){  
        elem.mozRequestFullScreen();  
    }else if(elem.requestFullScreen){  
        elem.requestFullscreen();  
    }else{  
        //浏览器不支持全屏API或已被禁用  
    }  
    $("#bodyFormDiv").addClass('hide');

}  
function exitFullscreen(){  
    elem=window.parent.document.body;  
    if(elem.webkitCancelFullScreen){  
        elem.webkitCancelFullScreen();      
    }else if(elem.mozCancelFullScreen){  
        elem.mozCancelFullScreen();  
    }else if(elem.cancelFullScreen){  
        elem.cancelFullScreen();  
    }else if(elem.exitFullscreen){  
        elem.exitFullscreen();  
    }else{  
        //浏览器不支持全屏API或已被禁用  
    }  
}  
setTimeout(function(){
    if ($(".next").attr('data') == "False")
    {
        return ;
    }
	$(".next").attr("disabled",false);
	$(".next").removeClass("disabled");
	$(".next").click(function(){
		window.location.href=$(this).attr('data');
	});
},1000);

function loadData()
{
    
}

function reload(){

};

function reload(top,left,width,height){
    var obj = document.getElementById("question");
    if(obj)
    {
        obj.style.top= document.body.clientWidth*top;
        obj.style.left= document.body.clientWidth*left;
        obj.style.width = document.body.clientWidth*width;
        obj.style.height= document.body.clientWidth*height;
    }

};


function gotoBack(page_num)
{
        if(page_num<10)
        {
            self.location='0'+page_num+'.html';
        }
        else
        {
            self.location=page_num+'.html';
        }
}

function closeDiv(){
    document.getElementById('right_div').style.display='none';
    document.getElementById('bg').style.display='none';
}

$(function(){

    $("#layui-layer-shade").hide();
    $("#layui-layer").hide();
	$(".next,.next-f").html('<img src="images/next.png">');
	$(".prev,.prev-f").html('<img src="images/prev.png">');
	$(".next,prev").click(function(){
		//fullscreen();
	});

	$(".out-f,.out").click(function(){
		//window.location.href="http://www.maseratiacademychina.com/web/Course/Course_Information.aspx?Type=Course&infoid=13&TypeInfo=1";
		window.parent.window.opener = null;  
		window.parent.window.open(' ','_self',' ');  
		window.parent.window.close();
        document.cookie= ""
		if(window.parent.window){
		   window.parent.window.location.href="about:blank";
		}
	});

})

function getURL()
{
    window.url = document.location.href;
}

//获得页面的url
if(document.cookie)
{
var url=document.cookie;
var urlSerach=url.substring(url.indexOf("?")+1,url.lastIndexOf("&"));
var type_str=url.substring(url.lastIndexOf("&")+1);
var urlhtml=window.location.href;
var urlIndex=parseInt(urlhtml.substring(urlhtml.lastIndexOf("/")+1,urlhtml.lastIndexOf(".")));
if(isNaN(urlIndex)){
    urlIndex=1;
}
if(type_str.indexOf("systype=mas")>=0){
    getAjax("http://www.maseratiacademychina.com/web/KeJianAPI.aspx?func=getstudyinfos&",urlIndex);
}else if(type_str.indexOf("systype=ar")>=0){
    getAjax("http://www.alfaromeoacademychina.com/web/KeJianAPI.aspx?func=getstudyinfos&",urlIndex);
}else if(type_str.indexOf("systype=cs")>=0){
    getAjax("http://121.40.102.174:8117/web/KeJianAPI.aspx?func=getstudyinfos&",urlIndex);
}  


function getAjax(httpType,urlIndex){
    $.ajax({
       type:"post",
       data: {url:httpType+urlSerach+"&progress="+parseInt(urlIndex*100.0/total_page)},
       dataType:"json",
       url:"http://www.vnewcd.com/qas/index.php/QAS/Post/post",
       success:function(data){
       }
    });
}
}

//写cookies 
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//删除cookies 
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
} 

function pageName() {
    var a = location.href;
    var b = a.split("/");
    var c = b.slice(b.length - 1, b.length).toString(String).split(".");
    return c.slice(0, 1);
}
