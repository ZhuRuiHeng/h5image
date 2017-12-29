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
        $("#div_player").append('<div id="container"><div id="page1" class="page"><div id="view1h"><img id="imgview1h" class="img"></div><img id="font1" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic9.png"><div id="div1h"><img id="img1h" class="img"> <span id="word1h" class="wordspan" style="left:10px;top:10px"></span></div><div id="div1v" class="divv"><img id="img1v" class="img"> <span id="word1v" class="wordspan" style="left:120px;top:612px"></span></div></div><div id="page2" class="page"><div id="view2h" style="opacity:0"><img id="imgview2h" class="img"></div><img id="font2" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic2.png"><div id="div2v" class="divv"><img id="img2v" class="img"> <span id="word2v" class="wordspan" style="left:120px;top:612px"></span></div><div id="div2h"><img id="img2h" class="img"> <span id="word2h" class="wordspan" style="left:240px;top:267px"></span></div></div><div id="page3" class="page"><div id="view3h" style="opacity:0"><img id="imgview3h" class="img"></div><img id="font3" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic6.png"><div id="div3v" class="divv"><img id="img3v" class="img"> <span id="word3v" class="wordspan" style="left:120px;top:612px"></span></div><div id="div3h"><img id="img3h" class="img"> <span id="word3h" class="wordspan" style="left:187px;top:10px"></span></div></div><div id="page4" class="page"><div id="view4h" style="opacity:0"><img id="imgview4h" class="img"></div><img id="font4" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic9.png"><div id="div4v"><img id="img4v" class="img"> <span id="word4v" class="wordspan" style="left:120px;top:612px"></span></div><div id="div4h"><img id="img4h" class="img"> <span id="word4h" class="wordspan" style="left:10px;top:10px"></span></div></div><div id="page5" class="page"><div id="view5h" style="opacity:0"><img id="imgview5h" class="img"></div><img id="font5" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic2.png"><div id="div5v"><img id="img5v" class="img"> <span id="word5v" class="wordspan" style="left:120px;top:612px"></span></div><div id="div5h"><img id="img5h" class="img"> <span id="word5h" class="wordspan" style="left:240px;top:267px"></span></div></div><div id="page6" class="page"><div id="view6h" style="opacity:0"><img id="imgview6h" class="img"></div><img id="font6" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic6.png"><div id="div6v"><img id="img6v" class="img"> <span id="word6v" class="wordspan" style="left:120px;top:612px"></span></div><div id="div6h"><img id="img6h" class="img"> <span id="word6h" class="wordspan" style="left:187px;top:10px"></span></div></div><div id="page0"><img id="bg0"> <img id="xin" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic1.png"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic5.png"> <img id="xian" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic7.png"><div id="pagetitle" style="position:absolute;top:432px;left:90px;width:330px;height:146px;opacity:0"><div id="titlecontent" style="width:330px;height:146px;vertical-align:middle;display:table-cell;text-align:center;font-size:24px;line-height:45px;color:#000"></div></div></div><img id="W" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic8.png"> <img id="R" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic4.png"> <img id="U" src="http://referer-image.szwwy.com/coolphoto/img/tpl73/pic3.png"><div id="word1">Are you want ... ?</div><div id="word2">Who are you?</div><div id="word3">Where are you?</div></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function showtitle() {
            id('xin').style.webkitAnimation = 'xin_in 0.7s linear both';

            id('xian').style.webkitAnimation = 'xian_in 0.8s linear both';

            id('pagetitle').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('titlecontent').innerHTML = e_desc;

            // setTimeout(distitle,3000)
        }

        function xifenbao_zimeiti() {
            setImage('1');

            id('div1v').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('img1v').style.webkitAnimation = 'img1v_in 7s linear both';


            id('font1').style.webkitAnimation = 'fadein 1s linear both';
            id('div1h').style.webkitAnimation = 'div1h_in 1s 0.5s ease-out both';
            id('view1h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('page0').style.webkitAnimation = 'fadeout 1s linear both';
            id('W').style.webkitAnimation = 'w1_in 0.8s 1s ease-out both';
            id('R').style.webkitAnimation = 'r1_in 0.8s 1.3s ease-out both';
            id('U').style.webkitAnimation = 'u1_in 0.8s 1.5s ease-out both';
            id('word1').style.webkitAnimation = 'word1_in 8s 1s ease-out both';

            timeout[1] = setTimeout(show2, 6000);
        }

        function show2() {
            setImage('2');

            id('div2v').style.webkitAnimation = 'fadein 2s ease-out both';
            id('img2v').style.webkitAnimation = 'div2v_in 6s linear both';

            id('view1h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div1v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img1v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('font1').style.webkitAnimation = 'fadeout 1s linear both';
            id('div1h').style.webkitAnimation = 'div1h_out 1s linear both';

            id('view2h').style.webkitAnimation = 'fadein 1s linear both';
            id('imgview2h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('font2').style.webkitAnimation = 'fadein 1s linear both';
            id('div2h').style.webkitAnimation = 'div2h_in 1s 0.5s ease-out both';


            id('W').style.webkitAnimation = 'w2_in 1s ease-out both';
            id('R').style.webkitAnimation = 'r2_in 1s 0.2s linear both';
            id('U').style.webkitAnimation = 'u2_in 1s 0.4s ease-out both';
            id('word2').style.webkitAnimation = 'word2_in 8s 1s linear both';

            timeout[2] = setTimeout(show3, 6000)
        }

        function show3() {
            setImage('3');

            id('div3v').style.webkitAnimation = 'fadein 2s ease-out both';
            id('img3v').style.webkitAnimation = 'div3v_in 6s linear both';

            id('view2h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div2v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img2v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('font2').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2h').style.webkitAnimation = 'div2h_out 1s linear both';

            id('view3h').style.webkitAnimation = 'fadein 1s linear both';
            id('imgview3h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('font3').style.webkitAnimation = 'fadein 1s linear both';
            id('div3h').style.webkitAnimation = 'div3h_in 5s ease-out both';

            id('W').style.webkitAnimation = 'w3_in 1s 1.4s ease-out both';
            id('R').style.webkitAnimation = 'r3_in 1s 1.2s ease-out both';
            id('U').style.webkitAnimation = 'u3_in 1s 1s ease-out both';
            id('word3').style.webkitAnimation = 'word3_in 4s 3s linear both';

            timeout[3] = setTimeout(show4, 6000)
        }

        function show4() {
            setImage('4');

            id('div4v').style.webkitAnimation = 'fadein 2s ease-out both';
            id('img4v').style.webkitAnimation = 'div4v_in 6s linear both';

            id('view3h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div3v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img3v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('font3').style.webkitAnimation = 'fadeout 1s linear both';
            id('div3h').style.webkitAnimation = 'div3h_out 1s linear both';

            id('view4h').style.webkitAnimation = 'fadein 1s linear both';
            id('imgview4h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('div4h').style.webkitAnimation = 'div4h_in 2s ease-out both';
            id('font4').style.webkitAnimation = 'font4_in 2s ease-out both';

            id('W').style.webkitAnimation = 'w3_out 1.5s 1s linear both';

            timeout[4] = setTimeout(function() {
                id('W').style.webkitAnimation = 'w4_in 1s ease-out both';
                id('R').style.webkitAnimation = 'r4_in 1s ease-out both';
                id('U').style.webkitAnimation = 'u4_in 1s ease-out both';
            }, 2500)


            timeout[5] = setTimeout(show5, 6000)
        }

        function show5() {
            setImage('5');

            id('div5v').style.webkitAnimation = 'fadein 1.5s ease-out both';
            id('img5v').style.webkitAnimation = 'div5v_in 6s linear both';

            id('view4h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div4v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img4v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('view5h').style.webkitAnimation = 'fadein 1s linear both';
            id('imgview5h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('div4h').style.webkitAnimation = 'div4h_out 2s ease-out both';
            id('font4').style.webkitAnimation = 'font4_out 2s ease-out both';

            id('font5').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('div5h').style.webkitAnimation = 'div5h_in 1.5s 1s ease-out both';


            id('W').style.webkitAnimation = 'w4_out 0.7s 1.7s ease-in both';
            id('R').style.webkitAnimation = 'r4_out 1.4s 1s ease-in both';
            id('U').style.webkitAnimation = 'u4_out 1.4s 1s ease-in both';

            id('font4').style.webkitAnimation = 'font4_out 1s linear both';
            id('div4h').style.webkitAnimation = 'div4v_out 1s linear both';


            timeout[6] = setTimeout(show6, 6000)
        }

        function show6() {
            setImage('6');

            id('view5h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div5v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img5v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('view6h').style.webkitAnimation = 'fadein 1s linear both';
            id('imgview6h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('W').style.webkitAnimation = 'w6_in 2s 0.2s linear both';
            id('R').style.webkitAnimation = 'r6_in 2s 0.1s linear both';
            id('U').style.webkitAnimation = 'u6_in 2s linear both';

            id('font5').style.webkitAnimation = 'fadeout 1s linear both';
            id('div5h').style.webkitAnimation = 'div5h_out 1s linear both';

            id('div6v').style.webkitAnimation = 'fadein 1s linear both';
            id('img6v').style.webkitAnimation = 'div6v_in 6s linear both';

            id('div6h').style.webkitAnimation = 'div6h_in 1.5s 1s ease-out both';
            id('font6').style.webkitAnimation = 'fadein 1s 0.5s linear both';

            id('word1').style.webkitAnimation = '';
            id('word2').style.webkitAnimation = '';
            id('word3').style.webkitAnimation = '';

            timeout[7] = setTimeout(show1, 6000)
        }

        function show1() {
            setImage('1');

            id('view6h').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('div6v').style.webkitAnimation = 'fadeout 0.5s linear both';
            id('img6v').style.webkitAnimation = 'fadeout 0.5s linear both';

            id('W').style.webkitAnimation = 'w6_out 0.8s linear both';
            id('U').style.webkitAnimation = 'u6_out 0.8s 0.2s linear both';
            id('R').style.webkitAnimation = 'r6_out 0.8s 0.4s linear both';

            id('font6').style.webkitAnimation = 'fadeout 1s linear both';
            id('div6h').style.webkitAnimation = 'div6h_out 1s linear both';


            timeout[8] = setTimeout(function() {
                id('W').style.webkitAnimation = 'w1_in 0.8s 1s ease-out both';
                id('R').style.webkitAnimation = 'r1_in 0.8s 1.3s ease-out both';
                id('U').style.webkitAnimation = 'u1_in 0.8s 1.5s ease-out both';
                id('word1').style.webkitAnimation = 'word1_in 8s 1s ease-out both';
            }, 1500)

            id('font1').style.webkitAnimation = 'fadein 1s linear both';
            id('div1h').style.webkitAnimation = 'div1h_in 1s 0.5s ease-out both';
            id('view1h').style.webkitAnimation = 'view1h_in 7s linear infinite alternate';

            id('div1v').style.webkitAnimation = 'fadein 1s 0.5s linear both';
            id('img1v').style.webkitAnimation = 'img1v_in 7s linear both';

            timeout[9] = setTimeout(show2, 6000)

        }

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 3000;
        var timeout = [];
        var showfont = false;

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
                xifenbao_zimeiti();
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
                xifenbao_zimeiti();

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

        var divwidth = { '1h': 500, '1v': 560, '2h': 500, '2v': 342, '3h': 650, '3v': 500, '4h': 500, '4v': 550, '5h': 500, '5v': 550, '6h': 500, '6v': 500 };
        var divheight = { '1h': 360, '1v': 815, '2h': 342, '2v': 815, '3h': 520, '3v': 815, '4h': 395, '4v': 815, '5h': 380, '5v': 815, '6h': 383, '6v': 815 };

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
            var viewdiv = id('view' + idname + 'h');
            var viewimg = id('imgview' + idname + 'h');

            if (img_bili > 1) {
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                idname = idname + 'h';

            } else {
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                idname = idname + 'v';

            }

            width = divwidth[idname];
            height = divheight[idname];

            div.style.display = 'block';
            div1.style.display = 'none';


            var img = id('img' + idname);
            img.src = Onload_imgs_url[image_url_index];

            // var wordspan = id('word'+idname)
            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if(str != undefined)
            //    wordspan.innerHTML = str; 

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

            if (img_bili > 1) {
                viewdiv.style.display = 'block';
                viewimg.src = Onload_imgs_url[image_url_index];

                if (img_bili > (1130 / 815)) {
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
            } else {
                viewdiv.style.display = 'none';
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
                clearTimeout(timeout[i])
            }

            var itemlist = ['xin', 'zimeiti', 'xian', 'pagetitle', 'div1v', 'div1h', 'img1v', 'font1', 'view1h', 'page0', 'W', 'R', 'U', 'word1', 'div2v', 'img2v', 'div2h', 'view2h',
                'imgview2h', 'word2', 'font2', 'word3', 'font3', 'div3v', 'img3v', 'div3h', 'view3h', 'imgview3h', 'font4', 'div4h', 'div4v', 'img4v', 'view4h', 'imgview4h', 'div5v',
                'img5v', 'div5h', 'view5h', 'imgview5h', 'font5', 'font6', 'div6v', 'div6h', 'img6v', 'view6h', 'imgview6h'
            ];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }
            for (var i = 1; i < 7; i++) {
                id('div' + i + 'h').style.display = 'none';
                id('div' + i + 'v').style.display = 'none';
                id('view' + i + 'h').style.display = 'none';
            }



        }
        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }


        call_me(load_images);
        load_init_modules();
        $("#sec_content,#biyeji_container").css("marginTop", -$(window).height());
    }
}
