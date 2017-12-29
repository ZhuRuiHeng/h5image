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
            $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/bg.jpg"><img id="shuzhi"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/zhi.png"><div id="hudie"><div id="hudieying"style="-webkit-transform-origin: 51% 53%;left:-30px;top:19px;width:89px;height:84px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/03ying.png"style="position:absolute;-webkit-animation: chibang1 3.5s linear infinite alternate"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/03.png"style="-webkit-transform-origin: 1% 57%;-webkit-transform: scale(-1,1);top:0px;left:30px;-webkit-animation: chibang2 3.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/03.png"style="-webkit-transform-origin: 1% 57%;left:30px;top:0px;-webkit-animation: chibang1 3.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/04.png"style="left:19px;top:-6px;"></div><div id="pagetitle"style="position:absolute;width:329px;height:200px;top:350px;left:122px;font-size:40px;color:#4C4B4B;overflow:hidden;font-weight:bold;text-align:right;"><div id="line1"style="width:329px;"></div><div id="line2"style="width:329px;"></div><div id="line3"style="width:329px;"></div><div id="line4"style="width:329px;"></div></div><div id="linekuang"><img id="linekuang1"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/01.png"style="position:absolute;left:0px;"></div><img id="xin1"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 101px;top: 632px;-webkit-transform: scale(0)"><img id="xin2"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 151px;top: 636px;-webkit-transform: scale(-0,0);"><img id="xin3"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 198px;top: 652px;-webkit-transform: scale(0)"><img id="xin4"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 241px;top: 645px;-webkit-transform: scale(-0,0);"><img id="xin5"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 298px;top: 633px;-webkit-transform: scale(0)"><img id="xin6"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 356px;top: 629px;-webkit-transform: scale(-0,0);"><img id="xin7"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/02.png"style="left: 409px;top: 624px;-webkit-transform: scale(0)"><div id="div1h"style="display:none"><div class="boxh"><img id="img1h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(7px,-100px) rotate(80deg);width:418px;"></div><div id="div2h"style="display:none"><div class="boxh"><img id="img2h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(7px,-100px) rotate(80deg);width:418px;"></div><div id="div1v"style="display:none"><div class="boxv"><img id="img1v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(-53px,-51px) rotate(-10deg);"></div><div id="div2v"style="display:none"><div class="boxv"><img id="img2v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(-53px,-51px) rotate(-10deg);"></div><div id="div3v"style="display:none"><div class="boxv"><img id="img3v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(-53px,-51px) rotate(-10deg);"></div><div id="div3h"style="display:none"><div class="boxh"><img id="img3h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(7px,-100px) rotate(80deg);width:418px;"></div><div id="div4h"style="display:none"><div class="boxh"><img id="img4h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(7px,-100px) rotate(80deg);width:418px;"></div><div id="div4v"style="display:none"><div class="boxv"><img id="img4v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(-53px,-51px) rotate(-10deg);"></div><div id="div5v"style="display:none"><div class="boxv"><img id="img5v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(-53px,-51px) rotate(-10deg);"></div><div id="div5h"style="display:none"><div class="boxh"><img id="img5h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl10/kuang.png"style="position:absolute;-webkit-transform: translate(7px,-100px) rotate(80deg);width:418px;"></div><img id="zhiye"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/021.png"style="opacity:0;z-index:10;"><img id="hua"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/023.png"style="opacity:0;z-index:10;"><img id="zhen"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/zhen.png"style="opacity:0;left:20px;top:85px;z-index:10;"><img id="zhixin1"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/024.png"style="left: 427px;top: 636px;-webkit-transform: rotate(49deg);width: 50px;opacity:0;z-index:10;"><img id="zhixin2"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/024.png"style="left: 372px;top: 596px;-webkit-transform: rotate(0deg);width: 69px;opacity:0;z-index:10;"><img id="xin"src="http://referer-image.szwwy.com/coolphoto/img/tpl10/xin.png"style="left:487px;top:478px;-webkit-transform: translate(0px,0px) rotate(63deg);z-index:10;"></div>');
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

            var delaytime=5000;
            function id(name)
            {
                return document.getElementById(name);
            }
            function load_images()
            {

                div1h = id('div1h');
                div1v = id('div1v');
                div2h = id('div2h');
                div2v = id('div2v');
                div3h = id('div3h');
                div3v = id('div3v');
                div4h = id('div4h');
                div4v = id('div4v');
                div5h = id('div5h');
                div5v = id('div5v');
                linekuang = id('linekuang');
                linekuang1 = id('linekuang1');
                xin1 = id('xin1');
                xin2 = id('xin2');
                xin3 = id('xin3');
                xin4 = id('xin4');
                xin5 = id('xin5');
                xin6 = id('xin6');
                xin7 = id('xin7');


                reshow = false;
                image_size_width=[];
                image_size_height=[];
                Onload_imgs_url=[];
                image_url_index=0;
                have_num = 0;
                error_num = 0;
                begin_titletime = new Date();
                begin_titletime = begin_titletime.getTime();
                //showtitle();
                canshow = true;
                for(var i=0;i<images.length;i++)
                {
                    var img=new Image();
                    img.index=i;
                    img.src=images[i][1];
                    img.onload=image_onload;
                    img.onerror= image_onerror;
                    Onload_imgs_url[i] = 'loading';
                }       
            }

            function image_onerror(event)
            {
                var img = event.target;
                var index = img.index;
                if(index<10)
                    error_num ++;
                Onload_imgs_url[index] = 'not find';
                console.log(Onload_imgs_url[index]);
                console.log(have_num + '-' + error_num);
                if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
                {   
                    reshow = false;
                    canshow =false;
                    if(have_num == 0)
                        return;
                    timeout1 = setTimeout(show1,2000)
                }
            }

            function image_onload(event)
            {
                if(reshow == true)
                    return;

                var img = event.target;
                var index = img.index;

                if(index<10)
                {
                    have_num++;
                }
                Onload_imgs_url[index] = img.src;
                image_size_height[index] = img.height;
                image_size_width[index] = img.width;

                console.log(Onload_imgs_url[index]);
                console.log(have_num + '-' + error_num);

                if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
                {   
                    reshow = false;
                    canshow =false;
                    if(have_num == 0)
                        return;
                    timeout1 = setTimeout(show1,2000)

                }
            }
            function id(name)
            {
                return document.getElementById(name);
            }
            function showtitle()
            {
                id('shuzhi').style.webkitAnimation = 'shuzhi_in 1s ease-out both';
                id('hudie').style.webkitAnimation = 'hudie_in 2s ease-out both';
                var line1 = id('line1');
                var line2 = id('line2');
                var line3 = id('line3');
                var line4 = id('line4');

                if(e_desc.length<9)
                {
                    line1.innerHTML = e_desc;
                    line2.innerHTML = '';
                    line3.innerHTML = '';
                    line4.innerHTML = '';
                    line1.style.webkitAnimation = 'fadein 2s 1s linear both';

                }
                else if(e_desc.length<17)
                {
                    line1.innerHTML = e_desc.substring(0,8);
                    line2.innerHTML = e_desc.substring(8,16);
                    line3.innerHTML = '';
                    line4.innerHTML = '';
                    line1.style.webkitAnimation = 'fadein 2s 1s linear both';
                    line2.style.webkitAnimation = 'fadein 2s 1.5s linear both';
                }
                else if(e_desc.length<25)
                {
                    line1.innerHTML = e_desc.substring(0,8);
                    line2.innerHTML = e_desc.substring(8,16);
                    line3.innerHTML = e_desc.substring(16,24);
                    line4.innerHTML = '';
                    line1.style.webkitAnimation = 'fadein 2s 1s linear both';
                    line2.style.webkitAnimation = 'fadein 2s 1.5s linear both';
                    line3.style.webkitAnimation = 'fadein 2s 2s linear both';
                }
                else
                {
                    line1.innerHTML = e_desc.substring(0,8);
                    line2.innerHTML = e_desc.substring(8,16);
                    line3.innerHTML = e_desc.substring(16,24);
                    line4.innerHTML = e_desc.substring(24,32);
                    line1.style.webkitAnimation = 'fadein 2s 1s linear both';
                    line2.style.webkitAnimation = 'fadein 2s 1.5s linear both';
                    line3.style.webkitAnimation = 'fadein 2s 2s linear both';
                    line4.style.webkitAnimation = 'fadein 2s 2.5s linear both';
                }

                // timeout1 = setTimeout(distitle,5000)
            }

            function distitle()
            {
                id('line4').style.webkitAnimation = 'fadeout 2s linear both';
                id('line3').style.webkitAnimation = 'fadeout 2s 0.5s linear both';
                id('line2').style.webkitAnimation = 'fadeout 2s 1s linear both';
                id('line1').style.webkitAnimation = 'fadeout 2s 1.5s linear both';

                id('shuzhi').style.webkitAnimation = 'shuzhi_out 2s 1s linear both';
                id('hudie').style.webkitAnimation = 'hudie_out 2s 1s ease-out both';
                id('hudieying').style.webkitAnimation = 'hudieying 2s 1s linear both';

                timeout1 = setTimeout(show1,3000)
            }

            function show1()
            {
                setImage('1');
                linekuang.style.webkitAnimation = 'linekuang_in 2s linear both';
                linekuang1.style.webkitAnimation = 'linekuang1_in 2s linear both';

                xin1.style.webkitAnimation = 'xin_in 0.5s 0.2s linear both';
                xin2.style.webkitAnimation = 'xin1_in 0.5s 0.4s linear both';
                xin3.style.webkitAnimation = 'xin_in 0.5s 0.6s linear both';
                xin4.style.webkitAnimation = 'xin1_in 0.5s 0.8s linear both';
                xin5.style.webkitAnimation = 'xin_in 0.5s 1.4s linear both';
                xin6.style.webkitAnimation = 'xin1_in 0.5s 1.6s linear both';
                xin7.style.webkitAnimation = 'xin_in 0.5s 1.8s linear both';

                div2h.style.webkitAnimation = 'div2_out 1s 1s linear both';
                div2v.style.webkitAnimation = 'div2_out 1s 1s linear both';
                // div1h.style.display = 'block';
                div1h.style.webkitAnimation = 'div1_in 1s 1s cubic-bezier(.61,.74,.81,1) both';
                div1v.style.webkitAnimation = 'div1_in 1s 1s cubic-bezier(.61,.74,.81,1) both';
                div1h.style.zIndex = 5;
                div1v.style.zIndex = 5;
                div2h.style.zIndex = 1;
                div2v.style.zIndex = 1;
                div3v.style.zIndex = 2;
                div3h.style.zIndex = 2;
                div4h.style.zIndex = 3;
                div4v.style.zIndex = 3;
                div5v.style.zIndex = 4;
                div5h.style.zIndex = 4;

                timeout2 = setTimeout(show2,5000)

            }
            function show2()
            {
                setImage('2');
                id('hudie').style.webkitAnimation = 'hudie_out1 2s 1s cubic-bezier(.19,0,.81,1) both';
                id('hudieying').style.webkitAnimation = 'hudieying1 2s 1s linear both';

                div3v.style.webkitAnimation = 'div3v_out 1s linear both';
                div3h.style.webkitAnimation = 'div3h_out 1s linear both';
                // div2h.style.display = 'block';
                div2h.style.webkitAnimation = 'div2_in 1s cubic-bezier(.61,.74,.81,1) both';
                div2v.style.webkitAnimation = 'div2_in 1s cubic-bezier(.61,.74,.81,1) both';
                div1h.style.zIndex = 4;
                div1v.style.zIndex = 4;
                div2h.style.zIndex = 5;
                div2v.style.zIndex = 5;
                div3v.style.zIndex = 1;
                div3h.style.zIndex = 1;
                div4h.style.zIndex = 2;
                div4v.style.zIndex = 2;
                div5v.style.zIndex = 3;
                div5h.style.zIndex = 3;

                timeout3 = setTimeout(show3,3000)
            }
            function show3()
            {
                setImage('3');
                linekuang.style.webkitAnimation = 'linekuang_out 2s linear both';
                linekuang1.style.webkitAnimation = 'linekuang1_out 2s linear both';
                xin1.style.webkitAnimation = 'xin_out 0.5s linear both';
                xin2.style.webkitAnimation = 'xin1_out 0.5s 0.2s linear both';
                xin3.style.webkitAnimation = 'xin_out 0.5s 0.4s linear both';
                xin4.style.webkitAnimation = 'xin1_out 0.5s 0.6s linear both';
                xin5.style.webkitAnimation = 'xin_out 0.5s 1s linear both';
                xin6.style.webkitAnimation = 'xin1_out 0.5s 1.3s linear both';
                xin7.style.webkitAnimation = 'xin_out 0.5s 1.5s linear both';

                div4h.style.webkitAnimation = 'div1_out 2s 1.5s linear both'
                div4v.style.webkitAnimation = 'div1_out 2s 1.5s linear both'
                // div3v.style.display = 'block';
                div3v.style.webkitAnimation = 'div3v_in 2s 1.5s cubic-bezier(.61,.74,.81,1) both';
                div3h.style.webkitAnimation = 'div3h_in 2s 1.5s cubic-bezier(.61,.74,.81,1) both';
                div1h.style.zIndex = 3;
                div1v.style.zIndex = 3;
                div2h.style.zIndex = 4;
                div2v.style.zIndex = 4;
                div3v.style.zIndex = 5;
                div3h.style.zIndex = 5;
                div4h.style.zIndex = 1;
                div4v.style.zIndex = 1;
                div5v.style.zIndex = 2;
                div5h.style.zIndex = 2;

                id('zhiye').style.webkitAnimation = 'zhiye_in 1.5s 2s ease-out both';
                id('hua').style.webkitAnimation = 'hua_in 1.2s 2.5s ease-out both';

                id('zhixin1').style.webkitAnimation = 'zhixin1_in 1s 3.5s linear both';
                id('zhixin2').style.webkitAnimation = 'zhixin2_in 1s 3s linear both';

                timeout4 = setTimeout(show4,7000)
            }

            function show4()
            {
                setImage('4');
                // div4h.style.webkitAnimation = 'div1_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                div5v.style.webkitAnimation = 'div5v_out 1.5s linear both';
                div5h.style.webkitAnimation = 'div5h_out 1.5s linear both'
                // div4h.style.display = 'block';
                div4h.style.webkitAnimation = 'div1_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                div4v.style.webkitAnimation = 'div1_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                div1h.style.zIndex = 2;
                div1v.style.zIndex = 2;
                div2h.style.zIndex = 3;
                div2v.style.zIndex = 3;
                div3v.style.zIndex = 4;
                div3h.style.zIndex = 4;
                div4h.style.zIndex = 5;
                div4v.style.zIndex = 5;
                div5v.style.zIndex = 1;
                div5h.style.zIndex = 1;

                id('zhiye').style.webkitAnimation = 'zhiye_out 1s 2s ease-out both';
                id('hua').style.webkitAnimation = 'hua_out 1s 2s ease-out both';
                id('zhen').style.webkitAnimation = 'zhen_in 1s 2.7s linear forwards';
                id('xin').style.webkitAnimation = 'zhipian 5s 2.5s linear both';


                id('zhixin1').style.webkitAnimation = 'fadeout 1s 3s linear both';
                id('zhixin2').style.webkitAnimation = 'fadeout 1s 3s linear both';
                timeout5 = setTimeout(show5,5000);
            }
            function show5()
            {

                // div5v.style.webkitAnimation = 'div5v_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                setImage('5');
                div1h.style.webkitAnimation = 'div1_out 1.5s linear both'
                div1v.style.webkitAnimation = 'div1_out 1.5s linear both'
                // div5v.style.display = 'block';
                div5v.style.webkitAnimation = 'div5v_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                div5h.style.webkitAnimation = 'div5h_in 1.5s cubic-bezier(.61,.74,.81,1) both';
                div1h.style.zIndex = 1;
                div1v.style.zIndex = 1;
                div2h.style.zIndex = 2;
                div2v.style.zIndex = 2;
                div3v.style.zIndex = 3;
                div3h.style.zIndex = 3;
                div4h.style.zIndex = 4;
                div4v.style.zIndex = 4;
                div5v.style.zIndex = 5;
                div5h.style.zIndex = 5;


                id('zhen').style.webkitAnimation = 'zhen_out 1.5s 3s linear both';
                
                timeout6 = setTimeout(show6,5000);
            }
            function show6()
            {
                id('xin').style.webkitAnimation = 'zhipian_out 1.5s linear both';
                
                id('linekuang').style.webkitAnimation = 'linekuang_in 2s linear both';
                id('linekuang1').style.webkitAnimation = 'linekuang1_in 2s linear both';

                show1();
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
                var height;
                var width;

                if(img_bili > 1)
                {
                    divname = idname + 'h';
                    div = id('div'+idname+'h');
                    div1 = id('div'+idname+'v');
                    height = 279;
                    width = 419;
                }
                else
                {
                    divname = idname + 'v';
                    div = id('div'+idname+'v');
                    div1 = id('div'+idname+'h');
                    height = 438;
                    width = 292;

                }

                div.style.display = 'block';
                div1.style.display = 'none';

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
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                {
                    image_url_index = 0;
                }
                var src = img.src;
                div.onclick=function() {
                    
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
                div1h.style.display = 'none';
                div1h.style.webkitAnimation = '';
                div1v.style.display = 'none';
                div1v.style.webkitAnimation = '';
                div2h.style.display = 'none';
                div2h.style.webkitAnimation = '';
                div2v.style.display = 'none';
                div2v.style.webkitAnimation = '';
                div3h.style.display = 'none';
                div3h.style.webkitAnimation = '';
                div3v.style.display = 'none';
                div3v.style.webkitAnimation = '';
                div4h.style.display = 'none';
                div4h.style.webkitAnimation = '';
                div4v.style.display = 'none';
                div4v.style.webkitAnimation = '';
                div5h.style.display = 'none';
                div5h.style.webkitAnimation = '';
                div5v.style.display = 'none';
                div5v.style.webkitAnimation = '';
                linekuang.style.webkitAnimation = '';
                linekuang1.style.webkitAnimation = '';
                xin1.style.webkitAnimation = '';
                xin2.style.webkitAnimation = '';
                xin3.style.webkitAnimation = '';
                xin4.style.webkitAnimation = '';
                xin5.style.webkitAnimation = '';
                xin6.style.webkitAnimation = '';
                xin7.style.webkitAnimation = '';
                id('zhixin1').style.webkitAnimation = '';
                id('zhixin2').style.webkitAnimation = '';
                id('xin').style.webkitAnimation = '';
                id('hua').style.webkitAnimation = '';
                id('zhen').style.webkitAnimation = '';
                id('hudie').style.webkitAnimation = '';
                id('shuzhi').style.webkitAnimation = '';
                id('hudie').style.webkitAnimation = '';
                id('zhiye').style.webkitAnimation = '';

                clearTimeout(timeout0);
                clearTimeout(timeout1);
                clearTimeout(timeout2);
                clearTimeout(timeout3);
                clearTimeout(timeout4);
                clearTimeout(timeout5);
                clearTimeout(timeout6);

                id('pagetitle').style.webkitAnimation = '';
                id('line1').innerHTML = '';
                id('line2').innerHTML = '';
                id('line3').innerHTML = '';
                id('line4').innerHTML = '';
                id('line1').style.webkitAnimation = '';
                id('line2').style.webkitAnimation = '';
                id('line3').style.webkitAnimation = '';
                id('line4').style.webkitAnimation = '';

            }
    }
}
