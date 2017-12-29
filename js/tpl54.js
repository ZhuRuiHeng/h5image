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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bg.jpg"><div id="pagebox" style="opacity:0"><div id="pagetitle" style="position:absolute;top:220px;left:52px"></div></div><div id="page1" class="page"><div id="box1v" class="boxv"><div id="div1v" class="divv"><img id="img1v" class="img"> <span id="word1v" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk.png" class="borderv"></div><div id="box1h" class="boxh"><div id="div1h" class="divh"><img id="img1h" class="img"> <span id="word1h" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk1.png" class="borderh"></div></div><div id="page2" class="page"><div id="box2v" class="boxv"><div id="div2v" class="divv"><img id="img2v" class="img"> <span id="word2v" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk.png" class="borderv"></div><div id="box2h" class="boxh"><div id="div2h" class="divh"><img id="img2h" class="img"> <span id="word2h" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk1.png" class="borderh"></div></div><div id="page3" class="page"><div id="box3v" class="boxv"><div id="div3v" class="divv"><img id="img3v" class="img"> <span id="word3v" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk.png" class="borderv"></div><div id="box3h" class="boxh"><div id="div3h" class="divh"><img id="img3h" class="img"> <span id="word3h" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk1.png" class="borderh"></div></div><div id="page4" class="page"><div id="box4v" class="boxv"><div id="div4v" class="divv"><img id="img4v" class="img"> <span id="word4v" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk.png" class="borderv"></div><div id="box4h" class="boxh"><div id="div4h" class="divh"><img id="img4h" class="img"> <span id="word4h" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl54/bk1.png" class="borderh"></div></div><div id="biankuang" style="pointer-events: none;"><div id="ptcDY04Wv-an-obj-1" style="pointer-events: none;"><div><img height="750" width="500" src="http://referer-image.szwwy.com/coolphoto/img/tpl54/fengche.png"></div></div><div id="ptcDY04Wv-an-obj-2"><div><img height="157" width="157" src="http://referer-image.szwwy.com/coolphoto/img/tpl54/zhuan.png"></div></div><div id="ptcDY04Wv-an-obj-3"><div><img height="150" width="500" src="http://referer-image.szwwy.com/coolphoto/img/tpl54/yun.png"></div></div><div id="ptcDY04Wv-an-obj-4"><div><img height="157" width="157" src="http://referer-image.szwwy.com/coolphoto/img/tpl54/zhuan.png"></div></div><div id="ptcDY04Wv-an-obj-5"><div><img height="157" width="157" src="http://referer-image.szwwy.com/coolphoto/img/tpl54/zhuan.png"></div></div></div></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function showtitle() {
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'moving_vertical 1.5s linear infinite alternate';
            id('pagebox').style.webkitAnimation = 'title_in 1s ease-out both';

            // setTimeout(distitle,3000)
        }

        function zimeitixfb() {
            id('pagebox').style.webkitAnimation = 'title_out 1s ease-in both';

            timeout[1] = setTimeout(show1, 1000)
        }

        function show1() {
            setImage('1');
            id('page1').style.webkitAnimation = 'div1_in 1.5s ease-out both';
            id('page1').style.pointerEvents = 'auto';
            id('page2').style.pointerEvents = 'none';
            id('page3').style.pointerEvents = 'none';
            id('page4').style.pointerEvents = 'none';
            timeout[2] = setTimeout(show2, 5000)
        }

        function show2() {
            setImage('2');
            id('page1').style.webkitAnimation = 'div1_out 1.5s ease-in both';

            id('page2').style.webkitAnimation = 'div1_in 2s ease-out both';
            id('page2').style.pointerEvents = 'auto';
            id('page1').style.pointerEvents = 'none';
            timeout[3] = setTimeout(show3, 5000)
        }

        function show3() {
            setImage('3');
            id('page2').style.webkitAnimation = 'div1_out 1.5s ease-in both';

            id('page3').style.webkitAnimation = 'div3_in 2s ease-out both';
            id('page3').style.pointerEvents = 'auto';
            id('page2').style.pointerEvents = 'none';
            timeout[4] = setTimeout(show4, 5000)
        }

        function show4() {
            setImage('4');
            id('page3').style.webkitAnimation = 'div1_out 1.5s ease-in both';

            id('page4').style.webkitAnimation = 'div4_in 2s ease-out both';
            id('page4').style.pointerEvents = 'auto';
            id('page3').style.pointerEvents = 'none';
            timeout[5] = setTimeout(show1_1, 5000)
        }

        function show1_1() {
            setImage('1');
            id('page4').style.webkitAnimation = 'div4_out 1.5s ease-in both';

            id('page1').style.webkitAnimation = 'div1_in 2s ease-out both';
            id('page1').style.pointerEvents = 'auto';
            id('page4').style.pointerEvents = 'none';

            timeout[6] = setTimeout(show2, 5000);
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


        function id(name) {
            return document.getElementById(name);
        }

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
                step_load();
            }
            var div;
            var div1;
            var img;
            var word;

            if (img_bili > 1) {
                div = id('box' + idname + 'h');
                div1 = id('box' + idname + 'v');
                width = 353;
                height = 298;
                img = id('img' + idname + 'h');
                word = id('word' + idname + 'h');
            } else {
                div = id('box' + idname + 'v');
                div1 = id('box' + idname + 'h');
                width = 339;
                height = 401;
                img = id('img' + idname + 'v');
                word = id('word' + idname + 'v');
            }

            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if(word_string != undefined)
            // {  
            //     word_string = word_string.replace(/[\n]/ig,''); 
            //     word.style.top = "95%";
            //     var word_length = word_string.length;
            //     if(word_length > 10)
            //     {
            //       word.style.top = "87%";
            //       word_string = insertEnter(word_string, 5);
            //     }
            //     word.innerText = word_string;
            //     word.style.width = "100%";
            // }
            // else
            // {
            //     word.innerText = "";
            //     word.style.width = "0%";
            // }

            div.style.display = 'block';
            div1.style.display = 'none';

            img.src = Onload_imgs_url[image_url_index];
            console.log('setimg:' + img.src);

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
            bl_keepload = 'first';
            //showtitle();
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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();

            }
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('page3').style.webkitAnimation = '';
            id('page4').style.webkitAnimation = '';
            id('pagebox').style.webkitAnimation = '';
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }

        }
        call_me(load_images);
        load_init_modules();
    }
}
