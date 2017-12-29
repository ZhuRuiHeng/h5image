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
        $("#div_player").append('<div id="container"><div id="cleararea"style="position:absolute"><img id="a2016_1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><img id="xinnianhao"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian1.png"><img id="xin_1"class="letter1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xin.png"><img id="nian_1"class="letter2"style="display:none;"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/nian.png"><img id="xi_1"class="letter3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xi.png"><img id="qi_1"class="letter4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/qi4.png"><img id="yang_1"class="letter5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang3.png"><img id="yang1_1"class="letter6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang3.png"><img id="dou_1"class="letter7"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="man_1"class="letter8"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/man.png"><img id="mian_1"class="letter9"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/mian.png"><img id="can_1"class="letter10"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/can.png"><img id="lan_1"class="letter11"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/lan.png"><img id="yang2_1"class="letter12"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang2.png"><img id="guang_1"class="letter13"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/guang.png"><img id="yedi"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yezi3.png"><div id="div1h"style="display:none"><div id="box1h"><img id="img1h"style="position:absolute"></div></div><div id="div1s"style="display:none"><div id="box1s"><img id="img1s"style="position:absolute"></div></div><img id="a2016_2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><img id="xinnianhao2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian1.png"><img id="yi_2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yi.png"><img id="sheng_2"class="letter2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/sheng.png"><img id="jian_2"class="letter3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/jian.png"><img id="kang_2"class="letter4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/kang.png"><img id="ping_2"class="letter5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ping.png"><img id="an_2"class="letter6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/an.png"><img id="dou_2"class="letter7"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="hao_2"class="letter8"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/hao.png"><img id="shi_2"class="letter9"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/shi.png"><img id="jie_2"class="letter10"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/jie1.png"><img id="er_2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/er.png"><img id="lian_2"class="letter12"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/lian.png"><img id="san_2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/san.png"><div id="div2h"style="display:none"><div id="box2h"><img id="img2h"style="position:absolute"></div></div><div id="div2s"style="display:none"><div id="box2s"><img id="img2s"style="position:absolute"></div></div><img id="xinnianhao_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian1.png"><img id="a2016_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><div id="div31h"style="display:none"><div id="box31h"><img id="img31h"style="position:absolute"></div></div><div id="div32h"style="display:none"><div id="box32h"><img id="img32h"style="position:absolute"></div></div><div id="div31s"style="display:none"><div id="box31s"><img id="img31s"style="position:absolute"></div></div><div id="div32s"style="display:none"><div id="box32s"><img id="img32s"style="position:absolute"></div></div><img id="tai_3"class="letter1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/tai.png"><img id="tou_3"class="letter2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/tou.png"><img id="si_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/si.png"><img id="ji_3"class="letter4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ji.png"><img id="lai_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/lai.png"><img id="cai_3"class="letter6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/cai.png"><img id="dou_3"class="letter7"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="sheng_3"class="letter8"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/sheng.png"><img id="huo_3"class="letter9"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/huo.png"><img id="wu_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/wu.png"><img id="cai1_3"class="letter11"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/cai3.png"><img id="bin_3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/bin.png"><img id="fen_3"class="letter13"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/fen.png"><img id="xinnianhao_4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian2.png"><img id="a2016_4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><div id="div41h"style="display:none"><div id="box41h"><img id="img41h"style="position:absolute"></div></div><div id="div42h"style="display:none"><div id="box42h"><img id="img42h"style="position:absolute"></div></div><div id="div41s"style="display:none"><div id="box41s"><img id="img41s"style="position:absolute"></div></div><div id="div42s"style="display:none"><div id="box42s"><img id="img42s"style="position:absolute"></div></div><img id="shi_4"class="letter1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/shi.png"><img id="ye_4"class="letter2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ye.png"><img id="liu_4"class="letter3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/liu.png"><img id="liu1_4"class="letter4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/liu.png"><img id="da_4"class="letter5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/da.png"><img id="shun_4"class="letter6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/shun.png"><img id="dou_4"class="letter7"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="ri_4"class="letter8"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ri.png"><img id="zi_4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/zi.png"><img id="qi_4"class="letter10"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/qi.png"><img id="xing_4"class="letter11"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xing.png"><img id="gao_4"class="letter12"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/gao.png"><img id="zhao_4"class="letter13"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/zhao.png"><img id="xinnianhao_5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian2.png"><img id="a2016_5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><div id="div51h"style="display:none"><div id="box51h"><img id="img51h"style="position:absolute"></div></div><div id="div52h"style="display:none"><div id="box52h"><img id="img52h"style="position:absolute"></div></div><div id="div53h"style="display:none"><div id="box53h"><img id="img53h"style="position:absolute"></div></div><div id="div51s"style="display:none"><div id="box51s"><img id="img51s"style="position:absolute"></div></div><div id="div52s"style="display:none"><div id="box52s"><img id="img52s"style="position:absolute"></div></div><div id="div53s"style="display:none"><div id="box53s"><img id="img53s"style="position:absolute"></div></div><img id="ba_5"style="display:none"class="letter1"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ba.png"><img id="fang_5"style="display:none"class="letter2"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/fang.png"><img id="hao_5"style="display:none"class="letter3"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/hao.png"><img id="yun_5"style="display:none"class="letter4"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yun.png"><img id="jie_5"style="display:none"class="letter5"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/jie.png"><img id="lai_5"style="display:none"class="letter6"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/lai.png"><img id="dou_5"style="display:none"class="letter7"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="fan_5"style="display:none"class="letter8"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/fan.png"><img id="nao_5"style="display:none"class="letter9"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/nao.png"><img id="jiu_5"style="display:none"class="letter10"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/jiu.png"><img id="xiao_5"style="display:none"class="letter11"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xiao.png"><img id="yun1_5"style="display:none"class="letter12"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yun.png"><img id="wai_5"style="display:none"class="letter13"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/wai.png"><img id="xinnianhao_6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/xinnian1.png"><img id="a2016_6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/2016.png"><div id="div61h"style="display:none"><div id="box61h"><img id="img61h"style="position:absolute"></div></div><div id="div62h"style="display:none"><div id="box62h"><img id="img62h"style="position:absolute"></div></div><div id="div63h"style="display:none"><div id="box63h"><img id="img63h"style="position:absolute"></div></div><div id="div61s"style="display:none"><div id="box61s"><img id="img61s"style="position:absolute"></div></div><div id="div62s"style="display:none"><div id="box62s"><img id="img62s"style="position:absolute"></div></div><div id="div63s"style="display:none"><div id="box63s"><img id="img63s"style="position:absolute"></div></div><img id="ai_6"class="letter1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/ai.png"><img id="qing_6"class="letter2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/qing.png"><img id="yang_6"class="letter3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang.png"><img id="mei_6"class="letter4"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/mei.png"><img id="tu_6"class="letter5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/tu.png"><img id="qi_6"class="letter6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/qi4.png"><img id="dou_6"class="letter7"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/douhao.png"><img id="wan_6"class="letter8"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/wan.png"><img id="shi_6"class="letter9"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/shi.png"><img id="yang1_6"class="letter10"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang.png"><img id="yang2_6"class="letter11"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yang.png"><img id="de_6"class="letter12"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/de.png"><img id="yi_6"class="letter13"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/yi4.png"></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:380px;height:200px;left:60px;top:260px;"><div id="upline"style="position:absolute;top:0px;left:-30px;height:3px;width:440px;background-color:#C81D1D;-webkit-transform: scale(0,1);"></div><div id="downline"style="position:absolute;top:200px;left:-30px;height:3px;width:440px;background-color:#C81D1D;-webkit-transform: scale(0,1);"></div><div id="leftline"style="position:absolute;top:-30px;left:0px;height:260px;width:3px;background-color:#C81D1D;-webkit-transform: scale(1,0);"></div><div id="rightline"style="position:absolute;top:-30px;left:380px;height:260px;width:3px;background-color:#C81D1D;-webkit-transform: scale(1,0);"></div><div id="boxtitle"style="position:absolute;width:380px;height:190px;top:0px;left:0px;display:display:table;overflow:hidden;opacity:0;text-shadow: rgb(97, 87, 87) 5px 3px 4px"><div id="wordtitle"style="width:380px;height:200px;display:table-cell;vertical-align:middle;font-size:40px;color:#fff;text-align:center;padding:10px;"></div></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl43/denglong.png"style="left:8px;top:74px;-webkit-transform-origin: 20% 0%;-webkit-animation: denglong 2s ease-in-out infinite alternate;position:absolute"><img id="zikuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl43/niankuang.png"style="left:32px;top:662px;position:absolute;opacity:0;"></div>');
        var divwidth = {'1h':428,'1s':288,'2h':425,'2s':257,'31h':337,'32h':268,'31s':227,'32s':190,'41h':269,'42h':269,'41s':225,'42s':210,'51h':213,'52h':213,'53h':310,'51s':170,'52s':136,'53s':200,'61h':220,'62h':210,'63h':360,'61s':140,'62s':149,'63s':221};
        var divheight = {'1h':280,'1s':451,'2h':280,'2s':406,'31h':235,'32h':198,'31s':342,'32s':296,'41h':256,'42h':257,'41s':339,'42s':320,'51h':173,'52h':173,'53h':220,'51s':260,'52s':212,'53s':306,'61h':140,'62h':150,'63h':244,'61s':214,'62s':241,'63s':333};
        function id(name)
        {
            return document.getElementById(name);
        }
        var image_size_width=[];
        var image_size_height=[];
        var image_ready_num=0;
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
            image_ready_num=18;
            image_url_index=0;
            have_num = 0;
            error_num = 0;
            canshow = true;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                img.onload=image_onload;
                img.onerror = image_onerror;
            }       
        }
        function image_onerror()
        {
            var img = event.target;
            var index = img.index;
            error_num ++;
            Onload_imgs_url[index] = 'not find';
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if((have_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
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
            have_num++;
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);

            if((have_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {   
                canshow = false;
                reshow = false;
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
        }

        function showtitle()
        {
            //log(begin_titletime+'begin');
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
            obj_name = ['a2016_6','xinnianhao_6','ai_6','qing_6','yang_6','mei_6','tu_6','qi_6','dou_6','wan_6','shi_6','yang1_6','yang2_6','de_6','yi_6'];
            var delaytime = 0;
            for(var i=14;i>1;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime + 0.1;
            }
            id('pagetitle').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('a2016_6').style.webkitAnimation = 'fadeout 1s 0.7s linear both';
            id('xinnianhao_6').style.webkitAnimation = 'bao_out 1s linear 0.7s both';
            id('div63h').style.webkitAnimation = 'div4out 1s 1.2s ease-in both';
            id('div61h').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';
            id('div62h').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';
            id('div63s').style.webkitAnimation = 'div4out 1s 1.2s ease-in both';
            id('div61s').style.webkitAnimation = 'div4out 1s 1.3s ease-in both';
            id('div62s').style.webkitAnimation = 'div4out 1s 1.5s ease-in both';

            timeout2 = setTimeout(function()
            {
                obj_name = ['a2016_1','xinnianhao','xin_1','nian_1','xi_1','qi_1','yang_1','yang1_1','dou_1','man_1','mian_1','can_1','lan_1','yang2_1','guang_1'];
                for(var i =0 ;i <obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    // //log(obj_name); 
                    obj.style.display = 'block';
                }
                id(obj_name[0]).style.webkitAnimation = 'fadein 0.6s linear both';
                id(obj_name[1]).style.webkitAnimation = 'fadein 0.6s linear both';
                id('div1h').style.webkitAnimation = 'in_center 1s ease-out 0.5s both';
                id('div1s').style.webkitAnimation = 'in_center 1s ease-out 0.5s both';
                id('xinnianhao').style.webkitAnimation = 'zixingche 1.2s ease-out 1s both';
                id('zikuang').style.webkitAnimation = 'fadein 1s linear 1s both';
                // id('yingwen1').style.webkitAnimation = 'fadein 1s linear 1.2s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('1');
                image_url_index++;

                var delaytime = 1.5;
                for (var i =2;i<15;i++)
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
             obj_name = ['a2016_1','xinnianhao','xin_1','nian_1','xi_1','qi_1','yang_1','yang1_1','dou_1','man_1','mian_1','can_1','lan_1','yang2_1','guang_1'];
             var delaytime = 0;
             for(var i =14 ; i>1; i--)
             {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime +'s both';
                delaytime = delaytime + 0.1;
             }
            id('zikuang').style.webkitAnimation = 'fadeout 1s linear 1.5s both';
            id('a2016_1').style.webkitAnimation = 'fadeout 1s 1.5s ease-in both';
            id('div1s').style.webkitAnimation = 'out_center 1s ease-in 1.5s both';
            id('div1h').style.webkitAnimation = 'out_center 1s ease-in 1.5s both';
            id('xinnianhao').style.webkitAnimation = 'zixingche_out 1s ease-in 1.5s both';

            // return;
            timeout4 = setTimeout(function()
            {
                obj_name = ['a2016_2','xinnianhao2','yi_2','sheng_2','jian_2','kang_2','ping_2','an_2','dou_2','hao_2','shi_2','jie_2','er_2','lian_2','san_2'];
                for(var i = 0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i])
                    obj.style.display = 'block';
                }
                id('a2016_2').style.webkitAnimation = 'fadein 1s linear 0.5s both';
                id('div2s').style.webkitAnimation = 'div2in 1.5s ease-out 0.5s both';
                id('div2h').style.webkitAnimation = 'div2in 1.5s ease-out 0.5s both';
                id('xinnianhao2').style.webkitAnimation = 'xiangji 1.5s linear 0.5s both';
                id('zikuang').style.webkitAnimation = 'fadein 1s linear 0.8s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index++;

                var delaytime = 1.5;
                for(var i = 2;i<15;i++)
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
            obj_name = ['a2016_2','xinnianhao2','yi_2','sheng_2','jian_2','kang_2','ping_2','an_2','dou_2','hao_2','shi_2','jie_2','er_2','lian_2','san_2'];

            var delaytime = 0;
            for(var i=14;i>1;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime + 0.1;
            }
            id('xinnianhao2').style.webkitAnimation = 'xiangji_out 0.7s 1s linear both';
            id('div2h').style.webkitAnimation = 'div2out 1s ease-in 1.2s both';
            id('div2s').style.webkitAnimation = 'div2out 1s ease-in 1.2s both';
            id('a2016_2').style.webkitAnimation = 'fadeout 0.7s linear 1.2s both';

            timeout6 = setTimeout(function()
            {
                obj_name = ['a2016_3','xinnianhao_3','tai_3','tou_3','si_3','ji_3','lai_3','cai_3','dou_3','sheng_3','huo_3','wu_3','cai1_3','bin_3','fen_3'];
                for(var i = 0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                }
                id('xinnianhao_3').style.webkitAnimation = 'fadein 1s linear both';
                id('div31h').style.webkitAnimation = 'div31in 1s ease-out 0.5s both';
                id('div32h').style.webkitAnimation = 'div32in 1s ease-out 0.7s both';
                id('div31s').style.webkitAnimation = 'div31in 1s ease-out 0.5s both';
                id('div32s').style.webkitAnimation = 'div32in 1s ease-out 0.7s both';
                id('a2016_3').style.webkitAnimation = 'fadein 1s linear 0.7s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('31');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('32');
                image_url_index++;  

                var delaytime = 2;
                for (var i=2;i<15;i++)
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
            obj_name = ['a2016_3','xinnianhao_3','tai_3','tou_3','si_3','ji_3','lai_3','cai_3','dou_3','sheng_3','huo_3','wu_3','cai1_3','bin_3','fen_3'];
            var delaytime = 0;
            for(var i = 14;i>1;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime +'s both';
                delaytime = delaytime + 0.1;
            }

            id('a2016_3').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('xinnianhao_3').style.webkitAnimation = 'fadeout 1s linear 0.8s both';
            id('div31h').style.webkitAnimation = 'div31out 1s 1s ease-in both';
            id('div32h').style.webkitAnimation = 'div32out 1s 1.2s ease-in both';
            id('div31s').style.webkitAnimation = 'div31out 1s 1s ease-in both';
            id('div32s').style.webkitAnimation = 'div32out 1s 1.2s ease-in both';

            timeout8 = setTimeout(function()
            { 
                obj_name = ['a2016_4','xinnianhao_4','shi_4','ye_4','liu_4','liu1_4','da_4','shun_4','dou_4','ri_4','zi_4','qi_4','xing_4','gao_4','zhao_4'];
                for (var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                }
                id('xinnianhao_4').style.webkitAnimation = 'fadein 1s linear both';
                id('div41h').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div42h').style.webkitAnimation = 'div4in 1s ease-out 1s both';
                id('div41s').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div42s').style.webkitAnimation = 'div4in 1s ease-out 1s both';
                id('a2016_4').style.webkitAnimation = 'yumaoqiu 1s linear 1.2s both';

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('41');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('42');
                image_url_index++; 

                var delaytime = 2;
                for(var i=2;i<15;i++)
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
            obj_name = ['a2016_4','xinnianhao_4','shi_4','ye_4','liu_4','liu1_4','da_4','shun_4','dou_4','ri_4','zi_4','qi_4','xing_4','gao_4','zhao_4'];
            var delaytime = 0;
            for(var i=14;i>1;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime +0.1;
            }
            id('a2016_4').style.webkitAnimation = 'yumaoqiu_out 1s linear .7s both';
            id('xinnianhao_4').style.webkitAnimation = 'fadeout 1s linear 1s both';
            id('div41h').style.webkitAnimation = 'div4out 1.2s ease-in 1s both';
            id('div42h').style.webkitAnimation = 'div4out 1.2s ease-in 1.3s both';
            id('div41s').style.webkitAnimation = 'div4out 1.2s ease-in 1s both';
            id('div42s').style.webkitAnimation = 'div4out 1.2s ease-in 1.3s both';

            timeout10 = setTimeout(function()
            {
                obj_name = ['a2016_5','xinnianhao_5','ba_5','fang_5','hao_5','yun_5','jie_5','lai_5','dou_5','fan_5','nao_5','jiu_5','xiao_5','yun1_5','wai_5'];
                for(var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i]);
                    obj.style.display = 'block';
                    // //log(obj_name[i]);
                }
                id('a2016_5').style.webkitAnimation = 'fadein 1s linear both';
                id('div51h').style.webkitAnimation = 'fadein 1s 0.5s linear both';
                id('div52h').style.webkitAnimation = 'fadein 1s 1s linear both';
                id('div53h').style.webkitAnimation = 'fadein 1s 1.5s linear both';
                id('div51s').style.webkitAnimation = 'fadein 1s 0.5s linear both';
                id('div52s').style.webkitAnimation = 'fadein 1s 1s linear both';
                id('div53s').style.webkitAnimation = 'fadein 1s 1.5s linear both';
                id('xinnianhao_5').style.webkitAnimation = 'bao 1s 2s ease-out both';

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
                for(var i=2;i<15;i++)
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
            obj_name = ['a2016_5','xinnianhao_5','ba_5','fang_5','hao_5','yun_5','jie_5','lai_5','dou_5','fan_5','nao_5','jiu_5','xiao_5','yun1_5','wai_5'];
            var delaytime = 0;
            for(var i=14;i>1;i--)
            {
                var obj = id(obj_name[i]);
                obj.style.webkitAnimation = 'diszimu 0.5s linear '+delaytime+'s both';
                delaytime = delaytime+ 0.1;
            }
            id('xinnianhao_5').style.webkitAnimation = 'bao_out 1s 1s ease-in both';
            id('a2016_5').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('div51h').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div52h').style.webkitAnimation = 'fadeout 1s 1.2s linear both';
            id('div53h').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div51s').style.webkitAnimation = 'fadeout 1s 1.5s linear both';
            id('div52s').style.webkitAnimation = 'fadeout 1s 1.2s linear both';
            id('div53s').style.webkitAnimation = 'fadeout 1s 1.5s linear both';

            timeout12 = setTimeout(function()
            {
                obj_name = ['a2016_6','xinnianhao_6','ai_6','qing_6','yang_6','mei_6','tu_6','qi_6','dou_6','wan_6','shi_6','yang1_6','yang2_6','de_6','yi_6'];
                for(var i=0;i<obj_name.length;i++)
                {
                    var obj = id(obj_name[i])
                    obj.style.display = 'block';
                }

                id('a2016_6').style.webkitAnimation = 'fadein 1s linear 0.3s both';
                id('div63h').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div61h').style.webkitAnimation = 'div4in 1s ease-out 0.9s both';
                id('div62h').style.webkitAnimation = 'div4in 1s ease-out 1.1s both';
                id('div63s').style.webkitAnimation = 'div4in 1s ease-out 0.5s both';
                id('div61s').style.webkitAnimation = 'div4in 1s ease-out 0.9s both';
                id('div62s').style.webkitAnimation = 'div4in 1s ease-out 1.1s both';
                id('xinnianhao_6').style.webkitAnimation = 'bao 1s linear 1.5s both';

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
                for(var i=2;i<15;i++)
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
                //log(Onload_imgs_url[image_url_index]);
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
            //log(img.src);

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
            setTimeout(loadimages,100)
        }    
    }
}
