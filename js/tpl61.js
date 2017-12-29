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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl61/bg.jpg"> <img class="treebottom" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/tudi.png"> <img class="timo1" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu1.png"> <img class="timo1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu2.png"><div id="yinghuochong4" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><div id="div1"><div id="page1"><img id="kuang1h" class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/kuang.png"><div id="div1h" class="divh"><img id="img1h"> <span id="word1h" class="showwords"></span></div><img id="kuang1v" class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/kuang1.png"><div id="div1v" class="divv"><img id="img1v"> <span id="word1v" class="showwords"></span></div></div></div><div id="div2"><div id="page2"><img id="kuang2h" class="kuangh" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/kuang.png"><div id="div2h" class="divh"><img id="img2h"> <span id="word2h" class="showwords"></span></div><img id="kuang2v" class="kuangv" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/kuang1.png"><div id="div2v" class="divv"><img id="img2v"> <span id="word2v" class="showwords"></span></div></div></div><img class="timo2" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu6.png"> <img class="timo3" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu7.png"> <img class="timo4" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu5.png"> <img class="timo5" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu3.png"> <img class="timo6" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu.png"> <img class="timo7" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/mogu4.png"><img class="guangban" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban1.png"> <img class="guangban1" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban1.png"> <img class="guangban2" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban1.png"> <img class="guangban3" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban1.png"><div id="yinghuochong1" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><div id="yinghuochong3" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><div id="yinghuochong5" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><div id="yinghuochong7" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><div id="yinghuochong8" class="yinghuochong"><img class="yingguang" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban3.png"> <img class="yan" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi1.png"> <img class="chileft" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"> <img class="chiright" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/yezi.png"></div><img class="yanwu1" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban2.png"> <img class="yanwu2" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban2.png"> <img id="yanwu" class="yanwu" src="http://referer-image.szwwy.com/coolphoto/img/tpl61/guangban.png"><div id="pagetitle" style="position:absolute;width:260px;height:290px;top:200px;left:120px;font-size:30px;color:#fff;overflow:hidden"><div style="position:absolute;width:260px;height:290px;top:0;left:0;overflow:hidden"><div style="position:absolute;width:260px;height:290px;display:table;overflow:hidden"><div id="titlecontent" style="width:260px;height:290px;vertical-align:middle;display:table-cell;text-align:center;line-height:45px"></div></div></div></div></div>');

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
            id('yanwu').style.webkitAnimation = 'pubu 12s linear both';
            id('pagetitle').style.webkitAnimation = 'title_in 1.5s linear both';
            id('titlecontent').innerHTML = e_desc;

        }

        function zimeitixfb() {
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            timeout6 = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            id('page1').style.webkitAnimation = 'in_up 2s linear both';

            id('div1').style.webkitAnimation = 'movingup 5s linear both';

            timeout1 = setTimeout(show2, 5000)
        }

        function show2() {
            setImage('2');
            id('page1').style.webkitAnimation = 'out_up 1.2s linear both';
            id('page2').style.webkitAnimation = 'in_down 2s 1s linear both';

            id('div2').style.webkitAnimation = 'movingdown 5s linear both';

            timeout2 = setTimeout(show3, 5000)
        }

        function show3() {
            setImage('1');
            id('page2').style.webkitAnimation = 'out_down 1.2s linear both'
            id('page1').style.webkitAnimation = 'in_right 2s 1s linear both';

            id('div1').style.webkitAnimation = 'movingright 5s linear both';

            timeout3 = setTimeout(show4, 5000)
        }

        function show4() {
            setImage('2');
            id('page1').style.webkitAnimation = 'out_right 1.2s linear both';
            id('page2').style.webkitAnimation = 'in_left 2s 1s linear both';

            id('div2').style.webkitAnimation = 'movingleft 5s linear both';

            timeout4 = setTimeout(show5, 5000)
        }

        function show5() {
            setImage('1');
            id('page2').style.webkitAnimation = 'out_left 1.2s linear both';
            id('page1').style.webkitAnimation = 'in_up 2s 1s linear both';

            id('div1').style.webkitAnimation = 'movingup 5s linear both';

            timeout5 = setTimeout(show2, 5000)
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
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            if (image_url_index % step_loadnum == 0) {
                // alert()
                step_load();
            }
            var div;
            var div1;
            var divname;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                width = 435;
                height = 300;
                id('kuang' + idname + 'v').style.display = 'none';
                id('kuang' + idname + 'h').style.display = 'block';
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                width = 383;
                height = 585;
                id('kuang' + idname + 'h').style.display = 'none';
                id('kuang' + idname + 'v').style.display = 'block';
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img' + divname);
            img.src = Onload_imgs_url[image_url_index];
            // console.log('setimg:'+img.src);

            // var word = id('word' + divname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word_string != undefined) {
            //     word_string = word_string.replace(/[\n]/ig, '');
            //     word.style.height = "50px";
            //     word.style.lineHeight = "50px";
            //     word.style.top = "95%";
            //     word.style.width = "100%";
            //     var word_length = word_string.length;
            //     // word.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            //     if (word_length <= 5) {
            //         word.style.fontSize = "23px";
            //     } else {
            //         word.style.fontSize = "20px";
            //         if (word_length > 10) {
            //             word_string = insertEnter(word_string, 5);
            //             word.style.height = "70px";
            //             word.style.lineHeight = "35px";
            //             word.style.top = "90%";
            //             // word.style.backgroundColor = "rgba(255, 255, 255, 0)";
            //         }
            //     }
            //     word.innerText = word_string;
            // } else {
            //     word.innerText = "";
            //     word.style.width = "0%";
            // }

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

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('pagetitle').style.webkitAnimation = '';
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';

            id('yanwu').style.webkitAnimation = '';
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
            clearTimeout(timeout6);
        }
        call_me(load_images);
        load_init_modules();
    }
}
