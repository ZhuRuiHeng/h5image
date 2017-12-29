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
        $("#div_player").append('<div id="container"><div id="pagetitle"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic1.png" width="400"><div style="position:absolute;width:284px;height:184px;top:67px;left:55px;overflow:hidden"><div style="position:absolute;width:284px;height:184px;display:table;overflow:hidden"><div id="titlecontent" style="width:284px;height:184px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:45px;color:#555;opacity:0"></div></div></div></div><div id="div1"><div id="div1h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic1.png"><div class="divh"><img id="img1h" style="position:absolute"></div></div><div id="div1v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic5.png"><div class="divv"><img id="img1v" style="position:absolute"></div></div></div><div id="div2"><div id="div2h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic1.png"><div class="divh"><img id="img2h" style="position:absolute"></div></div><div id="div2v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic5.png"><div class="divv"><img id="img2v" style="position:absolute"></div></div></div><div id="div3"><div id="div3h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic1.png"><div class="divh"><img id="img3h" style="position:absolute"></div></div><div id="div3v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic5.png"><div class="divv"><img id="img3v" style="position:absolute"></div></div></div><div id="div4"><div id="div4h" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic1.png"><div class="divh"><img id="img4h" style="position:absolute"></div></div><div id="div4v" style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic5.png"><div class="divv"><img id="img4v" style="position:absolute"></div></div></div><img class="longzhou" src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic4.png" width="100%"><div class="dt1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic2.png" width="100%"></div><div class="dt2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic7.png" width="100%"></div><div class="dt3"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic6.png" width="100%"></div><div id="pFQI2W33c-an-obj-3"><div><img height="85" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic3.png"></div></div><div id="pFQI2W33c-an-obj-4"><div><img height="85" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl86/pic3.png"></div></div></div>');

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

        var delaytime = 4000;

        function id(name) {
            return document.getElementById(name);
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
            //showtitle();
            canshow = true;
            for (var i = 0; i < images.length; i++) {
                var img = new Image();
                img.index = i;
                img.src = images[i][1];
                img.onload = image_onload;
                img.onerror = image_onerror;
                Onload_imgs_url[i] = 'loading';
            }
        }

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < 10)
                error_num++;
            Onload_imgs_url[index] = 'not find';
            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zmtxifenbao_fromzmt();
            }
        }

        function image_onload(event) {
            if (reshow == true)
                return;

            var img = event.target;
            var index = img.index;

            if (index < 10) {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zmtxifenbao_fromzmt();

            }
        }

        function id(name) {
            return document.getElementById(name);
        }


        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 0.5s ease-in both';
            id('titlecontent').innerHTML = e_desc;
            id('titlecontent').style.webkitAnimation = 'title_in 0.5s 0.2s ease-in both';
        }

        function zmtxifenbao_fromzmt() {
            setImage('1');
            //id('pagetitle').style.webkitAnimation = 'title_out 4s cubic-bezier(.26,.01,.7,.7) both';
            id('div1').style.webkitAnimation = 'div1_in 4s cubic-bezier(.24,.2,.64,.99) both';

            timeout1 = setTimeout(show2, 5000)
        }

        function show2() {
            setImage('2')
            id('div1').style.webkitAnimation = 'div1_out 4s 1s cubic-bezier(.26,.01,.7,.7) both';
            id('div2').style.webkitAnimation = 'div2_in 4s ease-out both';

            timeout2 = setTimeout(show3, 6000)
        }

        function show3() {
            setImage('3')
            id('div2').style.webkitAnimation = 'div2_out 4s ease-in both';
            id('div3').style.webkitAnimation = 'div3_in 4s ease-out both';

            timeout3 = setTimeout(show4, 5000)
        }

        function show4() {
            setImage('4')
            id('div3').style.webkitAnimation = 'div3_out 4s ease-in both';
            id('div4').style.webkitAnimation = 'div4_in 4s ease-out both';

            timeout4 = setTimeout(show1, 5000)
        }

        function show1() {
            setImage('1')
            id('div4').style.webkitAnimation = 'div4_out 4s ease-in both';
            id('div1').style.webkitAnimation = 'div1_in 4s ease-out both';

            timeout5 = setTimeout(show2, 5000);
        }

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                width = 320;
                height = 207;
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                width = 223;
                height = 327;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img' + divname);
            img.src = Onload_imgs_url[image_url_index];
            console.log(img.src);

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


        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('div3').style.webkitAnimation = '';
            id('div4').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('titlecontent').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
        }


        call_me(load_images);
        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl85/
