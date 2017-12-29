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
        $("#div_player").append('<div id="container"><div id="pagetitle"></div><div id="div1"><div id="div1h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun2.png"><div class="divh"><img id="img1h" style="position:absolute"> <span id="word1h" class="showwords"></span></div></div><div id="div1v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun1.png"><div class="divv"><img id="img1v" style="position:absolute"> <span id="word1v" class="showwords"></span></div></div></div><div id="div2"><div id="div2h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun2.png"><div class="divh"><img id="img2h" style="position:absolute"> <span id="word2h" class="showwords"></span></div></div><div id="div2v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun1.png"><div class="divv"><img id="img2v" style="position:absolute"> <span id="word2v" class="showwords"></span></div></div></div><div id="div3"><div id="div3h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun2.png"><div class="divh"><img id="img3h" style="position:absolute"> <span id="word3h" class="showwords"></span></div></div><div id="div3v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun1.png"><div class="divv"><img id="img3v" style="position:absolute"> <span id="word3v" class="showwords"></span></div></div></div><div id="div4"><div id="div4h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun2.png"><div class="divh"><img id="img4h" style="position:absolute"> <span id="word4h" class="showwords"></span></div></div><div id="div4v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun1.png"><div class="divv"><img id="img4v" style="position:absolute"> <span id="word4v" class="showwords"></span></div></div></div><div id="pFQI2W33c-an-obj-1" style="pointer-events: none;"><div><img height="815" width="500" src="http://referer-image.szwwy.com/coolphoto/img/tpl53/bg.jpg" style="-webkit-mask-image:url(http://referer-image.szwwy.com/coolphoto/img/tpl53/bg2.png)"></div></div><div id="pFQI2W33c-an-obj-2"><div><img height="116" width="114" src="http://referer-image.szwwy.com/coolphoto/img/tpl53/fengche.png"></div></div><div id="pFQI2W33c-an-obj-3"><div><img height="85" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun.png"></div></div><div id="pFQI2W33c-an-obj-4"><div><img height="85" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl53/yun.png"></div></div></div>');

        function id(name) {
            return document.getElementById(name)
        }

        function showtitle() {
            id('bian0_bottom').style.webkitAnimation = 'bian0_0 2s linear both';
            id('bian0_top').style.webkitAnimation = 'bian0_1 2s linear both';
            id('bian0_left').style.webkitAnimation = 'bian0_2 3s 1s linear both';
            id('bian0_right').style.webkitAnimation = 'bian0_3 3s 1s linear both';
            id('bian0_up').style.webkitAnimation = 'bian0_1 2s 3s linear both';
            id('bian0_down').style.webkitAnimation = 'bian0_0 2s 3s linear both';

            id('pagetitle').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('titlecontent').innerHTML = e_desc;

            // timeout[1] = setTimeout(distitle,delaytime)
        }

        function distitle() {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';

            timeout[1] = setTimeout(zimeitixfb, 1500)
        }

        function zimeitixfb() {
            setImage('1');

            id('div1v').style.webkitAnimation = 'fadein 1s linear both';
            id('border1v').style.webkitAnimation = 'fadein 1s linear both';

            id('v_line1').style.webkitAnimation = 'v_left 3s linear both';
            id('v_line3').style.webkitAnimation = 'v_left 3s linear both';

            id('div1h').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('border1h').style.webkitAnimation = 'fadein 1s 0.5s linear both';

            id('h_line1').style.webkitAnimation = 'h_line1 2s linear forwards';
            id('h_line4').style.webkitAnimation = 'h_line4 2s linear forwards';
            id('h_line2').style.webkitAnimation = 'h_line2 2s 1.5s linear forwards';
            id('h_line5').style.webkitAnimation = 'h_line5 2s 1.5s linear forwards';
            id('h_line3').style.webkitAnimation = 'h_line3 2s 3s linear forwards';
            id('h_line6').style.webkitAnimation = 'h_line6 2s 3s linear forwards';

            timeout[2] = setTimeout(clear1, 3000)
        }

        function clear1() {
            setoff2();
            id('v_line2').style.webkitAnimation = 'v_left1 3s linear forwards';
            id('v_line4').style.webkitAnimation = 'v_left1 3s linear forwards';

            id('div1v').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('border1v').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('div1h').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('border1h').style.webkitAnimation = 'fadeout 1s 1s linear both';

            timeout[3] = setTimeout(show2, 1500)
        }

        function setoff1() {
            id('v_line1').style.webkitAnimation = '';
            id('v_line3').style.webkitAnimation = '';
            id('v_line2').style.webkitAnimation = '';
            id('v_line4').style.webkitAnimation = '';
            id('h_line1').style.webkitAnimation = '';
            id('h_line4').style.webkitAnimation = '';
            id('h_line2').style.webkitAnimation = '';
            id('h_line5').style.webkitAnimation = '';
            id('h_line3').style.webkitAnimation = '';
            id('h_line6').style.webkitAnimation = '';
        }

        function setoff2() {
            id('s_line1').style.webkitAnimation = '';
            id('s_line3').style.webkitAnimation = '';
            id('s_line2').style.webkitAnimation = '';
            id('s_line4').style.webkitAnimation = '';
            id('t_line1').style.webkitAnimation = '';
            id('t_line4').style.webkitAnimation = '';
            id('t_line2').style.webkitAnimation = '';
            id('t_line5').style.webkitAnimation = '';
            id('t_line3').style.webkitAnimation = '';
            id('t_line6').style.webkitAnimation = '';
        }

        function show2() {
            setImage('2');

            id('div2v').style.webkitAnimation = 'fadein 1s linear both';
            id('border2v').style.webkitAnimation = 'fadein 1s linear both';

            id('s_line1').style.webkitAnimation = 'v_left 3s linear both';
            id('s_line3').style.webkitAnimation = 'v_left 3s linear both';

            id('div2h').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('border2h').style.webkitAnimation = 'fadein 1s 0.5s linear both';

            id('t_line1').style.webkitAnimation = 'h_line1 2s linear forwards';
            id('t_line4').style.webkitAnimation = 'h_line4 2s linear forwards';
            id('t_line2').style.webkitAnimation = 'h_line2 2s 1.5s linear forwards';
            id('t_line5').style.webkitAnimation = 'h_line5 2s 1.5s linear forwards';
            id('t_line3').style.webkitAnimation = 'h_line3 2s 3s linear forwards';
            id('t_line6').style.webkitAnimation = 'h_line6 2s 3s linear forwards';

            timeout[4] = setTimeout(clear2, 3000)
        }


        function clear2() {
            setoff1();
            id('s_line2').style.webkitAnimation = 'v_left1 3s linear forwards';
            id('s_line4').style.webkitAnimation = 'v_left1 3s linear forwards';

            id('div2v').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('border2v').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('div2h').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('border2h').style.webkitAnimation = 'fadeout 1s 1s linear both';

            timeout[5] = setTimeout(zimeitixfb, 1500)
        }
        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 4000;
        var timeout = [];


        function id(name) {
            return document.getElementById(name);
        }

        //每次执行加载后10张图片
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
            bl_keepload = 'first';

            if (e_desc.length > 30)
                delaytime = 10000;
            else
                delaytime = 300 * e_desc.length;

            console.log(delaytime);


            //showtitle();
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
                distitle();
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
                distitle();
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

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];


            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            var div;
            var div1;
            var img;

            if (img_bili > 1) {
                div = id('box' + idname + 'h');
                div1 = id('box' + idname + 'v');
                width = 362;
                height = 267;
                img = id('img' + idname + 'h');
                var word = id('word' + idname + 'h');
            } else {
                div = id('box' + idname + 'v');
                div1 = id('box' + idname + 'h');
                width = 353;
                height = 477;
                img = id('img' + idname + 'v');
                var word = id('word' + idname + 'v');
            }

            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];

            if (word_string != undefined) {
                word_string = word_string.replace(/[\n]/ig, '');
                var word_length = word_string.length;
                word.style.top = "90%";
                if (word_length < 6)
                    word.style.fontSize = "29px";
                else {
                    word.style.fontSize = "26px";
                    if (word_length > 10) {
                        word.style.top = "85%";
                        word_string = insertEnter(word_string, 5);
                    }
                }
                word.innerText = word_string;
            } else {
                word.innerText = "";
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            img.src = Onload_imgs_url[image_url_index];
            console.log('setimg:' + img.src);

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

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('bian0_bottom').style.webkitAnimation = '';
            id('bian0_top').style.webkitAnimation = '';
            id('bian0_left').style.webkitAnimation = '';
            id('bian0_right').style.webkitAnimation = '';
            id('bian0_up').style.webkitAnimation = '';
            id('bian0_down').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div1h').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('border1v').style.webkitAnimation = '';
            id('border2v').style.webkitAnimation = '';
            id('border1h').style.webkitAnimation = '';
            id('border2h').style.webkitAnimation = '';

            setoff1();
            setoff2();
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }

        }
        call_me(load_images);
        load_init_modules();
    }
}
