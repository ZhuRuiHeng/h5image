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
        $("#div_player").append('<div id="container"><div id="page1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/01g.jpg"><img id="page1_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/011.png"><img id="page1_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/012.png"><div id="pagetitle"style="position:absolute;width:400px;height:200px;top:264px;left:50px;font-size:36px;color:#fff;overflow:hidden;border:6px solid rgba(255,255,255,0.7)"><div style="position:absolute;width:360px;height:150px;top:19px;left:17px;overflow:hidden;"><div style="position:absolute;width:360px;height:150px;display:table;overflow:hidden;"><div id="titlecontent"style="width:360px;height:150px;vertical-align:middle;display:table-cell;text-align:center;line-height:50px;"></div></div></div></div></div><div id="page2"><div id="div2h"><img id="img2h"style="position:absolute"></div><div id="div2v"><img id="img2v"style="position:absolute"></div><img id="page2_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/021.png"><img id="page2_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/022.png"><img id="page2_3"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/023.png"><img id="page2_4"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/024.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;opacity:0.3;-webkit-animation: rainning 6s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;left:300px;opacity:0.3;-webkit-animation: rainning 6s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;opacity:0.3;top:-800px;-webkit-animation: rainning1 6s linear infinite;-webkit-transform: scale(1,-1);"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;left:300px;top:-800px;opacity:0.3;-webkit-animation: rainning1 6s linear infinite;-webkit-transform: scale(1,-1)"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;opacity:0.3;top:-1600px;-webkit-animation: rainning1 6s linear infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/rain.png"style="width:300px;height:800px;left:300px;top:-1600px;opacity:0.3;-webkit-animation: rainning1 6s linear infinite;"></div><div id="page3"><div id="div3h"><img id="img3h"style="position:absolute"></div><div id="div3v"><img id="img3v"style="position:absolute"></div><img id="page3_4"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/034.png"><img id="page3_5"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/035.png"><img id="page3_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/031.png"><img id="page3_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/032.png"><div id="page3_3"><img id="kite"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/033.png"></div><div id="snow"style="top:-100px"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/snow.png"style="position:absolute;left:195px;top:195px;-webkit-animation: snow1 1.5s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/snow.png"style="position:absolute;left:311px;top:146px;-webkit-animation: snow2 1.5s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/snow.png"style="position:absolute;left:457px;top:168px;-webkit-animation: snow3 1.5s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/snow.png"style="position:absolute;left:372px;top:222px;-webkit-animation: snow4 1.5s ease-in-out infinite alternate;"></div></div><div id="page5"><div id="div5h"><img id="img5h"style="position:absolute"></div><div id="div5v"><img id="img5v"style="position:absolute"></div><img id="page5_3"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/053.png"><div id="page5_4"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/055.png"style="position:absolute;left: 35px;top: 109px;-webkit-animation: light 1s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/055.png"style="position:absolute;left:435px;top:149px;-webkit-animation: light 1s linear 0.6s infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/055.png"style="position:absolute;left:-11px;top:180px;-webkit-animation: light 1s linear 0.3s infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/054.png"style="position:absolute"></div><img id="page5_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/051.png"><img id="page5_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/052.png"></div><div id="page4"><div id="div4h"><img id="img4h"style="position:absolute"></div><div id="div4v"><img id="img4v"style="position:absolute"></div><div id="pugongying"style="top:484px;left:-181px"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/043.png"style="position:absolute;left:195px;top:195px;--webkit-animation: snow1 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/043.png"style="position:absolute;left:311px;top:146px;-webkit-animation: snow2 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/043.png"style="position:absolute;left:457px;top:168px;-webkit-animation: snow3 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/043.png"style="position:absolute;left:372px;top:222px;-webkit-animation: snow4 2s ease-in-out infinite alternate;"></div><img id="page4_4"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/044.png"><img id="page4_5"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/045.png"><img id="page4_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/041.png"><img id="page4_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/042.png"></div><div id="page6"><div id="div6h"><img id="img6h"style="position:absolute"></div><div id="div6v"><img id="img6v"style="position:absolute"></div><img id="page6_3"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/063.png"><img id="page6_4"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/064.png"><img id="page6_1"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/061.png"><img id="page6_2"src="http://referer-image.szwwy.com/coolphoto/img/tpl45/062.png"><div id="jingling"style="position:absolute;left:-350px;"><div style="position:absolute;width:50px;height:50px;-webkit-transform: rotate(40deg) scale(0.7);left:-200px;top:251px;-webkit-animation: jinglingdown 0.8s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(49px,37px) rotate(-145deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling1 0.2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(43px,39px) rotate(-88deg);-webkit-transform-origin: 0% 50%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(37px,34px) rotate(-25deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling 0.2s linear infinite alternate"></div><div style="position:absolute;width:50px;height:50px;-webkit-transform: rotate(40deg) scale(0.7);left:-100px;top:451px;-webkit-animation: jinglingup 0.8s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(49px,37px) rotate(-145deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling1 0.2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(43px,39px) rotate(-88deg);-webkit-transform-origin: 0% 50%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(37px,34px) rotate(-25deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling 0.2s linear infinite alternate"></div><div style="position:absolute;width:50px;height:50px;-webkit-transform: rotate(40deg) scale(0.7);left:20px;top:325px;-webkit-animation: jinglingdown 0.8s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(49px,37px) rotate(-145deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling1 0.2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(43px,39px) rotate(-88deg);-webkit-transform-origin: 0% 50%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(37px,34px) rotate(-25deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling 0.2s linear infinite alternate"></div><div style="position:absolute;width:50px;height:50px;-webkit-transform: rotate(40deg) scale(0.7);left:218px;top:307px;-webkit-animation: jinglingup 0.8s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(49px,37px) rotate(-145deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling1 0.2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(43px,39px) rotate(-88deg);-webkit-transform-origin: 0% 50%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(37px,34px) rotate(-25deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling 0.2s linear infinite alternate"></div><div style="position:absolute;width:50px;height:50px;-webkit-transform: rotate(40deg) scale(0.7);left:271px;top:428px;-webkit-animation: jinglingdown 0.8s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(49px,37px) rotate(-145deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling1 0.2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(43px,39px) rotate(-88deg);-webkit-transform-origin: 0% 50%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl45/066.png"style="position:absolute;-webkit-transform: translate(37px,34px) rotate(-25deg);-webkit-transform-origin: 0% 50%;-webkit-animation: jingling 0.2s linear infinite alternate"></div></div></div></div>');
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var delaytime=5000;
        var type_before = 0;
        function id(name)
        {
            return document.getElementById(name);
        }
        function load_images()
        {
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];

            image_url_index=0;
            have_num = 0;
            error_num = 0;
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            canshow = true;
            //showtitle();
            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                Onload_imgs_url[i] = 'loading';
                img.onerror = image_onerror;
                img.onload=image_onload;
            }       
        }
        function image_onerror(event)

        {
            var img = event.target;
            var index = img.index;
            if(index<10)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if((have_num >= 10 || slider_images_url.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;
            var img=event.target;
            var index = img.index;
            if(index < 18)
            {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            if((have_num +error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;

                distitle();

            }
        }
        function id(name)
        {
            return document.getElementById(name);
        }

        function showtitle()
        {
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'fadein_down 1s ease-out both';
            id('page1_1').style.webkitAnimation = 'fadein_right 1s ease-out both';
            id('page1_2').style.webkitAnimation = 'fadein_up 1s ease-out both';

        }
        function distitle()
        {
            // id('pagetitle').style.webkitAnimation = 'fadeout_up 1s ease-in both';
            // id('page1_2').style.webkitAnimation = 'fadeout_down 1s ease-in both';
            // id('page1').style.webkitAnimation = 'fadeout 0.8s linear both';

            timeout1 = setTimeout(show1,800)
        }

        function show1()
        {
            setImage('2');
            id('page2').style.webkitAnimation = 'fadein 0.6s ease-in both';
            id('page2_1').style.webkitAnimation = 'page21_in 1s ease-out both';
            id('page2_2').style.webkitAnimation = 'page21_in 1s ease-out both';
            id('page2_3').style.webkitAnimation = 'fadein_down 1s 0.5s ease-out both';
            id('page2_4').style.webkitAnimation = 'fadein_up 1s 0.5s ease-out both';
            id('div2v').style.webkitAnimation = 'div_up 8s cubic-bezier(.13,.24,.6,.97) both';
            id('div2h').style.webkitAnimation = 'divh_inleft 8s cubic-bezier(.13,.24,.6,.97) both';

            id('page3_4').style.webkitAnimation = '';
            id('page3_5').style.webkitAnimation = '';
            id('page3_3').style.webkitAnimation = '';
            id('page3_1').style.webkitAnimation = '';
            id('page3_2').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('snow').style.webkitAnimation = '';

            timeout2 = setTimeout(show2,7000)
        }
        function show2()
        {
            setImage('3');
            id('page2').style.webkitAnimation = 'page2_out 0.5s linear both';
            id('page3').style.webkitAnimation = 'fadein 0.5s 0.5s linear both';
            id('page3_4').style.webkitAnimation = 'page21_in 1s 0.5s ease-out both';
            id('page3_5').style.webkitAnimation = 'page21_in 1s 0.5s ease-out both';
            id('page3_3').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('page3_1').style.webkitAnimation = 'page31_in 1s 0.7s ease-out both';
            id('page3_2').style.webkitAnimation = 'page31_in 1s 0.9s ease-out both';
            id('div3v').style.webkitAnimation = 'div3v_in 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('div3h').style.webkitAnimation = 'divh_inleft 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('snow').style.webkitAnimation = 'snowing 10s linear both';

            // id('page4').style.webkitAnimation = '';
            id('page4_1').style.webkitAnimation = '';
            id('page4_2').style.webkitAnimation = '';
            id('page4_5').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('pugongying').style.webkitAnimation = '';
            id('page4_4').style.webkitAnimation = '';

            timeout3 = setTimeout(show3,7000)
        }
        function show3()
        {
            setImage('4');
            id('page3').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('page3_5').style.webkitAnimation = 'page35_out 0.8s linear both';
            id('page3_1').style.webkitAnimation = 'page31_out 0.8s linear both';
            id('page3_2').style.webkitAnimation = 'page31_out 0.8s linear both';

            id('page4').style.webkitAnimation = 'fadein 0.6s 0.5s linear both';
            id('page4_1').style.webkitAnimation = 'page41_in 1s 0.8s linear both';
            id('page4_2').style.webkitAnimation = 'page41_in 1s 0.8s linear both';
            id('page4_5').style.webkitAnimation = 'page45_in 1s ease-out both';
            id('div4v').style.webkitAnimation = 'div4v_in 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('div4h').style.webkitAnimation = 'divh_inright 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('pugongying').style.webkitAnimation = 'pugongying 10s linear both';

            id('page5').style.webkitAnimation = '';
            id('page5_3').style.webkitAnimation = '';
            id('page5_4').style.webkitAnimation = '';
            id('page5_2').style.webkitAnimation = '';
            id('page5_1').style.webkitAnimation = '';
            id('div5v').style.webkitAnimation = '';
            id('div5h').style.webkitAnimation = '';

            timeout4 = setTimeout(show4,7000)
        }
        function show4()
        {
            setImage('5');
            id('page4').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('page4_5').style.webkitAnimation = 'page45_out 0.8s linear both';
            id('page4_4').style.webkitAnimation = 'page44_out 0.8s linear both';
            id('page4_1').style.webkitAnimation = 'page41_out 0.8s linear both';
            id('page4_2').style.webkitAnimation = 'page41_out 0.8s linear both';

            id('page5').style.webkitAnimation = 'fadein 0.6s 0.5s linear both';
            id('page5_3').style.webkitAnimation = 'page53_in 1s 0.5s ease-out both';
            id('page5_4').style.webkitAnimation = 'page54_in 1s 0.5s ease-out both';
            id('page5_2').style.webkitAnimation = 'page51_in 1s 0.8s ease-out both';
            id('page5_1').style.webkitAnimation = 'page51_in 1s 1s ease-out both';
            id('div5v').style.webkitAnimation = 'div5v_in 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('div5h').style.webkitAnimation = 'divh_inleft 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';

            id('page6').style.webkitAnimation = '';
            id('page6_1').style.webkitAnimation = '';
            id('page6_2').style.webkitAnimation = '';
            id('div6v').style.webkitAnimation = '';
            id('div6h').style.webkitAnimation = '';
            id('jingling').style.webkitAnimation = '';

            timeout5 = setTimeout(show5,7000)
        }
        function show5()
        {
            setImage('6');
            id('page5_2').style.webkitAnimation = 'page51_out 1s ease-in both';
            id('page5_1').style.webkitAnimation = 'page51_out 1s 0.2s ease-in both';
            id('page5').style.webkitAnimation = 'fadeout 0.8s 0.8s linear both';

            id('page6').style.webkitAnimation = 'fadein 1s 1.5s linear both';
            id('page6_1').style.webkitAnimation = 'page61_in 1.5s 1.5s ease-out both';
            id('page6_2').style.webkitAnimation = 'page61_in 1.5s 1.3s ease-out both';
            id('div6v').style.webkitAnimation = 'div5v_in 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('div6h').style.webkitAnimation = 'divh_inleft 8s 0.5s cubic-bezier(.13,.24,.6,.97) both';
            id('jingling').style.webkitAnimation = 'jinglingmoving 10s linear both';
            
            id('page2').style.webkitAnimation = '';
            id('page2_1').style.webkitAnimation = '';
            id('page2_2').style.webkitAnimation = '';
            id('page2_3').style.webkitAnimation = '';
            id('page2_4').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';

            timeout6 = setTimeout(show11,7000)
        }
        function show11()
        {
            setImage('2');
            id('page6_2').style.webkitAnimation = 'page61_out 1s ease-in both';
            id('page6_1').style.webkitAnimation = 'page61_out 1s 0.2s ease-in both';
            id('page6').style.webkitAnimation = 'fadeout 1s 0.5s linear both';

            id('page2').style.webkitAnimation = 'fadein 0.6s 1.2s ease-in both';
            id('page2_1').style.webkitAnimation = 'page21_in 1s 1.2s ease-out both';
            id('page2_2').style.webkitAnimation = 'page21_in 1s 1.2s ease-out both';
            id('page2_3').style.webkitAnimation = 'fadein_down 1s 1.7s ease-out both';
            id('page2_4').style.webkitAnimation = 'fadein_up 1s 1.7s ease-out both';
            id('div2v').style.webkitAnimation = 'div_up 8s 1.5s cubic-bezier(.13,.24,.6,.97) both';

            id('page3_4').style.webkitAnimation = '';
            id('page3_5').style.webkitAnimation = '';
            id('page3_3').style.webkitAnimation = '';
            id('page3_1').style.webkitAnimation = '';
            id('page3_2').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('snow').style.webkitAnimation = '';

            timeout7 = setTimeout(show2,8000)
        }
        var divwidth = {'2h':600,'2v':500,'3h':600,'3v':500,'4h':600,'4v':500,'5h':600,'5v':500,'6h':600,'6v':500};
        var divheight = {'2h':467,'2v':600,'3h':470,'3v':600,'4h':470,'4v':600,'5h':464,'5v':600,'6h':467,'6v':600};

        function setImage(idname)
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

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
                div1 = id('div'+idname+'v');
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
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
            image_url_index++;
        }
        call_me(load_images);
        load_init_modules();
        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }
        function clearnode()
        {
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('page3').style.webkitAnimation = '';
            id('page4').style.webkitAnimation = '';
            id('page5').style.webkitAnimation = '';
            id('page6').style.webkitAnimation = '';
            id('page3_4').style.webkitAnimation = '';
            id('page3_5').style.webkitAnimation = '';
            id('page3_3').style.webkitAnimation = '';
            id('page3_1').style.webkitAnimation = '';
            id('page3_2').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('snow').style.webkitAnimation = ''; 
            id('page4_1').style.webkitAnimation = '';
            id('page4_2').style.webkitAnimation = '';
            id('page4_5').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('pugongying').style.webkitAnimation = '';
            id('page4_4').style.webkitAnimation = '';
            id('page5').style.webkitAnimation = '';
            id('page5_3').style.webkitAnimation = '';
            id('page5_4').style.webkitAnimation = '';
            id('page5_2').style.webkitAnimation = '';
            id('page5_1').style.webkitAnimation = '';
            id('div5v').style.webkitAnimation = '';
            id('div5h').style.webkitAnimation = '';
            id('page6').style.webkitAnimation = '';
            id('page6_1').style.webkitAnimation = '';
            id('page6_2').style.webkitAnimation = '';
            id('div6v').style.webkitAnimation = '';
            id('div6h').style.webkitAnimation = '';
            id('jingling').style.webkitAnimation = '';
            id('page2_1').style.webkitAnimation = '';
            id('page2_2').style.webkitAnimation = '';
            id('page2_3').style.webkitAnimation = '';
            id('page2_4').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            id('page1_1').style.webkitAnimation = '';
            id('page1_2').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
        }    
    }
}
