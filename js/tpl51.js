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
        $("#div_player").append('<div id="container"><img src="./img/tpl51/bg.jpg"><div id="divf1" class="divframe"><div id="div1" class="div"></div><div id="word1" class="wordspan"></div></div><div id="divf2" class="divframe"><div id="div2" class="div"></div><div id="word2" class="wordspan"></div></div><img class="xuedi" src="./img/tpl51/xuedi.png"> <img class="xueding" src="./img/tpl51/xueding.png"> <img id="dian1" class="dian1" src="./img/tpl51/dian.png"> <img id="dian2" class="dian2" src="./img/tpl51/dian.png"> <img id="dian3" class="dian3" src="./img/tpl51/dian.png"> <img id="dian4" class="dian4" src="./img/tpl51/dian.png"> <img id="dian5" class="dian5" src="./img/tpl51/dian.png"> <img id="baidian1" class="baidian1" src="./img/tpl51/baidian.png"> <img id="baidian2" class="baidian2" src="./img/tpl51/baidian.png"> <img id="ling1" class="ling1" src="./img/tpl51/ling.png"> <img id="ling2" class="ling2" src="./img/tpl51/ling.png"> <img id="shan1" class="shan1" src="./img/tpl51/shan.png"> <img id="shan2" class="shan2" src="./img/tpl51/shan.png"> <img id="shan3" class="shan3" src="./img/tpl51/shan.png"> <img id="shan4" class="shan4" src="./img/tpl51/shan.png"> <img id="shan5" class="shan5" src="./img/tpl51/shan.png"> <img id="shan6" class="shan6" src="./img/tpl51/shan.png"> <img id="shan7" class="shan7" src="./img/tpl51/shan.png"> <img id="shan8" class="shan8" src="./img/tpl51/shan.png"> <img id="shan9" class="shan9" src="./img/tpl51/shan.png"> <img id="shan10" class="shan10" src="./img/tpl51/shan.png"> <img id="shan11" class="shan11" src="./img/tpl51/shan.png"> <img id="shan12" class="shan12" src="./img/tpl51/shan.png"> <img id="shan13" class="shan13" src="./img/tpl51/shan.png"> <img id="shan14" class="shan14" src="./img/tpl51/shan.png"> <img id="xuehua1" class="xuehua1" src="./img/tpl51/xuehua.png"> <img id="xuehua2" class="xuehua2" src="./img/tpl51/xuehua.png"> <img id="xuehua3" class="xuehua3" src="./img/tpl51/xuehua.png"> <img id="xuehua4" class="xuehua4" src="./img/tpl51/xuehua.png"> <img id="xuehua5" class="xuehua5" src="./img/tpl51/xuehua.png"> <img id="xuehua6" class="xuehua6" src="./img/tpl51/xuehua.png"> <img id="xuehua7" class="xuehua7" src="./img/tpl51/xuehua.png"> <img id="xuehua8" class="xuehua8" src="./img/tpl51/xuehua.png"> <img id="xuehua9" class="xuehua9" src="./img/tpl51/xuehua.png"> <img id="xuehua10" class="xuehua10" src="./img/tpl51/xuehua.png"> <img id="xuehua11" class="xuehua11" src="./img/tpl51/xuehua.png"> <img id="xuehua12" class="xuehua12" src="./img/tpl51/xuehua.png"></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'myfadein 7s linear both';
            id('titlecontent').innerHTML = e_desc;
            id('titlediv').style.webkitAnimation = 'titlein 4s 0.1s linear both';

            // setTimeout(distitle,6000)
        }

        function zimeitixifenbao() {
            //id('pagetitle').style.webkitAnimation = 'titleout 1.5s linear both';

            timeout[3] = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            id('divf1').style.webkitAnimation = 'div_in 8s linear both';
            id('divf2').style.webkitAnimation = '';
            //id('div1').style.webkitAnimation = 'div_in 8s linear both';
            //id('div2').style.webkitAnimation = '';

            timeout[1] = setTimeout(show2, 8000)
        }

        function show2() {
            setImage('2');
            id('divf2').style.webkitAnimation = 'div_in1 8s linear both';
            id('divf1').style.webkitAnimation = '';
            //id('div2').style.webkitAnimation = 'div_in1 8s linear both';
            //id('div1').style.webkitAnimation = '';

            timeout[2] = setTimeout(show3, 8000)
        }

        function show3() {
            setImage('1');
            id('divf1').style.webkitAnimation = 'div_in2 8s linear both';
            id('divf2').style.webkitAnimation = '';
            //id('div1').style.webkitAnimation = 'div_in2 8s linear both';
            //id('div2').style.webkitAnimation = '';

            timeout[4] = setTimeout(show4, 8000)
        }

        function show4() {
            setImage('2');
            id('divf2').style.webkitAnimation = 'div_in3 8s linear both';
            id('divf1').style.webkitAnimation = '';

            //id('div2').style.webkitAnimation = 'div_in3 8s linear both';
            //id('div1').style.webkitAnimation = '';

            timeout[5] = setTimeout(show1, 8000)
        }


        function loading() {
            load_images();

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
            //div.style.borderImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div.style.backgroundRepeat = "no-repeat";
            var divf = id('divf' + idname);

            //divf.style.backgroundImage = 'url('+'https://img.alicdn.com/imgextra/i4/1016194477/kongbai.png'+')';
            divf.style.backgroundRepeat = "no-repeat";


            // var word = id('word' + idname);
            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined) {
            //     word.innerHTML = str;
            // } else {
            //     word.innerHTML = '';
            // }
            //
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

            divf.style.width = width + 'px';
            divf.style.height = height + 'px';
            divf.style.left = left + 'px';
            divf.style.top = top + 'px';
            divf.style.backgroundSize = (width - 60) + 'px ' + (height - 60) + 'px';
            div.style.width = (width - 60) + 'px';
            div.style.height = (height - 60) + 'px';
            div.style.left = '0px';
            div.style.top = '0px';
            div.style.position = 'absolute';
            div.style.backgroundSize = (width - 60) + 'px ' + (height - 60) + 'px';


            var temp_src = Onload_imgs_url[image_url_index];
            div.onclick = function() {
                var src = temp_src;
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

            if ((have_num + error_num == step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixifenbao();
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

            if ((have_num + error_num == step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixifenbao();

            }
        }
        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 5000;
        var timeout = [];

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {

            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }

            var itemlist = ['pagetitle', 'titlediv', 'divf1', 'divf2'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }

        call_me(loading);
        load_init_modules();
    }
}
