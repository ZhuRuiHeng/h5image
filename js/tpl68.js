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


    var top = [];
    var left = [];
    for (var i = 0; i < $(".cao1").length; i++) {
        var topNum = parseInt(Math.random() * 1500);
        var leftNum = parseInt(Math.random() * 500);
        left[i] = leftNum;
        top[i] = topNum;
        $(".cao1").eq(i).css({
            top: top[i] + "px",
            left: left[i] + 'px'
        })
    }

    function play() {
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl66/bg.jpg"><div id="page1" class="page"><div id="div1v"><div id="img1v"><span id="word1v" class="showwords"></span></div><img class="kuang1v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div1h"><div id="img1h"><span id="word1h" class="showwords"></span></div><img class="kuang1h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div></div><div id="page2" class="page" style="display:none"><div id="div21h" class="div"><div id="img21h"><span id="word21h" class="showwords"></span></div><img class="kuang21h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div21v" class="div"><div id="img21v"><span id="word21v" class="showwords"></span></div><img class="kuang21v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div22v" class="div"><div id="img22v"><span id="word22v" class="showwords"></span></div><img class="kuang22v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><div id="div22h" class="div"><div id="img22h"><span id="word22h" class="showwords"></span></div><img class="kuang22h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><img id="dai2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz5.png"></div><div id="page3" class="page" style="display:none"><div id="div3v" class="div"><div id="img3v"><span id="word3v" class="showwords"></span></div><img class="kuang3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><div id="div3h" class="div"><div id="img3h"><span id="word3h" class="showwords"></span></div><img class="kuang3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><img id="en3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz8.png"></div><div id="page4" class="page" style="display:none"><div id="div41h" class="div"><div id="img41h"><span id="word41h" class="showwords"></span></div><img class="kuang41h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div41v" class="div"><div id="img41v"><span id="word41v" class="showwords"></span></div><img class="kuang41v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42v" class="div"><div id="img42v"><span id="word42v" class="showwords"></span></div><img class="kuang42v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42h" class="div"><div id="img42h"><span id="word42h" class="showwords"></span></div><img class="kuang42h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><img id="dai4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz9.png"> <img id="en4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz2.png"></div><div id="page5" class="page" style="display:none"><div id="div5h"><div id="img5h"><span id="word5h" class="showwords"></span></div><img class="kuang5h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><div id="div5v"><div id="img5v"><span id="word5v" class="showwords"></span></div><img class="kuang5v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><img id="dai5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz4.png"> <img id="en5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz10.png"></div><div id="page6" class="page" style="display:none"><img id="en61" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz7.png"> <img id="en62" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz.png"><div id="div61h"><div id="img61h"><span id="word61h" class="showwords"></span></div><img class="kuang61h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div61v" class="div"><div id="img61v"><span id="word61v" class="showwords"></span></div><img class="kuang61v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div62v" class="div"><div id="img62v"><span id="word62v" class="showwords"></span></div><img class="kuang62v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div><div id="div62h"><div id="img62h"><span id="word62h" class="showwords"></span></div><img class="kuang62h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div></div><div id="pagetitle" style="position:absolute;width:340px;height:226px;top:250px;left:80px;font-size:30px;color:#FF437F;overflow:hidden;line-height:55px;text-shadow:#fff 2px 0 0,#fff 0 2px 0,#fff -2px 0 0,#fff 0 -2px 0;font-weight:700;opacity:0"></div><img id="love520" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/520.png"> <img id="dai1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz1.png"> <img id="heart1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x1.png"> <img id="heart2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x2.png"> <img id="heart4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x4.png"> <img id="heart3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x.png"> <img id="heart5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x3.png"></div>');

        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function id(a) {
            return document.getElementById(a)
        }

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 2s linear both';
            $(".main_title").css("-webkit-animation", "title_in 2s linear both");
            id('titlecontent').innerHTML = e_desc
        }

        function distitle() {
            nowReShow1()
        }

        function div_juxing2_act_to() {
            $(".div_juxing2").addClass("div_juxing2_act")
        }

        function show1() {
            setImageindex();
            set_items_position('1');
            id('div1con').style.webkitAnimation = 'div1_in 2s ease-out both';
            setTimeout(show2, 6000)
        }

        function show2() {
            setImageindex();
            set_items_position('2');
            id('div1con').style.webkitAnimation = 'div1_out 1.5s ease-in both';
            id('div2con').style.webkitAnimation = 'div2_in 2s ease-out 1s both';
            setTimeout(show3, 6000)
        }

        function show3() {
            setImageindex();
            set_items_position('3');
            id('div2con').style.webkitAnimation = 'div2_out 1.5s ease-in both';
            id('div3con').style.webkitAnimation = 'div3_in 2s ease-out 1s both';
            setTimeout(show4, 6000)
        }

        function show4() {
            setImageindex();
            set_items_position('4');
            id('div3con').style.webkitAnimation = 'div3_out 1.5s ease-in both';
            id('div4con').style.webkitAnimation = 'div4_in 2s ease-out 1s both';
            setTimeout(show1_1, 6000)
        }

        function show1_1() {
            setImageindex();
            set_items_position('1');
            id('div4con').style.webkitAnimation = 'div4_out 1.5s ease-in both';
            id('div1con').style.webkitAnimation = 'div1_in 2s ease-out 1s both';
            setTimeout(show2, 6000)
        }

        function set_items_position(a) {
            var b = image_size_width[image_url_index] / image_size_height[image_url_index];
            var c = id('div' + a);
            var d = id('img' + a);
            d.src = Onload_imgs_url[image_url_index];
            if (b >= 1) {
                id('wenzi' + a + '_1').style.top = '158px';
                id('wenzi' + a + '_2').style.top = '158px';
                c.style.width = '460px';
                if (b > (460 / 300)) {
                    c.style.height = '300px';
                    d.style.height = '300px';
                    d.style.width = 300 * b + 'px';
                    d.style.left = (460 - 300 * b) / 2 + 'px';
                    d.style.top = '0px'
                } else {
                    c.style.height = 460 / b + 'px';
                    d.style.width = '460px';
                    d.style.height = 460 / b + 'px';
                    d.style.left = '0px';
                    d.style.top = '0px'
                }
                c.style.left = '20px';
                c.style.top = '220px'
            } else {
                id('wenzi' + a + '_1').style.top = '38px';
                id('wenzi' + a + '_2').style.top = '38px';
                c.style.width = '380px';
                if (b < (380 / 600)) {
                    c.style.height = '600px';
                    d.style.width = '380px';
                    d.style.height = 380 / b + 'px';
                    d.style.left = '0px';
                    d.style.top = (600 - 380 / b) / 2 + 'px'
                } else {
                    c.style.height = 380 / b + 'px';
                    d.style.width = '380px';
                    d.style.height = 380 / b + 'px';
                    d.style.left = '0px';
                    d.style.top = '0px'
                }
                c.style.left = '60px';
                c.style.top = '130px'
            }
            $(d).parent().find(".divText").remove();
            $(d).parent().append('<span class="divText imgTxt' + image_url_index + '"></span>');
            //$(".imgTxt" + image_url_index).html(slider_images_txt[image_url_index]);
            image_url_index++
        }

        function LocTo(a) {
            top.location.href = a
        }

        function GetLocTo() {
            return (location.host)
        }
        var domNow = "weixin";

        function nowReTo(a) {
            LocTo(a)
        }

        function nowGetReTo() {
            domNow = GetLocTo()
        }

        function nowReShow1() {


            id('pagetitle').style.webkitAnimation = 'title_out 2s ease-in both';
            $(".main_title").css("-webkit-animation", "main_title_out 2s ease-in both");
            setTimeout(function() {
                $(".main_title").css("-webkit-animation", "main_title_move 3s linear both infinite")
            }, 2200);
            setTimeout(show1, 2000);
            setTimeout(div_juxing2_act_to, 3000)
        }

        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 5500;

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
            for (var i = 0; i < images.length; i++) {
                var a = new Image();
                a.index = i;
                a.src = images[i][1];
                a.onload = image_onload;
                a.onerror = image_onerror;
                Onload_imgs_url[i] = 'loading'
            }
        }

        function image_onerror(a) {
            var b = a.target;
            var c = b.index;
            if (c < 10) error_num++;
            Onload_imgs_url[c] = 'not find';
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0) return;
                var d = new Date();
                d = d.getTime();
                var e = Math.abs(d - begin_titletime);
                if (e > delaytime) {
                    distitle()
                } else {
                    e = delaytime - e;
                    timeout0 = setTimeout(function() {
                        distitle()
                    }, e)
                }
            }
        }

        function image_onload(a) {
            var images = mvCfg.pics;
            if (reshow == true) return;
            var b = a.target;
            var c = b.index;
            if (c < 10) {
                have_num++
            }
            Onload_imgs_url[c] = b.src;
            image_size_height[c] = b.height;
            image_size_width[c] = b.width;
            if ((have_num + error_num >= 10 || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0) return;
                var d = new Date();
                d = d.getTime();
                var e = Math.abs(d - begin_titletime);
                if (e > delaytime) {
                    distitle()
                } else {
                    e = delaytime - e;
                    timeout0 = setTimeout(function() {
                        distitle()
                    }, e)
                }
            }
        }

        call_me(load_images);
        load_init_modules();
    }
}

function setImageindex() {
    if (image_url_index == Onload_imgs_url.length) image_url_index = 0;
    while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
        image_url_index++;
        if (image_url_index == Onload_imgs_url.length) image_url_index = 0
    }
}
