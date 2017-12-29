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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl74/bg.jpg"><div id="qiandiv"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic2.png"><div id="title1"><div id="titlebg1" class="titlebg"></div></div><div id="title2"><div id="titlebg2" class="titlebg"></div></div><div id="pagetitle" style="position:absolute;width:303px;height:134px;left:100px;top:278px;overflow:hidden;display:table"><div id="titlecontent" style="width:303px;height:134px;vertical-align:middle;display:table-cell;text-align:center;font-size:28px;line-height:40px;color:#92334D;opacity:.9"></div></div><div id="page1"><div id="con11"><div id="div11v"><span id="word11v" class="showwords"></span></div><div id="div11h"><span id="word11h" class="showwords"></span></div></div><div id="div12v"><span id="word12v" class="showwords"></span></div><div id="div12h"><span id="word12h" class="showwords"></span></div><div id="div21v"><span id="word21v" class="showwords"></span></div><div id="div21h"><span id="word21h" class="showwords"></span></div><div id="div22v"><span id="word22v" class="showwords"></span></div><div id="div22h"><span id="word22h" class="showwords"></span></div><img id="qian1" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic3.png"> <img id="qian2" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic8.png"> <img id="qian3" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic7.png"> <img id="qian4" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic1.png"></div><img id="cover" style="opacity: 1;" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic4.png"><div id="fudai" style="display:none"><img class="dai1" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic9.png"> <img class="dai2" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic6.png"><div id="zi"><img id="banka" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/pic10.png"> <img id="zhanshang" src="http://referer-image.szwwy.com/coolphoto/img/tpl74/zs.jpg"></div></div></div>');
        function id(name) {
            return document.getElementById(name);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showmoney() {
            var container = id('qiandiv');
            for (var i = 0; i < 40; i++) {
                var div = document.createElement('div');
                div.style.width = '292px';
                div.style.height = '145px';
                div.style.position = 'absolute';
                var left = rand(-100, 450);
                div.style.left = left + 'px';
                div.style.top = '-200px';

                var img = document.createElement('img');
                img.style.position = 'absolute';
                if (i % 2 == 0)
                    img.src = 'https://img.alicdn.com/imgextra/i3/1016194477/TB2rk09aRTxQeBjSspkXXXtMpXa_!!1016194477.png';
                else
                    img.src = 'https://img.alicdn.com/imgextra/i2/1016194477/TB2flWcaGbyQeBjy1XbXXa9yXXa_!!1016194477.png';

                var angle = rand(0, 360);
                img.style.webkitTransform = 'rotate(' + angle + 'deg)';

                div.appendChild(img);
                var anitime = rand(10, 15);
                div.style.webkitAnimation = 'rotating ' + anitime + 's ' + i * 0.28 + 's linear infinite';

                container.appendChild(div);
            }


        }

        function showtitle() {

            id('cover').style.webkitAnimation = 'fadein 1s linear both';

            id('titlebg1').style.webkitAnimation = 'title1_in 1.2s ease-out both';
            id('titlebg2').style.webkitAnimation = 'title2_in 1.2s ease-out both';
            id('titlecontent').innerHTML = e_desc;

            id('titlecontent').style.webkitAnimation = 'colorchange 0.8s 1s ease both';

            id('title1').style.webkitAnimation = 'title1 1s 1s linear infinite alternate';
            id('title2').style.webkitAnimation = 'title2 1s 1s linear infinite alternate';

        }

        function zimeitixifenbao() {
            //id('pagetitle').style.webkitAnimation = 'fadeout 0.3s linear both';
            //id('titlebg1').style.webkitAnimation = 'title1_out 0.8s 0.3s linear both';
            //id('titlebg2').style.webkitAnimation = 'title2_out 0.8s 0.3s linear both';

            id('fudai').style.webkitAnimation = 'daizhuan 1s linear both';

            id('qian1').style.opacity = 1;
            id('qian2').style.opacity = 1;
            id('qian3').style.opacity = 1;
            id('qian4').style.opacity = 1;

            timeout[1] = setTimeout(function() {
                id('zhanshang').style.display = 'none';
                id('banka').style.webkitAnimation = 'bankaka 8s 1s linear infinite';
            }, 500)

            // setTimeout(show1,1000)
            show1();
        }

        function show1() {
            setImage('11');
            setImage('12');

            id('qian1').style.webkitAnimation = '';
            id('qian2').style.webkitAnimation = '';
            id('qian3').style.webkitAnimation = '';
            id('qian4').style.webkitAnimation = '';

            timeout[2] = setTimeout(function() {
                id('qian1').style.webkitAnimation = 'qian1 2s linear 0.3s both';
                id('qian2').style.webkitAnimation = 'qian2 2s linear 0.3s both';
                id('qian3').style.webkitAnimation = 'qian3 1.5s linear 0.3s both';
                id('qian4').style.webkitAnimation = 'qian4 2s linear 0.3s both';

                id('div21h').style.webkitAnimation = '';
                id('div21v').style.webkitAnimation = '';

                id('div22v').style.webkitAnimation = '';
                id('div22h').style.webkitAnimation = '';

                id('div21h').style.display = 'none';
                id('div21v').style.display = 'none';

                id('div22v').style.display = 'none';
                id('div22h').style.display = 'none';
            }, 100)


            id('div11h').style.webkitAnimation = 'div11_in 8s linear both';
            id('div11v').style.webkitAnimation = 'div11_in 8s linear both';
            id('con11').style.webkitAnimation = 'con11_in 8s linear both';

            id('div12v').style.webkitAnimation = 'div12_in 8s linear both';
            id('div12h').style.webkitAnimation = 'div12_in 8s linear both';

            timeout[3] = setTimeout(show2, 8000)
        }

        function show2() {
            setImage('21');
            setImage('22');

            id('qian1').style.webkitAnimation = '';
            id('qian2').style.webkitAnimation = '';
            id('qian3').style.webkitAnimation = '';
            id('qian4').style.webkitAnimation = '';

            timeout[4] = setTimeout(function() {
                id('qian1').style.webkitAnimation = 'qian1 2s linear 0.3s both';
                id('qian2').style.webkitAnimation = 'qian2 2s linear 0.3s both';
                id('qian3').style.webkitAnimation = 'qian3 1.5s linear 0.3s both';
                id('qian4').style.webkitAnimation = 'qian4 2s linear 0.3s both';

                id('div11h').style.webkitAnimation = '';
                id('div11v').style.webkitAnimation = '';
                id('con11').style.webkitAnimation = '';

                id('div12v').style.webkitAnimation = '';
                id('div12h').style.webkitAnimation = '';

                id('div11h').style.display = 'none';
                id('div11v').style.display = 'none';

                id('div12v').style.display = 'none';
                id('div12h').style.display = 'none';
            }, 100)

            id('div21h').style.webkitAnimation = 'div21_in 8s linear both';
            id('div21v').style.webkitAnimation = 'div21_in 8s linear both';

            id('div22v').style.webkitAnimation = 'div22_in 8s linear both';
            id('div22h').style.webkitAnimation = 'div22_in 8s linear both';


            timeout[5] = setTimeout(show1, 8000)
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



        function id(name) {
            return document.getElementById(name);
        }

        //每次执行加载后6张图片
        var bl_keepload = 'first';
        var step_loadnum = 6;

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

        function loading() {
            showmoney();
            load_images();
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

            var div;
            var div1;
            var img;

            if (img_bili > 1) {
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                idname = idname + 'h';
                height = 250;
                width = 320;
            } else {
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                idname = idname + 'v';
                width = 270;
                height = 377;
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var img = id('div' + idname);
            img.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            console.log('setimg:' + img.style.backgroundImage);

            //var word = id('word'+idname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            //if(word_string != undefined)
            // {
            //    word_string = word_string.replace(/[\n]/ig,'');
            //    var word_length = word_string.length;
            //word.style.top = "90%";
            //    if(word_length < 6)
            //       word.style.fontSize = "23px";
            //    else
            //  {
            //    word.style.fontSize = "20px";
            //    if(word_length > 10)
            //  {
            //       word.style.top =　"85%";
            //        if(img_bili > 1)  //heng
            //             word_string = insertEnter(word_string, 5);
            //       else
            //         word_string = insertEnter(word_string, 7);
            //  }

            // }
            //  word.innerText = word_string;
            // }
            //else
            //{
            //    word.innerText = "";
            //}
            if (img_bili > (width / height)) {
                img.style.backgroundSize = height * img_bili + 'px ' + height + 'px';
                img.style.backgroundPosition = -((height * img_bili - width) / 2) + 'px 0px';
            } else {
                img.style.backgroundSize = width + 'px ' + width / img_bili + 'px';
                img.style.backgroundPosition = '0px ' + (-((width / img_bili - height) / 2)) + 'px';
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
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i])
            }

            id('con11').style.webkitAnimation = '';
            id('div11h').style.webkitAnimation = '';
            id('div11v').style.webkitAnimation = '';
            id('con11').style.webkitAnimation = '';

            id('div12v').style.webkitAnimation = '';
            id('div12h').style.webkitAnimation = '';

            id('div11h').style.display = 'none';
            id('div11v').style.display = 'none';

            id('div12v').style.display = 'none';
            id('div12h').style.display = 'none';

            id('div21h').style.webkitAnimation = '';
            id('div21v').style.webkitAnimation = '';

            id('div22v').style.webkitAnimation = '';
            id('div22h').style.webkitAnimation = '';

            id('div21h').style.display = 'none';
            id('div21v').style.display = 'none';

            id('div22v').style.display = 'none';
            id('div22h').style.display = 'none';

            //id('titlebg1').style.webkitAnimation = '';
            //id('titlebg2').style.webkitAnimation = '';
            //id('pagetitle').style.webkitAnimation = '';

        }

        call_me(loading);

        load_init_modules();
    }
}
