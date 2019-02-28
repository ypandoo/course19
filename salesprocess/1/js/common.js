var select_index = 0;
var total_page = 28;
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

function select_ans(index,page_num) {
    document.getElementById('ans_img').style.display='block';
    img_src = "images/0"+page_num+"/0"+(index+4)+".png"
    if(page_num>10)

    {

         img_src= "images/"+page_num+"/0"+(index+4)+".png"
    }

    $("#ans_img").attr("src",img_src)
    select_index = index;
  
};

function submit_ans(ans_index)
{
    if (select_index == ans_index)
    {
        document.getElementById('right_div').style.display='block';
        document.getElementById('btnA').style.visibility='hidden';
        document.getElementById('btnB').style.visibility='hidden';
        document.getElementById('btnC').style.visibility='hidden';
        document.getElementById('btnD').style.visibility='hidden';
    }
    else
    {
         document.getElementById('error_div').style.display='block';
         document.getElementById('btnA').style.visibility='hidden';
         document.getElementById('btnB').style.visibility='hidden';
         document.getElementById('btnC').style.visibility='hidden';
         document.getElementById('btnD').style.visibility='hidden';

    }
}

$(function(){

    $("#layui-layer-shade").hide();
    $("#layui-layer").hide();
	$(".next,.next-f").html('<img src="images/next.png">');
	$(".prev,.prev-f").html('<img src="images/prev.png">');
	$(".next,prev").click(function(){
		//fullscreen();
	});

    $(".audio-image").click(function(){
        var audio = document.getElementById("bgMusic");
        audio.play();
    });

    $(".audio-image").hover(function(){
        var obj = document.getElementById("audioID");
        obj.style.filter = "grayscale(1)";
    },
    function(){
        var obj = document.getElementById("audioID");
        obj.style.filter = "";
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
	$(".menu").bind().click(function(){
		if($("#menu-list").hasClass("hide")){
			$("#menu-list").removeClass('hide');
			$("#menu-list").animate({height:'200px'},0,'linear');
			setTimeout(function(){
				$(".menu-li-01").removeClass("hide");
			},200);
			setTimeout(function(){
				$(".menu-li-02").removeClass("hide");
			},400);
			setTimeout(function(){
				$(".menu-li-03").removeClass("hide");
			},600);
			setTimeout(function(){
				$(".menu-li-04").removeClass("hide");
			},800);
			setTimeout(function(){
				$(".menu-li-05").removeClass("hide");
			},1000);
			setTimeout(function(){
				$(".menu-li-06").removeClass("hide");
			},1200);
		}else{			
			$("#menu-list").animate({height:'0'});
			$("#menu-list").addClass('hide');
			$(".menu-li").addClass("hide");
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
