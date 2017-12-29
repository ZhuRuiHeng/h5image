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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl88/bg.jpg"><div id="div2-up" class="div-up"><img class="kuang-up" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img2-up" class="myimg-up"></div></div><div id="div2-down" class="div-down"><img class="kuang-down" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img2-down" class="myimg-down"></div></div><div id="div1-down" class="div-down"><img class="kuang-down" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img1-down" class="myimg-down"></div></div><div id="div1-up" class="div-up"><img class="kuang-up" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img1-up" class="myimg-up"></div></div><div id="div4" class="div3"><img class="kuang-up" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img4-up" class="myimg-up"></div></div><div id="div5-up"><img class="kuang-up" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img5-up" class="myimg-up"></div></div><div id="div5-down"><img class="kuang-down" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img5-down" class="myimg-down"></div></div><div id="div3" class="div3"><img class="kuang-up" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic5.png"><div id="img3-up" class="myimg-up"></div></div><div id="myword1" class="myword"></div><div id="myword2" class="myword"></div><div id="myword3" class="myword"></div><div id="myword4" class="myword"></div><div id="myword5" class="myword"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic7.png"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic6.png"><div class="ling"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic2.png"> <img class="yuxian" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic1.png"> <img class="yu" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic8.png"></div><img class="xian1" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic4.png"> <img class="xian2" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic4.png"> <img id="jiao1" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic9.png"> <img id="jiao2" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic9.png"> <img id="jiao3" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic9.png"> <img id="jiao4" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic9.png"> <img id="dongzhibg" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic10.png"> <img id="suiyue" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic3.png"> <img id="xueqing" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic11.png"> <img id="dongzhi" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic12.png"><div id="titlediv"><div id="line1"></div><div id="line2"></div><div id="snow1" class="snowshun"><img width="30" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow2" class="snowshun"><img width="35" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow3" class="snowshun"><img width="40" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow4" class="snowshun"><img width="45" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow5" class="snowshun"><img width="40" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow6" class="snowshun"><img width="35" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow7" class="snowshun"><img width="30" class="snowup" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow8" class="snowni"><img width="30" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow9" class="snowni"><img width="35" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow10" class="snowni"><img width="40" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow11" class="snowni"><img width="45" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow12" class="snowni"><img width="40" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow13" class="snowni"><img width="35" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="snow14" class="snowni"><img width="30" class="snowdown" src="http://referer-image.szwwy.com/coolphoto/img/tpl88/pic13.png"></div><div id="word1" class="title"></div><div id="word2" class="title"></div><div id="word3" class="title"></div></div><div id="snowdiv"></div></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showdongzhi() {
            id('dongzhibg').style.webkitAnimation = 'fadein 1s linear both';
        }

        function showtitle() {
            id('line1').style.webkitAnimation = 'linein 2s linear both';
            id('line2').style.webkitAnimation = 'linein 2s linear both';

            for (var i = 1; i < 15; i++) {
                // id('snow' + i).style.webkitTransform = 'translate(0px,-'+rand(10,30)+'px)';
                id('snow' + i).style.webkitTransition = '-webkit-transform linear 2s,opacity linear 2s';
                id('snow' + i).style.webkitTransform = 'translate(0px,0px)';
                id('snow' + i).style.opacity = 1;
            }

            if (e_desc.length < 11) {
                id('word1').innerHTML = e_desc;
                id('word2').innerHTML = '';
                id('word3').innerHTML = '';
                id('word1').style.top = '355px';
            } else if (e_desc.length < 21) {
                id('word1').innerHTML = e_desc.substring(0, 10);
                id('word2').innerHTML = e_desc.substring(10, 20);
                id('word3').innerHTML = '';
                id('word1').style.top = '335px';
                id('word2').style.top = '375px';
            } else {
                id('word1').innerHTML = e_desc.substring(0, 10);
                id('word2').innerHTML = e_desc.substring(10, 20);
                id('word3').innerHTML = e_desc.substring(10, e_desc.length);
                id('word1').style.top = '320px';
                id('word2').style.top = '355px';
                id('word3').style.top = '390px';
            }

            id('word1').style.webkitAnimation = 'wordin 1s 1s linear both';
            id('word2').style.webkitAnimation = 'wordin 1s 2s linear both';
            id('word3').style.webkitAnimation = 'wordin 1s 3s linear both';

        }

        function zimeiti() {
            id('word1').style.webkitAnimation = 'fadeout 1.5s linear both';
            id('word2').style.webkitAnimation = 'fadeout 1.5s linear both';
            id('word3').style.webkitAnimation = 'fadeout 1.5s linear both';

            id('line1').style.webkitAnimation = 'lineout 2s linear both';
            id('line2').style.webkitAnimation = 'lineout 2s linear both';

            for (var i = 1; i < 15; i++) {
                id('snow' + i).style.webkitAnimation = 'snowing' + rand(0, 2) + ' linear ' + rand(8, 12) + 's both';
            }

            timeout[1] = setTimeout(show1, 2000)
        }

        function show1() {
            setImage('1');
            id('div1-up').style.webkitAnimation = 'div1_in 2s linear both';
            id('div1-down').style.webkitAnimation = 'div1_in 2s linear both';

            id('myword1').style.webkitAnimation = 'fadein 1s linear both';


            timeout[2] = setTimeout(show2, 6000)
        }

        function show2() {
            setImage('2');

            id('myword1').style.webkitAnimation = 'fadeout 1s linear both';
            id('myword2').style.webkitAnimation = 'fadein 1s 1s linear both';

            id('div1-up').style.webkitAnimation = 'div1-up-out 3s linear both';
            id('div1-down').style.webkitAnimation = 'fadeout 3s linear both';

            id('div2-up').style.webkitAnimation = 'fadein 3s linear both';
            id('div2-down').style.webkitAnimation = 'div2-down-in 3s linear both';

            timeout[3] = setTimeout(show3, 6000)
        }

        function show3() {
            setImage('3');

            id('div3').style.webkitTransformOrigin = '90% 50%';
            id('div3').style.webkitAnimation = 'div3-in 3s linear both';

            id('div2-up').style.webkitAnimation = 'fadeout 2s 1s linear both';
            id('div2-down').style.webkitAnimation = 'fadeout 2s 1s linear both';

            id('myword2').style.webkitAnimation = 'fadeout 1s linear both';
            id('myword3').style.webkitAnimation = 'fadein 1s 1s linear both';

            timeout[4] = setTimeout(show4, 6000)
        }

        function show4() {
            setImage('4');

            id('div3').style.webkitTransformOrigin = '11% 50%';
            id('div3').style.webkitAnimation = 'div3-out 3s linear both';

            id('div4').style.webkitAnimation = 'fadein 3s linear both';

            id('myword3').style.webkitAnimation = 'fadeout 1s linear both';
            id('myword4').style.webkitAnimation = 'fadein 1s 1s linear both';

            timeout[5] = setTimeout(show5, 6000)
        }

        function show5() {
            setImage('5')

            id('div4').style.webkitAnimation = 'fadeout 2s 1s linear both';
            id('div5-up').style.webkitAnimation = 'div5-up-in 3s linear both';
            id('div5-down').style.webkitAnimation = 'div5-down-in 3s linear both';

            id('myword4').style.webkitAnimation = 'fadeout 1s linear both';
            id('myword5').style.webkitAnimation = 'fadein 1s 1s linear both';

            timeout[7] = setTimeout(show6, 6000)
        }

        function show6() {
            setImage('1');
            id('div5-up').style.webkitAnimation = 'div5-up-out 3s linear both';
            id('div5-down').style.webkitAnimation = 'div5-down-out 3s linear both';

            id('div1-up').style.webkitAnimation = 'fadein 1s linear both';
            id('div1-down').style.webkitAnimation = 'fadein 1s linear both';

            id('myword5').style.webkitAnimation = 'fadeout 1s linear both';
            id('myword1').style.webkitAnimation = 'fadein 1s 1s linear both';

            timeout[8] = setTimeout(show2, 6000)
        }

        function createsnow() {
            var snownum = 15;
            var con = id('snowdiv')
            for (var i = 0; i < snownum; i++) {
                var img = document.createElement('img');
                img.src = 'https://img.alicdn.com/imgextra/i2/1016194477/TB29_nKa9hlpuFjSspkXXa1ApXa_!!1016194477.png';
                img.style.width = rand(15, 50) + 'px';
                img.style.top = '-100px';
                img.style.left = rand(-200, 370) + 'px';
                img.style.position = 'absolute';
                img.style.webkitAnimation = 'snowing' + i % 3 + ' linear ' + rand(8, 12) + 's ' + rand(0, 10) + 's infinite';
                con.appendChild(img);
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

            var div = id('img' + idname + '-up');

            div.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';


            // var word = id('myword' + idname);
            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined) {
            //     word.innerHTML = str;
            // } else {
            //     word.innerHTML = '';
            // }
            //500 760
            if (img_bili <= (380 / 570)) {
                var height = 570;
                var width = 570 * img_bili;
                var top = 0;
                var left = (380 - width) / 2;
            } else {
                var width = 380;
                var height = 380 / img_bili;
                var left = 0;
                var top = (570 - height) / 2
            }

            div.style.backgroundSize = (width) + 'px ' + (height) + 'px';
            div.style.backgroundPosition = left + 'px ' + top + 'px';

            if (idname != '3' && idname != '4') {
                var div1 = id('img' + idname + '-down');
                div1.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
                div1.style.backgroundSize = (width) + 'px ' + (height) + 'px';
                div1.style.backgroundPosition = left + 'px ' + top + 'px';
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

        function loading() {
            load_images();
            createsnow();
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
                zimeiti();
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
                zimeiti();
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

            var itemlist = ['div1-up', 'div1-down', 'div2-up', 'div2-down', 'div3', 'div4', 'div5-up', 'div5-down', 'myword1', 'myword2', 'myword3', 'myword4', 'myword5', 'line1', 'line2', 'word1', 'word2', 'word3'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }

        call_me(loading);
        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl87/
