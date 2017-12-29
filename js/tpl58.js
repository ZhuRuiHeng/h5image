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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bg.jpg"><div id="pagediv0"><img id="t1-0" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui.png"> <img id="t1-2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/chuan.png"> <img id="t1-1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/qiao.png"> <img id="t1-3" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui5.png"><div id="line1" class="line"></div><div id="line2" class="line"></div><div id="line3" class="line"></div></div><div id="pagediv1"><div id="div1"><div id="div1h-gray"><div id="img1h-gray" class="img"></div></div><div id="div1h"><div id="div1h-1" class="div1hitem" style="left:0"><div id="img1h-1" class="img"></div><div id="kuang1h-1" class="div1hitem"><img id="kuangimg1h-1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1h-2" class="div1hitem" style="left:115px"><div id="img1h-2" class="img"></div><div id="kuang1h-2" class="div1hitem"><img id="kuangimg1h-2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1h-3" class="div1hitem" style="left:230px"><div id="img1h-3" class="img"></div><div id="kuang1h-3" class="div1hitem"><img id="kuangimg1h-3" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1h-4" class="div1hitem" style="left:345px"><div id="img1h-4" class="img"></div><div id="kuang1h-4" class="div1hitem"><img id="kuangimg1h-4" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><span class="showwords" id="word1h"></span></div><img id="kuang1h" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"><div id="div1v-gray"><div id="img1v-gray" class="img"></div></div><div id="div1v"><div id="div1v-1" class="div1vitem" style="left:0"><div id="img1v-1" class="img"></div><div id="kuang1v-1" class="div1vitem"><img id="kuangimg1v-1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1v-2" class="div1vitem" style="left:82px"><div id="img1v-2" class="img"></div><div id="kuang1v-2" class="div1vitem"><img id="kuangimg1v-2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1v-3" class="div1vitem" style="left:164px"><div id="img1v-3" class="img"></div><div id="kuang1v-3" class="div1vitem"><img id="kuangimg1v-3" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><div id="div1v-4" class="div1vitem" style="left:246px"><div id="img1v-4" class="img"></div><div id="kuang1v-4" class="div1vitem"><img id="kuangimg1v-4" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div></div><span id="word1v" class="showwords"></span></div><img id="kuang1v" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk3.png"></div><img id="t2-0" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui1.png"> <img id="t2-1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui3.png"></div><div id="pagediv2"><div id="div2v" class="img"><div id="div2v-gray"><div id="img2v-gray" class="img"></div></div><div id="div2v-1"><div id="img2v-1" class="div2vitem"></div></div><div id="div2v-2"><div id="img2v-2" class="div2vitem"></div></div><div id="div2v-3"><div id="img2v-3" class="div2vitem"></div></div><span id="word2v" class="showwords"></span> <img id="kuang2v" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk1.png"></div><div id="div2h" class="img"><div id="div2h-gray"><div id="img2h-gray" class="img"></div></div><div id="div2h-1"><div id="img2h-1" class="div2hitem"></div></div><div id="div2h-2"><div id="img2h-2" class="div2hitem"></div></div><div id="div2h-3"><div id="img2h-3" class="div2hitem"></div></div><span id="word2h" class="showwords"></span> <img id="kuang2h" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk1.png"></div><img id="dahe1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/dahe1.png"> <img id="dahe2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/dahe2.png"> <img id="t3-0" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui2.png"></div><div id="pagediv3"><div id="div3h"><div id="img3h"><span id="word3h" class="showwords"></span></div><img id="kuang3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk1.png"></div><div id="div3v"><div id="img3v"><span id="word3v" class="showwords"></span></div><img id="kuang3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/bk1.png"></div><img id="t4-0" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/shanshui4.png">  <img id="t4-2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/hequn.png"> <img id="t4-3" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/fangzi.png"></div><img id="he1" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/he.gif"> <img id="he2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/he.gif"> <img id="t2-2" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/hequn1.png"> <img id="t2-3" src="http://referer-image.szwwy.com/coolphoto/img/tpl58/hequn2.png"></div>');

        function id(name) {
            return document.getElementById(name);
        }

        var he_arr = ['http://referer-image.szwwy.com/coolphoto/img/tpl58/h1.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h2.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h3.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h4.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h5.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h6.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h7.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h8.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h9.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h10.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h11.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h12.png', 'http://referer-image.szwwy.com/coolphoto/img/tpl58/h13.png'];

        function showtitle() {
            // show3()
            // return;
            id('t1-0').style.webkitAnimation = 'fadeinleft 1s ease-out both';
            id('t1-1').style.webkitAnimation = 'fadein 1s linear both';
            id('t1-2').style.webkitAnimation = 't1-2 2s linear infinite alternate,fadein 1s linear both';
            id('t1-3').style.webkitAnimation = 'fadein 1s linear both';

            // if (e_desc.length > 20) {
            //     id('line1').style.left = '307px';
            //     id('line2').style.left = '250px';
            //     id('line3').style.left = '192px';
            // } else if (e_desc.length < 11) {
            //     id('line1').style.left = '257px';
            //     id('line2').innerHTML = '';
            // } else {
            //     id('line1').style.left = '290px';
            //     id('line2').style.left = '220px';
            //     id('line2').innerHTML = '';
            //     id('line3').innerHTML = '';
            // }

            // var innertext = '';
            // for (var i = 0; i < e_desc.length; i++) {
            //     if (i < 10) {
            //         innertext = innertext + e_desc[i] + '<br>';
            //         if (i == 9 || i == e_desc.length - 1) {
            //             id('line1').innerHTML = innertext;
            //             innertext = '';
            //         }
            //     } else if (i < 20) {
            //         innertext = innertext + e_desc[i] + '<br>';
            //         if (i == 19 || i == e_desc.length - 1) {
            //             id('line2').innerHTML = innertext;
            //             innertext = '';
            //         }
            //     } else {
            //         innertext = innertext + e_desc[i] + '<br>';
            //         if (i == e_desc.length - 1) {
            //             id('line3').innerHTML = innertext;
            //         }
            //     }
            // }

            id('line1').style.webkitAnimation = 'fadeinleft 1s ease-out both';
            id('line2').style.webkitAnimation = 'fadeinleft 1s 0.25s ease-out both';
            id('line3').style.webkitAnimation = 'fadeinleft 1s 0.5s ease-out both';

            id('he1').style.webkitAnimation = 'he11 7s linear both';
            id('he2').style.webkitAnimation = 'he11 7s linear both';

            // setTimeout(distitle,3000)
        }

        function distitle() {
            id('t1-3').style.webkitAnimation = 'fadeout 1s linear both';
            id('line1').style.webkitAnimation = 'fadeoutleft 1s linear both';
            id('line2').style.webkitAnimation = 'fadeoutleft 1s linear both';
            id('line3').style.webkitAnimation = 'fadeoutleft 1s linear both';

            id('t1-0').style.webkitAnimation = 'scaleout 1s linear both';
            id('t1-1').style.webkitAnimation = 'scaleout 1s 1s linear both';
            id('t1-2').style.webkitAnimation = 'scaleout 1s 1s linear both';

            timeout[1] = setTimeout(show1, 1000)
        }

        function show1() {
            id('pagediv1').style.display = 'block';
            id('pagediv2').style.display = 'none';
            id('pagediv3').style.display = 'none';
            id('t2-0').style.webkitAnimation = 'fadein 1s linear both';
            id('t2-1').style.webkitAnimation = 'fadein 1s linear both';
            id('t2-2').style.webkitAnimation = 'birdin 1s linear both, birdmove 1s 2s linear infinite alternate';
            id('t2-3').style.webkitAnimation = 'birdin 1s linear both, birdmove 1s 3s linear infinite alternate';

            id('div1').style.webkitAnimation = 'fadeup 8s 0.5s linear both';
            setImage('1');


            id('div1h-1').style.webkitAnimation = 'img1h_out_toright 1s 2s linear both';
            id('div1h-2').style.webkitAnimation = 'img1h_out_toright 1s 2s linear both';
            id('div1h-3').style.webkitAnimation = 'img1h_out_toright 1s 2s linear both';
            id('div1h-4').style.webkitAnimation = 'img1h_out_toright 1s 2s linear both';

            id('img1h-1').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('img1h-2').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('img1h-3').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('img1h-4').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';

            id('kuang1h-1').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('kuang1h-2').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('kuang1h-3').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';
            id('kuang1h-4').style.webkitAnimation = 'img1h_in_toleft 1s 2s linear both';


            id('kuang1h').style.webkitAnimation = 'fadeout 1s 2.5s linear both';

            id('div1v-1').style.webkitAnimation = 'img1v_out_toright 1s 2s linear both';
            id('div1v-2').style.webkitAnimation = 'img1v_out_toright 1s 2s linear both';
            id('div1v-3').style.webkitAnimation = 'img1v_out_toright 1s 2s linear both';
            id('div1v-4').style.webkitAnimation = 'img1v_out_toright 1s 2s linear both';

            id('img1v-1').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('img1v-2').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('img1v-3').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('img1v-4').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';

            id('kuang1v-1').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('kuang1v-2').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('kuang1v-3').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';
            id('kuang1v-4').style.webkitAnimation = 'img1v_in_toleft 1s 2s linear both';


            // id('div1').style.webkitAnimation = 'moveup 8s linear both';
            id('kuang1v').style.webkitAnimation = 'fadeout 1s 2.5s linear both';

            timeout[2] = setTimeout(clear1, 6000)
        }

        function clear1() {
            id('img1v-gray').style.webkitAnimation = 'fadeout 1s linear both';
            id('img1h-gray').style.webkitAnimation = 'fadeout 1s linear both';

            id('div1h-1').style.webkitAnimation = 'img1h_out_toleft 1s 1.5s linear both';
            id('div1h-2').style.webkitAnimation = 'img1h_out_toleft 1s 1.5s linear both';
            id('div1h-3').style.webkitAnimation = 'img1h_out_toleft 1s 1.5s linear both';
            id('div1h-4').style.webkitAnimation = 'img1h_out_toleft 1s 1.5s linear both';

            id('img1h-1').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('img1h-2').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('img1h-3').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('img1h-4').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';

            id('kuang1h-1').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('kuang1h-2').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('kuang1h-3').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';
            id('kuang1h-4').style.webkitAnimation = 'img1h_in_toright 1s 1.5s linear both';


            id('div1v-1').style.webkitAnimation = 'img1v_out_toleft 1s 1.5s linear both';
            id('div1v-2').style.webkitAnimation = 'img1v_out_toleft 1s 1.5s linear both';
            id('div1v-3').style.webkitAnimation = 'img1v_out_toleft 1s 1.5s linear both';
            id('div1v-4').style.webkitAnimation = 'img1v_out_toleft 1s 1.5s linear both';

            id('img1v-1').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('img1v-2').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('img1v-3').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('img1v-4').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';

            id('kuang1v-1').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('kuang1v-2').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('kuang1v-3').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';
            id('kuang1v-4').style.webkitAnimation = 'img1v_in_toright 1s 1.5s linear both';

            id('t2-2').style.webkitAnimation = 't2-2-out 1s 2s linear both';
            id('t2-3').style.webkitAnimation = 't2-3-out 1s 2s linear both';
            id('t2-1').style.webkitAnimation = 'fadeout 1s 2s linear both';
            id('t2-0').style.webkitAnimation = 't2-0-out 1s 2s linear both';

            timeout[3] = setTimeout(show2, 3500)
        }

        function show2() {

            id('pagediv2').style.display = 'block';
            id('pagediv0').style.display = 'none';
            id('pagediv1').style.display = 'none';
            id('pagediv3').style.display = 'none';
            flyhe();
            id('t3-0').style.webkitAnimation = 't3-0-in 1s linear both';
            setImage('2');

            id('div2h').style.webkitAnimation = 'fadein 1s linear both';
            id('div2h-1').style.webkitAnimation = 'div2h-1-in 1s 1s linear both';
            id('img2h-1').style.webkitAnimation = 'img2h-1-in 1s 1s linear both';

            id('div2h-2').style.webkitAnimation = 'div2h-2-in 1.5s 1.5s linear both';
            id('img2h-2').style.webkitAnimation = 'img2h-2-in 1.5s 1.5s linear both';

            id('div2h-3').style.webkitAnimation = 'div2h-3-in 1s 1s linear both';
            id('img2h-3').style.webkitAnimation = 'img2h-3-in 1s 1s linear both';

            id('div2v').style.webkitAnimation = 'fadein 1s linear both';
            id('div2v-1').style.webkitAnimation = 'div2h-1-in 1s 1s linear both';
            id('img2v-1').style.webkitAnimation = 'img2h-1-in 1s 1s linear both';

            id('div2v-2').style.webkitAnimation = 'div2h-2-in 1.5s 1.5s linear both';
            id('img2v-2').style.webkitAnimation = 'img2h-2-in 1.5s 1.5s linear both';

            id('div2v-3').style.webkitAnimation = 'div2h-3-in 1s 1s linear both';
            id('img2v-3').style.webkitAnimation = 'img2h-3-in 1s 1s linear both';


            timeout[4] = setTimeout(clear2, 7000)
        }

        function clear2() {
            id('t3-0').style.webkitAnimation = 't3-0-out 1s linear both';

            id('div2h-1').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2h-2').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2h-3').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2v-1').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2v-2').style.webkitAnimation = 'fadeout 1s linear both';
            id('div2v-3').style.webkitAnimation = 'fadeout 1s linear both';

            id('div2h').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('div2v').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('t2-3').style.webkitAnimation = 't3-3-out 1s linear both';
            id('t2-2').style.webkitAnimation = 't3-2-out 1s linear both';

            timeout[5] = setTimeout(show3, 2000)
        }

        function show3() {
            id('pagediv2').style.display = 'none';
            id('pagediv1').style.display = 'none';
            id('pagediv3').style.display = 'block';

            id('t4-0').style.webkitAnimation = 't4-0 9s linear both';
            id('t4-3').style.webkitAnimation = 't4-3 9s linear both';
            id('t4-2').style.webkitAnimation = 't4-2 2s linear infinite alternate, fading 9s linear both';
            setImage('3');

            id('div3h').style.webkitAnimation = 'moveright 9s linear both, fading 9s linear both';
            id('div3v').style.webkitAnimation = 'moveright 9s linear both, fading 9s linear both';

            id('img1v-gray').style.webkitAnimation = '';
            id('img1h-gray').style.webkitAnimation = '';

            timeout[6] = setTimeout(show1, 10000);
        }

        function flyhe() {
            dahe1 = id('dahe1');
            dahe2 = id('dahe2');

            dahe1.style.webkitAnimation = 'he1 10s linear both';
            dahe2.style.webkitAnimation = 'he1 10s linear both';

            flytimes = 50;
            heindex = 0;

            baihe = setInterval(flying, 200)
        }

        function flying() {
            dahe1.src = he_arr[heindex];
            dahe2.src = he_arr[(heindex + 6) % he_arr.length];
            heindex++;
            if (heindex == he_arr.length)
                heindex = 0;
            flytimes--;
            // console.log(flytimes)
            if (flytimes <= 0) {
                clearInterval(baihe);
                return;

            }
        }


        var imgs_width = { '1h': 460, '1v': 328, '2v': 379, '2h': 436, '3h': 465, '3v': 360 }
        var imgs_height = { '1h': 328, '1v': 456, '2v': 501, '2h': 335, '3h': 355, '3v': 468 }

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
            var divname;

            var word_string = ""; //words[get_pid(Onload_imgs_url[image_url_index])];
            if (img_bili > 1) {
                width = imgs_width[idname + 'h'];
                height = imgs_height[idname + 'h'];

                if (idname == '1') {
                    setimgposition('img1h-gray', width, height, img_bili, 0);
                    setimgposition('img1h-1', width, height, img_bili, 0);
                    setimgposition('img1h-2', width, height, img_bili, 115);
                    setimgposition('img1h-3', width, height, img_bili, 230);
                    setimgposition('img1h-4', width, height, img_bili, 345);
                    id('div1h').style.display = 'block';
                    id('div1h-gray').style.display = 'block';
                    id('kuang1h').style.display = 'block';
                    id('div1v').style.display = 'none';
                    id('div1v-gray').style.display = 'none';
                    id('kuang1v').style.display = 'none';

                    setTimeout(function() {
                        var word = id('word1h');

                        if (word_string != undefined) {
                            console.log(word_string);
                            word_string = word_string.replace(/[\n]/ig, '');

                            word.style.webkitAnimation = 'fadein 1s linear both';

                            var word_length = word_string.length;
                            if (word_length < 6)
                                word.style.fontSize = "25px";
                            else {
                                if (word_length > 10)
                                    word_string = insertEnter(word_string, 5);
                                word.style.fontSize = "22px";
                            }
                            word.innerText = word_string;
                        } else
                            word.innerText = "";

                    }, 2900);

                    setTimeout(function() {
                        var word = id('word1h');
                        word.style.webkitAnimation = 'fadeout 1s linear both';
                    }, 6500);

                } else if (idname == '2') {
                    setimgposition('img2h-gray', width, height, img_bili, 0);
                    setimgposition('img2h-1', width, height, img_bili, 0);
                    setimgposition('img2h-2', width, height, img_bili, 0);
                    setimgposition('img2h-3', width, height, img_bili, 0);

                    id('div2h').style.display = 'block';
                    id('div2v').style.display = 'none';

                    setTimeout(function() {
                        var word = id('word2h');
                        // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
                        if (word_string != undefined) {
                            word_string = word_string.replace(/[\n]/ig, '');
                            console.log(word_string);
                            word.style.webkitAnimation = 'fadein 1s linear both';
                            word.style.margin = "0px";
                            word.style.top = "450px";
                            word.style.width = "500px";
                            word.style.left = "0px";

                            var word_length = word_string.length;
                            if (word_length < 6)
                                word.style.fontSize = "25px";
                            else {
                                word.style.fontSize = "22px";
                                if (word_length > 10)
                                    word_string = insertEnter(word_string, 5);
                            }

                            word.innerText = word_string;
                        } else {
                            word.innerText = "";
                        }

                    }, 2900);

                    setTimeout(function() {
                        var word = id('word2h');
                        word.style.webkitAnimation = 'fadeout 1s linear both';
                    }, 6500);

                } else {
                    setimgposition('img3h', width, height, img_bili, 0);

                    var word = id('word3h');
                    // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
                    if (word_string != undefined) {
                        word_string = word_string.replace(/[\n]/ig, '');
                        console.log(word_string);
                        word.style.webkitAnimation = 'fadein 1s linear both';

                        var word_length = word_string.length;
                        if (word_length < 6)
                            word.style.fontSize = "25px";
                        else {
                            word.style.fontSize = "22px";
                            if (word_length > 10)
                                word_string = insertEnter(word_string, 5);
                        }
                        word.innerText = word_string;
                    } else {
                        word.innerText = "";
                    }

                    id('div3h').style.display = 'block';
                    id('div3v').style.display = 'none';
                }

            } else {
                width = imgs_width[idname + 'v'];
                height = imgs_height[idname + 'v'];

                if (idname == '1') {
                    setimgposition('img1v-gray', width, height, img_bili, 0);
                    setimgposition('img1v-1', width, height, img_bili, 0)
                    setimgposition('img1v-2', width, height, img_bili, 82)
                    setimgposition('img1v-3', width, height, img_bili, 164)
                    setimgposition('img1v-4', width, height, img_bili, 246)
                    id('div1h').style.display = 'none';
                    id('div1h-gray').style.display = 'none';
                    id('kuang1h').style.display = 'none';
                    id('div1v').style.display = 'block';
                    id('div1v-gray').style.display = 'block';
                    id('kuang1v').style.display = 'block';

                    setTimeout(function() {
                        var word = id('word1v');
                        // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
                        if (word_string != undefined) {
                            word_string = word_string.replace(/[\n]/ig, '');
                            console.log(word_string);
                            word.style.webkitAnimation = 'fadein 1s linear both';

                            var word_length = word_string.length;
                            if (word_length < 6)
                                word.style.fontSize = "25px";
                            else {
                                word.style.fontSize = "22px";
                                if (word_length > 10)
                                    word_string = insertEnter(word_string, 5);
                            }

                            word.innerText = word_string;
                        } else {
                            word.innerText = "";
                        }

                    }, 2900);

                    setTimeout(function() {
                        var word = id('word1v');
                        word.style.webkitAnimation = 'fadeout 1s linear both';
                    }, 6500);
                } else if (idname == '2') {
                    setimgposition('img2v-gray', width, height, img_bili, 0);
                    setimgposition('img2v-1', width, height, img_bili, 0)
                    setimgposition('img2v-2', width, height, img_bili, 0)
                    setimgposition('img2v-3', width, height, img_bili, 0)

                    id('div2v').style.display = 'block';
                    id('div2h').style.display = 'none';

                    setTimeout(function() {
                        var word = id('word2v');
                        // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
                        if (word_string != undefined) {
                            word_string = word_string.replace(/[\n]/ig, '');
                            console.log(word_string);
                            word.style.webkitAnimation = 'fadein 1s linear both';
                            // word.style.color = "red";
                            word.style.margin = "0px";
                            word.style.top = "450px";
                            word.style.width = "500px";
                            word.style.left = "0px";

                            var word_length = word_string.length;
                            if (word_length < 6)
                                word.style.fontSize = "25px";
                            else {
                                word.style.fontSize = "22px";
                                if (word_length > 10)
                                    word_string = insertEnter(word_string, 5);
                            }

                            word.innerText = word_string;

                        } else
                            word.innerText = "";

                    }, 2900);

                    setTimeout(function() {
                        var word = id('word2v');
                        word.style.webkitAnimation = 'fadeout 1s linear both';
                    }, 6500);

                } else {
                    setimgposition('img3v', width, height, img_bili, 0);

                    var word = id('word3v');
                    // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
                    if (word_string != undefined) {
                        word_string = word_string.replace(/[\n]/ig, '');
                        word.style.webkitAnimation = 'fadein 1s linear both';
                        console.log(word_string);
                        var word_length = word_string.length;
                        if (word_length < 6)
                            word.style.fontSize = "25px";
                        else {
                            word.style.fontSize = "22px";
                            if (word_length > 10)
                                word_string = insertEnter(word_string, 5);
                        }
                        word.innerText = word_string;

                    } else
                        word.innerText = "";

                    id('div3v').style.display = 'block';
                    id('div3h').style.display = 'none';
                }
            }
            
            image_url_index++;
            if (image_url_index == Onload_imgs_url.length) {
                image_url_index = 0;
            }


        }

        function setimgposition(imgid, width, height, img_bili, changeleft) {
            var img = id(imgid);
            img.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            if (img_bili > (width / height)) {
                img.style.backgroundSize = height * img_bili + 'px ' + height + 'px';
                img.style.backgroundPosition = -((height * img_bili - width) / 2) - changeleft + 'px ' + '0px';
                // img.style.top = '0px';
                // img.style.height = height + 'px';
                // img.style.width = height*img_bili + 'px';
                // img.style.left = -((height*img_bili-width)/2) - changeleft +'px';
            } else {
                img.style.backgroundSize = width + 'px ' + width / img_bili + 'px';
                img.style.backgroundPosition = -changeleft + 'px ' + (-((width / img_bili - height) / 2)) + 'px';

                // img.style.left = - changeleft +'px';
                // img.style.width = width+'px';
                // img.style.height = width/img_bili + 'px';
                // img.style.top = -((width/img_bili-height)/2) + 'px';
            }

        }


        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout = [];


        var delaytime = 6000;

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
            showtitle();
            canshow = true;

            bl_keepload = 'first';
            step_load();
        }

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
            console.log(Onload_imgs_url[index]);
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
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
                distitle();

            }
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

            id('pagediv0').style.display = 'block';
            id('pagediv1').style.display = 'none';
            id('pagediv2').style.display = 'none';
            id('pagediv3').style.display = 'none';

            id('img1v-gray').style.webkitAnimation = '';
            id('img1h-gray').style.webkitAnimation = '';

            // var items = ['div1h','div1v','div2h','div2v','ying1h','ying1v','ying2h','ying2v'];
            // for(var i = 0;i<items.length;i++)
            // {
            //     id(items[i]).style.display = 'none';
            //     id(items[i]).style.webkitAnimation = '';
            // }


        }

        call_me(load_images);
        load_init_modules();
    }
}
