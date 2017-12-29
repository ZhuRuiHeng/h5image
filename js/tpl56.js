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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl56/bg.jpg"> <img id="guang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/guang.png"> <img id="di" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/bg1.png"><div id="yundiv" class="yundiv"><img id="yun1" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"> <img id="yun2" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"> <img id="yun3" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"></div><div id="yundiv1" class="yundiv"><img id="yun4" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"> <img id="yun5" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"> <img id="yun6" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/yun.png"></div><img id="bird1" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/niao.gif"> <img id="bird1ying" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/niao1.gif"> <img id="bird2" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/niao.gif"> <img id="bird2ying" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/niao1.gif"><div id="pagetitle" style="position:absolute;width:398px;height:250px;top:192px;left:51px;font-size:40px;color:#013490;-webkit-transform-origin:100% 50%;-webkit-transform:translate(500px,0)"></div><div id="div1"><div id="div1h"><img class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/kuang1.png"><div class="divh"><img id="img1h" style="position:absolute"> <span id="word1h" class="showwords"></span></div></div><div id="div1v"><img class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/kuang.png"><div class="divv"><img id="img1v" style="position:absolute"> <span id="word1v" class="showwords"></span></div></div></div><div id="div2"><div id="div2h"><img class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/kuang1.png"><div class="divh"><img id="img2h" style="position:absolute"> <span id="word2h" class="showwords"></span></div></div><div id="div2v"><img class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl56/kuang.png"><div class="divv"><img id="img2v" style="position:absolute"> <span id="word2v" class="showwords"></span></div></div></div></div>');
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
        var timeout6;

        var delaytime = 5000;

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
            bl_keepload = 'first';
            step_load();

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

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum)
                error_num++;
            Onload_imgs_url[index] = 'not find';
            // console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
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

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'fadein_left 1.5s cubic-bezier(.27,.4,.83,1) both';
            id('titlecontent').innerHTML = e_desc;

        }

        function zimeitixfb() {
            id('pagetitle').style.webkitAnimation = 'fadeout_left 2s ease-in both';
            show1();
        }

        function show1() {
            setImage('1');
            id('div1').style.webkitAnimation = 'fadein_left 2s ease-out both';

            timeout1 = setTimeout(show2, 5000)
        }

        function show2() {
            setImage('2');
            id('div1').style.webkitAnimation = 'fadeout_left 1.5s ease-in both';
            id('div2').style.webkitAnimation = 'fadein_left 2s ease-out both';

            timeout2 = setTimeout(show3, 5000)
        }

        function show3() {
            setImage('1');
            id('div2').style.webkitAnimation = 'fadeout_left 1.5s ease-in both';
            id('div1').style.webkitAnimation = 'fadein_left 2s ease-out both';

            timeout3 = setTimeout(show4, 5000)
        }

        function show4() {
            setImage('2');
            id('div1').style.webkitAnimation = 'fadeout_down 1.5s ease-in both';
            id('div2').style.webkitAnimation = 'fadein_down 2s ease-out both';

            timeout4 = setTimeout(show5, 5000)
        }

        function show5() {
            setImage('1');
            id('div2').style.webkitAnimation = 'fadeout_up 1.5s ease-in both';
            id('div1').style.webkitAnimation = 'fadein_up 2s ease-out both';

            timeout5 = setTimeout(show6, 5000)
        }

        function show6() {
            setImage('2');
            id('div1').style.webkitAnimation = 'fadeout_center 1.5s ease-in both';
            id('div2').style.webkitAnimation = 'fadein_left 2s ease-out both';

            timeout6 = setTimeout(show3, 5000);
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

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                if (image_url_index % step_loadnum == 0) {
                    step_load();
                }
                console.log(Onload_imgs_url[image_url_index]);
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
            var divname;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                width = 467;
                height = 300;
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                width = 375;
                height = 520;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            // var word = id('word' + divname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word_string != undefined) {
            //     word_string = word_string.replace(/[\n]/ig, '');

            //     word.style.width = "100%";
            //     var word_length = word_string.length;
            //     word.style.height = "35px";
            //     word.style.lineHeight = "35px";
            //     word.style.top = "98%";
            //     if (word_length <= 5) {
            //         word.style.fontSize = "28px";
            //     } else {
            //         word.style.fontSize = "25px";
            //         if (word_length > 10) {
            //             word_string = insertEnter(word_string, 5);
            //             word.style.height = "70px";
            //             word.style.top = "90%";
            //         }
            //     }
            //     word.innerText = word_string;
            // } else {
            //     word.innerText = "";
            //     word.style.width = "0%";
            //}

            var img = id('img' + divname);
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
            var tsrc = img.src;
            div.onclick = function() {
                var src = tsrc;
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
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
        }
        call_me(load_images);
        load_init_modules();
    }
}
