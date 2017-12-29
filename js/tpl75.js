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
        $("#div_player").append('<div id="container"><div id="page1" class="page"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl75/bg2.jpg"><div id="div1"><div id="div1h"><span id="word1h" class="showwords"></span></div><div id="div1v"><span id="word1v" class="showwords"></span></div><img id="kuang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic6.png"></div><img id="shu1" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic22.png"> <img id="shu2" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic9.png"> <img id="sun" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic2.png"> <img id="mao" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic4.png"> <img id="summer" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic11.png"> <img id="hua" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic14.png"> <img id="bei" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic23.png"></div><div id="page2" class="page" style="opacity:0;display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl75/bg.jpg"><div id="div21"><div id="div21h" class="shadow"><span id="word21h" class="showwords"></span></div><div id="div21v" class="shadow"><span id="word21v" class="showwords"></span></div></div><div id="div22"><div id="div22h" class="shadow"><span id="word22h" class="showwords"></span></div><div id="div22v" class="shadow"><span id="word22v" class="showwords"></span></div></div><img id="haixing" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic12.png"> <img id="tuoxie" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic8.png"> <img id="shu3" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic13.png"> <img id="xingli" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic27.png"> <img id="zi2" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic20.png"> <img id="yanjing" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic10.png"></div><div id="page3" class="page" style="opacity:0;display:none"><img src="https://qnphoto.kagirl.cn/pic/shatan/3.jpg"><div id="div3"><div id="div3h"><img class="hua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic14.png"> <span id="word3h" class="showwords"></span></div><div id="div3v"><img class="hua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic14.png"> <span id="word3v" class="showwords"></span></div></div><img id="zi3" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic3.png"> <img id="bei3" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic5.png"> <img id="shu4" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic15.png"></div><div id="page4" class="page" style="opacity:0;display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl75/bg4.jpg"><div id="div41"><div id="div41h" class="shadow"><span id="word41h" class="showwords"></span></div><div id="div41v" class="shadow"><span id="word41v" class="showwords"></span></div></div><div id="div42"><div id="div42h" class="shadow"><span id="word42h" class="showwords"></span></div><div id="div42v" class="shadow"><span id="word42v" class="showwords"></span></div></div><img id="zi4" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic25.png"> <img id="xing" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic24.png"> <img id="shu5" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic26.png"><div id="quan"><img class="quan1" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic16.png"></div></div><div id="page5" class="page" style="opacity:0;display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl75/bg3.jpg"><div id="div5"><div id="div5h"><span id="word5h" class="showwords"></span></div><div id="div5v"><span id="word5v" class="showwords"></span></div></div><img id="zi5" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic17.png"> <img id="q1" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic18.png"> <img id="cao" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic21.png"></div><div id="page6" class="page" style="opacity:0;display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl75/bg1.jpg"><div id="div61"><div id="div61h"><span id="word61h" class="showwords"></span></div><div id="div61v"><span id="word61v" class="showwords"></span></div></div><div id="div62"><div id="div62h"><span id="word62h" class="showwords"></span></div><div id="div62v"><span id="word62v" class="showwords"></span></div></div><img id="shu7" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic19.png"> <img id="shu8" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic1.png"> <img id="zi6" src="http://referer-image.szwwy.com/coolphoto/img/tpl75/pic7.png"></div><div id="pagetitle" style="position:absolute;width:500px;height:210px;top:252px;overflow:hidden;display:table;text-shadow:0 0 3px #fff;background:-webkit-linear-gradient(left,rgba(255,255,255,0),rgba(255,255,255,1),rgba(255,255,255,0));padding-left:70px;padding-right:70px;opacity:0"><div id="titlecontent" style="width:360px;height:150px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:50px;color:#40AAE8"></div></div></div>');


        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function showtitle() {
            id('summer').style.webkitAnimation = 'sea_in_bounce_up 1s ease both';
            id('shu1').style.webkitAnimation = 'sea_in_bounce_left 1s 0.5s ease both';
            id('shu2').style.webkitAnimation = 'sea_in_bounce_right 1s 0.5s ease both';
            id('sun').style.webkitAnimation = 'sea_in_bounce_down 1s 1s ease both';
            id('mao').style.webkitAnimation = 'sea_in_bounce_up 1s 1.5s ease both';

            //id('pagetitle').style.webkitAnimation = 'title_in 2s 1s ease-out both';
            //id('titlecontent').innerHTML = e_desc;

            // setTimeout(distitle,4000)
        }

        function zmtxifenbao() {
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            setImage('1');
            id('div1').style.webkitAnimation = 'fadein 2s 1s linear both';
            id('div1h').style.webkitAnimation = 'div1h_in 6.5s 1.5s linear both';
            id('div1v').style.webkitAnimation = 'div1v_in 6.5s 1.5s linear both';

            timeout[1] = setTimeout(show2, 7000)
        }

        function show2() {
            setpage(2);
            setImage('21');
            setImage('22');
            id('shu1').style.webkitAnimation = 'sea_out_bounce_left 2s ease both';
            id('shu2').style.webkitAnimation = 'sea_out_bounce_right 2s ease both';
            id('sun').style.webkitAnimation = 'sea_out_bounce_up 2s 0.5s ease both';
            id('mao').style.webkitAnimation = 'sea_out_bounce_left 2s 0.5s ease both';
            id('summer').style.webkitAnimation = 'sea_out_bounce_down 2s 1s ease both';
            id('div1').style.webkitAnimation = 'fadeout 0.5s 1.5s linear both';

            id('page2').style.webkitAnimation = 'fadein 1s 1.5s linear both';
            id('shu3').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.5s ease both';
            id('zi2').style.webkitAnimation = 'sea_in_bounce_up 1.5s 1.5s ease both';
            id('yanjing').style.webkitAnimation = 'sea_in_bounce_up 1.5s 2s ease both';
            id('tuoxie').style.webkitAnimation = 'sea_in_bounce_left 1.5s 2.2s ease both';
            id('haixing').style.webkitAnimation = 'sea_in_bounce_right 1.5s 2.2s ease both';

            id('div21').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.8s ease both';
            id('div22').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.8s ease both';

            id('xingli').style.webkitAnimation = 'sea_in_bounce_down 1.5s 2.3s ease both';

            timeout[2] = setTimeout(show3, 8000)
        }

        function show3() {
            setpage(3);
            setImage('3');
            id('div21').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('div22').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('xingli').style.webkitAnimation = 'sea_out_bounce_up 1.5s ease both';
            id('shu3').style.webkitAnimation = 'sea_out_bounce_left 1.5s 0.5s ease both';
            id('haixing').style.webkitAnimation = 'sea_out_bounce_right 1.5s 0.5s ease both';
            id('tuoxie').style.webkitAnimation = 'sea_out_bounce_left 1.5s 0.5s ease both';
            id('yanjing').style.webkitAnimation = 'sea_out_bounce_down 1.5s 0.5s ease both';
            id('zi2').style.webkitAnimation = 'sea_out_bounce_down 1.5s 0.7s ease both';

            id('page2').style.webkitAnimation = 'fadeout 1s 1s linear both';
            id('page3').style.webkitAnimation = 'fadein 1s 1s linear both';

            id('shu4').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.6s ease both';
            id('zi3').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.6s ease both';
            id('bei3').style.webkitAnimation = 'sea_in_bounce_left 1.5s 2s ease both';
            id('div3').style.webkitAnimation = 'sea_in_bounce_up 1.5s 2s ease both';

            timeout[3] = setTimeout(show4, 7000)
        }

        function show4() {
            setpage(4);
            setImage('41');
            setImage('42');
            id('shu4').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('zi3').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('div3').style.webkitAnimation = 'sea_out_bounce_down 1.5s ease both';
            id('bei3').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('page3').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('page4').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('shu5').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.5s ease both';
            id('quan').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.5s ease both';
            id('zi4').style.webkitAnimation = 'sea_in_bounce_up 1.5s 1.8s ease both';
            id('xing').style.webkitAnimation = 'fadein 1s 2s linear both';

            id('div41').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.5s ease both';
            id('div42').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.5s ease both';

            timeout[4] = setTimeout(show5, 8000)
        }

        function show5() {
            setpage(5);
            setImage('5');
            id('div41').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('div42').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('shu5').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('quan').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('zi4').style.webkitAnimation = 'sea_out_bounce_down 1.5s ease both';
            id('page4').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('page5').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('cao').style.webkitAnimation = 'cao_in 1.5s 1.5s ease-out both';
            id('zi5').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.5s ease both';
            id('q1').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.5s ease both';
            id('div5').style.webkitAnimation = 'sea_in_bounce_center 1.5s 1.5s ease both';

            timeout[5] = setTimeout(show6, 7000)
        }

        function show6() {
            setpage(6)
            setImage('61');
            setImage('62');
            id('cao').style.webkitAnimation = 'cao_out 1.5s linear both';
            id('zi5').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('q1').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('div5').style.webkitAnimation = 'sea_out_bounce_center 1.5s ease both';

            id('page5').style.webkitAnimation = 'fadeout 0.5s 1s linear both';
            id('page6').style.webkitAnimation = 'fadein 0.5s 1s linear both';

            id('shu7').style.webkitAnimation = 'shu7_in 1s 1s ease-out both';
            id('shu8').style.webkitAnimation = 'shu8_in 1s 1s ease-out both';
            id('zi6').style.webkitAnimation = 'sea_in_bounce_up 1.5s 1s ease both';
            id('div61').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.2s ease both';
            id('div62').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.2s ease both';

            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';

            timeout[6] = setTimeout(show1, 8000)
        }


        function show1() {
            setpage(1);
            setImage('1');
            id('shu7').style.webkitAnimation = 'shu7_out 1.5s linear both';
            id('shu8').style.webkitAnimation = 'shu8_out 1.5s linear both';
            id('zi6').style.webkitAnimation = 'sea_out_bounce_down 1.5s ease both';
            id('div61').style.webkitAnimation = 'sea_out_bounce_left 1.5s ease both';
            id('div62').style.webkitAnimation = 'sea_out_bounce_right 1.5s ease both';
            id('page6').style.webkitAnimation = 'fadeout 1s 1s linear both';

            id('page1').style.webkitAnimation = 'fadein 1s 1s linear both';
            id('div1').style.webkitAnimation = 'fadein 1s 1.8s linear both';
            id('summer').style.webkitAnimation = 'sea_in_bounce_up 1.5s 1.5s ease both';
            id('shu1').style.webkitAnimation = 'sea_in_bounce_left 1.5s 1.5s ease both';
            id('shu2').style.webkitAnimation = 'sea_in_bounce_right 1.5s 1.5s ease both';
            id('sun').style.webkitAnimation = 'sea_in_bounce_down 1.5s 1.5s ease both';
            id('mao').style.webkitAnimation = 'sea_in_bounce_up 1.5s 1.5s ease both';
            id('div1h').style.webkitAnimation = 'div1h_in 6.5s 1s linear both';
            id('div1v').style.webkitAnimation = 'div1v_in 6.5s 1s linear both';

            timeout[7] = setTimeout(show2, 7000);
        }


        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 8000;
        var timeout = [];
        var showfont = false;


        function id(name) {
            return document.getElementById(name);
        }

        //每次执行加载后6张图片
        var bl_keepload = 'first';
        var step_loadnum = 6;

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

        var divwidth = { '1h': 700, '1v': 500, '21h': 320, '21v': 240, '22h': 320, '22v': 230, '3h': 426, '3v': 330, '41h': 350, '41v': 250, '42h': 350, '42v': 250, '5h': 440, '5v': 344, '61h': 350, '61v': 260, '62h': 350, '62v': 260 };
        var divheight = { '1h': 540, '1v': 700, '21h': 240, '21v': 320, '22h': 240, '22v': 308, '3h': 330, '3v': 453, '41h': 250, '41v': 320, '42h': 250, '42v': 320, '5h': 320, '5v': 450, '61h': 250, '61v': 340, '62h': 250, '62v': 340 };

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
            var img;

            if (img_bili > 1) {
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                idname = idname + 'h';
            } else {
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
                idname = idname + 'v';
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var height = divheight[idname];
            var width = divwidth[idname];

            var img = id('div' + idname);
            img.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            console.log('setimg:' + img.style.backgroundImage);

            //var word = id('word'+idname);
            //var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            // if(word_string != undefined)
            //  {
            //    word_string = word_string.replace(/[\n]/ig,'');
            //    word.style.top = "80%";
            //    var word_length = word_string.length;
            //   if(word_length < 6)
            //       word.style.fontSize = "26px";
            //    else
            //    {
            //      if(word_length > 10)
            //      {
            //         word.style.top = "75%";
            //           word_string = insertEnter(word_string, 5);
            //      }
            //       word.style.fontSize = "23px";
            //  }
            //  word.innerText = word_string;
            // }
            //else
            // {
            //     word.innerText = "";
            // }

            if (img_bili > (width / height)) {
                img.style.backgroundSize = height * img_bili + 'px ' + height + 'px';
                img.style.backgroundPosition = -((height * img_bili - width) / 2) + 'px 0px';
            } else {
                img.style.backgroundSize = width + 'px ' + width / img_bili + 'px';
                img.style.backgroundPosition = '0px ' + (-((width / img_bili - height) / 2)) + 'px';
            }
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
            showtitle();
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
                zmtxifenbao();
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
                zmtxifenbao();

            }
        }

        function setpage(pageindex) {
            for (var i = 1; i < 7; i++) {
                if (i != pageindex) {
                    id('page' + i).style.display = 'none';
                    if (pageindex == 1) {
                        id('page6').style.display = 'block';
                    } else
                        id('page' + (pageindex - 1)).style.display = 'block';
                } else {
                    id('page' + i).style.display = 'block';

                }

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

            for (var i = 1; i < 7; i++) {
                id('page' + i).style.display = 'none';
            }

            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div1').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('page1').style.display = 'block';
            id('summer').style.webkitAnimation = '';
            id('shu1').style.webkitAnimation = '';
            id('shu2').style.webkitAnimation = '';
            id('sun').style.webkitAnimation = '';
            id('mao').style.webkitAnimation = '';

        }

        call_me(load_images);
        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl74/
