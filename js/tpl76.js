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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bg.jpg"><div id="topdiv"><img id="top" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic8.png"></div><div id="sjdiv"><img id="sj" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic5.png"></div><div id="maodiv"><img id="mao" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic7.png"></div><div id="liushengjidiv"><img id="liushengji" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic4.png"></div><div id="musicdiv"><img id="" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic9.png"></div><div id="yinfudiv"><img id="yinfu" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic1.png"></div><div id="yinfu01div"><img id="yinfu01" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic10.png"></div><div id="yinfu02div"><img id="yinfu02" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic12.png"></div><div id="yinfu03div"><img id="yinfu03" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic12.png"></div><div id="butterfly01div"><img id="butterfly01" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bf.gif"></div><div id="butterfly02div"><img id="butterfly02" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bf.gif"></div><div id="butterfly03div"><img id="butterfly03" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bf1.gif"></div><div id="butterfly04div"><img id="butterfly04" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bf1.gif"></div><div id="butterfly05div"><img id="butterfly05" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/bf1.gif"></div><div id="pagetitle"><div class="sb3"><div id="titlecontent">2</div></div></div><div id="divv" class="divv"><div id="boxv" class="imgconv"><img class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic6.png"><div id="conv" class="conv"><img id="imgv"></div></div></div><div id="divh" class="divh"><div id="boxh" class="imgconh"><img class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl76/pic3.png"><div id="conh" class="conh"><img id="imgh"></div></div></div></div>');


        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 4000;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;

        function id(name) {
            return document.getElementById(name);
        }


        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 2s ease-out both';
            id('titlecontent').innerHTML = e_desc;
        }

        function zmtxifenbao() {
            $('#pagetitle').hide();

            timeout1 = setTimeout(show1, 1000);
        }

        var arr_ani = ['1', '2', '3'];
        var ani_index = 0;

        function show1() {
            id('divh').style.webkitAnimation = 'chance_' + arr_ani[ani_index % 3] + ' 5s linear both';
            setImage();
            id('divv').style.webkitAnimation = 'chance 5s linear both';
            ani_index++;
            if (ani_index == 3)
                ani_index = 0;
            timeout2 = setTimeout(show2, 5500);
        }

        function show2() {
            id('divh').style.webkitAnimation = 'chance_' + arr_ani[ani_index % 3] + ' 5s linear both';
            setImage();
            id('divv').style.webkitAnimation = 'chance1 5s linear both';
            ani_index++;
            if (ani_index == 3)
                ani_index = 0;
            timeout3 = setTimeout(show1, 5500)
        }

        function setImage() {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            console.log('setimg:' + Onload_imgs_url[image_url_index]);

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            var div;
            var div1;
            var img;

            if (img_bili > 1) {
                div = id('divh');
                div1 = id('divv');
                width = 372;
                height = 250;
                img = id('imgh');
            } else {
                div = id('divv');
                div1 = id('divh');
                width = 310;
                height = 450;
                img = id('imgv')
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            img.src = Onload_imgs_url[image_url_index];
            // console.log(img.src);

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
            if (image_url_index == Onload_imgs_url.length) {
                image_url_index = 0;
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
            console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                // loading_others();
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zmtxifenbao();
            }
        }

        function image_onload(event) {
            // document.getElementById("loading").style.display="none";
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
                // loading_others();
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zmtxifenbao();
            }
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('divv').style.webkitAnimation = '';
            id('divh').style.webkitAnimation = '';
            id('divv').style.display = 'none';
            id('divh').style.display = 'none';
            id('conv').style.webkitAnimation = '';
            id('conh').style.webkitAnimation = '';
            id('boxv').style.webkitAnimation = '';
            id('boxh').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            flag = 0;
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);

        }



        call_me(load_images);
        load_init_modules();
    }
}
