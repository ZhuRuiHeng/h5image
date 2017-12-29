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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg.jpg" style="position:absolute"><div id="pagetitle" style="position:absolute;width:370px;height:215px;top:232px;left:65px;background-color:#fff;border:9px solid #62efde;border-radius:51px;box-shadow:rgba(106,215,211,.7) 5px 4px 0;opacity:0"></div><div id="page1" class="page" style="display:none"><div id="box1"><div id="div1" class="divbox"><img id="img1"> <span id="word1" class="showwords"></span></div><img id="item1_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk5.png"></div><img id="item1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma.png"> <img id="item1_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng1.png"> <img id="item1_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/fangzi.png"> <img id="item1_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/ma.png"> <img id="item1_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yifu1.png"> <img id="item1_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/wenzi.png"> <img id="item1_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/qiqiu1.png"> <img id="item1_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun8.png"> <img id="item1_10" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun6.png"> <img id="item1_11" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zuqiu2.png"></div><div id="page2" class="page" style="display:none"><img id="bg2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg5.jpg" style="opacity:0"> <img id="item2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng5.png"> <img id="item2_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/chengbao2.png"> <img id="item2_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/chengbao2.png"><div id="box2"><div id="div2" class="divbox"><img id="img2"> <span id="word2" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk4.png" style="position:absolute"></div><div id="bottom2"><img id="item2_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun3.png"> <img id="item2_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/qiqiu2.png"> <img id="item2_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/xiong.png"> <img id="item2_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/feiji3.png"> <img id="item2_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zimu.png"> <img id="item2_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun2.png"> <img id="item2_10" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/weilan.png"></div></div><div id="page3" class="page" style="display:none"><img id="bg3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg4.jpg" style="opacity:0"><div id="box3"><div id="div3" class="divbox"><img id="img3"> <span id="word3" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk.png" style="position:absolute"></div><img id="item3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun.png"> <img id="item3_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/sanlunche.png"> <img id="item3_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/huoche1.png"> <img id="item3_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/feiji2.png"> <img id="item3_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun1.png"> <img id="item3_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng4.png"> <img id="item3_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/motianlun.png"> <img id="item3_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng6.png"> <img id="item3_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/chengbao.png"></div><div id="page4" class="page" style="display:none"><img id="bg4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg3.jpg" style="opacity:0"><div id="box4"><img id="item4_10" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zuqiu.png"><div id="div4" class="divbox"><img id="img4"> <span id="word4" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk2.png" style="position:absolute"></div><div id="box5"><div id="div5" class="divbox"><img id="img5"> <span id="word5" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk3.png" style="position:absolute"></div><img id="item4_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/feiji1.png"> <img id="item4_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/qiqiu.png"> <img id="item4_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun9.png"> <img id="item4_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun4.png"> <img id="item4_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zimu1.png"> <img id="item4_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng7.png"> <img id="item4_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma3.png"> <img id="item4_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/chengbao1.png"> <img id="item4_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng.png"></div><div id="page5" class="page" style="display:none"><img id="bg5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg2.jpg" style="opacity:0"><div id="box6"><img id="item5_10" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zuqiu1.png"> <img id="item5_11" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yifu.png"><div id="div6" class="divbox"><img id="img6"> <span id="word6" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk6.png" style="position:absolute"></div><div id="box7"><div id="div7" class="divbox"><img id="img7"> <span id="word7" class="showwords"></span></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bk1.png" style="position:absolute"></div><img id="item5_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun11.png"> <img id="item5_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/qiqiu4.png"> <img id="item5_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun7.png"> <img id="item5_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/ma1.png"> <img id="item5_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/qiqiu3.png"> <img id="item5_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng2.png"> <img id="item5_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/daxiang.png"> <img id="item5_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma1.png"> <img id="item5_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/zhangpeng3.png"></div><div id="page6" class="page" style="display:none"><img id="bg6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/bg1.jpg" style="opacity:0"><div id="box9"><img id="item6_8" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yifu2.png"> <img id="item6_9" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun10.png"><div id="div9" class="divbox"><img id="img9"> <span id="word9" class="showwords"></span></div></div><div id="div8" class="divbox"><img id="img8"> <span id="word8" class="showwords"></span></div><img id="item6_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/yun5.png"> <img id="item6_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma2.png"> <img id="item6_3" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/feiji.png"> <img id="item6_4" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/huoche.png"> <img id="item6_5" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/huoche.png"> <img id="item6_6" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma4.png"> <img id="item6_7" src="http://referer-image.szwwy.com/coolphoto/img/tpl57/muma4.png"></div></div>');

        function id(name) {
            return document.getElementById(name);
        }

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        function showtitle() {
            showpage(1);
            var item_down = ['item1_5', 'item1_8', 'item1_9', 'item1_10', 'item1_11', 'item1_4'];
            for (var i = 0; i < item_down.length; i++) {
                id(item_down[i]).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            var item_up = ['item1_1', 'item1_2', 'item1_3'];
            for (var i = 0; i < item_up.length; i++) {
                id(item_up[i]).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('item1_7').style.webkitAnimation = 'aa_in_bounce_right 2s ease-out both';
            id('box1').style.display = 'none';

            //id('pagetitle').style.webkitAnimation = 'aa_in_zoom_down 2s ease both';
            //id('titlecontent').innerHTML = e_desc;

            // setTimeout(distitle,5000)

        }

        function zimeitixfb() {
            //id('pagetitle').style.webkitAnimation = 'aa_out_zoom_down 1s ease both';
            id('box1').style.webkitAnimation = 'aa_in_bounce_center 1s 1s ease-in-out both';
            setImage('1');
            id('box1').style.display = 'block';

            timeout[1] = setTimeout(clear1, 5000);
        }

        function show1() {
            setImage('1');
            showpage(1);
            var item_down = ['item1_5', 'item1_8', 'item1_9', 'item1_10', 'item1_11', 'item1_4'];
            for (var i = 0; i < item_down.length; i++) {
                id(item_down[i]).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }

            var item_up = ['item1_1', 'item1_2', 'item1_3'];
            for (var i = 0; i < item_up.length; i++) {
                id(item_up[i]).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('item1_7').style.webkitAnimation = 'aa_in_bounce_right 2s ease-out both';

            id('box1').style.webkitAnimation = 'aa_in_bounce_center 1s 1s ease-in-out both';

            timeout[2] = setTimeout(clear1, 5000)
        }

        function clear1() {
            var item_down = ['item1_5', 'item1_8', 'item1_9', 'item1_10', 'item1_11', 'item1_4'];
            for (var i = 0; i < item_down.length; i++) {
                id(item_down[i]).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            var item_up = ['item1_1', 'item1_2', 'item1_3'];
            for (var i = 0; i < item_up.length; i++) {
                id(item_up[i]).style.webkitAnimation = 'aa_out_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('item1_7').style.webkitAnimation = 'aa_out_bounce_right 2s ease-out both';

            id('box1').style.webkitAnimation = 'aa_out_bounce_center 1s 0.5s ease-in-out both';

            timeout[3] = setTimeout(show2, 1800)
        }

        function show2() {
            showpage(2);
            setImage('2');
            id('bg2').style.webkitAnimation = 'fadein 0.2s linear both';
            for (var i = 1; i < 4; i++) {
                id('item2_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('box2').style.webkitAnimation = 'aa_in_bounce_center 2s ease-out both';

            for (var i = 4; i < 11; i++) {
                id('item2_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(20, 40) / 20 + 's ease-out both';
            }

            timeout[4] = setTimeout(clear2, 5000)
        }

        function clear2() {
            for (var i = 1; i < 4; i++) {
                id('item2_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('box2').style.webkitAnimation = 'aa_out_bounce_center 2s ease-out both';

            for (var i = 4; i < 11; i++) {
                id('item2_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            timeout[5] = setTimeout(show3, 1800)
        }

        function show3() {
            showpage(3);
            setImage('3');
            id('bg3').style.webkitAnimation = 'fadein 0.2s linear both';
            for (var i = 1; i < 6; i++) {
                id('item3_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('box3').style.webkitAnimation = 'aa_in_bounce_center 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item3_' + i).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }

            timeout[6] = setTimeout(clear3, 5000)
        }

        function clear3() {
            for (var i = 1; i < 6; i++) {
                id('item3_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('box3').style.webkitAnimation = 'aa_out_bounce_center 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item3_' + i).style.webkitAnimation = 'aa_out_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            timeout[7] = setTimeout(show4, 1800)
        }

        function show4() {
            showpage(4);
            setImage('4');
            setImage('5');
            id('bg4').style.webkitAnimation = 'fadein 0.2s linear both';
            for (var i = 1; i < 6; i++) {
                id('item4_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('box5').style.webkitAnimation = 'aa_in_bounce_right 2s ease-out both';
            id('box4').style.webkitAnimation = 'aa_in_bounce_left 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item4_' + i).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }

            timeout[8] = setTimeout(clear4, 5000)
        }

        function clear4() {
            for (var i = 1; i < 6; i++) {
                id('item4_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('box5').style.webkitAnimation = 'aa_out_bounce_right 2s ease-out both';
            id('box4').style.webkitAnimation = 'aa_out_bounce_left1 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item4_' + i).style.webkitAnimation = 'aa_out_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            timeout[9] = setTimeout(show5, 1500)
        }


        function show5() {
            showpage(5);
            setImage('6');
            setImage('7');
            id('bg5').style.webkitAnimation = 'fadein 0.2s linear both';
            for (var i = 1; i < 6; i++) {
                id('item5_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('box6').style.webkitAnimation = 'aa_in_bounce_right 2s ease-out both';
            id('box7').style.webkitAnimation = 'aa_in_bounce_left 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item5_' + i).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }

            timeout[10] = setTimeout(clear5, 5000)
        }

        function clear5() {
            for (var i = 1; i < 6; i++) {
                id('item5_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('box6').style.webkitAnimation = 'aa_out_bounce_right 2s ease-out both';
            id('box7').style.webkitAnimation = 'aa_out_bounce_left1 2s ease-out both';

            for (var i = 6; i < 10; i++) {
                id('item5_' + i).style.webkitAnimation = 'aa_out_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            timeout[11] = setTimeout(show6, 1500)
        }

        function show6() {
            showpage(6);
            setImage('8');
            setImage('9');
            id('bg6').style.webkitAnimation = 'fadein 0.2s linear both';
            for (var i = 1; i < 5; i++) {
                id('item6_' + i).style.webkitAnimation = 'aa_in_bounce_down 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }
            id('div8').style.webkitAnimation = 'aa_in_bounce_right 2s ease-out both';
            id('box9').style.webkitAnimation = 'aa_in_bounce_left 2s ease-out both';

            for (var i = 5; i < 8; i++) {
                id('item6_' + i).style.webkitAnimation = 'aa_in_bounce_up 2s ' + rand(0, 20) / 20 + 's ease-out both';
            }

            timeout[12] = setTimeout(clear6, 5000)
        }

        function clear6() {
            for (var i = 1; i < 5; i++) {
                id('item6_' + i).style.webkitAnimation = 'aa_out_bounce_up 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }
            id('div8').style.webkitAnimation = 'aa_out_bounce_right 2s ease-out both';
            id('box9').style.webkitAnimation = 'aa_out_bounce_left1 2s ease-out both';

            for (var i = 5; i < 8; i++) {
                id('item6_' + i).style.webkitAnimation = 'aa_out_bounce_down 2s ' + rand(0, 10) / 20 + 's ease-out both';
            }

            timeout[13] = setTimeout(show1, 1500)
        }

        function showpage(index) {
            for (var i = 1; i < 7; i++) {
                if (i == index)
                    id('page' + i).style.display = 'block';
                else
                    id('page' + i).style.display = 'none';
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
            showtitle();
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
            // console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                // loading_others();
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
                // loading_others();
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();

            }
        }

        var divwidth = { '1': 430, '2': 466, '3': 445, '4': 213, '5': 227, '6': 370, '7': 371, '8': 284, '9': 289 };
        var divheight = { '1': 430, '2': 416, '3': 463, '4': 387, '5': 457, '6': 266, '7': 268, '8': 385, '9': 250 };

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

            var div = id('div' + idname);

            var height = divheight[idname];
            var width = divwidth[idname];

            var img = id('img' + idname);
            img.src = Onload_imgs_url[image_url_index];
            console.log('setimg:' + image_url_index);

            // var word = id('word' + idname);
            // var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (word_string != undefined) {
            //     var word_string = word_string.replace(/[\n]/ig, '');

            //     var word_length = word_string.length;
            //     word.style.top = "94%";
            //     if (idname == 7) {
            //         word.style.top = "100%";
            //         // word.style.color = "red";
            //     } else if (idname == 8) {
            //         word.style.fontSize = "20px";
            //     } else if (idname == 9) {
            //         word.style.fontSize = "20px";
            //     } else {
            //         word.style.top = "90%";
            //         word.style.fontSize = "25px";
            //     }

            //     if (word_length > 10) {
            //         word.style.top = "85%";
            //         if (idname == 1)
            //             word_string = insertEnter(word_string, 11);
            //         else if (idname == 2 || idname == 3)
            //             word_string = insertEnter(word_string, 5);
            //         else if (idname >= 6 && idname <= 9)
            //             word_string = insertEnter(word_string, 5);

            //     }
            //     word.innerText = word_string;
            // } else {
            //     word.innerText = "";
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

            var tsrc=img.src;
            img.parentElement.parentElement.onclick = function() {
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

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 5000;
        var timeout = [];

        function id(name) {
            return document.getElementById(name);
        }

        //每次执行加载后10张图片
        var bl_keepload = 'first';
        var step_loadnum = 8;

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

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            for (var i = 1; i < 7; i++) {
                id('page' + i).style.display = 'none';
            }
            for (var i = 0; i < timeout.length; i++) {
                clearTimeout(timeout[i]);
            }
            id('pagetitle').style.webkitAnimation = '';

        }
        call_me(load_images);
        load_init_modules();
    }
}
