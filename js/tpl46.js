var module_inits = [];

function load_init_modules() {
    for (var i = 0; i < module_inits.length; i++) {
        module_inits[i]();
    }
}

function call_me(fun) {
    module_inits.push(fun);
}

document.ontouchmove = function(e) {
    //e.preventDefault();
}

// = load_init_modules;

function playPhoto() {

    // 相册封面
    loadUserImages();
    $.when(loadingdef).done(function() {
        $("#wrapper_player_cover_bkgnd").css("display", "block");
        setTimeout("$('#wrapper_cover').addClass('effect_fadeOut');", 3000);
        setTimeout(function() {
            // window.setTimeout(function d() {
            //     playEnd()
            // }, 100)
            play();
        }, 3100)
    })


    function play() {
        $("#div_player").append('<div id="container"><div id="cleararea"style="position:absolute;"><img id="yezi1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi2.png"><img id="qingchun1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun2.png"><img id="zixingche"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zixingche.png"><img id="zi1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi1.png"><img id="yingwen1"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen12.png"><img id="qing"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="bu"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/bu.png"><img id="shi1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="nian"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/nian.png"><img id="hua"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/hua1.png"><img id="douhao"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/douhao.png"><img id="er"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/er.png"><img id="shi"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="xin"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/xin.png"><img id="jing"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/jing.png"><img id="yedi"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi3.png"><div id="div1h"style="display:none"><div id="box1h"><img id="img1h"style="position:absolute"></div></div><div id="div1s"style="display:none"><div id="box1s"><img id="img1s"style="position:absolute"></div></div><div id="line1"style="display:none"></div><img id="yezi2"style="display:block"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi.png"><img id="qingchun2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun2.png"><img id="xiangji"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/xiangji.png"><img id="zi2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi2.png"><img id="yingwen2"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen11.png"><img id="qing2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="shi2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="jin2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/jin.png"><img id="shu2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shu3.png"><img id="yu2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yu.png"><img id="ni2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/ni.png"><img id="yi2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yi.png"><img id="ci2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/ci.png"><img id="de2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/de.png"><img id="hua2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/hua.png"><img id="ji2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/ji.png"><div id="div2h"style="display:none"><div id="box2h"><img id="img2h"style="position:absolute"></div></div><div id="div2s"style="display:none"><div id="box2s"><img id="img2s"style="position:absolute"></div></div><div id="line2"style="display:none"></div><img id="qingchun3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun2.png"><img id="beibao"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/beibao.png"><img id="yingwen3"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen13.png"><img id="zi3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi3.png"><div id="div31h"style="display:none"><div id="box31h"><img id="img31h"style="position:absolute"></div></div><div id="div32h"style="display:none"><div id="box32h"><img id="img32h"style="position:absolute"></div></div><div id="div31s"style="display:none"><div id="box31s"><img id="img31s"style="position:absolute"></div></div><div id="div32s"style="display:none"><div id="box32s"><img id="img32s"style="position:absolute"></div></div><div id="line3"style="display:none"></div><img id="qing3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="shi3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="shou3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shou.png"><img id="fu3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/fu.png"><img id="za3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/za.png"><img id="er3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/er.png"><img id="nai3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/nai.png"><img id="du3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/du.png"><img id="de3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/de.png"><img id="shi31"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi.png"><img id="qingchun4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun1.png"><img id="zi4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi4.png"><img id="yingwen4"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen14.png"><img id="yumaoqiu"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yumaoqiu.png"><div id="div41h"style="display:none"><div id="box41h"><img id="img41h"style="position:absolute"></div></div><div id="div42h"style="display:none"><div id="box42h"><img id="img42h"style="position:absolute"></div></div><div id="div41s"style="display:none"><div id="box41s"><img id="img41s"style="position:absolute"></div></div><div id="div42s"style="display:none"><div id="box42s"><img id="img42s"style="position:absolute"></div></div><div id="line41"style="display:none"></div><div id="line42"style="display:none"></div><img id="qing4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="shi4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="sheng4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/sheng.png"><img id="ming4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/ming.png"><img id="de4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/de.png"><img id="shen4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shen.png"><img id="quan4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/quan.png"><img id="zai4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zai.png"><img id="yong4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yong.png"><img id="liu4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/liu.png"><img id="qingchun5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun1.png"><img id="bao"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/bao.png"><img id="zi5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi5.png"><img id="yingwen5"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen16.png"><div id="div51h"style="display:none"><div id="box51h"><img id="img51h"style="position:absolute"></div></div><div id="div52h"style="display:none"><div id="box52h"><img id="img52h"style="position:absolute"></div></div><div id="div53h"style="display:none"><div id="box53h"><img id="img53h"style="position:absolute"></div></div><div id="div51s"style="display:none"><div id="box51s"><img id="img51s"style="position:absolute"></div></div><div id="div52s"style="display:none"><div id="box52s"><img id="img52s"style="position:absolute"></div></div><div id="div53s"style="display:none"><div id="box53s"><img id="img53s"style="position:absolute"></div></div><div id="line5"style="display:none"></div><img id="qing5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="shi5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="da5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/da.png"><img id="kai5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/kai.png"><img id="le5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/le.png"><img id="jiu5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/jiu.png"><img id="he5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/he.png"><img id="bu5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/bu.png"><img id="shang5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shang.png"><img id="de5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/de.png"><img id="shu5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shu.png"><img id="yezi6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi2.png"><img id="qingchun6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qingchun1.png"><img id="che"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/che.png"><img id="zi6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/zi6.png"><img id="yingwen6"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yingwen15.png"><div id="div61h"style="display:none"><div id="box61h"><img id="img61h"style="position:absolute"></div></div><div id="div62h"style="display:none"><div id="box62h"><img id="img62h"style="position:absolute"></div></div><div id="div63h"style="display:none"><div id="box63h"><img id="img63h"style="position:absolute"></div></div><div id="div61s"style="display:none"><div id="box61s"><img id="img61s"style="position:absolute"></div></div><div id="div62s"style="display:none"><div id="box62s"><img id="img62s"style="position:absolute"></div></div><div id="div63s"style="display:none"><div id="box63s"><img id="img63s"style="position:absolute"></div></div><div id="line6"style="display:none"></div><img id="qing6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/qing.png"><img id="chun6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chun.png"><img id="shi6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/shi4.png"><img id="yi6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yi.png"><img id="chang6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/chang.png"><img id="xiang6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/xiang.png"><img id="feng6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/feng.png"><img id="dou6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/douhao.png"><img id="wang6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/wang.png"><img id="bu6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/bu.png"><img id="diao6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/diao.png"><img id="le6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/le.png"></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:380px;height:200px;left:60px;top:260px;"><div id="upline"style="position:absolute;top:0px;left:-30px;height:2px;width:440px;background-color:#666565;-webkit-transform: scale(0,1);"></div><div id="downline"style="position:absolute;top:200px;left:-30px;height:2px;width:440px;background-color:#666565;-webkit-transform: scale(0,1);"></div><div id="leftline"style="position:absolute;top:-30px;left:0px;height:260px;width:2px;background-color:#666565;-webkit-transform: scale(1,0);"></div><div id="rightline"style="position:absolute;top:-30px;left:380px;height:260px;width:2px;background-color:#666565;-webkit-transform: scale(1,0);"></div><div id="boxtitle"style="position:absolute;width:380px;height:190px;top:0px;left:0px;display:display:table;overflow:hidden;opacity:0;"><div id="wordtitle"style="width:380px;height:200px;display:table-cell;vertical-align:middle;font-size:40px;color:#666565;text-align:center;padding:10px;"></div></div></div><img id="shuye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi1.png"style="position:absolute;left:522px;top:36px;-webkit-animation: shuye 8s linear infinite"><img id="shuye2"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi1.png"style="position:absolute;width:28px;left:515px;top:175px;-webkit-animation: shuye 8s 6s linear infinite"><img id="shuye3"src="http://referer-image.szwwy.com/coolphoto/img/tpl46/yezi1.png"style="position:absolute;width:32px;left:329px;top:-50px;-webkit-animation: shuye 9s 3s linear infinite"></div>');
        var divwidth = {'1h':415,'1s':299,'2h':402,'2s':257,'31h':337,'32h':268,'31s':227,'32s':190,'41h':269,'42h':269,'41s':225,'42s':210,'51h':213,'52h':213,'53h':310,'51s':170,'52s':136,'53s':200,'61h':220,'62h':210,'63h':360,'61s':140,'62s':149,'63s':221};
        var divheight = {'1h':270,'1s':462,'2h':290,'2s':406,'31h':235,'32h':198,'31s':342,'32s':296,'41h':256,'42h':257,'41s':339,'42s':320,'51h':173,'52h':173,'53h':220,'51s':260,'52s':212,'53s':306,'61h':140,'62h':150,'63h':244,'61s':214,'62s':241,'63s':333};
        function id(name)
        {
            return document.getElementById(name);
        }
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;
        var timeout9;
        var timeout10;
        var timeout11;
        var timeout12;
        var timeout13;

        var begin_titletime;
        function loadimages()
        {
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //setTimeout(showtitle,100);
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_url_index=0;
            have_num = 0;
            error_num = 0;
            canshow = true;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                Onload_imgs_url[i]='loading';
                img.onload=image_onload;
                img.onerror = image_onerror;
            }       
        }
        function image_onerror()
        {
            var img = event.target;
            var index = img.index;
            if(index < 10)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);
            if((have_num +error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                show1();
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;
            var img = event.target;
            var index = img.index;

            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;
            if(index<10)
                have_num++;
            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);

            if((have_num+error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {   
                canshow = false;
                reshow = false;
                if(have_num == 0)
                    return;
                show1();

            }
        }
        function clearnodes()
        {
            var node = document.getElementById('cleararea').childNodes;
            for(var i=0;i<node.length;i++)
            {
                if(!(node[i].nodeName == "#text" && !/\s/.test(node.nodeValue)))
                {
                    node[i].style.webkitAnimation = '';
                    node[i].style.display = 'none';
                }
                // node[i].style.webkitAnimation = '';
                // node[i].style.display = 'none';
            }
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            clearTimeout(timeout10);
            clearTimeout(timeout11);
            clearTimeout(timeout12);
            clearTimeout(timeout13);
            id('upline').style.webkitAnimation = '';
            id('downline').style.webkitAnimation = '';
            id('leftline').style.webkitAnimation = '';
            id('rightline').style.webkitAnimation = '';
            id('boxtitle').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('yezi2').style.webkitAnimation = '';
            id('yezi2').style.display = 'block';
        }

        function showtitle()
        {
            console.log(begin_titletime+'begin');
            id('wordtitle').innerHTML = e_desc;
            id('upline').style.webkitAnimation = 'linechange 1s linear both';
            id('downline').style.webkitAnimation = 'linechange 1s linear both';
            id('leftline').style.webkitAnimation = 'linechange 1s linear both';
            id('rightline').style.webkitAnimation = 'linechange 1s linear both';
            id('boxtitle').style.webkitAnimation = 'fadein 1s 0.5s linear both';


        }

        function show1()
        {
            if(reshow == true)
                return;
            obj_name = ['qingchun6','che','zi6','yingwen6','line6','qing6','chun6','shi6','yi6','chang6','xiang6','feng6','dou6','wang6','bu6','diao6','le6'];
            var delaytime = 0;
            for(var i=16;i>4;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime + 0.1;
            }
            id('pagetitle').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('yezi2').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('yezi6').style.webkitAnimation = 'fadeout 1s 0.7s linear both';
            id('qingchun6').style.webkitAnimation = 'fadeout 1s 0.7s linear both';
            id('che').style.webkitAnimation = 'bao_out 1s linear 0.7s both';
            id('line6').style.webkitAnimation = 'line6_out 1s linear 1s both';
            id('div63h').style.webkitAnimation = 'div4out 1s 1.2s ease-in both';
            id('div61h').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';
            id('div62h').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';
            id('div63s').style.webkitAnimation = 'div4out 1s 1.2s ease-in both';
            id('div61s').style.webkitAnimation = 'div4out 1s 1.3s ease-in both';
            id('div62s').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';
            id('zi6').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('yingwen6').style.webkitAnimation = 'fadeout 1s 1.5s linear both';

            timeout2 = setTimeout(function()
            {
                obj_name = ['yezi1','yedi','qingchun1','zixingche','zi1','yingwen1','qing','chun','bu','shi1','nian','hua','douhao','er','shi','xin','jing','line1'];
                for(var i =0 ;i <obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    // console.log(obj_name); 
                    obj.style.display = 'block';
                }
                id(obj_name[0]).style.webkitAnimation = 'fadein 0.6s linear both';
                id(obj_name[1]).style.webkitAnimation = 'fadein 0.6 linear both';
                id(obj_name[2]).style.webkitAnimation = 'fadein 0.6s 0.4s ease-in both';
                id('div1h').style.webkitAnimation = 'in_center 1s ease-out 0.5s both';
                id('div1s').style.webkitAnimation = 'in_center 1s ease-out 0.5s both';
                id('zixingche').style.webkitAnimation = 'zixingche 1.2s ease-out 1s both';
                id('line1').style.webkitAnimation = 'line1 1.2s ease-out 1s both';
                id('zi1').style.webkitAnimation = 'fadein 1s linear 1s both';
                id('yingwen1').style.webkitAnimation = 'fadein 1s linear 1.2s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('1');
                image_url_index++;

                var delaytime = 2;
                for (var i =6;i<17;i++)
                {
                    var obj = id(obj_name[i])
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime+'s both';
                    delaytime = delaytime + 0.1;
                }
                timeout3 = setTimeout(show2,5000)
            },1500)
        }
        function show2()
        {
            if(reshow == true)
                return;
             obj_name = ['yezi1','yedi','qingchun1','zixingche','zi1','yingwen1','qing','chun','bu','shi1','nian','hua','douhao','er','shi','xin','jing','line1'];
             var delaytime = 0;
             for(var i =16 ; i>5; i--)
             {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime +'s both';
                delaytime = delaytime + 0.1;
             }
             id('yingwen1').style.webkitAnimation = 'fadeout 1s linear 1.5s both';
             id('zi1').style.webkitAnimation = 'fadeout 1s linear 1.5s both';
            id('yezi1').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            // id('yedi').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('qingchun1').style.webkitAnimation = 'fadeout 1s 1.5s ease-in both';
            id('div1s').style.webkitAnimation = 'out_center 1s ease-in 1.5s both';
            id('div1h').style.webkitAnimation = 'out_center 1s ease-in 1.5s both';
            id('zixingche').style.webkitAnimation = 'zixingche_out 1s ease-in 1.5s both';
            id('line1').style.webkitAnimation = 'line1_out 1s ease-in 1.5s both';

            timeout4 = setTimeout(function()
            {
                obj_name = ['yezi2','qingchun2','xiangji','zi2','yingwen2','line2','qing2','chun2','shi2','jin2','shu2','yu2','ni2','yi2','ci2','de2','hua2','ji2'];
                for(var i = 0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i])
                    obj.style.display = 'block';
                }
                id('yezi2').style.webkitAnimation = 'fadein 1s linear both';
                id('qingchun2').style.webkitAnimation = 'fadein 1s linear 0.5s both';
                id('div2s').style.webkitAnimation = 'div2in 1.5s ease-out 0.5s both';
                id('div2h').style.webkitAnimation = 'div2in 1.5s ease-out 0.5s both';
                id('xiangji').style.webkitAnimation = 'xiangji 1.5s linear 0.5s both';
                id('zi2').style.webkitAnimation = 'fadein 1s linear 0.8s both';
                id('yingwen2').style.webkitAnimation = 'fadein 1s linear 0.9s both';
                id('line2').style.webkitAnimation = 'line2 1s linear 1.5s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index++;

                var delaytime = 2;
                for(var i = 6;i<18;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime+'s both';
                    delaytime = delaytime + 0.1;
                }
                timeout5 = setTimeout(show3,5000);
            },1500)

        }
        function show3()
        {
            if(reshow == true)
                return;
            obj_name = ['yezi2','qingchun2','xiangji','zi2','yingwen2','line2','qing2','chun2','shi2','jin2','shu2','yu2','ni2','yi2','ci2','de2','hua2','ji2'];

            var delaytime = 0;
            for(var i=17;i>5;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime + 0.1;
            }
            id('xiangji').style.webkitAnimation = 'xiangji_out 0.7s 1s linear both';
            id('line2').style.webkitAnimation = 'line2_out 0.7s linear 1s both';
            id('div2h').style.webkitAnimation = 'div2out 1s ease-in 1.2s both';
            id('div2s').style.webkitAnimation = 'div2out 1s ease-in 1.2s both';
            id('qingchun2').style.webkitAnimation = 'fadeout 0.7s linear 1.2s both';
            id('zi2').style.webkitAnimation = 'fadeout 0.7s linear 1.2s both';
            id('yingwen2').style.webkitAnimation = 'fadeout 0.7s linear 1.2s both';

            timeout6 = setTimeout(function()
            {
                obj_name = ['qingchun3','beibao','zi3','yingwen3','line3','qing3','chun3','shi3','shou3','fu3','za3','er3','nai3','du3','de3','shi31'];
                for(var i = 0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                }
                id('qingchun3').style.webkitAnimation = 'fadein 1s linear both';
                id('div31h').style.webkitAnimation = 'div31in 1s ease-out 0.5s both';
                id('div32h').style.webkitAnimation = 'div32in 1s ease-out 0.7s both';
                id('div31s').style.webkitAnimation = 'div31in 1s ease-out 0.5s both';
                id('div32s').style.webkitAnimation = 'div32in 1s ease-out 0.7s both';
                id('beibao').style.webkitAnimation = 'fadein 1s linear 0.7s both';
                id('zi3').style.webkitAnimation = 'fadein 1s linear 1s both';
                id('yingwen3').style.webkitAnimation = 'fadein 1s linear 1s both';
                id('line3').style.webkitAnimation = 'line3 1s linear 1s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('31');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('32');
                image_url_index++;  

                var delaytime = 2;
                for (var i=5;i<16;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime+'s both';
                    delaytime = delaytime +0.1;
                }
                timeout7 = setTimeout(show4,5000);
            },1500)
        }

        function show4()
        {
            if(reshow == true)
                return;
            obj_name = ['qingchun3','beibao','zi3','yingwen3','line3','qing3','chun3','shi3','shou3','fu3','za3','er3','nai3','du3','de3','shi31'];
            var delaytime = 0;
            for(var i = 15;i>4;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime +'s both';
                delaytime = delaytime + 0.1;
            }
            id('zi3').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('beibao').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('yingwen3').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('qingchun3').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('line3').style.webkitAnimation = 'line3_out 1s 1.2s linear both';
            id('div31h').style.webkitAnimation = 'div31out 1s 1s ease-in both';
            id('div32h').style.webkitAnimation = 'div32out 1s 1.2s ease-in both';
            id('div31s').style.webkitAnimation = 'div31out 1s 1s ease-in both';
            id('div32s').style.webkitAnimation = 'div32out 1s 1.2s ease-in both';

            timeout8 = setTimeout(function()
            {
                obj_name = ['qingchun4','yumaoqiu','zi4','yingwen4','line41','line42','qing4','chun4','shi4','sheng4','ming4','de4','shen4','quan4','zai4','yong4','liu4'];
                for (var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                }
                id('qingchun4').style.webkitAnimation = 'fadein 1s linear both';
                id('div41h').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div42h').style.webkitAnimation = 'div4in 1s ease-out 1s both';
                id('div41s').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div42s').style.webkitAnimation = 'div4in 1s ease-out 1s both';
                id('line41').style.webkitAnimation = 'line41in 1s ease-out 1s both';
                id('line42').style.webkitAnimation = 'line42in 1s ease-out 1.5s both';
                id('yumaoqiu').style.webkitAnimation = 'yumaoqiu 1s linear 1.2s both';
                id('zi4').style.webkitAnimation = 'fadein 1s linear 1.5s both';
                id('yingwen4').style.webkitAnimation = 'fadein 1s linear 1.5s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('41');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('42');
                image_url_index++; 

                var delaytime = 2;
                for(var i=6;i<17;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime+'s both';
                    delaytime = delaytime + 0.1;
                }
                timeout9 = setTimeout(show5,5000)
            },1500)
        }
        function show5()
        {
            if(reshow == true)
                return;
            obj_name = ['qingchun4','yumaoqiu','zi4','yingwen4','line41','line42','qing4','chun4','shi4','sheng4','ming4','de4','shen4','quan4','zai4','yong4','liu4'];
            var delaytime = 0;
            for(var i=16;i>5;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime +0.1;
            }
            id('yumaoqiu').style.webkitAnimation = 'yumaoqiu_out 1s linear .7s both';
            id('zi4').style.webkitAnimation = 'fadeout 1s linear 1s both';
            id('yingwen4').style.webkitAnimation = 'fadeout 1s linear .7s both';
            id('line41').style.webkitAnimation = 'line41out 1s linear .7s both';
            id('qingchun4').style.webkitAnimation = 'fadeout 1s linear 1s both';
            id('line42').style.webkitAnimation = 'line42out 1s linear 1s both';
            id('div41h').style.webkitAnimation = 'div4out 1.2s ease-in 1s both';
            id('div42h').style.webkitAnimation = 'div4out 1.2s ease-in 1.3s both';
            id('div41s').style.webkitAnimation = 'div4out 1.2s ease-in 1s both';
            id('div42s').style.webkitAnimation = 'div4out 1.2s ease-in 1.3s both';

            timeout10 = setTimeout(function()
            {
                obj_name = ['qingchun5','bao','zi5','yingwen5','line5','qing5','chun5','shi5','da5','kai5','le5','jiu5','he5','bu5','shang5','de5','shu5'];
                for(var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                    // console.log(obj_name[i]);
                }
                id('qingchun5').style.webkitAnimation = 'fadein 1s linear both';
                id('div51h').style.webkitAnimation = 'fadein 1s 0.5s linear both';
                id('div52h').style.webkitAnimation = 'fadein 1s 1s linear both';
                id('div53h').style.webkitAnimation = 'fadein 1s 1.5s linear both';
                id('div51s').style.webkitAnimation = 'fadein 1s 0.5s linear both';
                id('div52s').style.webkitAnimation = 'fadein 1s 1s linear both';
                id('div53s').style.webkitAnimation = 'fadein 1s 1.5s linear both';
                id('line5').style.webkitAnimation = 'line5 1s 2s linear both';
                id('bao').style.webkitAnimation = 'bao 1s 2s ease-out both';
                id('zi5').style.webkitAnimation = 'fadein 1s 2s linear both';
                id('yingwen5').style.webkitAnimation = 'fadein 1s 2s linear both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('51');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('52');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('53');
                image_url_index++; 

                var delaytime = 2.5;
                for(var i=5;i<17;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime + 's both';
                    delaytime = delaytime + 0.1;
                }
                timeout11 = setTimeout(show6,5000)
            },1800)
        }
        function show6()
        {
            if(reshow == true)
                return;
            obj_name = ['qingchun5','bao','zi5','yingwen5','line5','qing5','chun5','shi5','da5','kai5','le5','jiu5','he5','bu5','shang5','de5','shu5'];
            var delaytime = 0;
            for(var i=16;i>4;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime+ 0.1;
            }
            id('yezi2').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('bao').style.webkitAnimation = 'bao_out 1s 1s ease-in both';
            id('qingchun5').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('line5').style.webkitAnimation = 'line5_out 1s 1.5s linear both';
            id('div51h').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div52h').style.webkitAnimation = 'fadeout 1s 1.2s linear both';
            id('div53h').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div51s').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div52s').style.webkitAnimation = 'fadeout 1s 1.2s linear both';
            id('div53s').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('zi5').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('yingwen5').style.webkitAnimation = 'fadeout 1s 1.2s linear both';
            id('yedi').style.webkitAnimation = 'fadeout 1s 1s linear both';

            timeout12 = setTimeout(function()
            {
                obj_name = ['qingchun6','che','zi6','yingwen6','line6','qing6','chun6','shi6','yi6','chang6','xiang6','feng6','dou6','wang6','bu6','diao6','le6','yezi6'];
                for(var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i])
                    obj.style.display = 'block';
                }

                id('yezi6').style.webkitAnimation = 'fadein 1s linear both';
                id('qingchun6').style.webkitAnimation = 'fadein 1s linear 0.3s both';
                id('div63h').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div61h').style.webkitAnimation = 'div4in 1s ease-out 0.9s both';
                id('div62h').style.webkitAnimation = 'div4in 1s ease-out 1.1s both';
                id('div63s').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div61s').style.webkitAnimation = 'div4in 1s ease-out 0.9s both';
                id('div62s').style.webkitAnimation = 'div4in 1s ease-out 1.1s both';
                id('line6').style.webkitAnimation = 'line6 1s linear 1.5s both';
                id('che').style.webkitAnimation = 'bao 1s linear 1.5s both';
                id('zi6').style.webkitAnimation = 'fadein 1s linear 1.5s both';
                id('yingwen6').style.webkitAnimation = 'fadein 1s linear 1.5s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('61');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('62');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('63');
                image_url_index++; 

                var delaytime = 2;
                for(var i=5;i<17;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.webkitAnimation = 'showzimu 0.5s linear '+delaytime+'s both';
                    delaytime = delaytime + 0.1;
                }
                timeout13 = setTimeout(show1,5000)
            },1800)

        }
        function setImage(idname)
        {
            if(reshow == true)
                return;
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'s');
            }
            else
            {
                divname = idname + 's';
                div = id('div'+idname+'s');
                div1 = id('div'+idname+'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var height = divheight[divname];
            var width = divwidth[divname];

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            console.log(img.src);

            if(img_bili > (width/height))
            {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height*img_bili + 'px';
                img.style.left = -((height*img_bili-width)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = width+'px';
                img.style.height = width/img_bili + 'px';
                img.style.top = -((width/img_bili-height)/2) + 'px';
            }
            img.onclick=function() {
                var src = this.src;
                $("#img_viewer img").attr("src", src);
                $("#img_viewer").removeClass();
                $("#img_viewer").addClass("img_viewer_show");
                $("#img_viewer").css("display", "block");
                $("#img_viewer").css("pointer-events", "auto");
                var d = new Image();
                d.src = src;
                var i = getImgScale(d.width, d.height, $(window).width());
                $("#img_viewer img").css("left", parseInt(($(window).width() - i.width) / 2) + "px");
                $("#img_viewer img").css("top", parseInt(($(window).height() - i.height) / 2) + "px");
                $("#img_viewer img").css("width", i.width + "px");
                $("#img_viewer img").css("height", i.height + "px");
                $("#img_viewer img").css("position", "absolute");
                $("#img_viewer").bind("click", function() {
                    $("#img_viewer").removeClass();
                    $("#img_viewer").addClass("img_viewer_hide");
                    $("#img_viewer").css("pointer-events", "none")
                });
            };
        }
        call_me(loadimages);
        load_init_modules();
        function reload_scene()
        {
            reshow = true;
            clearnodes();
            loadimages();
        }    
    }
}
