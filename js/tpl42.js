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
        $("#div_player").append('<div id="container"style="background:url(http://referer-image.szwwy.com/coolphoto/img/tpl42/bg.jpg)"><div id="pagetitle" style="pointer-events: none;"><img id="titlekuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"style="left:52px;top:200px;"><div style="position:absolute;width:350px;height:263px;top:25px;left:26px;overflow:hidden;"><div style="position:absolute;width:350px;height:263px;display:table;overflow:hidden;"><div id="titlecontent"style="width:350px;height:263px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;color:#325355;"></div></div></div></div><div id="div4h"style="display:none"><div style="position:absolute;width: 383px;height: 297px;overflow: hidden;top: 7px;left: 9px;"><img id="img4h"style="position:absolute"></div><img id="kuang4h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"></div><div id="div4v"style="display:none"><div style="position:absolute;width: 315px;height: 456px;overflow: hidden;top: 4px;left: 7px;"><img id="img4v"style="position:absolute"></div><img id="kuang4v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png"></div><div id="yun"style="left:290px;top:100px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/yun.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite"></div><div id="yun1"style="left:290px;top:100px;display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/yun.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite"></div><div id="taiyang"><img id="guang"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/guang1.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/s.png"style="position:absolute;left:32px;top:33px;"></div><div id="div11v"style="display:none"><div style="position:absolute;width: 252px;height: 363px;overflow: hidden;top: 3px;left: 5px;"><img id="img11v"style="position:absolute"></div><img id="kuang11v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png"width="265"></div><div id="div11h"style="display:none"><div style="position:absolute;width: 323px;height: 252px;overflow: hidden;top: 6px;left: 9px;"><img id="img11h"style="position:absolute"></div><img id="kuang11h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"width="340"></div><div id="div12v"style="display:none"><div style="position:absolute;width: 252px;height: 363px;overflow: hidden;top: 3px;left: 5px;"><img id="img12v"style="position:absolute"></div><img id="kuang12v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png"width="265"></div><div id="div12h"style="display:none"><div style="position:absolute;width:325px;height:249px;overflow:hidden;top:6px;left:8px;"><img id="img12h"style="position:absolute"></div><img id="kuang12h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"width="340"></div><div id="rili"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/rili.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite"></div><div id="page2"style="display:none"><div id="huoli"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/huoli.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite"></div><div id="div2h"><div style="position:absolute;width: 384px;height: 295px;overflow: hidden;top: 8px;left: 9px;"><img id="img2h"style="position:absolute"></div><img id="kuang2h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"></div><div id="div2v"><div style="position:absolute;width: 315px;height: 452px;overflow: hidden;top: 8px;left: 7px;"><img id="img2v"style="position:absolute"></div><img id="kuang2v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png"></div></div><div id="zaocan"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/zaocan.png"style="position:absolute;-webkit-animation:shouhui1 0.4s linear infinite"></div><div id="div3v"style="display:none"><div style="position:absolute;width: 315px;height: 452px;overflow: hidden;top: 8px;left: 7px;"><img id="img3v"style="position:absolute"></div><img id="kuang3v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png"></div><div id="div3h"style="display:none"><div style="position:absolute;width: 385px;height: 297px;overflow: hidden;top: 7px;left: 8px;"><img id="img3h"style="position:absolute"></div><img id="kuang3h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png"></div><div id="cake"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/cake.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite;width:108px;"></div><div id="tong"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/tong.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite;width:100px;"></div><div id="sucai"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl42/sucai1.png"style="position:absolute;-webkit-animation: shouhui 0.4s linear infinite"></div><div id="kawaword"><img id="kawawordin"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/kawa.png"style="position:absolute;top:0px;left:101px;width:101px;"></div><div id="bi"style="position:absolute;left:48px;top:589px;-webkit-transform: translate(0px,0px);width:115px;height:93px;"><img id="bi"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/bi.png"style="position:absolute;-webkit-animation: shouhui 0.3s linear infinite;"></div><img id="dixian"src="http://referer-image.szwwy.com/coolphoto/img/tpl42/01.png"style="position:absolute;left:46px;top:705px;"></div>');
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
        var timeout8;
        var timeout9;
        var timeout10;
        var delaytime=5000;
        function id(name)
        {
            return document.getElementById(name);
        }
        function load_init()
        {
            // ani_init();
            load_images();
        }
        function load_images()
        {
            id('bi').style.webkitAnimation = 'draw_word 5s linear infinite';
            id('kawaword').style.webkitAnimation = 'word_to_right 5s linear infinite';
            id('kawawordin').style.webkitAnimation = 'word_to_left 5s linear infinite';
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
                Onload_imgs_url[i] = img.src;
                img.onload=image_onload;
                img.onerror = image_onerror;

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

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
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
            var img = event.target;
            var index = img.index;
            if(index < 10)
                have_num ++ ;

            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;

                if(have_num == 0)
                    return;

                distitle();

            }
        }
        function ani_init()
        {
            dixian = id('dixian');
            wordin = id('titlekuang');
            guang = id('guang')
            kuang11h = id('kuang11h');
            kuang11v = id('kuang11v');
            kuang12h = id('kuang12h');
            kuang12v = id('kuang12v');
            kuang2h = id('kuang2h');
            kuang2v = id('kuang2v');
            kuang3h = id('kuang3h');
            kuang3v = id('kuang3v');
            kuang4h = id('kuang4h');
            kuang4v = id('kuang4v');
            setInterval(kuang_ani,200);
        }
        var line_index = 1;
        var divwidth = {'11h':323,'12h':325,'11v':252,'12v':252,'2h':384,'2v':315,'3h':385,'3v':315,'4h':383,'4v':315};
        var divheight = {'11h':252,'12h':249,'11v':363,'12v':363,'2h':295,'2v':452,'3h':315,'3v':452,'4h':297,'4v':456};
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
            var src = img.src;
            img.parentElement.parentElement.onclick=function() {
                
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
        function showtitle()
        {
            //id('titlecontent').innerHTML = e_desc;
            id('yun').style.display = 'block';
            id('taiyang').style.display = 'block';
            id('pagetitle').style.webkitAnimation = 'in_title 0.5s ease-out both';
            id('yun').style.webkitAnimation = 'in_yun 0.8s linear both';
            id('taiyang').style.webkitAnimation = 'in_yun 0.8s 0.2s linear both';

            // setTimeout(distitle,2000)
        }
        function distitle()
        {
            //id('pagetitle').style.webkitAnimation = 'out_title 0.6s linear both';
            //id('yun').style.webkitAnimation = 'out_yun 0.6s linear both';
            //id('taiyang').style.webkitAnimation = 'out_yun 0.6s 0.2s linear both';

            timeout1 = setTimeout(function()
            {
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('11');
                image_url_index ++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('12');
                image_url_index ++;
                id('rili').style.display = 'block';
                id('div11v').style.webkitAnimation = 'in_div11v 0.6s ease-out both';
                id('div12v').style.webkitAnimation = 'in_div12v 0.6s ease-out both';
                id('div11h').style.webkitAnimation = 'in_div11h 0.6s ease-out both';
                id('div12h').style.webkitAnimation = 'in_div12h 0.6s ease-out both';
                id('rili').style.webkitAnimation = 'in_yun 0.8s linear both';

                timeout2 = setTimeout(out_page2,5000)
            },500)
        }
        function out_page2()
        {
            id('rili').style.webkitAnimation = 'out_rili 0.6s ease-in both';
            id('div11v').style.webkitAnimation = 'out_div11v 0.6s ease-in both';
            id('div12v').style.webkitAnimation = 'out_div12v 0.6s ease-in both';
            id('div11h').style.webkitAnimation = 'out_div11h 0.6s ease-in both';
            id('div12h').style.webkitAnimation = 'out_div12h 0.6s ease-in both';

            timeout3 = setTimeout(function()
            {
                id('page2').style.display = 'block';
                id('zaocan').style.display = 'block';
                id('taiyang').style.opacity = 0;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index ++;
                id('page2').style.webkitAnimation = 'in_page2 0.6s 0.4s ease-out both';
                id('taiyang').style.webkitAnimation = 'in_sun_3 .7s 1.1s linear forwards';
                id('zaocan').style.webkitAnimation = 'in_zaocan 0.7s 0.4s ease-out both';

                timeout4 = setTimeout(out_page3,6000)
            },100)
        }
        function out_page3()
        {
            id('zaocan').style.webkitAnimation = 'out_zaocan 0.5s ease-in both';
            id('div2h').style.webkitAnimation = 'out_div2h 0.7s ease-in-out both';
            id('div2v').style.webkitAnimation = 'out_div2h 0.7s ease-in-out both';
            id('huoli').style.webkitAnimation = 'out_huoli 0.7s ease-in-out both';
            id('taiyang').style.webkitAnimation = 'out_sun_3 0.7s ease-in both';

            timeout5 = setTimeout(function()
            {
                id('tong').style.display = 'block';
                id('sucai').style.display = 'block';
                id('cake').style.display = 'block';
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('3');
                image_url_index ++;
                id('div3h').style.webkitAnimation = 'in_div3v .8s ease-out both';
                id('div3v').style.webkitAnimation = 'in_div3v .8s ease-out both';
                id('tong').style.webkitAnimation = 'in_tong .8s 0.2s ease-out both';
                id('sucai').style.webkitAnimation = 'in_tong .8s 0.4s ease-out both';
                id('cake').style.webkitAnimation = 'in_cake .5s 0.5s linear both';
                id('yun1').style.display = 'block';
                id('yun1').style.webkitAnimation = 'in_yun3 5s 1s linear both';

                timeout6 = setTimeout(out_page4,6000)
            },300)
        }
        function out_page4()
        {
            id('cake').style.webkitAnimation = 'out_cake 1.4s linear both';
            id('div3v').style.webkitAnimation = 'out_div3v 1.4s linear both';
            id('div3h').style.webkitAnimation = 'out_div3v 1.4s linear both';
            id('tong').style.webkitAnimation = 'out_tong 1.8s linear both';
            id('sucai').style.webkitAnimation = 'out_tong 1.8s linear 0.2s both';

            timeout7 = setTimeout(function()
            {
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('4');
                image_url_index ++;
                id('div4h').style.webkitAnimation = 'in_title 0.5s ease-out both';
                id('div4v').style.webkitAnimation = 'in_title 0.5s ease-out both';
                id('yun').style.webkitAnimation = 'in_yun .8s linear both';
                id('taiyang').style.webkitAnimation = 'in_yun .8s 0.2s linear both';

                timeout8 = setTimeout(out_page1,5000);
            },2000)
        }

        function out_page1()
        {
            id('div4h').style.webkitAnimation = 'out_title 0.6s linear both';
            id('div4v').style.webkitAnimation = 'out_title 0.6s linear both';
            id('yun').style.webkitAnimation = 'out_yun 0.6s linear both';
            id('taiyang').style.webkitAnimation = 'out_yun 0.6s 0.2s linear both';

            timeout9 = setTimeout(function()
            {
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('11');
                image_url_index ++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('12');
                image_url_index ++;
                id('rili').style.display = 'block';
                id('div11v').style.webkitAnimation = 'in_div11v 0.7s ease-out both';
                id('div12v').style.webkitAnimation = 'in_div12v 0.7s ease-out both';
                id('div11h').style.webkitAnimation = 'in_div11h 0.7s ease-out both';
                id('div12h').style.webkitAnimation = 'in_div12h 0.7s ease-out both';
                id('rili').style.webkitAnimation = 'in_yun 1s linear both';

                id('page2').style.display = 'none';
                id('page2').style.webkitAnimation = '';
                id('huoli').style.webkitAnimation = '';
                id('div2h').style.webkitAnimation = '';
                id('div2v').style.webkitAnimation = '';

                timeout10 = setTimeout(out_page2,5000)
            },800)
        }
        function kuang_ani()
        {
            if(line_index == 1)
            {
                dixian.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/01.png';
                wordin.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                guang.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/guang1.png';
                kuang11h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                kuang11v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png';
                kuang12h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                kuang12v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png';
                kuang2h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                kuang2v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png';
                kuang3h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                kuang3v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png';
                kuang4h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang1.png';
                kuang4v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang04.png';
            }
            else if(line_index == 2)
            {
                dixian.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/02.png';
                wordin.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                guang.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/guang2.png';
                kuang11h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                kuang11v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang05.png';
                kuang12h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                kuang12v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang05.png';
                kuang2h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                kuang2v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang05.png';
                kuang3h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                kuang3v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang05.png';
                kuang4h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang2.png';
                kuang4v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang05.png';
            }
            else
            {
                dixian.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/03.png';
                wordin.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                guang.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/guang3.png';
                kuang11h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                kuang11v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang06.png';
                kuang12h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                kuang12v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang06.png';
                kuang2h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                kuang2v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang06.png';
                kuang3h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                kuang3v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang06.png';
                kuang4h.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang3.png';
                kuang4v.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl42/kuang06.png';
            }
            line_index ++;
            if(line_index == 4)
                line_index = 1;
        }
        function reload_scene()
        {
            clearnode();
            reshow = true;
            load_images();

        }
        function clearnode()
        {
            id('div11h').style.display = 'none';
            id('div12h').style.display = 'none';
            id('div11v').style.display = 'none';
            id('div12v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div4v').style.display = 'none';
            id('div4h').style.display = 'none';
            id('page2').style.display = 'none';
            id('tong').style.display = 'none';
            id('sucai').style.display = 'none';
            id('taiyang').style.display = 'none';
            id('cake').style.display = 'none';
            id('yun').style.display = 'none';
            id('yun1').style.display = 'none';
            id('zaocan').style.display = 'none';
            id('rili').style.display = 'none';
            id('div11h').style.webkitAnimation = '';
            id('div12h').style.webkitAnimation = '';
            id('div11v').style.webkitAnimation = '';
            id('div12v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('tong').style.webkitAnimation = '';
            id('sucai').style.webkitAnimation = '';
            id('taiyang').style.webkitAnimation = '';
            id('cake').style.webkitAnimation = '';
            id('yun').style.webkitAnimation = '';
            id('yun1').style.webkitAnimation = '';
            id('zaocan').style.webkitAnimation = '';
            id('rili').style.webkitAnimation = '';
            clearTimeout(timeout0);
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
        }
        call_me(load_init);
        load_init_modules();    
    }
}
