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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl65/bg.jpg">  <img class="foryou" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/wz.png"> <img class="forguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/wz1.png"><div class="hua61"><img class="hua6" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb5.png"></div><img class="hua7" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb4.png"> <img class="hua8" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb5.png"> <img class="hua9" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb1.png"><div class="hua101"><img class="hua10" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb1.png"></div><div id="kuang" style="opacity:0"><div id="img1h" style="display:none"><span id="word1h" class="showwords"></span></div><div id="img2h" style="display:none"><span id="word2h" class="showwords"></span></div><div id="img1v" style="display:none"><span id="word1v" class="showwords"></span></div><div id="img2v" style="display:none"><span id="word2v" class="showwords"></span></div></div><img class="hua5n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb2.png"> <img class="hua5" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb9.png"> <img class="hua1n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb2.png"> <img class="hua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb9.png"> <img class="hua2n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb2.png"> <img class="hua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb9.png"> <img class="hua3n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb.png"> <img class="hua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb3.png"> <img class="hua11n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb.png"> <img class="hua11" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb3.png"> <img class="hua4n" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb6.png"> <img class="hua4" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb8.png"> <img class="guang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang3" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang4" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang5" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang6" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang7" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang8" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang9" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="guang10" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img class="ban1" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb7.png"> <img class="ban2" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb7.png"> <img class="ban3" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/hb7.png"><div id="pagetitle" style="position:absolute;width:360px;height:220px;top:250px;left:70px;opacity:0"></div><div id="guangdiv" style="display:none"><img id="xin1" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin2" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin3" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin4" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin5" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin6" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin7" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin8" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin9" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin10" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin11" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"> <img id="xin12" src="http://referer-image.szwwy.com/coolphoto/img/tpl65/xx.png"></div></div>');
        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function id(name) {
            return document.getElementById(name);
        }

        function showtitle() {
            var con = id('guangdiv');
            con.style.display = 'block';

            for (var i = 1; i < 13; i++) {
                id('xin' + i).style.webkitAnimation = 'fadein 0.5s ' + i * 0.15 + 's linear both';
            }

            con.style.webkitAnimation = 'guangdivout 1.5s 2.5s ease both';
            id('pagetitle').style.webkitAnimation = 'fadein 1s 2.5s linear both';
            id('titlecontent').innerHTML = e_desc;
        }

        function zimeitixfb() {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            id('kuang').style.webkitAnimation = 'fadein 1s 1s linear both'

            timeout[1] = setTimeout(show1, 1500)
        }

        function show1() {
            setImage('1')

            id('img1h').style.webkitAnimation = 'toleft 6s linear both';
            id('img1v').style.webkitAnimation = 'toup 6s linear both';

            id('img2h').style.webkitAnimation = '';
            id('img2v').style.webkitAnimation = '';
            id('img2h').style.display = 'none';
            id('img2v').style.display = 'none';

            timeout[2] = setTimeout(show2, 6000)
        }

        function show2() {
            setImage('2')

            id('img2v').style.webkitAnimation = 'toup 6s linear both';
            id('img2h').style.webkitAnimation = 'toright 6s linear both';

            id('img1h').style.webkitAnimation = '';
            id('img1v').style.webkitAnimation = '';
            id('img1h').style.display = 'none';
            id('img1v').style.display = 'none';

            timeout[3] = setTimeout(show1, 6000)

        }

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 6000;
        var timeout = [];
        var showfont = false;

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
            // loading_first(); 
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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();

            }
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

            var div;
            var div1;
            var img;

            if (img_bili > 1) {
                div = id('img' + idname + 'h');
                div1 = id('img' + idname + 'v');
                idname = idname + 'h';
                width = 750;
                height = 500;
            } else {
                div = id('img' + idname + 'v');
                div1 = id('img' + idname + 'h');
                idname = idname + 'v';
                width = 450;
                height = 650;
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            // var img = id('img'+idname);
            div.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            console.log('setimg:' + div.style.backgroundImage);

            // var word = id('word' + idname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word_string != undefined) {
            //     word_string = word_string.replace(/[\n]/ig, '');

            //     var word_length = word_string.length;
            //     if (word_length < 6)
            //         word.style.fontSize = "31px";
            //     else {
            //         if (word_length > 10)
            //             word_string = insertEnter(word_string, 5);
            //         word.style.fontSize = "28px";
            //     }
            //     word.innerText = word_string;
            // } else {
            //     word.innerText = "";
            // }

            if (img_bili > (width / height)) {
                div.style.backgroundSize = height * img_bili + 'px ' + height + 'px';
                div.style.backgroundPosition = -((height * img_bili - width) / 2) + 'px 0px';

            } else {
                div.style.backgroundSize = width + 'px ' + width / img_bili + 'px';
                div.style.backgroundPosition = '0px ' + (-((width / img_bili - height) / 2)) + 'px';

            }
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
        }

        function insertEnter(str, n) {
            var len = str.length;
            var strTemp = '';
            if (len > n) {
                strTemp = str.substring(0, n);
                str = str.substring(n, len);
                return strTemp + '\n' + str;
            } else {
                return str;
            }
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {

            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i])
            }

            for (var i = 1; i < 13; i++) {
                id('xin' + i).style.webkitAnimation = '';
            }

            id('img1h').style.display = 'none';
            id('img1v').style.display = 'none';
            id('img2h').style.display = 'none';
            id('img2v').style.display = 'none';

            id('img1h').style.webkitAnimation = '';
            id('img1v').style.webkitAnimation = '';
            id('img2h').style.webkitAnimation = '';
            id('img2v').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('kuang').style.webkitAnimation = '';
            id('guangdiv').style.webkitAnimation = '';

        }
        $("#sec_content,#biyeji_container").css("marginTop", -$(window).height());
        call_me(load_images);
        load_init_modules();
    }
}
