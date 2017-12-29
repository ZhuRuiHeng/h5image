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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/bg.png" style="position:absolute;top:0;left:0;height:100%;width:100%"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:100px;left:500px;-webkit-animation:liuxing 5s ease-in 1s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:200px;left:500px;-webkit-animation:liuxing 5s ease-in 2s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:300px;left:500px;-webkit-animation:liuxing 5s ease-in infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:0;left:500px;-webkit-animation:liuxing 5s ease-in 1.5s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:400px;left:500px;-webkit-animation:liuxing 5s ease-in 3s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:500px;left:500px;-webkit-animation:liuxing 5s ease-in 4s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:100px;left:500px;-webkit-animation:liuxing 5s ease-in 1.5s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:200px;left:500px;-webkit-animation:liuxing 5s ease-in 2.5s infinite"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl79/lx.png" style="position:absolute;top:300px;left:500px;-webkit-animation:liuxing 5s ease-in infinite"><div id="xindiv"></div><div id="view_box"><div id="div1_view"></div></div><div id="div_box"><div id="div1"></div></div><div id="sanjiao1" class="sanjiaoup"></div><div id="sanjiao2" class="sanjiaoup"></div><div id="sanjiao3" class="sanjiaoup"></div><div id="sanjiao4" class="sanjiaoup"></div><div id="sanjiao5" class="sanjiaoup"></div><div id="sanjiao6" class="sanjiaoup"></div><div id="sanjiao7" class="sanjiaoup"></div><div id="sanjiao8" class="sanjiaoup"></div><div id="sanjiao9" class="sanjiaoup"></div><div id="sanjiao10" class="sanjiaoup"></div><div id="sanjiao11" class="sanjiaoup"></div><div id="sanjiao12" class="sanjiaoup"></div><div id="sanjiao13" class="sanjiaoup"></div><div id="sanjiao14" class="sanjiaoup"></div><div id="sanjiao15" class="sanjiaodown"></div><div id="sanjiao16" class="sanjiaodown"></div><div id="sanjiao17" class="sanjiaodown"></div><div id="sanjiao18" class="sanjiaodown"></div><div id="sanjiao19" class="sanjiaodown"></div><div id="sanjiao20" class="sanjiaodown"></div><div id="sanjiao21" class="sanjiaodown"></div><div id="sanjiao22" class="sanjiaodown"></div><div id="sanjiao23" class="sanjiaodown"></div><div id="sanjiao24" class="sanjiaodown"></div><div id="sanjiao25" class="sanjiaodown"></div><div id="sanjiao26" class="sanjiaodown"></div><div id="sanjiao27" class="sanjiaodown"></div><div id="sanjiao28" class="sanjiaodown"></div><img id="shang" src><div id="pagetitle" style="position:absolute;width:248px;height:200px;top:314px;left:124px;overflow:hidden"><div style="width:248px;height:200px;top:0;left:0;overflow:hidden"><div style="width:248px;height:200px;display:table;overflow:hidden"><div id="titlecontent" style="width:248px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;color:#515151;line-height:150%"></div></div></div></div></div>');
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
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;
        var timeout9;
        var sanjiaolist = ['sanjiao1', 'sanjiao18', 'sanjiao15', 'sanjiao5', 'sanjiao19', 'sanjiao2', 'sanjiao6', 'sanjiao16', 'sanjiao20', 'sanjiao3', 'sanjiao17', 'sanjiao7', 'sanjiao21', 'sanjiao4', 'sanjiao8', 'sanjiao25', 'sanjiao22', 'sanjiao12', 'sanjiao26', 'sanjiao9', 'sanjiao13', 'sanjiao23', 'sanjiao27', 'sanjiao10', 'sanjiao24', 'sanjiao14', 'sanjiao28', 'sanjiao11'];

        function id(name) {
            return document.getElementById(name);
        }

        function loading() {
            // e_musics(2);
            div1 = id('div1');
            // div2 = id('div2');
            // div3 = id('div3');

            div1_view = id('div1_view');
            // div2_view = id('div2_view');
            // div3_view = id('div3_view');

            view_box = id('view_box');
            div_box = id('div_box');

            for (var i = 0; i < 28; i++) {
                sanjiaolist[i] = id(sanjiaolist[i])
            }

            createheart();
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

            console.log(images.length);
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
                 distitle();
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
                distitle();

            }
        }

        function id(name) {
            return document.getElementById(name);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showtitle() {
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'titlein 1s 1.5s linear both';

            showsanjiao();
        }

        function createheart() {
            var con_div = id('xindiv');

            for (var i = 0; i < 6; i++) {
                var img = document.createElement('img');
                img.style.width = '39px';
                img.style.left = rand(0, 460) + 'px';
                img.style.top = rand(-20, 10) + 'px';
                // img.style.webkitAnimation = 'xinmove 5s '+0.25*i+'s linear infinite';
                img.src = 'http://referer-image.szwwy.com/coolphoto/img/tpl79/xin.png';

                var csstext = '@-webkit-keyframes heart' + i + ' {from{-webkit-transform: translate(0px,0px) rotate(0deg);opacity:1} to{-webkit-transform: translate(0px,500px) rotate(' + rand(-360, 360) + 'deg);opacity:0}}';
                // console.log(csstext);
                var style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                img.style.webkitAnimation = 'heart' + i + ' 5s ' + 0.5 * i + 's linear infinite';

                con_div.appendChild(img);
            }
        }


        var sanjiaotype = true;

        function showsanjiao() {
            sanjiaoindex = 0;

            inter = setInterval(function() {
                var img = sanjiaolist[sanjiaoindex];
                img.style.opacity = 0.3;

                sanjiaoindex++;

                if (sanjiaoindex > 14) {
                    var img = sanjiaolist[sanjiaoindex - 14];
                    img.style.opacity = 1;

                    if (sanjiaoindex == 28) {
                        clearInterval(inter);
                        return;
                    }

                }

            }, 100)
        }

        function distitle() {
            var rand_x = [];
            var rand_y = [];


            // id('xindiv').style.display = 'none';

            for (var i = 0; i < 28; i++) {


                if (i > 25 || i < 15) {
                    sanjiaolist[i].style.display = 'none';
                } else {

                    if (i % 2 == 0) {
                        rand_x[i] = -rand(400, 500);
                        rand_y[i] = rand(-600, 600);
                        var csstext = '@-webkit-keyframes heartmove' + i + ' {from{-webkit-transform: translate(0px,0px)} to{-webkit-transform: translate(' + rand_x[i] + 'px,' + rand_y[i] + 'px)}}';
                    } else {
                        rand_x[i] = rand(400, 500);
                        rand_y[i] = rand(-600, 600);
                        var csstext = '@-webkit-keyframes heartmove' + i + ' {from{-webkit-transform: translate(0px,0px)} to{-webkit-transform: translate(' + rand_x[i] + 'px,' + rand_y[i] + 'px)}}';
                    }

                    var style = document.createElement('style');
                    document.head.appendChild(style);
                    var sheet = style.sheet;
                    sheet.insertRule(csstext, 0);



                    sanjiaolist[i].style.webkitAnimation = 'heartmove' + i + ' ' + rand(15, 25) / 10 + 's linear both';


                }
                // console.log(img.style.webkitAnimtion);
            }

            for (var i = 0; i < 28; i++) {
                var csstext = '@-webkit-keyframes moveto' + i + ' {from{-webkit-transform: translate(' + rand_x[i] + 'px,' + rand_y[i] + 'px)} to{-webkit-transform: translate(' + (-rand_x[i]) + 'px,' + (-rand_y[i]) + 'px)}}';
                var style = document.createElement('style');
                console.log(csstext);
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                var csstext1 = '@-webkit-keyframes moveback' + i + ' {from{-webkit-transform: translate(' + (-rand_x[i]) + 'px,' + (-rand_y[i]) + 'px)} to{-webkit-transform: translate(' + rand_x[i] + 'px,' + rand_y[i] + 'px)}}';
                var style1 = document.createElement('style');
                console.log(csstext1);
                document.head.appendChild(style1);
                var sheet1 = style1.sheet;
                sheet1.insertRule(csstext1, 0);
            }

            id('pagetitle').style.webkitAnimation = 'titleout 0.7s linear both';

            timeout1 = setTimeout(show1, 300);
        }


        function show1() {
            setImageindex();

            view_box.style.webkitAnimation = 'moving_down 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            if (img_bili > 1) {
                var img_width = 440;
            } else {
                if (img_bili < (500 / 800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width / img_bili;
            div1.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1.style.width = img_width + 'px';
            div1_view.style.width = img_width + 'px';
            div1.style.left = (500 - img_width) / 2 + 'px';
            div1_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //ͼƬ����
            {

                div1.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1_view.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780 - img_height) / 2 + 'px';
                div1_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s ease-in-out both';


            timeout9 = setTimeout(function() {
                div1.style.webkitAnimation = 'div1_out 1s linear both';
                div1_view.style.webkitAnimation = 'div1_view_out 1s linear both';
            }, 5000)


            timeout2 = setTimeout(show2, 6000)
        }

        function show2() {
            sanjiaoani();

            image_url_index++;
            setImageindex();

            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            if (img_bili > 1) {
                var img_width = 440;
            } else {
                if (img_bili < (500 / 800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width / img_bili;
            div1.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1.style.width = img_width + 'px';
            div1_view.style.width = img_width + 'px';
            div1.style.left = (500 - img_width) / 2 + 'px';
            div1_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //ͼƬ����
            {

                div1.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1_view.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780 - img_height) / 2 + 'px';
                div1_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div2_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div2_view_in 1.5s 1s ease-in-out both';

            view_box.style.webkitAnimation = 'moving_right 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout3 = setTimeout(function() {
                div1.style.webkitAnimation = 'div2_out 1s linear both';
                div1_view.style.webkitAnimation = 'div2_view_out 1s linear both';
            }, 5000)


            timeout4 = setTimeout(show3, 6000)
        }

        function show3() {
            sanjiaoani();

            image_url_index++;
            setImageindex();

            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            if (img_bili > 1) {
                var img_width = 440;
            } else {
                if (img_bili < (500 / 800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width / img_bili;
            div1.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1.style.width = img_width + 'px';
            div1_view.style.width = img_width + 'px';
            div1.style.left = (500 - img_width) / 2 + 'px';
            div1_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //ͼƬ����
            {

                div1.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1_view.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (760 - img_height) / 2 + 'px';
                div1_view.style.top = (760 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div3_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div3_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            timeout5 = setTimeout(function() {
                div1.style.webkitAnimation = 'div3_out 1s linear both';
                div1_view.style.webkitAnimation = 'div3_view_out 1s linear both';
            }, 4000)


            timeout6 = setTimeout(show4, 5000)
        }

        function show4() {
            sanjiaoani();

            image_url_index++;
            setImageindex();
            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];

            if (img_bili > 1) {
                var img_width = 440;
            } else {
                if (img_bili < (500 / 800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width / img_bili;
            div1.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div1.style.width = img_width + 'px';
            div1_view.style.width = img_width + 'px';
            div1.style.left = (500 - img_width) / 2 + 'px';
            div1_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //ͼƬ����
            {

                div1.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1_view.style.backgroundPosition = '0px -' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780 - img_height) / 2 + 'px';
                div1_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_up 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout7 = setTimeout(function() {
                div1.style.webkitAnimation = 'div1_out 1s linear both';
                div1_view.style.webkitAnimation = 'div1_view_out 1s linear both';
            }, 5000)

            timeout8 = setTimeout(show2, 6000)
        }

        function setImageindex() {
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
        }

        function sanjiaoani() {
            for (var i = 0; i < 28; i++) {
                if (sanjiaotype)
                    sanjiaolist[i].style.webkitAnimation = 'moveto' + i + ' ' + rand(20, 30) / 10 + 's ease-out both';
                else
                    sanjiaolist[i].style.webkitAnimation = 'moveback' + i + ' ' + rand(20, 30) / 10 + 's ease-out both';

            }
            sanjiaotype = !sanjiaotype;
            // console.log(sanjiaotype);
            console.log(sanjiaolist[0].style.webkitAnimation)
        }


        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            for (var i = 0; i < 28; i++) {
                sanjiaolist[i].style.webkitAnimation = '';
                sanjiaolist[i].style.opacity = 0;
                // sanjiaolist[i].style.display = 'block';
            }

            div1.style.webkitAnimation = '';
            div1_view.style.webkitAnimation = '';
            // div2.style.webkitAnimation = '';
            // div2_view.style.webkitAnimation = '';
            // div3.style.webkitAnimation = '';
            // div3_view.style.webkitAnimation = '';
            view_box.style.webkitAnimation = '';
            div_box.style.webkitAnimation = '';

            clearInterval(inter);

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
        }


        call_me(loading);
        load_init_modules();
    }
}
