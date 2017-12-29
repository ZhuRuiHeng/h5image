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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/bg.jpg"><div id="div1"><div id="img1"class="box1"></div><img id="kuang1"src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying.png"><img id="ying1"src="http://referer-image.szwwy.com/coolphoto/img/tpl34/yuankuang.png"></div><div id="div2v"><div id="img2v"class="box2v"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying1.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/kuang01.png"></div><div id="div2h"><div id="img2h"class="box2h"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying1.png"style="-webkit-transform: rotate(-90deg);left:71px;top:-69px;width:335px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/kuang01.png"style="-webkit-transform: rotate(-90deg);left:71px;top:-69px;width:320px;"></div><div id="div3v"><div id="img3v"class="box2v"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying1.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/kuang01.png"></div><div id="div3h"><div id="img3h"class="box2h"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying1.png"style="-webkit-transform: rotate(-90deg);left:71px;top:-69px;width:335px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/kuang01.png"style="-webkit-transform: rotate(-90deg);left:71px;top:-69px;width:320px;"></div><div id="div4"><div id="img4"class="box1"></div><img id="kuang4"src="http://referer-image.szwwy.com/coolphoto/img/tpl34/ying.png"style="-webkit-animation: rotate_kuang 15s linear infinite"><img id="ying4"src="http://referer-image.szwwy.com/coolphoto/img/tpl34/yuankuang.png"style="-webkit-animation: rotate_kuang 15s linear infinite"></div><div id="flower1"style="width:131px;height:135px;left:21px;top:73px;-webkit-transform: scale(0.1)"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/003.png"style="left:-2px;-webkit-animation: rotate3 2s linear infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/002.png"style="left:5px;top:3px;-webkit-animation: rotateleft 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/001.png"style="left:10px;top:7px;-webkit-animation: rotateright 3s ease-in-out infinite alternate"></div><div id="flower2"style="width:113px;height:116px;left:376px;top:6px;-webkit-transform: scale(0.1)"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/006.png"style="left:0px;top:0px;-webkit-animation: rotate4 15s linear infinite;-webkit-transform-origin: 52% 46%"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/002.png"style="left:10px;top:3px;width:100px;-webkit-animation: rotate4 12s linear infinite;-webkit-transform-origin: 50% 52%"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/004.png"style="left:21px;top:12px;width:80px;-webkit-animation: rotate4 7s linear infinite;-webkit-transform-origin: 49% 54%"></div><div id="pagetitle"><img id="titledi"src="http://referer-image.szwwy.com/coolphoto/img/tpl34/biaotidi.png"><div id="wordbg"></div><div id="wordbg1"></div><div id="pagecontent"style="position:absolute;width:366px;height:163px;top:40px;left:40px;overflow:hidden;"><div style="position:absolute;width:366px;height:163px;display:table;overflow:hidden;"><div id="titlecontent"style="width:366px;height:163px;vertical-align:middle;display:table-cell;text-align:center;font-size:35px;line-height:50px;color:#ff9900;font-weight:blod;"></div></div></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/jiao.png"style="left:-116px;top:-192px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/jiao.png"style="left:332px;top:654px;"><div id="hudie"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/yingzi.png"style="-webkit-animation: chibang 2s linear infinite;left:25px;top:18px;opacity:0.7;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/chibang.png"style="-webkit-transform-origin: 50% 100%;-webkit-animation: chibang 2s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/shenzi.png"style="left:-9px;top:43px"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl34/chibang.png"style="-webkit-transform-origin: 50% 100%;-webkit-transform: scale(1,-1);-webkit-animation: chibang1 2s linear infinite"></div></div>');
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
            showtitle();
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
            if((have_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
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
        var linenum = 1;
        function id(name)
        {
            return document.getElementById(name);
        }
        function showtitle()
        {
            //id('titlecontent').innerHTML = e_desc;
            //id('pagetitle').style.webkitAnimation = 'fadein 0.5s linear both';
            //id('pagecontent').style.webkitAnimation = 'fadeinright 0.6s 0.5s ease-out both';
            id('flower1').style.webkitAnimation = 'in_scale 0.8s linear both';
            id('flower2').style.webkitAnimation = 'in_scale 1s linear both';
            id('hudie').style.webkitAnimation = 'hudie_fly 8s linear both';
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'out_title 1.7s 0.2s linear both';
            id('wordbg').style.webkitAnimation = 'in_worddi 1.7s 0.2s linear both';
            id('wordbg1').style.webkitAnimation = 'in_worddi 1.7s 0.2s linear both';
            id('titledi').style.webkitAnimation = 'fadeout 1.7s 0.2s linear both';
            id('titlecontent').style.webkitAnimation = 'change_title_color 1.7s 0.2s linear both';

            beginshow();
        }

        function show1()
        {
            id('div4').style.webkitAnimation = 'out_div4 1.8s linear both';
            id('flower2').style.webkitAnimation = 'flower2_to1 1.8s linear both';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('1');
            image_url_index++;

            id('div1').style.webkitAnimation = 'in_div1 1s 0.8s linear both';

            id('kuang1').style.webkitAnimation = 'rotate_kuang 15s 1.5s linear infinite';
            id('ying1').style.webkitAnimation = 'rotate_kuang 15s 1.5s linear infinite';
            timeout1 = setTimeout(show2,4000)
        }
        function beginshow()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('1');
            image_url_index++;

            id('div1').style.webkitAnimation = 'in_div1 1s 0.8s linear both';

            id('kuang1').style.webkitAnimation = 'rotate_kuang 15s 1.5s linear infinite';
            id('ying1').style.webkitAnimation = 'rotate_kuang 15s 1.5s linear infinite';
            timeout2 = setTimeout(show2,4000)
        }
        function show2()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('2');
            image_url_index++;

            id('div1').style.webkitAnimation = 'out_div1 1.8s linear both';
            id('div2h').style.webkitAnimation = 'in_div2v 1.8s linear both';
            id('div2v').style.webkitAnimation = 'in_div2v 1.8s linear both';

            id('flower1').style.webkitAnimation = 'flower1_to2 1.8s linear both';
            id('flower2').style.webkitAnimation = 'flower2_to2 1.8s linear both';

            timeout3 = setTimeout(show3,4000)
        }

        function show3()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('3');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>1)
            {
                type_before = 0;
                id('flower2').style.webkitAnimation = 'flower2_to3h 1.7s 0.1s linear both';
            }
            else
            {
                type_before = 1;
                id('flower2').style.webkitAnimation = 'flower2_to3 1.7s 0.1s linear both';
            }
            
            image_url_index++;

            id('div3h').style.webkitAnimation = 'in_div3h 1.8s linear both';
            id('div3v').style.webkitAnimation = 'in_div3v 1.8s linear both';

            id('flower1').style.webkitAnimation = 'flower1_to3 1.7s 0.1s linear both';

            id('div2h').style.webkitAnimation = 'out_div2v 1.8s linear both';
            id('div2v').style.webkitAnimation = 'out_div2v 1.8s linear both';
            id('hudie').style.webkitAnimation = '';

            timeout4 = setTimeout(show4,4000)
        }

        function show4()
        {
            if(type_before == 0)
            {
                id('flower2').style.webkitAnimation = 'flower2h_to4 2.2s linear both';
            }
            else
            {
                id('flower2').style.webkitAnimation = 'flower2_to4 2.2s linear both';
            }
            id('div3h').style.webkitAnimation = 'out_div3h 2.2s linear both';
            id('div3v').style.webkitAnimation = 'out_div3v 2.2s linear both';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('4');
            image_url_index++;

            id('div4').style.webkitAnimation = 'in_div4 2.2s linear both';
            id('flower1').style.webkitAnimation = 'flower1_to4 2.2s linear both';
            
            id('hudie').style.webkitAnimation = 'hudie_fly 8s linear both';

            timeout5 = setTimeout(show1,4000)
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
            var img;
            var height;
            var width;

            if(idname == '1' || idname == '4')
            {   
                div = id('div'+idname);
                div.style.display = 'block';
                img = id('img' + idname)
                img.style.backgroundImage =  "url(" +  Onload_imgs_url[image_url_index] + ")";
                if(img_bili>=1)
                {
                    img.style.backgroundSize = (378*img_bili) + "px " + 378 + "px";
                    img.style.backgroundPosition = '-'+((378*img_bili-378)/2) + "px " + 0 + "px";
                }
                else
                {
                    img.style.backgroundSize = 378 + "px " + (378/img_bili) + "px";
                    img.style.backgroundPosition = 0 + "px " + '-'+((378/img_bili-378)/2) + "px";
                }
            }
            else
            {
                if(img_bili > 1)
                {
                    div = id('div'+idname+'h');
                    div1 = id('div'+idname+'v');
                    width = 414;
                    height = 277;
                    img = id('img'+idname + 'h');
                }
                else
                {
                    div = id('div'+idname+'v');
                    div1 = id('div'+idname+'h');
                    width = 335;
                    height = 508;
                    img = id('img'+idname + 'v');
                }

                div.style.display = 'block';
                div1.style.display = 'none';
                img.style.backgroundImage =  "url(" +  Onload_imgs_url[image_url_index] + ")";

                if(img_bili > (width/height))
                {
                    img.style.backgroundSize = (height*img_bili) + "px " + height + "px";
                    img.style.backgroundPosition = '-'+((height*img_bili-width)/2) + "px " + 0 + "px";
                }
                else
                {
                    img.style.backgroundSize = width + "px " + (width/img_bili) + "px";
                    img.style.backgroundPosition = "0px -" + ((width/img_bili-height)/2) + "px";
                }   
            }
            var src = Onload_imgs_url[image_url_index];
            img.parentElement.onclick=function() {
                
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
            //log(img.style.backgroundImage);

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
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);

            id('div1').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div4').style.display = 'none';

            id('div1').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div4').style.webkitAnimation = '';

            id('flower1').style.webkitAnimation = '';
            id('flower2').style.webkitAnimation = '';

            id('pagetitle').style.webkitAnimation = '';
            id('wordbg').style.webkitAnimation = '';
            id('wordbg1').style.webkitAnimation = '';
            id('titledi').style.webkitAnimation = '';
            id('titlecontent').style.webkitAnimation = '';
            id('kuang1').style.webkitAnimation = '';
            id('ying1').style.webkitAnimation = '';
            id('hudie').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
        }    
    }
}
