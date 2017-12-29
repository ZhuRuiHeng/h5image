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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic6.png"> <img id="yun1" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic2.png"> <img id="yun2" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic2.png"> <img id="yun3" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic2.png"><div id="worddiv"><div id="wordbg"><img class="m1" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic1.png"><div id="pagetitle"><div class="m2"><div class="m3"><div id="titlecontent">5</div></div></div></div></div></div><div id="div1"><div id="div1h" class="divh"><img id="img1h"></div><div class="m6"><div id="mask1_1h" class="mask1_1h"><div class="maskimg1_1h"><img id="maskimg1_1h"></div></div><div id="mask2_1h" class="mask2_1h"><div class="maskimg2_1h"><img id="maskimg2_1h"></div></div></div><div id="div1v" class="divv"><img id="img1v"></div><div class="m7"><div id="mask1_1v" class="mask1_1v"><div class="maskimg1_1v"><img id="maskimg1_1v"></div></div><div id="mask2_1v" class="mask2_1v"><div class="maskimg2_1v"><img id="maskimg2_1v"></div></div><div id="div1vline"></div></div></div><div id="div2"><div id="div2h" class="divh"><img id="img2h"></div><div class="m8"><div id="mask1_2h" class="mask1_2h"><div class="maskimg1_2h"><img id="maskimg1_2h"></div></div><div id="mask2_2h" class="mask2_2h"><div class="maskimg2_2h"><img id="maskimg2_2h"></div></div></div><div id="div2v" class="divv"><img id="img2v"></div><div class="m9"><div id="mask1_2v" class="mask1_2v"><div class="maskimg1_2v"><img id="maskimg1_2v"></div></div><div id="mask2_2v" class="mask2_2v"><div class="maskimg2_2v"><img id="maskimg2_2v"></div></div><div id="div2vline"></div></div></div><div id="san"><img id="yusan" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic3.png"> <img id="dian" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic5.png"></div><div id="shuzhi"><img id="huaban" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic7.png"> <img class="m10" src="http://referer-image.szwwy.com/coolphoto/img/tpl77/pic4.png"></div></div>');


        function id(name) {
            return document.getElementById(name)
        }

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;

        var timeout = [];

        var allitems = {};

        var delaytime = 6000;

        function id(name) {
            return document.getElementById(name);
        }

        function load_images() {
            creatediv();
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

        function creatediv() {
            var divid = ['san', 'wordbg', 'worddiv', 'div1', 'div2', 'div1h', 'div1v', 'div2h', 'div2v', 'div1vline', 'div2vline', 'mask1_1h', 'mask2_1h', 'maskimg1_1h', 'maskimg2_1h', 'mask1_1v', 'mask2_1v', 'maskimg1_1v', 'maskimg2_1v', 'mask1_2h', 'mask2_2h', 'maskimg1_2h', 'maskimg2_2h', 'mask1_2v', 'mask2_2v', 'maskimg1_2v', 'maskimg2_2v', 'img1h', 'img2h', 'img1v', 'img2v'];

            for (var i = 0; i < divid.length; i++) {
                allitems[divid[i]] = id(divid[i]);
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
            // console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                distitle();

            }
        }

        function showtitle() {
            allitems['san'].style.webkitAnimation = 'san_in 3s linear both';
            allitems['wordbg'].style.webkitAnimation = 'fadein 1s linear both';
            allitems['worddiv'].style.webkitAnimation = 'worddiv 3s 1s linear both';

            id('pagetitle').style.webkitAnimation = 'fadein 1s 2s linear both';
            id('titlecontent').innerHTML = e_desc;

            // setTimeout(distitle,4000)
        }

        function distitle() {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s 1s linear both';
            allitems['san'].style.webkitAnimation = 'san_down 1.5s linear both';
            allitems['wordbg'].style.webkitAnimation = 'wordbg_out 1.5s linear both';

            show1();
        }

        function show1() {
            // return;
            setImage('1');

            id('div2').style.display = 'none';
            id('div1').style.display = 'block';

            allitems['div1h'].style.webkitAnimation = 'divfadein 1s 3s linear both';

            allitems['div1v'].style.webkitAnimation = 'divfadeinv 1s 3s linear both';


            timeout[1] = setTimeout(function() {
                allitems['mask1_1h'].style.webkitAnimation = 'mask1h_toright 3s linear both';
                allitems['maskimg1_1h'].style.webkitAnimation = 'maskimg1h_toright 3s linear both';
                allitems['mask2_1h'].style.webkitAnimation = 'mask2h_toright 1.5s 1s linear both';
                allitems['maskimg2_1h'].style.webkitAnimation = 'maskimg2h_toright 1.5s 1s linear both';
                allitems['mask1_1v'].style.webkitAnimation = 'mask1v_toup 3s linear both';
                allitems['maskimg1_1v'].style.webkitAnimation = 'maskimg1v_toup 3s linear both';
                allitems['mask2_1v'].style.webkitAnimation = 'mask2v_toup 1.5s 1s linear both';
                allitems['maskimg2_1v'].style.webkitAnimation = 'maskimg2v_toup 1.5s 1s linear both';
                allitems['div1vline'].style.webkitAnimation = 'fadein 0.5s linear 2s both';

                allitems['div1'].style.webkitAnimation = 'fadeout 0.5s 4s linear both';
            }, 3500)

            timeout[2] = setTimeout(show2, 8000)
        }

        function show2() {
            setImage('2');

            id('div1').style.display = 'none';
            id('div2').style.display = 'block';



            // return;
            // setTimeout(function()
            // {
            allitems['div2h'].style.webkitAnimation = 'divfadein 1.5s linear both';
            allitems['div2v'].style.webkitAnimation = 'divfadeinv 1.5s linear both';
            // },500)

            timeout[3] = setTimeout(function() {
                allitems['mask1_2h'].style.webkitAnimation = 'maskimg1h_toright 3s linear both';
                allitems['maskimg1_2h'].style.webkitAnimation = 'mask1h_toright 3s linear both';
                allitems['mask2_2h'].style.webkitAnimation = 'maskimg2h_toright 1.5s 1s linear both';
                allitems['maskimg2_2h'].style.webkitAnimation = 'mask2h_toright 1.5s 1s linear both';
                allitems['mask1_2v'].style.webkitAnimation = 'maskimg1v_toup 3s linear both';
                allitems['maskimg1_2v'].style.webkitAnimation = 'mask1v_toup 3s linear both';
                allitems['mask2_2v'].style.webkitAnimation = 'maskimg2v_toup 1.5s 1s linear both';
                allitems['maskimg2_2v'].style.webkitAnimation = 'mask2v_toup 1.5s 1s linear both';
                allitems['div2vline'].style.webkitAnimation = 'fadein 0.5s linear 2s both';

                allitems['div1'].style.webkitAnimation = '';
                allitems['div1v'].style.webkitAnimation = '';
                allitems['div1h'].style.webkitAnimation = '';
                allitems['mask1_1h'].style.webkitAnimation = '';
                allitems['maskimg1_1h'].style.webkitAnimation = '';
                allitems['mask2_1h'].style.webkitAnimation = '';
                allitems['maskimg2_1h'].style.webkitAnimation = '';
                allitems['mask1_1v'].style.webkitAnimation = '';
                allitems['maskimg1_1v'].style.webkitAnimation = '';
                allitems['mask2_1v'].style.webkitAnimation = '';
                allitems['maskimg2_1v'].style.webkitAnimation = '';
                allitems['div1vline'].style.webkitAnimation = '';

                allitems['div2'].style.webkitAnimation = 'fadeout 0.8s 4s linear both';

            }, 2000)


            timeout[4] = setTimeout(show3, 7000)

        }

        function show3() {
            setImage('1');

            id('div2').style.display = 'none';
            id('div1').style.display = 'block';



            // setTimeout(function()
            // {
            allitems['div1h'].style.webkitAnimation = 'divfadein 1.5s linear both';
            allitems['div1v'].style.webkitAnimation = 'divfadeinv 1.5s linear both';
            // },500)

            timeout[5] = setTimeout(function() {
                allitems['mask1_1h'].style.webkitAnimation = 'mask1h_toright 3s linear both';
                allitems['maskimg1_1h'].style.webkitAnimation = 'maskimg1h_toright 3s linear both';
                allitems['mask2_1h'].style.webkitAnimation = 'mask2h_toright 1.5s 1s linear both';
                allitems['maskimg2_1h'].style.webkitAnimation = 'maskimg2h_toright 1.5s 1s linear both';
                allitems['mask1_1v'].style.webkitAnimation = 'mask1v_toup 3s linear both';
                allitems['maskimg1_1v'].style.webkitAnimation = 'maskimg1v_toup 3s linear both';
                allitems['mask2_1v'].style.webkitAnimation = 'mask2v_toup 1.5s 1s linear both';
                allitems['maskimg2_1v'].style.webkitAnimation = 'maskimg2v_toup 1.5s 1s linear both';
                allitems['div1vline'].style.webkitAnimation = 'fadein 0.5s linear 2s both';

                allitems['div2'].style.webkitAnimation = '';
                allitems['div2v'].style.webkitAnimation = '';
                allitems['div2h'].style.webkitAnimation = '';
                allitems['mask1_2h'].style.webkitAnimation = '';
                allitems['maskimg1_2h'].style.webkitAnimation = '';
                allitems['mask2_2h'].style.webkitAnimation = '';
                allitems['maskimg2_2h'].style.webkitAnimation = '';
                allitems['mask1_2v'].style.webkitAnimation = '';
                allitems['maskimg1_2v'].style.webkitAnimation = '';
                allitems['mask2_2v'].style.webkitAnimation = '';
                allitems['maskimg2_2v'].style.webkitAnimation = '';
                allitems['div2vline'].style.webkitAnimation = '';

                allitems['div1'].style.webkitAnimation = 'fadeout 0.8s 4s linear both';
            }, 2000)

            timeout[6] = setTimeout(show2, 7000)
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

            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            console.log('setimg:' + Onload_imgs_url[image_url_index]);

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            var div;
            var div1;
            var divname;
            var height;
            var width;

            var maskdiv1;
            var maskdiv1_dev;
            var maskdiv2;
            var maskdiv2_dev;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = allitems['div' + idname + 'h']
                div1 = allitems['div' + idname + 'v']

                maskdiv1 = allitems['mask1_' + idname + 'h']
                maskdiv1_dev = allitems['mask1_' + idname + 'v']

                maskdiv2 = allitems['mask2_' + idname + 'h']
                maskdiv2_dev = allitems['mask2_' + idname + 'v']

                allitems['div1vline'].style.display = 'none';
                allitems['div2vline'].style.display = 'none';

                width = 436;
                height = 300;
            } else {
                divname = idname + 'v';
                div = allitems['div' + idname + 'v']
                div1 = allitems['div' + idname + 'h']

                maskdiv1 = allitems['mask1_' + idname + 'v']
                maskdiv1_dev = allitems['mask1_' + idname + 'h']

                maskdiv2 = allitems['mask2_' + idname + 'v']
                maskdiv2_dev = allitems['mask2_' + idname + 'h']

                width = 370;
                height = 555;
                allitems['div' + idname + 'vline'].style.display = 'block';
            }

            div.style.display = 'block';
            div1.style.display = 'none';
            maskdiv1.style.display = 'block';
            maskdiv1_dev.style.display = 'none';
            maskdiv2.style.display = 'block';
            maskdiv2_dev.style.display = 'none';

            var img = allitems['img' + divname]
            var mask1img = allitems['maskimg1_' + divname]
            var mask2img = allitems['maskimg2_' + divname]

            img.src = Onload_imgs_url[image_url_index];
            mask1img.src = Onload_imgs_url[image_url_index];
            mask2img.src = Onload_imgs_url[image_url_index];

            // console.log(img.src);

            if (img_bili > (width / height)) {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height * img_bili + 'px';
                img.style.left = -((height * img_bili - width) / 2) + 'px';

                mask1img.style.left = mask2img.style.left = img.style.left;
                mask1img.style.top = mask2img.style.top = img.style.top;
                mask1img.style.width = mask2img.style.width = img.style.width;
                mask1img.style.height = mask2img.style.height = img.style.height;
            } else {
                img.style.left = '0px';
                img.style.width = width + 'px';
                img.style.height = width / img_bili + 'px';
                img.style.top = -((width / img_bili - height) / 2) + 'px';

                mask1img.style.left = mask2img.style.left = img.style.left;
                mask1img.style.top = mask2img.style.top = img.style.top;
                mask1img.style.width = mask2img.style.width = img.style.width;
                mask1img.style.height = mask2img.style.height = img.style.height;

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
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }
            var divid = ['san', 'wordbg', 'worddiv', 'div1', 'div2', 'div1h', 'div1v', 'div2h', 'div2v', 'div1vline', 'div2vline', 'mask1_1h', 'mask2_1h', 'maskimg1_1h', 'maskimg2_1h', 'mask1_1v', 'mask2_1v', 'maskimg1_1v', 'maskimg2_1v', 'mask1_2h', 'mask2_2h', 'maskimg1_2h', 'maskimg2_2h', 'mask1_2v', 'mask2_2v', 'maskimg1_2v', 'maskimg2_2v'];
            for (var i = 0; i < divid.length; i++) {
                console.log(divid[i]);
                var div = id(divid[i]);
                div.style.webkitAnimation = '';
            }
            id('pagetitle').style.webkitAnimation = '';
        }

        call_me(load_images);
        load_init_modules();
    }
}
