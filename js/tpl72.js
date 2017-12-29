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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/bg.jpg"><div id="div1h" class="divh"><img id="img1h" style="position:absolute"></div><div id="div1v" class="divv"><img id="img1v" style="position:absolute"></div><div id="div2v" class="divv"><img id="img2v" style="position:absolute"></div><div id="div2h" class="divh"><img id="img2h" style="position:absolute"></div><div id="div3v" class="divv"><img id="img3v" style="position:absolute"></div><div id="div3h" class="divh"><img id="img3h" style="position:absolute"></div><div id="div4v" class="divv"><img id="img4v" style="position:absolute"></div><div id="div4h" class="divh"><img id="img4h" style="position:absolute"></div><div id="div5v" class="divv"><img id="img5v" style="position:absolute"></div><div id="div5h" class="divh"><img id="img5h" style="position:absolute"></div><img id="denglong1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic1.png"> <img id="denglong2" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic1.png"> <img id="mei" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic8.png"><div id="di4" class="diwen"><img id="diwen4" width="600" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic23.png"></div><div id="word1"><img id="jiantou_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic13.png" style="left:38px;top:-3px"> <img id="ciren_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic20.png" style="left:63px;top:54px"> <img id="hou_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic22.png" style="left:50px;top:135px"> <img id="nian_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic19.png" style="left:0;top:98px"> <img id="bi_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic12.png" style="left:72px;top:98px"> <img id="fa_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic10.png" style="left:145px;top:102px"> <img id="yuanbao1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic16.png" style="left:87px;top:-17px"> <img id="yuanbao2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic16.png" style="left:143px;top:42px"> <img id="yuanbao3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic16.png" style="left:-3px;top:40px"></div><div id="word2"><div id="yu1_2"></div><div id="yu2_2"></div><div id="jiantou_2"></div><img id="hongyun_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic11.png"></div><div id="word3"><img id="zhengzheng_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic7.png"><div id="ri_3"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic14.png" style="position:absolute;-webkit-animation:word3_2 1s linear infinite alternate"></div></div><div id="word4"><img id="ciren_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic9.png"> <img id="jiantou_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic5.png"><div id="ruyi1_4"><img id="ruyi1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic18.png"></div><div id="ruyi2_4"><img id="ruyi2" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic15.png"></div></div><div id="word5"><img id="xin1_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic2.png"> <img id="xin2_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic2.png"> <img id="xin3_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic2.png"> <img id="xin4_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic2.png"> <img id="zi_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic24.png"> <img id="jiantou_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic5.png"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:123px;left:-100px;-webkit-animation:fengye 12s linear infinite;width:32px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:123px;left:-100px;-webkit-animation:fengye 12s 5s linear infinite;width:32px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:200px;left:-100px;-webkit-animation:fengye1 15s 5s linear infinite;width:30px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:200px;left:-100px;-webkit-animation:fengye1 15s linear infinite;width:30px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:-100px;left:100px;-webkit-animation:fengye2 10s 8s linear infinite;width:40px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:-100px;left:100px;-webkit-animation:fengye2 10s 5s linear infinite;width:40px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:-100px;left:100px;-webkit-animation:fengye2 10s 4s linear infinite;width:40px;opacity:.9"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;top:-100px;left:100px;-webkit-animation:fengye2 10s 10s linear infinite;width:40px;opacity:.9"><div style="position:absolute;top:-100px;left:-100px;-webkit-animation:feng3 13s 3s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic6.png" style="position:absolute;-webkit-animation:fengye3 3s ease-in-out infinite alternate;width:30px;opacity:.9"></div><img id="guangban1" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic21.png"> <img id="guangban2" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic21.png"> <img id="guangban3" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic21.png"> <img id="guangban4" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic21.png">  <img id="guangban6" src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic21.png"><div id="pagetitle"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl72/pic17.png"><div id="titlebox"><div id="titlecell"><div id="titlecontent"></div></div></div></div></div>');
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
        var timeout7;
        var timeout8;
        var timeout9;
        var timeout10;
        var timeout11;

        var delaytime = 5000;

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
            //console.log(Onload_imgs_url[index]);
            //console.log(have_num + '-' + error_num);
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

            //console.log(Onload_imgs_url[index]);
            //console.log(have_num + '-' + error_num);

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

        function showtitle() {
            var pagetitle = id('pagetitle');
            var titlecontent = id('titlecontent');

            pagetitle.style.webkitAnimation = 'title_in 0.8s linear both';
            titlecontent.innerHTML = e_desc;

            // setTimeout(distitle,3000)
        }

        function distitle() {
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            timeout1 = setTimeout(show1, 1000);
        }

        function show1() {
            setImage('1');
            id('div1h').style.webkitAnimation = 'div1_in 1.5s cubic-bezier(.27,.27,.77,1) both';
            id('div1v').style.webkitAnimation = 'div1_in 1.5s cubic-bezier(.27,.27,.77,1) both';

            showword1();
            clearani2();

            timeout2 = setTimeout(show2, 4000);
        }

        function showword1() {
            var objname = ['ciren_1', 'hou_1', 'nian_1', 'bi_1', 'fa_1', 'jiantou_1', 'yuanbao1_1', 'yuanbao2_1', 'yuanbao3_1'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = 'fadein 0.5s linear ' + i * 0.1 + 's both';
            }

            timeout3 = setTimeout(showword1move, 1500);

        }

        function showword1move() {
            id('jiantou_1').style.webkitAnimation = 'word1_5 0.5s linear infinite alternate';
            id('ciren_1').style.webkitAnimation = ' word1_0 0.5s linear infinite alternate';
            id('hou_1').style.webkitAnimation = 'word1_1 0.8s linear infinite alternate';
            id('nian_1').style.webkitAnimation = 'word1_2 0.8s linear infinite alternate';
            id('bi_1').style.webkitAnimation = 'word1_3 2.5s linear infinite';
            id('fa_1').style.webkitAnimation = 'word1_4 0.4s linear infinite alternate';
            id('yuanbao1_1').style.webkitAnimation = 'word1_6 0.7s linear infinite';
            id('yuanbao2_1').style.webkitAnimation = 'word1_6 0.7s 0.2s linear infinite backwards';
            id('yuanbao3_1').style.webkitAnimation = 'word1_6 0.7s 0.5s linear infinite backwards';
        }

        function clearani1() {
            var objname = ['word1', 'ciren_1', 'hou_1', 'nian_1', 'bi_1', 'fa_1', 'jiantou_1', 'yuanbao1_1', 'yuanbao2_1', 'yuanbao3_1', 'div1h', 'div1v'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = '';
            }
        }

        function show2() {
            setImage('2');

            id('div1h').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('div1v').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('word1').style.webkitAnimation = 'fadeout 1.2s linear both';

            id('div2v').style.webkitAnimation = 'div2_in 1.5s 0.5s cubic-bezier(.27,.27,.77,1) both';
            id('div2h').style.webkitAnimation = 'div2_in 1.5s 0.5s cubic-bezier(.27,.27,.77,1) both';

            showword2();
            clearani3();

            timeout4 = setTimeout(show3, 4000)
        }

        function showword2() {
            id('word2').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('hongyun_2').style.webkitAnimation = 'word2_1 0.8s linear both';
            id('yu2_2').style.webkitAnimation = 'word2_3 1s 1.3s cubic-bezier(.65,.68,.72,.98) both';
            id('yu1_2').style.webkitAnimation = 'word2_2 1s 1.5s cubic-bezier(.65,.68,.72,.98) both';
            id('jiantou_2').style.webkitAnimation = 'word2_4 0.5s linear infinite alternate';

        }

        function clearani2() {
            var objname = ['word2', 'hongyun_2', 'yu2_2', 'yu1_2', 'jiantou_2', 'div2h', 'div2v'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = '';
            }
        }

        function show3() {
            setImage('3');

            id('div2v').style.webkitAnimation = 'div2_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('div2h').style.webkitAnimation = 'div2_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('word2').style.webkitAnimation = 'word2_out 1s linear both';

            id('div3v').style.webkitAnimation = 'div3_in 1.2s 0.5s linear both';
            id('div3h').style.webkitAnimation = 'div3_in 1.2s 0.5s linear both';

            showword3();
            clearani4();

            timeout5 = setTimeout(show4, 4000)
        }

        function showword3() {
            id('word3').style.webkitAnimation = 'word3_in 1s 0.5s both';
            id('ri_3').style.webkitAnimation = 'word3_1 2s 1s ease-out both';
        }

        function clearani3() {
            var objname = ['word3', 'ri_3', 'div3h', 'div3v'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = '';
            }
        }

        function show4() {
            setImage('4');

            id('div3v').style.webkitAnimation = 'div3_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('div3h').style.webkitAnimation = 'div3_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('word3').style.webkitAnimation = 'word3_out 1s linear both';

            id('div4v').style.webkitAnimation = 'div4_in 1.2s 0.5s linear both';
            id('div4h').style.webkitAnimation = 'div4_in 1.2s 0.5s linear both';

            showword4();
            clearani5();

            timeout6 = setTimeout(show5, 4000);
        }

        function showword4() {
            id('word4').style.webkitAnimation = 'fadein 0.2s 0.8s linear both';
            id('jiantou_4').style.webkitAnimation = 'word4_1 0.7s 0.8s linear both';
            id('ciren_4').style.webkitAnimation = 'fadein 0.7s 0.8s linear both';
            id('ruyi1_4').style.webkitAnimation = 'word4_2 0.7s 0.8s linear both';
            id('ruyi2_4').style.webkitAnimation = 'word4_3 0.7s 0.8s linear both';

            timeout7 = setTimeout(showword4move, 1500)
        }

        function showword4move() {
            id('ruyi1').style.webkitAnimation = 'word4_4 0.6s 0.2s ease-out infinite alternate';
            id('ciren_4').style.webkitAnimation = 'word4_4 0.6s ease-out infinite alternate';
            id('ruyi2').style.webkitAnimation = 'word4_4 0.6s 0.4s ease-out infinite alternate';
        }

        function clearani4() {
            var objname = ['word4', 'jiantou_4', 'ciren_4', 'ruyi1_4', 'ruyi2_4', 'div4h', 'div4v'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = '';
            }
        }

        function show5() {
            setImage('5');

            id('div4v').style.webkitAnimation = 'div4_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('div4h').style.webkitAnimation = 'div4_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('word4').style.webkitAnimation = 'word4_out 1s linear both';

            id('div5v').style.webkitAnimation = 'div5_in 1.2s 0.5s linear both';
            id('div5h').style.webkitAnimation = 'div5_in 1.2s 0.5s linear both';

            showword5();
            clearani1();

            timeout8 = setTimeout(show1_1, 4000)
        }


        function showword5() {
            id('xin4_5').style.webkitAnimation = 'word5_1 0.5s linear both';
            id('xin3_5').style.webkitAnimation = 'word5_1 0.5s 0.1s linear forwards';
            id('xin2_5').style.webkitAnimation = 'word5_1 0.5s 0.2s linear forwards';
            id('xin1_5').style.webkitAnimation = 'word5_1 0.5s 0.3s linear forwards';
            id('zi_5').style.webkitAnimation = 'fadein 0.5s 0.8s linear both';
            id('jiantou_5').style.webkitAnimation = 'word5_2 0.5s 0.8s linear infinite alternate';

            timeout9 = setTimeout(showword5move, 1000);
        }

        function showword5move() {
            id('xin1_5').style.webkitAnimation = 'word5_3 0.5s linear infinite alternate';
            id('xin2_5').style.webkitAnimation = 'word5_3 0.5s linear infinite alternate';
            id('xin3_5').style.webkitAnimation = 'word5_3 0.5s linear infinite alternate';
            id('xin4_5').style.webkitAnimation = 'word5_3 0.5s linear infinite alternate';
        }

        function clearani5() {
            var objname = ['xin1_5', 'xin2_5', 'xin3_5', 'xin4_5', 'word5', 'jiantou_5', 'zi_5', 'div5h', 'div5v'];

            for (var i = 0; i < objname.length; i++) {
                id(objname[i]).style.webkitAnimation = '';
            }
        }

        function show1_1() {
            setImage('1');

            id('div5v').style.webkitAnimation = 'div5_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('div5h').style.webkitAnimation = 'div5_out 1.2s cubic-bezier(.2,.01,.71,.72) both';
            id('word5').style.webkitAnimation = 'fadeout 1s linear both';

            id('div1h').style.webkitAnimation = 'div1_in 1.5s 1s cubic-bezier(.27,.27,.77,1) both';
            id('div1v').style.webkitAnimation = 'div1_in 1.5s 1s cubic-bezier(.27,.27,.77,1) both';

            clearani2();
            timeout11 = setTimeout(showword1, 1000)

            timeout10 = setTimeout(show2, 5000);
        }

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                //console.log(Onload_imgs_url[image_url_index]);
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
                width = 462;
                height = 341;
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                width = 400;
                height = 566;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img' + divname);
            img.src = Onload_imgs_url[image_url_index];
            //console.log(img.src);

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
            clearTimeout(timeout10);
            clearTimeout(timeout11);

            clearani1();
            clearani2();
            clearani3();
            clearani4();
            clearani5();

            id('pagetitle').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
        }




        call_me(load_images);
        load_init_modules();
    }
}
