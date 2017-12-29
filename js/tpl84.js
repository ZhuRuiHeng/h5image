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
        $("#div_player").append('<div id="container"><img style="width:100%;height:100%" src="https://img.alicdn.com/imgextra/i4/1016194477/bg.jpg"> <img id="bg" style="width:100%;height:100%" src="https://img.alicdn.com/imgextra/i4/1016194477/bg.jpg"> <img id="biaoti1" src="https://img.alicdn.com/imgextra/i4/1016194477/bg1.png"> <img class="fengzheng1" src="https://img.alicdn.com/imgextra/i2/1016194477/fz.png"> <img class="fengzheng2" src="https://img.alicdn.com/imgextra/i2/1016194477/fz1.png"><div id="page1"><div id="divv1_1" class="divv"><img id="imgv1_1" class="img"></div><div id="divv1_2" class="divv"><img id="imgv1_2" class="img"></div><div id="divh1_1" class="divh"><img id="imgh1_1" class="img"></div><div id="divh1_2" class="divh"><img id="imgh1_2" class="img"></div></div><div id="page2"><div id="boxv2_1"><div id="divv2_1" class="divv" style="opacity:1"><img id="imgv2_1" class="img"></div></div><div id="boxv2_2"><div id="divv2_2" class="divv" style="opacity:1"><img id="imgv2_2" class="img"></div></div><div id="boxh2_1"><div id="divh2_1" class="divh" style="opacity:1"><img id="imgh2_1" class="img"></div></div><div id="boxh2_2"><div id="divh2_2" class="divh" style="opacity:1"><img id="imgh2_2" class="img"></div></div></div><div id="page3"><div id="boxv3_1"><div id="divv3_1" class="divv" style="opacity:1"><img id="imgv3_1" class="img"></div></div><div id="boxv3_2"><div id="divv3_2" class="divv" style="opacity:1"><img id="imgv3_2" class="img"></div></div><div id="boxh3_1"><div id="divh3_1" class="divh" style="opacity:1"><img id="imgh3_1" class="img"></div></div><div id="boxh3_2"><div id="divh3_2" class="divh" style="opacity:1"><img id="imgh3_2" class="img"></div></div></div><div id="page4"><div id="boxv4_1"><div id="divv4_1" class="divv" style="opacity:1"><img id="imgv4_1" class="img"></div></div><div id="boxv4_2"><div id="divv4_2" class="divv" style="opacity:1"><img id="imgv4_2" class="img"></div></div><div id="boxh4_1"><div id="divh4_1" class="divh" style="opacity:1"><img id="imgh4_1" class="img"></div></div><div id="boxh4_2"><div id="divh4_2" class="divh" style="opacity:1"><img id="imgh4_2" class="img"></div></div></div><div id="pagetitle" style="z-index:112;position:absolute;width:500px;height:187px;top:282px;border-bottom:1px solid rgba(255,255,255,.2);border-top:1px solid rgba(255,255,255,.2);opacity:0"><div style="position:absolute;width:350px;height:187px;left:75px;overflow:hidden;display:table"><div id="titlecontent" style="width:350px;height:187px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:45px;color:#585353;z-index:112"></div></div></div></div>');

        function id(name) {
            return document.getElementById(name)
        }

        function showtitle() {
            id('biaoti1').style.webkitAnimation = 'title_in 0.8s ease-out both';
            id('pagetitle').style.webkitAnimation = 'fadein 0.5s 0.3s linear both';
            id('titlecontent').innerHTML = e_desc;

        }

        function liangziyun_kawa() {
            id('biaoti1').style.webkitAnimation = 'title_out 0.8s 0.2s linear both';
            id('pagetitle').style.webkitAnimation = 'fadeout 0.5s linear both';

            timeout[1] = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            showpage(1);
            id('divv1_1').style.webkitAnimation = 'pagev1_1_in 1s ease-out both';
            id('divv1_2').style.webkitAnimation = 'pagev1_2_in 1s ease-out both';
            id('divh1_1').style.webkitAnimation = 'pageh1_1_in 1s ease-out both';
            id('divh1_2').style.webkitAnimation = 'pageh1_2_in 1s ease-out both';

            id('imgh1_1').style.webkitAnimation = 'binking 0.5s 1.5s linear both';
            id('imgh1_2').style.webkitAnimation = 'binking 0.5s 1.5s linear both';
            id('imgv1_1').style.webkitAnimation = 'binking 0.5s 1.5s linear both';
            id('imgv1_2').style.webkitAnimation = 'binking 0.5s 1.5s linear both';

            timeout[2] = setTimeout(clear1, 4000)
        }

        function clear1() {
            id('divv1_1').style.webkitAnimation = 'pagev1_1_out 1s linear both';
            id('divv1_2').style.webkitAnimation = 'pagev1_2_out 1s linear both';
            id('divh1_1').style.webkitAnimation = 'pageh1_1_out 1s linear both';
            id('divh1_2').style.webkitAnimation = 'pageh1_2_out 1s linear both';

            timeout[3] = setTimeout(show2, 1000)
        }

        function show2() {
            setImage('2');
            showpage(2);
            id('boxv2_1').style.webkitAnimation = 'page2_boxv1_in 1s linear both';
            id('divv2_1').style.webkitAnimation = 'page2_divv1_in 1s linear both';
            id('boxv2_2').style.webkitAnimation = 'page2_divv1_in 1s linear both';
            id('divv2_2').style.webkitAnimation = 'page2_boxv1_in 1s linear both';

            id('boxh2_1').style.webkitAnimation = 'page2_boxv1_in 1s linear both';
            id('divh2_1').style.webkitAnimation = 'page2_divv1_in 1s linear both';

            id('boxh2_2').style.webkitAnimation = 'page2_divv1_in 1s linear both';
            id('divh2_2').style.webkitAnimation = 'page2_boxv1_in 1s linear both';



            timeout[4] = setTimeout(clear2, 4000)
        }

        function clear2() {
            id('boxv2_1').style.webkitAnimation = 'page2_boxv1_out 1s linear both';
            id('divv2_1').style.webkitAnimation = 'page2_divv1_out 1s linear both';
            id('boxv2_2').style.webkitAnimation = 'page2_divv1_out 1s linear both';
            id('divv2_2').style.webkitAnimation = 'page2_boxv1_out 1s linear both';

            id('boxh2_1').style.webkitAnimation = 'page2_boxv1_out 1s linear both';
            id('divh2_1').style.webkitAnimation = 'page2_divv1_out 1s linear both';
            id('boxh2_2').style.webkitAnimation = 'page2_divv1_out 1s linear both';
            id('divh2_2').style.webkitAnimation = 'page2_boxv1_out 1s linear both';

            timeout[5] = setTimeout(show3, 1000)
        }

        function show3() {
            showpage(3);
            setImage('3');
            id('boxv3_1').style.webkitAnimation = 'boxv3_1_in 1s ease-out both';
            id('boxv3_2').style.webkitAnimation = 'boxv3_2_in 1s ease-out both';

            id('boxh3_1').style.webkitAnimation = 'boxv3_1_in 1s ease-out both';
            id('boxh3_2').style.webkitAnimation = 'boxv3_2_in 1s ease-out both';
            // 本模板为深圳量子云科技有限公司版权所有 抄袭必究
            timeout[6] = setTimeout(clear3, 4000)
        }

        function clear3() {
            id('boxv3_1').style.webkitAnimation = 'boxv3_1_out 1s ease-in both';
            id('boxv3_2').style.webkitAnimation = 'boxv3_2_out 1s ease-in both';

            id('boxh3_1').style.webkitAnimation = 'boxv3_1_out 1s ease-in both';
            id('boxh3_2').style.webkitAnimation = 'boxv3_2_out 1s ease-in both';

            timeout[7] = setTimeout(show4, 1000)
        }

        function show4() {
            showpage(4);
            setImage('4');
            id('boxv4_2').style.webkitAnimation = 'fadein 0.5s linear both';
            id('boxv4_1').style.webkitAnimation = 'fadein 0.5s 0.3s linear both';

            id('boxh4_2').style.webkitAnimation = 'fadein 0.5s linear both';
            id('boxh4_1').style.webkitAnimation = 'fadein 0.5s 0.3s linear both';

            id('imgh4_2').style.webkitAnimation = 'binking 0.5s 2s linear both';
            id('imgv4_2').style.webkitAnimation = 'binking 0.5s 2s linear both';
            id('imgh4_1').style.webkitAnimation = 'binking 0.5s 2.3s linear both';
            id('imgv4_1').style.webkitAnimation = 'binking 0.5s 2.3s linear both';

            timeout[8] = setTimeout(clear4, 4000)
        }

        function clear4() {
            id('boxv4_2').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('boxv4_1').style.webkitAnimation = 'fadeout 0.5s 0.3s linear both';

            id('boxh4_2').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('boxh4_1').style.webkitAnimation = 'fadeout 0.5s 0.3s linear both';



            timeout[9] = setTimeout(show1, 1000)
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
            // console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                // loading_others();
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                liangziyun_kawa();
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
                // loading_others();
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                liangziyun_kawa();

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

            var imgshow1;
            var imgshow2;
            var divshow1;
            var divshow2;
            var divdis1;
            var divdis2;

            if (img_bili > 1) {
                width = 470;
                height = 310;
                imgshow1 = id('imgh' + idname + '_1');
                imgshow2 = id('imgh' + idname + '_2');
                if (idname == '1') {
                    divshow1 = id('divh' + idname + '_1');
                    divshow2 = id('divh' + idname + '_2');
                    divdis1 = id('divv' + idname + '_1');
                    divdis2 = id('divv' + idname + '_2')
                } else {
                    divshow1 = id('boxh' + idname + '_1');
                    divshow2 = id('boxh' + idname + '_2');
                    divdis1 = id('boxv' + idname + '_1');
                    divdis2 = id('boxv' + idname + '_2')
                }
            } else {
                width = 400;
                height = 600;
                imgshow1 = id('imgv' + idname + '_1');
                imgshow2 = id('imgv' + idname + '_2');
                if (idname == '1') {
                    divshow1 = id('divv' + idname + '_1');
                    divshow2 = id('divv' + idname + '_2');
                    divdis1 = id('divh' + idname + '_1');
                    divdis2 = id('divh' + idname + '_2')
                } else {
                    divshow1 = id('boxv' + idname + '_1');
                    divshow2 = id('boxv' + idname + '_2');
                    divdis1 = id('boxh' + idname + '_1');
                    divdis2 = id('boxh' + idname + '_2')
                }
            }

            divshow1.style.display = 'block';
            divshow2.style.display = 'block';
            divdis1.style.display = 'none';
            divdis2.style.display = 'none';


            imgshow1.src = Onload_imgs_url[image_url_index];
            imgshow2.src = Onload_imgs_url[image_url_index];
            console.log('setimg:' + imgshow1.src);

            if (img_bili > (width / height)) {
                imgshow1.style.top = '0px';
                imgshow2.style.top = '0px';
                imgshow1.style.height = height + 'px';
                imgshow2.style.height = height + 'px';
                imgshow1.style.width = height * img_bili + 'px';
                imgshow2.style.width = height * img_bili + 'px';
                imgshow1.style.left = -((height * img_bili - width) / 2) + 'px';
                imgshow2.style.left = -((height * img_bili - width) / 2) + 'px';
            } else {
                imgshow1.style.left = '0px';
                imgshow2.style.left = '0px';
                imgshow1.style.width = width + 'px';
                imgshow2.style.width = width + 'px';
                imgshow1.style.height = width / img_bili + 'px';
                imgshow2.style.height = width / img_bili + 'px';
                imgshow1.style.top = -((width / img_bili - height) / 2) + 'px';
                imgshow2.style.top = -((width / img_bili - height) / 2) + 'px';
            }

            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;


        }

        function showpage(index) {
            for (var i = 1; i < 5; i++) {
                if (i == index)
                    id('page' + i).style.display = 'block';
                else
                    id('page' + i).style.display = 'none';
            }
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('pagetitle').style.webkitAnimation = '';
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }
            for (var i = 1; i < 5; i++) {
                id('page' + i).style.display = 'none';
            }

        }

        call_me(load_images);
        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl83/
