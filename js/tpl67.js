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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl67/bg.jpg"><div class="box1" id="box1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qitiao.png" class="img1" id="img1"><div class="box1_2" id="box1_2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl67/guoqing.png" id="box1_2img"></div></div><img class="lantern_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/deng.png"> <img class="long" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/long.png"> <img class="lantern_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/deng1.png"> <img class="lantern_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/deng2.png"><div id="div1"><div id="page1"><img id="kuang1h" class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/kuang2.png"><div id="div1h" class="divh"><img id="img1h"></div><img id="kuang1v" class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/kuang.png"><div id="div1v" class="divv"><img id="img1v"></div><img id="modian1" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/yanhuo.png"> <img id="modian2" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/yanhuo.png"></div></div><div id="div2"><div id="page2"><img id="kuang2h" class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/kuang2.png"><div id="div2h" class="divh"><img id="img2h"></div><img id="kuang2v" class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/kuang.png"><div id="div2v" class="divv"><img id="img2v"></div><img id="modian3" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/yanhuo.png"> <img id="modian4" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/yanhuo.png"></div></div><div id="pagetitle" style="position:absolute;width:426px;height:377px;bottom:100px;left:37px;opacity:0"></div><div class="flag_all_2"><img class="flag_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi4.png"> <img class="flag_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi3.png"> <img class="flag_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi1.png"> <img class="flag_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi2.png"> <img class="flag_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi5.png"> <img class="flag_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi6.png"> <img class="flag_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi.png"> <img class="flag_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi7.png"></div><div class="flag_all_3"><img class="flag_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi4.png"> <img class="flag_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi3.png"> <img class="flag_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi1.png"> <img class="flag_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi2.png"> <img class="flag_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi5.png"> <img class="flag_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi6.png"> <img class="flag_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi.png"> <img class="flag_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi7.png"></div><div class="flag_all_1"><img class="flag_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi4.png"> <img class="flag_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi3.png"> <img class="flag_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi1.png"> <img class="flag_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi2.png"> <img class="flag_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi5.png"> <img class="flag_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi6.png"> <img class="flag_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi.png"> <img class="flag_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/qi7.png"></div><img class="bottom_img" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/tiananmen.png"> <img class="jinxing" src="http://referer-image.szwwy.com/coolphoto/img/tpl67/guang.png"></div>');

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
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var delaytime = 4000;

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
            step_load()
        }
        var bl_keepload = 'first';
        var step_loadnum = 5;

        function step_load() {
            var load_num = 0;
            if (image_url_index == 0 && bl_keepload == 'first') {
                if (images.length > step_loadnum) {
                    load_num = step_loadnum;
                    bl_keepload = 'next'
                } else {
                    load_num = images.length;
                    bl_keepload = 'end'
                }
                for (var i = 0; i < load_num; i++) {
                    var img = new Image();
                    img.index = i;
                    img.src = images[i][1];
                    img.onload = image_onload;
                    img.onerror = image_onerror;
                    Onload_imgs_url[i] = 'loading'
                }
            } else if (bl_keepload == 'end') {
                return
            } else {
                if (images.length - image_url_index > step_loadnum * 2) {
                    load_num = step_loadnum
                } else {
                    load_num = images.length - image_url_index - step_loadnum;
                    bl_keepload = 'end'
                }
                for (var i = image_url_index + step_loadnum; i < image_url_index + step_loadnum + load_num; i++) {
                    var img = new Image();
                    img.index = i;
                    img.src = images[i][1];
                    img.onload = image_onload;
                    img.onerror = image_onerror;
                    Onload_imgs_url[i] = 'loading'
                }
            }
        }

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum) error_num++;
            Onload_imgs_url[index] = 'not find';
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0) return;
                distitle()
            }
        }

        function image_onload(event) {
            if (reshow == true) return;
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum) {
                have_num++
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0) return;
                distitle()
            }
        }

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 2.5s ease-out both';
            id('titlecontent').innerHTML = e_desc
        }

        function distitle() {
            nowReShow1()
        }

        beijingMove(1);

        function showmoshui() {
            id('modian1').style.webkitAnimation = 'modian1 2s linear forwards';
            id('modian2').style.webkitAnimation = 'modian2 2.5s 0.6s linear forwards';
            id('modian3').style.webkitAnimation = 'modian1 2s  linear forwards';
            id('modian4').style.webkitAnimation = 'modian2 2s 0.8s linear forwards'
        }

        function cleanmoshui() {
            id('modian1').style.webkitAnimation = '';
            id('modian2').style.webkitAnimation = '';
            id('modian3').style.webkitAnimation = '';
            id('modian4').style.webkitAnimation = ''
        }

        function show1() {
            setImage('1');
            id('page1').style.webkitAnimation = 'in_up 2s linear both';
            id('div1').style.webkitAnimation = 'movingup 5s linear both';
            cleanmoshui();
            setTimeout(showmoshui, 2000);
            timeout1 = setTimeout(show2, 5000)
        }

        function show2() {
            setImage('2');
            id('page1').style.webkitAnimation = 'out_up 1.2s linear both';
            id('page2').style.webkitAnimation = 'in_down 2s 1s linear both';
            id('div2').style.webkitAnimation = 'movingdown 5s linear both';
            cleanmoshui();
            setTimeout(showmoshui, 2000);
            timeout2 = setTimeout(show3, 5000)
        }

        function show3() {
            setImage('1');
            id('page2').style.webkitAnimation = 'out_down 1.2s linear both';
            id('page1').style.webkitAnimation = 'in_right 2s 1s linear both';
            id('div1').style.webkitAnimation = 'movingright 5s linear both';
            cleanmoshui();
            setTimeout(showmoshui, 2000);
            timeout3 = setTimeout(show4, 5000)
        }

        function show4() {
            setImage('2');
            id('page1').style.webkitAnimation = 'out_right 1.2s linear both';
            id('page2').style.webkitAnimation = 'in_left 2s 1s linear both';
            id('div2').style.webkitAnimation = 'movingleft 5s linear both';
            cleanmoshui();
            setTimeout(showmoshui, 2000);
            timeout4 = setTimeout(show5, 5000)
        }

        function show5() {
            setImage('1');
            id('page2').style.webkitAnimation = 'out_left 1.2s linear both';
            id('page1').style.webkitAnimation = 'in_up 2s 1s linear both';
            id('div1').style.webkitAnimation = 'movingup 5s linear both';
            cleanmoshui();
            setTimeout(showmoshui, 2000);
            timeout5 = setTimeout(show2, 5000)
        }

        function setImage(idname) {
            if (reshow == true) return;
            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length) image_url_index = 0
            }
            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            if (image_url_index % step_loadnum == 0) {
                step_load()
            }
            var div;
            var div1;
            var divname;
            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                id('kuang' + idname + 'v').style.display = 'none';
                id('kuang' + idname + 'h').style.display = 'block'
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                id('kuang' + idname + 'h').style.display = 'none';
                id('kuang' + idname + 'v').style.display = 'block'
            }
            div.style.display = 'block';
            div1.style.display = 'none';
            $(div).find(".divText").remove();
            $(div).append("<span class='divText imgTxt" + idname + "'></span>");

            $(div).css("background-image", "url(" + Onload_imgs_url[image_url_index] + ")");
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length) image_url_index = 0
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100)
        }

        function LocTo(a1) {
            top.location.href = a1
        }

        function GetLocTo() {
            return (location.host)
        }
        var domNow = "weixin";

        function nowReTo(a1) {
            LocTo(a1)
        }

        function nowGetReTo() {
            domNow = GetLocTo()
        }

        function nowReShow1() {

            id('pagetitle').style.webkitAnimation = 'title_out 1.5s ease-out both';
            $("#img1").addClass("headboximg1");
            $("#box1_2").addClass("headbox1");
            $("#box1_2img").addClass("headbox1_img");
            timeout6 = setTimeout(show1, 3000)
        }

        function clearnode() {
            id('pagetitle').style.webkitAnimation = '';
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('kuang1v').style.display = 'none';
            id('kuang1h').style.display = 'none';
            id('kuang2v').style.display = 'none';
            id('kuang2h').style.display = 'none';
            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6)
        }
        call_me(load_images);
        load_init_modules();
    }
}

function beijingMove(i) {
    var div1, div2, stime, maxSu;
    maxSu = 8;
    stime = 100;
    if (i == "" || isNaN(i) || i > maxSu) i = 1;
    i1 = i;
    i2 = i - 1;
    if (i2 == 0) i2 = maxSu;
    i = i + 1;
    $(".flag_" + i1).css("display", "block");
    $(".flag_" + i2).css("display", "none");
    setTimeout("beijingMove(" + i + ")", stime)
}
