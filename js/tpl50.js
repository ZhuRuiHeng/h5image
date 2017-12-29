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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl50/bg.jpg"> <img id="bg1" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/bg1.jpg"> <img class="pic1" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/pic1.png"> <img class="pic2" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/pic2.png"> <img class="pic3" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/pic2.png"> <img class="pic4" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/pic4.png"><div id="hudie1" style="animation:hudie1 5s linear both"><img class="leftwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/leftwing.png"> <img class="rightwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/rightwing.png"> <img class="bfbody" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/bfbody.png"></div><div id="hudie2" style="animation:hudie2 3.7s linear both"><img class="leftwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/leftwing.png"> <img class="rightwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/rightwing.png"> <img class="bfbody" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/bfbody.png"></div><div id="pagetitle"></div><div id="maodiv1" style="animation:yumaomove1 2s ease-out both"><img id="mao1" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao.png" style="animation:maomao1 2.5s linear both"></div><div id="div1"><div id="img1" class="div"></div><img id="font1" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/font.png"> <img id="dian11" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/dian.png"> <img id="dian12" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/dian.png"><div id="xian1"></div><div id="word1" style="top:-30px;font-size:25px" class="myword"></div></div><div id="div2"><div id="img2" class="div"></div><div id="word2" style="top:-100px;font-size:42px" class="myword"></div></div><div id="div3"><div id="img3" class="div"><div id="word3" class="myword" style="bottom:10px;font-size:30px"></div></div></div><div id="div4"><div id="img4" class="div"><div id="word4" class="myword" style="bottom:10px;font-size:30px"></div></div></div><div id="div5"><div id="img5" class="div"><div id="word5" class="myword" style="top:100%;font-size:25px"></div></div></div><div id="div6"><div id="img6" class="div"><div id="word6" class="myword" style="top:100%;font-size:25px"></div></div></div><img id="yumao1" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao1.png"> <img id="yumao2" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao2.png"> <img id="yumao3" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao.png"> <img id="yumao4" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao.png"> <img id="yumao5" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/yumao3.png"><div id="hudie3"><img class="leftwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/leftwing.png"> <img class="rightwing" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/rightwing.png"> <img class="bfbody" src="http://referer-image.szwwy.com/coolphoto/img/tpl50/bfbody.png"></div></div>');
        function id(name) {
            return document.getElementById(name);
        }

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        var userAgent = 0;

        function check_agent() {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                userAgent = 1;
            } else {
                userAgent = 0;
            }

        }

        function showtitle() {
            id('hudie1').style.webkitAnimation = 'hudie1 5s linear both';

            // id('pagetitle').style.webkitAnimation = 'fadein 1s linear both';

            // titlecontent = id('titlecontent');
            // titlecontent.innerHTML = e_desc;
            // titlecontent.style.webkitAnimation = 'title_clip 3s linear both';

            id('mao1').style.webkitAnimation = 'maomao 0.3s 10 linear alternate both';
            id('maodiv1').style.webkitAnimation = 'yumaomove 3s linear both';
            //id('titlepic').style.webkitAnimation = 'titlepic 2s 3s linear infinite';

            timeout[1] = setTimeout(function() {
                id('maodiv1').style.webkitAnimation = 'yumaomove1 2s ease-out both';
                id('hudie2').style.webkitAnimation = 'hudie2 3.7s linear both';
                id('hudie3').style.webkitAnimation = 'hudie3 3.5s 1.5s linear both';
            }, 3200)

        }

        function zimeitixifenbao() {
            id('mao1').style.webkitAnimation = 'maomao1 2.5s linear both';
            id('pagetitle').style.webkitAnimation = 'fadeout 1.5s linear both';

            timeout[2] = setTimeout(show1, 1500)
        }

        function show1() {
            setImage('1');
            id('yumao1').style.webkitAnimation = 'yumao1_in 2s ease-out both';
            id('div1').style.webkitAnimation = 'fadein 1s linear both';
            // if(userAgent == 0)
            //     id('img1').style.webkitAnimation = 'div1_clipin 3s linear both';
            // else
            id('img1').style.webkitAnimation = 'fadein 3s 1s linear both';

            id('xian1').style.webkitAnimation = 'xian1 1s linear both';
            id('dian11').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('dian12').style.webkitAnimation = 'fadein 1s 1s linear both';

            setImage('2');
            id('div2').style.webkitAnimation = 'div2_in 2s 4s ease-out both';
            id('hudie3').style.webkitAnimation = 'hudie3_1 4s 6s linear both';


            timeout[3] = setTimeout(show2, 8000);
        }

        function show2() {
            id('div1').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2').style.webkitAnimation = 'div2_out 1s ease-in both';
            id('hudie3').style.webkitAnimation = 'hudie3_2 4s linear both';
            id('yumao1').style.webkitAnimation = 'yumao1_out 2s linear both';

            setImage('3');
            setImage('4');
            id('div3').style.webkitAnimation = 'div3_in 2s 1s ease-out both';
            id('div4').style.webkitAnimation = 'div4_in 2s 1s ease-out both';
            id('yumao2').style.webkitAnimation = 'yumao2 6s 2s linear both';

            // id('yumao1').style.webkitAnimation = '';
            id('yumao3').style.webkitAnimation = '';
            id('yumao4').style.webkitAnimation = '';

            timeout[4] = setTimeout(show3, 8000)
        }

        function show3() {
            id('div3').style.webkitAnimation = 'div3_out 1s ease-in both';
            id('div4').style.webkitAnimation = 'div4_out 1s ease-in both';
            id('hudie3').style.webkitAnimation = 'hudie3_3 2s ease-in both';

            setImage('5');
            id('div5').style.webkitAnimation = 'div5_in 3s ease-out both';
            //id('OptionBar').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('yumao1').style.webkitAnimation = 'yumao1_3 7s linear both';
            id('yumao3').style.webkitAnimation = 'yumao3 8s linear both';
            id('yumao4').style.webkitAnimation = 'yumao4 9s 2s linear both';

            id('yumao5').style.webkitAnimation = '';

            timeout[5] = setTimeout(show4, 7000)
        }

        function show4() {
            // id('OptionBar').style.webkitAnimation = 'fadeout 1s linear both';
            id('div5').style.webkitAnimation = 'div5_out 1s linear both';

            setImage('6');
            id('div6').style.webkitAnimation = 'div6_in 1s 1s ease-out both';
            id('yumao5').style.webkitAnimation = 'yumao5 8s linear both';
            id('hudie3').style.webkitAnimation = 'hudie3_6 2s linear both';

            timeout[6] = setTimeout(function() {
                id('hudie3').style.webkitAnimation = 'hudie3_7 3s linear both';
            }, 3000)

            id('yumao1').style.webkitAnimation = '';
            id('img1').style.webkitAnimation = '';
            id('xian1').style.webkitAnimation = '';
            id('dian11').style.webkitAnimation = '';
            id('dian12').style.webkitAnimation = '';

            timeout[7] = setTimeout(show7, 7000)
        }

        function show7() {
            id('div6').style.webkitAnimation = 'div6_out 1s ease-in both';
            setImage('1');
            id('yumao1').style.webkitAnimation = 'yumao1_in 2s ease-out both';
            id('div1').style.webkitAnimation = 'fadein 1s linear both';
            // if(userAgent == 0)
            //     id('img1').style.webkitAnimation = 'div1_clipin 3s linear both';
            // else
            id('img1').style.webkitAnimation = 'fadein 3s 1s linear both';

            id('xian1').style.webkitAnimation = 'xian1 1s linear both';
            id('dian11').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('dian12').style.webkitAnimation = 'fadein 1s 1s linear both';

            setImage('2');
            id('div2').style.webkitAnimation = 'div2_in 2s 4s ease-out both';
            id('hudie3').style.webkitAnimation = 'hudie3_1 4s 6s linear both';

            timeout[8] = setTimeout(show2, 12000);
        }


        call_me(load_images);

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

            var img = id('img' + idname);
            var div = id('div' + idname);

            img.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word = id('word' + idname);
            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined) {
            //     word.innerHTML = str;
            // } else {
            //     word.innerHTML = '';
            // }
            //500 760
            if (img_bili < (380 / 600)) {
                var height = 600;
                var width = 600 * img_bili;
                var top = 80;
                var left = (500 - width) / 2;
            } else if (img_bili <= 1) {
                var width = 380;
                var height = 380 / img_bili;
                var left = 60;
                var top = (740 - height) / 2
            } else if (img_bili > 1) {
                var width = 440;
                var height = 440 / img_bili;
                var left = 30;
                var top = (740 - height) / 2;
            }

            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.left = left + 'px';
            div.style.top = top + 'px';
            img.style.backgroundSize = (width - 8) + 'px ' + (height - 8) + 'px';
            img.style.width = width + 'px';
            img.style.height = height + 'px';
            // div.style.backgroundPosition = '4px 4px';

            if (idname == '1') {
                img.style.webkitClipPath = 'polygon(0px 0px,' + (width - 80) + 'px 0px, 100% 80px, 100% 100%, 0% 100%)';
            }
            if (idname == '3' || idname == '4') {
                if (width < height)
                    img.style.webkitTransform = 'scale(0.8)';
                else {
                    if (idname == '3')
                        img.style.webkitTransform = 'translate(20px,0px) scale(1)';
                    else
                        img.style.webkitTransform = 'translate(-20px,0px) scale(1)';
                }
            }


            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
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
            showtitle();
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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
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
        var delaytime = 6000;
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

            var itemlist = ['div1', 'img1', 'div2', 'div3', 'div4', 'div5', 'div6', 'xian1', 'dian11', 'dian12', 'mao1', 'maodiv1', 'titlepic', 'hudie1', 'hudie2', 'hudie3', 'yumao1', 'yumao2', 'yumao3', 'yumao4', 'yumao5', 'OptionBar', 'pagetitle', 'titlecontent'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }

        call_me(load_images);
        load_init_modules();
    }
}
