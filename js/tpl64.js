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
        $("#div_player").append('<div id="container" style="position:absolute;top:0;left:0;width:500px;height:815px;overflow:hidden"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl64/bg.jpg" style="position:absolute;top:0;left:0"> <img class="yun1" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/yun.png"> <img class="yun2" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/yun1.png"><div id="view_box"><div id="div1_view"></div><div id="div2_view"></div></div><div id="div_box"><div id="div1"><span id="word1" class="showwords"></span></div><div id="div2"><span id="word2" class="showwords"></span></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl64/bg2.png" style="position:absolute;top:-15px;left:0"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hua.png" style="position:absolute;top:685px;left:0"><div id="pagetitle"><img width="440" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/bg1.png"><div id="wordscon"><div id="line1"></div><div id="line2"></div><div id="line3"></div></div></div><div id="huabanmen"><img id="hua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua4" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua5" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua6" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"> <img id="hua7" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/fengye.png"></div><div id="hudie" style="position:absolute;top:600px;left:-60px;width:100px;height:100px"><div id="hudie1" style="display:none"><img id="shang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie.png"> <img id="xia1" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie1.png"></div><div id="hudie2"><img id="shang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie.png"> <img id="xia2" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie1.png"></div></div><div id="hudie3"><img id="shang3" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie.png"> <img id="xia3" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie1.png"></div><div id="hudie4"><img id="shang4" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie.png"> <img id="xia4" src="http://referer-image.szwwy.com/coolphoto/img/tpl64/hudie1.png"></div></div>');
        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 1s ease-out both';
            if (e_desc.length < 11) {
                id('line1').innerHTML = '';
                id('line3').innerHTML = '';
                id('line2').innerHTML = e_desc;
            } else if (e_desc.length < 21) {
                id('line1').innerHTML = e_desc.substring(0, 10);
                id('line2').innerHTML = e_desc.substring(10, e_desc.length);
                id('line3').innerHTML = '';
            } else {
                id('line1').innerHTML = e_desc.substring(0, 10);
                id('line2').innerHTML = e_desc.substring(10, 20);
                id('line3').innerHTML = e_desc.substring(20, e_desc.length);
            }

            id('line1').style.webkitAnimation = 'wordsup 0.5s linear both';
            id('line2').style.webkitAnimation = 'wordsup 0.5s 0.2s linear both';
            id('line3').style.webkitAnimation = 'wordsup 0.5s 0.4s linear both';
            id('wordscon').style.webkitAnimation = 'wordsmoving 1s linear 1s infinite alternate';
        }

        function zimeitixfb() {
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            show1();
        }

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 4000;

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

        function id(name) {
            return document.getElementById(name);
        }

        function loading() {

            div1 = id('div1');
            div1_view = id('div1_view');
            div2 = id('div2');
            div2_view = id('div2_view');

            view_box = id('view_box');
            div_box = id('div_box');

            load_images();

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

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
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

        function show1() {
            setImageindex();

            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word1 = id('word1');
            // var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word1_string != undefined) {
            //     word1_string = word1_string.replace(/[\n]/ig, '');

            //     var word1_length = word1_string.length;
            //     if (word1_length > 4) {
            //         word1.style.fontSize = "25px";
            //         if (word1_length > 10)
            //             word1_string = insertEnter(word1_string, 5);
            //     } else {

            //         word1.style.fontSize = "28px";

            //     }

            //     word1.innerText = word1_string;
            // } else {
            //     word1.innerText = "";
            // }

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

            if (img_bili < (500 / 800)) //图片过长
            {

                div1.style.backgroundPosition = '-0px ' + (img_height - 780) / 2 + 'px';
                console.log('-0px -' + (img_height - 780) / 2 + 'px');
                div1_view.style.backgroundPosition = '0px ' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '-0px -20px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780 - img_height) / 2 + 'px';
                div1_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s ease-in-out both';

            timeout1 = setTimeout(show2, 5000)
        }

        function show2() {
            image_url_index++;
            setImageindex();

            div1.style.webkitAnimation = 'div1_out 1s linear both';
            div1_view.style.webkitAnimation = 'div1_view_out 1s linear both';

            div2.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div2_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word2 = id('word2');
            // var word2_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word2_string != undefined) {
            //     word2_string = word2_string.replace(/[\n]/ig, '');

            //     var word2_length = word2_string.length;
            //     if (word2_length > 4) {
            //         word2.style.fontSize = "25px";
            //         if (word2_length > 10)
            //             word2_string = insertEnter(word2_string, 5);
            //     } else {
            //         word2.style.fontSize = "28px";

            //     }

            //     word2.innerText = word2_string;
            // } else {
            //     word2.innerText = "";
            // }

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
            div2.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div2_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div2.style.width = img_width + 'px';
            div2_view.style.width = img_width + 'px';
            div2.style.left = (500 - img_width) / 2 + 'px';
            div2_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //图片过长
            {

                div2.style.backgroundPosition = '-0px ' + (img_height - 780) / 2 + 20 + 'px';
                div2_view.style.backgroundPosition = '0px ' + (img_height - 780) / 2 + 'px';
                div2.style.height = '600px';
                div2_view.style.height = '600px';
                div2.style.top = '90px';
                div2_view.style.top = '90px';
            } else {
                div2.style.backgroundPosition = '-0px -20px';
                div2_view.style.backgroundPosition = '0px 0px';
                div2.style.height = img_height + 'px';
                div2_view.style.height = img_height + 'px';
                div2.style.top = (780 - img_height) / 2 + 'px';
                div2_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div2.style.webkitAnimation = 'div2_in 1.5s 1s ease-in-out both';
            div2_view.style.webkitAnimation = 'div2_view_in 1.5s 1s ease-in-out both';

            view_box.style.webkitAnimation = 'moving_right 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout2 = setTimeout(show3, 5000)
        }

        function show3() {

            image_url_index++;
            setImageindex();

            div2.style.webkitAnimation = 'div2_out 1s linear both';
            div2_view.style.webkitAnimation = 'div2_view_out 1s linear both';

            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word1 = id('word1');
            // var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word1_string != undefined) {
            //     word1_string = word1_string.replace(/[\n]/ig, '');

            //     var word1_length = word1_string.length;
            //     if (word1_length > 4) {
            //         word1.style.fontSize = "25px";
            //         if (word1_length > 10)
            //             word1_string = insertEnter(word1_string, 5);
            //     } else {
            //         word1.style.fontSize = "28px";
            //     }

            //     word1.innerText = word1_string;

            // } else {
            //     word1.innerText = "";
            // }

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

            if (img_bili < (500 / 800)) //图片过长
            {

                div1.style.backgroundPosition = '-0px ' + (img_height - 780) / 2 + 20 + 'px';
                div1_view.style.backgroundPosition = '0px ' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '-0px -20px';
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

            timeout3 = setTimeout(show4, 5000)
        }

        function show4() {
            div1.style.webkitAnimation = 'div3_out 1s linear both';
            div1_view.style.webkitAnimation = 'div3_view_out 1s linear both';

            image_url_index++;
            setImageindex();
            div2.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div2_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word2 = id('word2');
            // var word2_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word2_string != undefined) {
            //     word2_string = word2_string.replace(/[\n]/ig, '');

            //     var word2_length = word2_string.length;
            //     if (word2_length > 4) {
            //         word2.style.fontSize = "25px";
            //         if (word2_length > 10)
            //             word2_string = insertEnter(word2_string, 5);
            //     } else {
            //         word2.style.fontSize = "28px";
            //     }

            //     word2.innerText = word2_string;
            // } else {
            //     word2.innerText = "";
            // }

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
            div2.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div2_view.style.backgroundSize = img_width + 'px ' + img_height + 'px';
            div2.style.width = img_width + 'px';
            div2_view.style.width = img_width + 'px';
            div2.style.left = (500 - img_width) / 2 + 'px';
            div2_view.style.left = (500 - img_width) / 2 + 'px';

            if (img_bili < (500 / 800)) //图片过长
            {

                div2.style.backgroundPosition = '-0px ' + (img_height - 780) / 2 + 20 + 'px';
                div2_view.style.backgroundPosition = '0px ' + (img_height - 780) / 2 + 'px';
                div2.style.height = '600px';
                div2_view.style.height = '600px';
                div2.style.top = '90px';
                div2_view.style.top = '90px';
            } else {
                div2.style.backgroundPosition = '-0px -20px';
                div2_view.style.backgroundPosition = '0px 0px';
                div2.style.height = img_height + 'px';
                div2_view.style.height = img_height + 'px';
                div2.style.top = (780 - img_height) / 2 + 'px';
                div2_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div2.style.webkitAnimation = 'div1_in 1.5s 1s ease-in-out both';
            div2_view.style.webkitAnimation = 'div1_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_right 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout4 = setTimeout(show5, 6000)
        }

        function show5() {
            div2.style.webkitAnimation = 'div1_out 1s linear both';
            div2_view.style.webkitAnimation = 'div1_view_out 1s linear both';

            image_url_index++;
            setImageindex();
            div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            div1_view.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            // var word1 = id('word1');
            // var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word1_string != undefined) {
            //     word1_string = word1_string.replace(/[\n]/ig, '');

            //     var word1_length = word1_string.length;
            //     if (word1_length > 4) {
            //         word1.style.fontSize = "25px";
            //         if (word1_length > 10)
            //             word1_string = insertEnter(word1_string, 5);
            //     } else {
            //         word1.style.fontSize = "28px";
            //     }
            //     word1.innerText = word1_string;
            // } else {
            //     word1.innerText = "";
            // }

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

            if (img_bili < (500 / 800)) //图片过长
            {

                div1.style.backgroundPosition = '-0px ' + (img_height - 780) / 2 + 20 + 'px';
                div1_view.style.backgroundPosition = '0px ' + (img_height - 780) / 2 + 'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            } else {
                div1.style.backgroundPosition = '-0px -20px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780 - img_height) / 2 + 'px';
                div1_view.style.top = (780 - img_height) / 2 + 'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            timeout5 = setTimeout(show2, 6000)
        }

        function setImageindex() {
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                if (image_url_index % step_loadnum == 0) {
                    // alert()
                    step_load();
                    break;
                }
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            console.log('setimg:' + Onload_imgs_url[image_url_index]);
            if (image_url_index % step_loadnum == 0) {
                // alert()
                step_load();
            }
        }


        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            div1.style.webkitAnimation = '';
            div2.style.webkitAnimation = '';
            div1_view.style.webkitAnimation = '';
            div2_view.style.webkitAnimation = '';
            view_box.style.webkitAnimation = '';
            div_box.style.webkitAnimation = '';
            id('wordscon').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation = '';


            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);

        }

        call_me(loading);
        load_init_modules();
    }
}
