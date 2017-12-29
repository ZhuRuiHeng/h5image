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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl66/bg.jpg"><div id="page1" class="page"><div id="div1v"><div id="img1v"><span id="word1v" class="showwords"></span></div><img class="kuang1v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div1h"><div id="img1h"><span id="word1h" class="showwords"></span></div><img class="kuang1h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div></div><div id="page2" class="page" style="display:none"><div id="div21h" class="div"><div id="img21h"><span id="word21h" class="showwords"></span></div><img class="kuang21h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div21v" class="div"><div id="img21v"><span id="word21v" class="showwords"></span></div><img class="kuang21v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div22v" class="div"><div id="img22v"><span id="word22v" class="showwords"></span></div><img class="kuang22v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><div id="div22h" class="div"><div id="img22h"><span id="word22h" class="showwords"></span></div><img class="kuang22h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><img id="dai2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz5.png"></div><div id="page3" class="page" style="display:none"><div id="div3v" class="div"><div id="img3v"><span id="word3v" class="showwords"></span></div><img class="kuang3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><div id="div3h" class="div"><div id="img3h"><span id="word3h" class="showwords"></span></div><img class="kuang3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><img id="en3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz8.png"></div><div id="page4" class="page" style="display:none"><div id="div41h" class="div"><div id="img41h"><span id="word41h" class="showwords"></span></div><img class="kuang41h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div41v" class="div"><div id="img41v"><span id="word41v" class="showwords"></span></div><img class="kuang41v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42v" class="div"><div id="img42v"><span id="word42v" class="showwords"></span></div><img class="kuang42v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42h" class="div"><div id="img42h"><span id="word42h" class="showwords"></span></div><img class="kuang42h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><img id="dai4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz9.png"> <img id="en4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz2.png"></div><div id="page5" class="page" style="display:none"><div id="div5h"><div id="img5h"><span id="word5h" class="showwords"></span></div><img class="kuang5h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><div id="div5v"><div id="img5v"><span id="word5v" class="showwords"></span></div><img class="kuang5v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><img id="dai5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz4.png"> <img id="en5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz10.png"></div><div id="page6" class="page" style="display:none"><img id="en61" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz7.png"> <img id="en62" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz.png"><div id="div61h"><div id="img61h"><span id="word61h" class="showwords"></span></div><img class="kuang61h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div61v" class="div"><div id="img61v"><span id="word61v" class="showwords"></span></div><img class="kuang61v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div62v" class="div"><div id="img62v"><span id="word62v" class="showwords"></span></div><img class="kuang62v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div><div id="div62h"><div id="img62h"><span id="word62h" class="showwords"></span></div><img class="kuang62h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div></div><div id="pagetitle" style="position:absolute;width:340px;height:226px;top:250px;left:80px;font-size:30px;color:#FF437F;overflow:hidden;line-height:55px;text-shadow:#fff 2px 0 0,#fff 0 2px 0,#fff -2px 0 0,#fff 0 -2px 0;font-weight:700;opacity:0"></div><img id="love520" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/520.png"> <img id="dai1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz1.png"> <img id="heart1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x1.png"> <img id="heart2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x2.png"> <img id="heart4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x4.png"> <img id="heart3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x.png"> <img id="heart5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x3.png"></div>');


        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
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

        var delaytime = 5000;

        var leafNum = 8;
        var kindNum = 4;
        var kindurl = new Array("1", "2", "3", "4");


        function id(name) {
            return document.getElementById(name);
        }

        function Init() {
            load_images();
        }

        function load_images() {

            reshow = false;
            image_size_width = [];
            image_size_height = [];
            Onload_imgs_url = [];
            image_url_index = 0;
            have_num = 0;
            error_num = 0;
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //showtitle();
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
            //console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                distitle();
            }
        }

        function image_onload(event) {
            if (reshow == true)
                return;

            var img = event.target;
            var index = img.index;

            if (index < 10) {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            //console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                distitle();
            }
        }

        function showtitle() {
            id('laorendiv').style.webkitAnimation = 'fadein 1s linear both';
            id('laoren').style.webkitAnimation = 'showlaoren 6s linear both';
            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');

            if (e_desc.length > 20) //3��
            {

                line1.innerHTML = e_desc.substring(0, 10);
                line1.className = 'threeline';
                line1.style.top = '28px';
                line1.style.webkitAnimation = 'in_fadedown 1s linear both';
                line2.innerHTML = e_desc.substring(10, 20);
                line2.style.top = '78px';
                line2.className = 'threeline';
                line2.style.webkitAnimation = 'in_fadedown 1s linear 0.5s both';
                line3.innerHTML = e_desc.substring(20, e_desc.length);
                line3.style.top = '128px';
                line3.className = 'threeline';
                line3.style.webkitAnimation = 'in_fadedown 1s 1s linear both';
            } else if (e_desc.length < 11) //1��
            {
                line1.innerHTML = e_desc;
                line1.className = 'oneline';
                line1.style.top = '0px';
                line1.style.webkitAnimation = 'in_fadedown 1s linear both';

                line2.innerHTML = '';
                line3.innerHTML = '';

            } else //2��
            {
                line1.innerHTML = e_desc.substring(0, 10);
                line2.innerHTML = e_desc.substring(10, e_desc.length);
                line1.className = 'twoline';
                line2.className = 'twoline';
                line1.style.top = '8px';
                line2.style.top = '67px';
                line3.innerHTML = '';

                line1.style.webkitAnimation = 'in_fadedown 1s linear both';
                line2.style.webkitAnimation = 'in_fadedown 1s 0.5s linear both';
            }

            // setTimeout(distitle,5000);
        }

        function distitle() {

            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');

            id('laorendiv').style.webkitAnimation = 'fadeout 1s linear both';
            if (e_desc.length > 20) {
                line3.style.webkitAnimation = 'out_fadedown 0.8s 0.8s linear both';
                line2.style.webkitAnimation = 'out_fadedown 0.8s 0.4s linear both';
                line1.style.webkitAnimation = 'out_fadedown 0.8s linear both';
            } else if (e_desc.length < 11) {
                line1.style.webkitAnimation = 'out_fadedown 0.8s linear both';
            } else {
                line2.style.webkitAnimation = 'out_fadedown 0.8s 0.4s linear both';
                line1.style.webkitAnimation = 'out_fadedown 0.8s linear both';
            }

            timeout1 = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            id('shengzi1').style.webkitAnimation = 'showsheng1 7s linear both';

            timeout2 = setTimeout(function() {
                id('shengzi2').style.webkitAnimation = '';
            }, 3000)
            timeout3 = setTimeout(show2, 7000);
        }

        function show2() {
            id('shengzi2').style.webkitAnimation = 'showsheng2 14s linear both';
            setImage('2');
            setImage('3');
            setImage('4');
            timeout4 = setTimeout(function() {
                id('shengzi1').style.webkitAnimation = '';
            }, 3000)
            timeout5 = setTimeout(show1, 13000);
        }

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                // console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            var div = id('div' + idname)
            var img = id('img' + idname);
            img.src = Onload_imgs_url[image_url_index];
            // console.log(img.src);

            if (img_bili > 1) {
                img.style.top = '0px';
                img.style.height = 351 + 'px';
                img.style.width = 351 * img_bili + 'px';
                img.style.left = -((351 * img_bili - 351) / 2) + 'px';
            } else {
                img.style.left = '0px';
                img.style.width = 351 + 'px';
                img.style.height = 351 / img_bili + 'px';
                img.style.top = -((351 / img_bili - 351) / 2) + 'px';
            }
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation = '';
            id('line1').innerHTML = '';
            id('line2').innerHTML = '';
            id('line3').innerHTML = '';
            id('shengzi1').style.webkitAnimation = '';
            id('shengzi2').style.webkitAnimation = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
        }


        call_me(Init);
        load_init_modules();
    }
}
