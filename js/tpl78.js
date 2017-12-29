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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl78/bg.jpg"><div id="divh"><img id="imgh" class="img"></div><img id="kuangh" class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic4.png"><div id="divv"><img id="imgv" class="img"></div><img id="kuangv" class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic4.png"><div id="maskv" class="maskv"><img id="maskv1" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic13.png"> <img id="maskv2" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic12.png"> <img id="maskv3" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic3.png"> <img id="maskv4" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic9.png"> <img id="maskv5" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic5.png"> <img id="maskv6" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic10.png"></div><div id="maskh" class="maskh"><img id="maskh1" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic7.png"> <img id="maskh2" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic2.png"> <img id="maskh3" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic11.png"> <img id="maskh4" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic8.png"> <img id="maskh5" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic1.png"> <img id="maskh6" class="img" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic15.png"></div><div id="wordh"></div><div id="wordv"></div><div id="pagetitle" style="position:absolute;width:340px;height:220px;top:200px;left:80px;opacity:1"><div style="position:absolute;width:340px;height:220px;overflow:hidden;display:table"><div id="titlecontent" style="width:340px;height:220px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:45px;color:#fff"></div></div></div><div id="hand1" style="position:absolute;left:470px;top:200px"><img id="hand1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic6.png" style="position:absolute;left:0;top:0"></div><div id="hand2" style="position:absolute;left:500px;top:150px"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl78/pic14.png" style="position:absolute"></div></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function showtitle() {
            id('hand1').style.webkitAnimation = 'handmove 5s linear both';
            id('hand1_1').style.webkitAnimation = 'draw 5s linear both';

            id('pagetitle').style.webkitAnimation = 'fadein 3s linear 0.5s both';
            // id('pagetitle').style.webkitAnimation = 'titlemove 1.8s linear 0.5s both';
            id('titlecontent').innerHTML = e_desc;

            // id('hand2').style.webkitAnimation='handmove1 5s linear 3.7s both';

            // setTimeout(distitle,4000)
        }

        function zimeitixifenbao() {
            // id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            // id('hand2').style.webkitAnimation = 'handmove1 5s linear both';

            // id('hand1').style.webkitAnimation = '';
            // id('hand1_1').style.webkitAnimation = '';

            timeout[1] = setTimeout(show1, 1000)
        }

        function show1() {

            id('divv').style.webkitAnimation = '';
            id('divh').style.webkitAnimation = '';
            id('kuangv').style.webkitAnimation = '';
            id('kuangh').style.webkitAnimation = '';

            setImage('1');
            if (image_size_width[image_url_index] / image_size_height[image_url_index] < 1) {
                id('divh').style.display = 'none';
                id('maskh').style.display = 'none';
                id('kuangh').style.display = 'none';
                id('wordh').style.display = 'none';

                id('divv').style.display = 'block';
                id('maskv').style.display = 'block';
                id('kuangv').style.display = 'block';
                id('wordv').style.display = 'block';

                for (var i = 1; i < 7; i++) {
                    id('maskh' + i).style.webkitAnimation = '';
                }

                for (var i = 1; i < 7; i++) {
                    id('maskv' + i).style.webkitAnimation = 'fadeout 0.5s ' + i * 0.3 + 's ease-in both';
                }


                id('wordh').style.webkitAnimation = 'fadein 1s 3s linear both';
                id('wordv').style.webkitAnimation = 'fadein 1s 3s linear both';

                id('hand1').style.webkitAnimation = '';
                id('hand1_1').style.webkitAnimation = '';
                timeout[2] = setTimeout(function() {
                    id('hand1').style.webkitAnimation = 'handmovev 5s linear both';
                    id('hand1_1').style.webkitAnimation = 'drawv 5s linear both';
                }, 100)
            } else {
                id('divh').style.display = 'block';
                id('maskh').style.display = 'block';
                id('kuangh').style.display = 'block';
                id('wordh').style.display = 'block';

                id('divv').style.display = 'none';
                id('maskv').style.display = 'none';
                id('kuangv').style.display = 'none';
                id('wordv').style.display = 'none';

                for (var i = 1; i < 7; i++) {
                    id('maskv' + i).style.webkitAnimation = '';
                }

                for (var i = 1; i < 7; i++) {
                    id('maskh' + i).style.webkitAnimation = 'fadeout 0.7s ' + (i + 1) * 0.3 + 's ease-out both';
                }

                id('wordh').style.webkitAnimation = 'fadein 1s 3s linear both';
                id('wordv').style.webkitAnimation = 'fadein 1s 3s linear both';


                id('hand1').style.webkitAnimation = '';
                id('hand1_1').style.webkitAnimation = '';
                timeout[3] = setTimeout(function() {
                    id('hand1').style.webkitAnimation = 'handmove 5s linear both';
                    id('hand1_1').style.webkitAnimation = 'draw 5s linear both';
                }, 100)

            }


            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;


            timeout[4] = setTimeout(clear1, 6000)
        }

        function clear1() {
            id('hand2').style.webkitAnimation = '';
            timeout[5] = setTimeout(function() {
                id('hand2').style.webkitAnimation = 'handmove1 5s linear both';
            }, 100)

            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('kuangv').style.webkitAnimation = 'fadeout 1s linear both';
            id('kuangh').style.webkitAnimation = 'fadeout 1s linear both';

            id('wordh').style.webkitAnimation = 'fadeout 1s linear both';
            id('wordv').style.webkitAnimation = 'fadeout 1s linear both';

            timeout[6] = setTimeout(function() {
                for (var i = 1; i < 7; i++) {
                    id('maskh' + i).style.webkitAnimation = '';
                    id('maskv' + i).style.webkitAnimation = '';
                }
                timeout[7] = setTimeout(show1, 100)
            }, 1100)
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
        var showfont = false;
        var imgtype = 0;

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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixifenbao();

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


            if (img_bili >= 1) {
                var img = id('imgh');
                var wordspan = id('wordh');
                width = 335;
                height = 263;

            } else {
                var img = id('imgv');
                var wordspan = id('wordv');
                width = 263;
                height = 336;
            }

            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined)
            //     wordspan.innerHTML = str;
            // else
            //     wordspan.innerHTML = '';
            img.src = Onload_imgs_url[image_url_index];


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

            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i])
            }

            var itemlist = ['pagetitle', 'hand1', 'hand2', 'hand1_1', 'divv', 'divh', 'kuangv', 'kuangh', 'maskh', 'maskv'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

            for (var i = 1; i < 7; i++) {
                id('maskh' + i).style.webkitAnimation = '';
                id('maskv' + i).style.webkitAnimation = '';
            }

            id('divh').style.display = 'none';
            id('maskh').style.display = 'none';
            id('kuangh').style.display = 'none';
            id('wordh').style.display = 'none';

            id('divv').style.display = 'none';
            id('maskv').style.display = 'none';
            id('kuangv').style.display = 'none';
            id('wordv').style.display = 'none';


        }
        call_me(load_images);
        load_init_modules();
    }
}
