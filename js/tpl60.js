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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl60/bg.jpg"><div id="div1h" class="divh" style="display:none;animation:div1 10s linear both"><img id="img1h" class="imgp"> <span id="word1h" class="showwords"></span></div><div id="div2h" class="divh" style="display:none;animation:div1 10s linear both"><img id="img2h" class="imgp"> <span id="word2h" class="showwords"></span></div><div id="div1v" class="divv" style="display:block;animation:div2 10s linear both"><img id="img1v" class="imgp" src="" style="left:0;width:350px;height:622.22px;top:-46.11px"> <span id="word1v" class="showwords"></span></div><div id="div2v" class="divv" style="display:block;animation:div2 10s linear both"><img id="img2v" class="imgp" src="" style="top:-46.11px;height:622.22px;width:350px;left:0"> <span id="word2v" class="showwords"></span></div><div id="titleout" style="position:absolute;opacity:0;animation:title_out 8s linear both"><div id="pagetitle" style="position:absolute;width:349px;height:454px;top:250px;left:75px;animation:title_in 8s linear both"></div></div><img class="shang" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/huacong1.png"> <img class="xia" style="pointer-events: none;" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/huacong.png"> <img class="guang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/guang.png"> <img class="guang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/guang.png"> <img class="circle1" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/yuan.png"> <img class="circle2" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/yuan.png"> <img class="circle3" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/yuan.png"> <img class="circle4" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/yuan.png"><div class="word1"></div><div class="word2"></div><div class="word3"></div><div class="word4"></div><div class="flower1"><div class="flowerout1"><img class="flowerying1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua.png"></div><div class="flowerout1"><img class="flowerin1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua1.png"></div></div><div class="flower2"><div class="flowerout1"><img class="flowerying1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua.png"></div><div class="flowerout1"><img class="flowerin1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua1.png"></div></div><div class="flower3"><div class="flowerout1"><img class="flowerying1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua.png"></div><div class="flowerout1"><img class="flowerin1" width="25" src="http://referer-image.szwwy.com/coolphoto/img/tpl60/hua1.png"></div></div></div>');
        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function id(name) {
            return document.getElementById(name)
        }

        function showtitle() {
            id('titlecontent').innerHTML = e_desc;
            id('titleout').style.webkitAnimation = 'title_out 8s linear both';
            id('pagetitle').style.webkitAnimation = 'title_in 8s linear both';

            // setTimeout(show1,5000);
        }

        function show1() {
            // id('divbox1').style.webkitAnimation = 'divhup 10s linear both';
            setImage('1');

            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            timeout3 = setTimeout(function() {
                id('div1h').style.webkitAnimation = 'div1 10s linear both';
                id('div1v').style.webkitAnimation = 'div2 10s linear both';
            }, 100)

            timeout1 = setTimeout(show2, 7000)
        }

        function show2() {
            setImage('2');

            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            timeout4 = setTimeout(function() {
                id('div2h').style.webkitAnimation = 'div1 10s linear both';
                id('div2v').style.webkitAnimation = 'div2 10s linear both';
            }, 100)

            timeout2 = setTimeout(show1, 7000)
        }


        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 5000;

        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;

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
                // console.log('loading continue');
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
                // console.log('loading continue');
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
                show1();
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

            // console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                show1();
            }

        }

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                // console.log(Onload_imgs_url[image_url_index]);
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
            // console.log('setimg:' + Onload_imgs_url[image_url_index]);

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                width = 490;
                height = 348;
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                width = 350;
                height = 530;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img' + divname);
            img.src = Onload_imgs_url[image_url_index];

            // var word = id('word' + divname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word_string != undefined) {
            //     word_string = word_string.replace(/[\n]/ig, '');

            //     var word_length = word_string.length;
            //     // console.log(word_string);
            //     word.style.top = "93%";
            //     if (word_length <= 5) {
            //         word.style.fontSize = "27px";
            //     } else {
            //         word.style.fontSize = "24px";
            //         if (word_length > 10) {
            //             word_string = insertEnter(word_string, 5);
            //             word.style.top = "88%";
            //         }
            //     }
            //     word.innerText = word_string;
            // } else
            //     word.innerText = "";

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
            var tsrc = img.src;
            div.onclick = function() {
                var src = tsrc;
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

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('titleout').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);

        }

        call_me(load_images);
        load_init_modules();
    }
}
