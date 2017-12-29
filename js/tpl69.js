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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl69/bg1.jpg"> <img class="bg" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/bg.jpg"> <img class="dian1" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic4.png"> <img class="dian2" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic4.png"> <img class="yan1" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic2.png"> <img class="yan2" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic2.png"> <img class="moon" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic7.png"><div id="div1" class="div"></div><div id="div3" class="div"><div id="word3" class="wordspan"></div></div><img id="hua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic5.png"><div id="hua2"><img class="hua21" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic8.png"> <img class="hua22" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic3.png"></div><div id="div2" class="div"><div id="word2" class="wordspan"></div></div><div id="div4" class="div"><div id="word4" class="wordspan"></div></div><img id="hua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic1.png"><div id="titlediv"><div id="pagetitle"><img class="title1" src="http://referer-image.szwwy.com/coolphoto/img/tpl69/pic6.png"><div style="position:absolute;width:273px;height:171px;top:18px;left:9px;overflow:hidden;display:table"><div id="titlecontent" style="width:288px;height:171px;vertical-align:middle;display:table-cell;text-align:center;font-size:26px;line-height:37px;color:#fff"></div></div></div></div></div>');


        function id(name) {
            return document.getElementById(name)
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
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                liangziyun_kawa();

            }
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

        function showtitle() {

            id('titleimg').style.webkitAnimation = 'title_in 1s ease-out both';
            id('pagetitle').style.webkitAnimation = 'title_down 0.8s 1s linear both';
            id('titlecontent').innerHTML = e_desc;
            id('titlecontent').style.webkitAnimation = 'fadein 0.6s 1.8s linear both';


            // setTimeout(distitle,5000)
        }

        function liangziyun_kawa() {
            show1()
        }

        function show1() {
            setImage('1');

            id('hua1').style.webkitAnimation = 'div1_hua1 2s cubic-bezier(.52,.63,.79,.99) both';
            id('hua2').style.webkitAnimation = 'div1_hua2 2s ease-out both';

            id('div1').style.webkitAnimation = 'div1_in 2s ease-out both';


            timeout[2] = setTimeout(show2, 5500)
        }

        function show2() {
            setImage('2');

            id('div1').style.webkitAnimation = 'div1_out 1.5s ease-in both';

            id('hua1').style.webkitAnimation = 'div2_hua1 2s ease-in both';
            id('hua2').style.webkitAnimation = 'div2_hua2 2s ease-out both';

            id('div2').style.webkitAnimation = 'div1_in 1.5s 0.5s ease-out both';

            timeout[3] = setTimeout(show3, 5500)
        }

        function show3() {
            setImage('3');

            id('hua2').style.webkitAnimation = 'div3_hua2 2s cubic-bezier(.52,.63,.79,.99) both';
            id('div2').style.webkitAnimation = 'div2_out 2s cubic-bezier(.52,.63,.79,.99) both';

            id('div3').style.webkitAnimation = 'div3_in 2s 0.5s cubic-bezier(.52,.63,.79,.99) both';

            timeout[4] = setTimeout(show4, 5500)
        }

        function show4() {
            setImage('4');

            id('div3').style.webkitAnimation = 'div3_out 1.5s ease-in both';
            id('hua2').style.webkitAnimation = 'div4_hua2 2s ease-in both';

            id('hua3').style.webkitAnimation = 'div4_hua3 2s cubic-bezier(.52,.63,.79,.99) both';
            id('div4').style.webkitAnimation = 'div4_in 2s ease-out both';

            timeout[5] = setTimeout(show5, 5500)
        }

        function show5() {
            setImage('1');

            id('div4').style.webkitAnimation = 'div4_out 2s ease-in both';
            id('hua3').style.webkitAnimation = 'div5_hua3 2s ease-in both';

            id('div1').style.webkitAnimation = 'div1_in 2s ease-out both';
            id('hua1').style.webkitAnimation = 'div5_hua1 2s ease-out both';

            timeout[6] = setTimeout(show2, 5500);
        }
        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
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

           
            //500 760
            if (img_bili < (380 / 600)) {
                var height = 600;
                var width = 600 * img_bili;
                var top = 60;
                var left = (500 - width) / 2;
            } else if (img_bili <= 1) {
                var width = 380;
                var height = 380 / img_bili;
                var left = 60;
                var top = (720 - height) / 2
            } else if (img_bili > 1) {
                var width = 440;
                var height = 440 / img_bili;
                var left = 30;
                var top = (760 - height) / 2;
            }

            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.left = left + 'px';
            div.style.top = top + 'px';
            div.style.backgroundSize = width + 'px ' + height + 'px';


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

            var itemlist = ['titleimg', 'pagetitle', 'titlecontent', 'div1', 'div2', 'div3', 'div4', 'hua1', 'hua2', 'hua3', 'titlediv'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }



        call_me(load_images);
        load_init_modules();
    }
}
