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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl16/bg.jpg"><!--<img src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg">--><div id="page11h"style="display:none"><div style="position:absolute;width:368px;height:256px;top:7px;left:7px;overflow:hidden;"><img id="img11h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page11s"style="display:none"><div style="position:absolute;height:368px;width:256px;top:7px;left:7px;overflow:hidden;"><img id="img11s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page12h"style="display:none"><div style="position:absolute;height:262px;width:383px;top:7px;left:7px;overflow:hidden;"><img id="img12h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page12s"style="display:none"><div style="position:absolute;width:262px;height:383px;top:7px;left:7px;overflow:hidden;"><img id="img12s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="word1"><img style="position:absolute;-webkit-animation: word1 0.8s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/Aut.png"></div><div id="word2"><img style="position:absolute;-webkit-animation: word2 0.8s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/Aut2.png"></div><div id="yezi"style="display:none;"><div id="yezi1"><img id="yeying"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/hyy.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl16/hy.png"></div></div><div id="page32h"style="display:none"><div style="position:absolute;width:354px;height:249px;top:7px;left:7px;overflow:hidden;"><img id="img32h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page31h"style="display:none"><div style="position:absolute;width:354px;height:249px;top:7px;left:7px;overflow:hidden;"><img id="img31h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page32s"style="display:none"><div style="position:absolute;width:247px;height:333px;top:7px;left:7px;overflow:hidden;"><img id="img32s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page31s"style="display:none"><div style="position:absolute;height:354px;width:249px;top:7px;left:7px;overflow:hidden;"><img id="img31s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><img id="paper"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/zhip.png"><img id="pan"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/bi.png"><div id="page2s"style="display:none"><div style="position:absolute;width:397px;height:561px;top:7px;left:7px;overflow:hidden;"><img id="img2s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page2h"style="display:none;"><div style="position:absolute;width:446px;height:286px;top:7px;left:7px;overflow:hidden;"><img id="img2h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="hudie"><img id="chishangying"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/chiying01.png"style="left:-16px;top:14px;-webkit-transform-origin: 50% 100%;;opacity:0.6"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl16/shenying.png"style="left:6px;top:69px;opacity:0.6"><img id="chixiaying"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/chiying.png"style="left:-15px;top:90px;-webkit-transform-origin: 50% 0%;opacity:0.6"><img id="chishang"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/chi01.png"style="left:0px;top:0px;-webkit-transform-origin: 50% 100%;-webkit-animation:chibang 6s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl16/shenzi.png"style="left:22px;top:57px;"><img id="chixia"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/chi.png"style="left:0px;top:78px;-webkit-transform-origin: 50% 0%;-webkit-animation:chibang 6s linear infinite"></div><div id="page4h"style="display:none"><div style="position:absolute;width:446px;height:324px;top:7px;left:7px;overflow:hidden;"><img id="img4h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><div id="page4s"style="display:none"><div style="position:absolute;width:322px;height:495px;top:7px;left:7px;overflow:hidden;"><img id="img4s"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/1.jpg"></div></div><img id="cafe"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/coffee.png"><div id="dou1"style="display:none"><img id="dou11"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/dou.png"></div><div id="dou2"style="display:none"><img id="dou22"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/dou.png"></div><img id="qi"src="http://referer-image.szwwy.com/coolphoto/img/tpl16/qi.png"><div id="pagetitle"style="display:none;"><div id="title1"><div id="title11"><div id="pageword1"><div id="pagewordin1"><div id="pagewordin11"><div id="titleword1"style="display:table-cell;vertical-align: middle;padding:20px;"></div></div></div></div><div id="pageword2"><div id="pagewordin2"><div id="pagewordin22"><div id="titleword2"style="display:table-cell;vertical-align: middle;padding:20px;"></div></div></div></div></div></div><div id="titleline"style="background-color:#fff;position:absolute;height:3px;top:350px;width:500px;-webkit-transform-origin:0% 0%;-webkit-transform: scale(0,1)"></div></div></div>');

        function id(name) {
            return document.getElementById(name);
        }
        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
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

        var begin_titletime;

        function loadimages() {
            id('pagetitle').style.display = 'none';
            id('pageword1').style.display = 'none';
            id('pageword2').style.display = 'none';
            id('pagewordin1').style.display = 'none';
            id('pagewordin2').style.display = 'none';
            id('title1').style.display = 'none';
            id('title11').style.display = 'none';
            id('pagetitle').style.webkitAnimation = '';
            id('pageword1').style.webkitAnimation = '';
            id('pageword2').style.webkitAnimation = '';
            id('pagewordin1').style.webkitAnimation = '';
            id('pagewordin2').style.webkitAnimation = '';
            id('title1').style.webkitAnimation = '';
            id('title11').style.webkitAnimation = '';
            //showtitle();
            reshow = false;
            image_size_width = [];
            image_size_height = [];
            Onload_imgs_url = [];
            image_url_index = 0;
            have_num = 0;
            error_num = 0;

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            // clearTimeout(timeout8);

            id('page11h').style.display = 'none';
            id('page11s').style.display = 'none';
            id('page12h').style.display = 'none';
            id('page12s').style.display = 'none';
            id('page2h').style.display = 'none';
            id('page2s').style.display = 'none';
            id('page31h').style.display = 'none';
            id('page32h').style.display = 'none';
            id('page31s').style.display = 'none';
            id('page32s').style.display = 'none';
            id('page4h').style.display = 'none';
            id('page4s').style.display = 'none';
            id('page4s').style.display = 'none';
            id('cafe').style.display = 'none';
            id('dou1').style.display = 'none';
            id('dou2').style.display = 'none';
            id('pan').style.display = 'none';
            id('paper').style.display = 'none';
            id('hudie').style.display = 'none';
            id('yezi').style.display = 'none';
            id('word1').style.display = 'none';
            id('word2').style.display = 'none';
            canshow = true;

            for (var i = 0; i < images.length; i++) {
                var img = new Image();
                img.index = i;
                img.src = images[i][1];
                img.onload = image_onload;
                img.onerror = image_onerror;
                Onload_imgs_url[i] = 'loading';
            }
        }

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < 10)
                error_num++;
            Onload_imgs_url[index] = 'not find';
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                canshow = false;
                if (have_num == 0)
                    return;
                show1();

            }
        }

        function image_onload(event) {
            // //log(this.complete);
            if (reshow == true)
                return;
            var img = event.target;
            var index = img.index;
            if (index < 10)
                have_num++;
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                canshow = false;
                if (have_num == 0)
                    return;
                show1();

            }
        }

        function showtitle() {

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            setword();
            id('pagetitle').style.display = 'block';
            id('pageword1').style.display = 'block';
            id('pageword2').style.display = 'block';
            id('pagewordin1').style.display = 'block';
            id('pagewordin2').style.display = 'block';
            id('title1').style.display = 'block';
            id('title11').style.display = 'block';

        }

        function setword() {
            // if(reshow == true)
            //     return;
            var line = id('titleline');
            //id('titleword1').innerHTML = e_desc;
            //id('titleword2').innerHTML = e_desc;

            line.style.webkitAnimation = 'titleline1 1s linear both';

            timeout8 = setTimeout(time6, 1200);

        }

        function time6() {
            id('titleline').style.webkitAnimation = 'titleline2 5s linear both';
            id('pageword1').style.webkitAnimation = 'pageword1 1s linear 0s both';
            id('pagewordin1').style.webkitAnimation = 'pagewordin1 1s linear 0s both';
            id('pageword2').style.webkitAnimation = 'pagewordin1 1s linear 2s both';
            id('pagewordin2').style.webkitAnimation = 'pageword1 1s linear 2s both';
            timeout7 = setTimeout(time7, 4000)
        }

        function time7() {
            id('titleline').style.webkitAnimation = 'titleline3 1.2s linear both';
            id('title1').style.webkitAnimation = 'title1 1.2s linear both';
            id('title11').style.webkitAnimation = 'title11 1.2s linear both';
            id('pagetitle').style.webkitAnimation = 'titlefadeout 0.5s 1.5s linear both';
        }

        function show1() {
            if (reshow == true)
                return;
            id('page4s').style.webkitAnimation = 'page4hout 1s ease-in both';
            id('page4h').style.webkitAnimation = 'page4hout 1s ease-in both';
            id('cafe').style.webkitAnimation = 'cafeout 1s ease-in both';
            id('dou1').style.webkitAnimation = 'dou1out 1s ease-in both';
            id('dou2').style.webkitAnimation = 'dou2out 1s ease-in both';
            id('word2').style.webkitAnimation = 'word2move 1s linear both';

            id('yezi').style.display = 'block';
            id('word1').style.display = 'block';

            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('11');
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('12');
            image_url_index++;

            id('yezi').style.webkitAnimation = 'yeziin 1.5s ease-out both';
            id('word1').style.webkitAnimation = 'word1move 1.5s linear both';
            id('page11s').style.webkitTransformOrigin = '50% 50%';
            id('page12s').style.webkitTransformOrigin = '50% 50%';
            id('page11s').style.webkitAnimation = 'page11hin 1.5s ease-out both';
            id('page12s').style.webkitAnimation = 'page12hin 1.5s ease-out both';
            id('page11h').style.webkitTransformOrigin = '50% 50%';
            id('page12h').style.webkitTransformOrigin = '50% 50%';
            id('page11h').style.webkitAnimation = 'page11hin 1.5s ease-out both';
            id('page12h').style.webkitAnimation = 'page12hin 1.5s ease-out both';

            timeout1 = setTimeout(show2, 4000)
        }

        function show2() {
            if (reshow == true)
                return;
            id('yezi').style.webkitAnimation = 'yeziout 1s linear both';
            id('page11s').style.webkitAnimation = 'page11hout 1.2s ease-in both';
            id('page12s').style.webkitAnimation = 'page12hout 0.8s ease-in both';
            id('page11h').style.webkitAnimation = 'page11hout 1.2s ease-in both';
            id('page12h').style.webkitAnimation = 'page12hout 0.8s ease-in both';
            id('hudie').style.display = 'block';

            id('qi').style.webkitAnimation = '';

            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('2');
            image_url_index++;

            id('page2h').style.webkitAnimation = 'page2sin 1.5s ease-out both';
            id('page2s').style.webkitAnimation = 'page2sin 1.5s ease-out both';
            id('hudie').style.webkitAnimation = 'hudie 6s linear both';
            id('chishang').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chixia').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chishangying').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chixiaying').style.webkitAnimation = 'chibang 6s linear infinite';

            timeout2 = setTimeout(show3, 4000);
        }

        function show3() {
            if (reshow == true)
                return;
            id('page2h').style.webkitAnimation = 'page2sout 1.2s ease-in both';
            id('page2s').style.webkitAnimation = 'page2sout 1.2s ease-in both';
            id('word1').style.webkitAnimation = 'word2move 1s linear both';
            id('word2').style.webkitAnimation = 'word3move 1s 1s linear both';

            id('paper').style.display = 'block';
            id('pan').style.display = 'block';

            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('31');
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('32');
            image_url_index++;

            id('page31s').style.webkitAnimation = 'page31hin 1.5s 0.2s ease-out both';
            id('page32s').style.webkitAnimation = 'page32hin 1.5s 0.2s ease-out both';
            id('page31h').style.webkitAnimation = 'page31hin 1.5s 0.2s ease-out both';
            id('page32h').style.webkitAnimation = 'page32hin 1.5s 0.2s ease-out both';
            id('paper').style.webkitAnimation = 'paperin 1.5s 0.8s ease-out both';
            id('pan').style.webkitAnimation = 'panin 1.5s 1.2s ease-out both';

            timeout3 = setTimeout(show4, 4000);
        }

        function show4() {
            if (reshow == true)
                return;
            id('pan').style.webkitAnimation = 'panout 1.5s ease-in both';
            id('paper').style.webkitAnimation = 'paperout 1.5s ease-in both';
            id('page31s').style.webkitAnimation = 'page31hout 1.6s ease-in both';
            id('page32s').style.webkitAnimation = 'page32hout 2s ease-in both';
            id('page31h').style.webkitAnimation = 'page31hout 1.6s ease-in both';
            id('page32h').style.webkitAnimation = 'page32hout 2s ease-in both';

            // id('page4s').style.display = 'block';
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('4');
            image_url_index++;

            id('cafe').style.display = 'block';
            id('dou1').style.display = 'block';
            id('dou2').style.display = 'block';
            id('hudie').style.webkitAnimation = '';

            id('page4s').style.webkitAnimation = 'page4hin 1.9s 0.2s ease-out both';
            id('page4h').style.webkitAnimation = 'page4hin 1.9s 0.2s ease-out both';
            id('dou11').style.webkitAnimation = 'douzhuan 1.3s linear 1 0.5s both';
            id('dou22').style.webkitAnimation = 'douzhuan 1s linear 1 0.7s both';
            id('cafe').style.webkitAnimation = 'cafein 1.3s 0.5s ease-out both';
            id('dou1').style.webkitAnimation = 'dou1in 1s 0.7s ease-out both';
            id('dou2').style.webkitAnimation = 'dou2in 1.3s 0.5s ease-out both';
            id('qi').style.webkitAnimation = 'qi 2.5s 1s linear both';

            timeout4 = setTimeout(show1, 4000);

        }
        var divwidth = {
            '11h': 368,
            '11s': 256,
            '12h': 383,
            '12s': 262,
            '2h': 446,
            '2s': 397,
            '31h': 354,
            '31s': 249,
            '32h': 354,
            '32s': 247,
            '4h': 446,
            '4s': 322
        };
        var divheight = {
            '11h': 256,
            '11s': 368,
            '12h': 262,
            '12s': 383,
            '2h': 286,
            '2s': 561,
            '31h': 249,
            '31s': 354,
            '32h': 249,
            '32s': 333,
            '4h': 322,
            '4s': 495
        };

        function setImage(idname) {
            if (reshow == true)
                return;
            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('page' + idname + 'h');
                div1 = id('page' + idname + 's');
            } else {
                divname = idname + 's';
                div = id('page' + idname + 's');
                div1 = id('page' + idname + 'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var height = divheight[divname];
            var width = divwidth[divname];

            var img = id('img' + divname);


            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if (img_bili > (width / height)) {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height * img_bili + 'px';
                img.style.left = -((height * img_bili - width) / 2) + 'px';
            } else {
                img.style.left = '0px';
                img.style.width = width + 'px';
                img.style.height = width / img_bili + 'px';
                img.style.top = -((width / img_bili - height) / 2) + 'px';
            }

            img.onclick=function() {
                var src = this.src
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

        function reload_scene() {
            reshow = true;
            loadimages();
        }
    }
}