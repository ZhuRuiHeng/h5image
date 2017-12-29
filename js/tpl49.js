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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/bg.jpg"> <img class="pot" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png"><div id="div1" class="div"><div id="word1" class="wordspan"></div></div><div id="div2" class="div"><div id="word2" class="wordspan"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/top.png"> <img class="dian1" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/dian1.png"> <img class="dian2" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/dian2.png"><div id="potdiv"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:0;top:18px;width:30px;opacity:0;animation:pot 2s linear .3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:50px;top:32px;width:30px;opacity:0;animation:pot 2s linear .4s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:100px;top:97px;width:30px;opacity:0;animation:pot 2s linear .4s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:150px;top:6px;width:30px;opacity:0;animation:pot 2s linear .2s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:200px;top:65px;width:30px;opacity:0;animation:pot 2s linear .25s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:250px;top:17px;width:30px;opacity:0;animation:pot 2s linear .95s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:300px;top:56px;width:30px;opacity:0;animation:pot 2s linear .65s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:350px;top:69px;width:30px;opacity:0;animation:pot 2s linear .7s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:400px;top:93px;width:30px;opacity:0;animation:pot 2s linear .8s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png" style="position:absolute;left:450px;top:23px;width:30px;opacity:0;animation:pot 2s linear .8s infinite"></div><img class="xin9" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin2.png"> <img class="xin10" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin2.png"> <img class="xin1" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin2" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin3" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin4" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin5" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin6" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin7" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin8" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin3.png"> <img class="xin11" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin.png"> <img class="xin12" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin.png"> <img class="xin13" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xin.png"><div class="meigui2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/meigui2.png"> <img class="yezi1" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/yezi.png"> <img class="yezi2" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/yezi.png"> <img class="guang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/guang.png"></div><div class="meigui1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/meigui1.png"> <img class="guang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/guang.png"> <img class="guang3" src="http://referer-image.szwwy.com/coolphoto/img/tpl49/guang.png"></div><div id="xindiv" style="animation:xinmove 4.2s linear both"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart0 1.5s linear 1.2s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart1 1.5s linear .45s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart2 1.5s linear 1.4s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart3 1.5s linear 1.3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart4 1.5s linear 1.2s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart5 1.5s linear .65s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart6 1.5s linear .8s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart7 1.5s linear .9s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart8 1.5s linear 1.25s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart9 1.5s linear .45s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart10 1.5s linear .65s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart11 1.5s linear 1.3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart12 1.5s linear 1.4s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart13 1.5s linear .9s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart14 1.5s linear .05s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart15 1.5s linear .5s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart16 1.5s linear .8s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart17 1.5s linear .65s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart18 1.5s linear .15s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png" style="position:absolute;left:200px;top:100px;animation:heart19 1.5s linear 1.45s infinite"></div><div id="pagetitle"></div></div>');
        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 6000;
        var timeout = [];

        function id(name) {
            return document.getElementById(name);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'myfadein 0.5s linear both';
            id('titlecontent').innerHTML = e_desc;
            id('titlediv').style.webkitAnimation = 'titlein 4s 0.1s linear both';
            id('xindiv').style.webkitAnimation = 'xinmove 4.2s linear both';

            // setTimeout(distitle,6000)
        }

        function zimeitixfb() {
            //id('pagetitle').style.webkitAnimation = 'titleout 1.5s linear both';

            timeout[3] = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            id('div1').style.webkitAnimation = 'div_in 8s linear both';
            id('div2').style.webkitAnimation = '';

            timeout[1] = setTimeout(show2, 8000)
        }

        function show2() {
            setImage('2');
            id('div2').style.webkitAnimation = 'div_in 8s linear both';
            id('div1').style.webkitAnimation = '';

            timeout[2] = setTimeout(show1, 8000)
        }

        function loading() {
            createpot();
            createxin();
            load_images();

        }

        function createxin() {

            var xindiv = id('xindiv');
            var radius = 80;

            for (var i = 0; i < 20; i++) {
                var img = new Image();
                img.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl49/xxin.png';
                img.style.position = 'absolute';
                img.style.left = '200px';
                img.style.top = '100px';

                var angle = rand(0, 360);
                var totop = Math.sin(angle * Math.PI / 180) * radius;
                var toleft = Math.cos(angle * Math.PI / 180) * radius;

                var csstext = '@-webkit-keyframes heart' + i + ' {from{-webkit-transform:translate(0px,0px);opacity:1;} to{-webkit-transform:translate(' + toleft + 'px,' + totop + 'px);opacity:0;}}';
                var style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                img.style.webkitAnimation = 'heart' + i + ' 1.5s ' + rand(0, 30) / 20 + 's linear infinite';

                xindiv.appendChild(img);
            }




        }

        function createpot() {
            var potdiv = id('potdiv');
            var potnum = 10;
            for (var i = 0; i < potnum; i++) {
                var img = new Image();
                img.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl49/pot.png';
                img.style.position = 'absolute';
                img.style.left = i * (500 / potnum) + 'px';
                img.style.top = rand(0, 100) + 'px';
                img.style.width = '30px';
                img.style.opacity = 0;
                img.style.webkitAnimation = 'pot 2s ' + rand(0, 20) / 20 + 's linear infinite';

                potdiv.appendChild(img);
            }
        }


        function setImage(idname) {

            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                if (image_url_index % step_loadnum == 0) {
                    step_load();
                }
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            var div = id('div' + idname);

            div.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word = id('word' + idname);
            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined) {
            //     word.innerHTML = str;
            // } else {
            //     word.innerHTML = '';
            // }
            //500 760
            if (img_bili < (380 / 600)) {
                var height = 600;
                var width = 600 * img_bili;
                var top = 80;
                var left = (500 - width) / 2;
            } else if (img_bili <= 1) {
                var width = 420;
                var height = 420 / img_bili;
                var left = 40;
                var top = (740 - height) / 2
            } else if (img_bili > 1) {
                var width = 480;
                var height = 480 / img_bili;
                var left = 10;
                var top = (760 - height) / 2;
            }

            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.left = left + 'px';
            div.style.top = top + 'px';
            div.style.backgroundSize = (width - 8) + 'px ' + (height - 8) + 'px';


            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
        }

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        //每次执行加载后5张图片
        var bl_keepload = 'first';
        var step_loadnum = 5;

        function step_load() {
            var load_num = 0
                //初步加载X张
            if (image_url_index == 0 && bl_keepload == 'first') {
                console.log('loading continue');
                if (images.length > step_loadnum) {
                    load_num = step_loadnum;
                    bl_keepload = 'next';
                } else {
                    load_num = images.length;
                    bl_keepload = 'end';
                }
                for (var i = 0; i < load_num; i++) {
                    var img = new Image();
                    img.index = i;
                    img.src = images[i][1];
                    img.onload = image_onload;
                    img.onerror = image_onerror;
                    Onload_imgs_url[i] = 'loading';
                }
            } else if (bl_keepload == 'end') {
                return;
            } else {
                console.log('loading continue');
                if (images.length - image_url_index > step_loadnum * 2) {
                    load_num = step_loadnum;
                } else {
                    load_num = images.length - image_url_index - step_loadnum;
                    bl_keepload = 'end';
                }
                for (var i = image_url_index + step_loadnum; i < image_url_index + step_loadnum + load_num; i++) {
                    var img = new Image();
                    img.index = i;
                    img.src = images[i][1];
                    img.onload = image_onload;
                    img.onerror = image_onerror;
                    Onload_imgs_url[i] = 'loading';
                }
            }

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
            canshow = true;
            //showtitle();
            bl_keepload = 'first';
            step_load();
        }

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum)
                error_num++;
            Onload_imgs_url[index] = 'not find';

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();
            }
        }

        function image_onload(event) {
            if (reshow == true)
                return;

            var img = event.target;
            var index = img.index;

            if (index < step_loadnum) {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();

            }
        }

        call_me(loading);
        load_init_modules();

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {

            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }

            var itemlist = ['pagetitle', 'titlediv', 'xindiv', 'div1', 'div2'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }
    }
}
