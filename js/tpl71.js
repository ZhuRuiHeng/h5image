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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl66/bg.jpg"><div id="page1" class="page"><div id="div1v"><div id="img1v"><span id="word1v" class="showwords"></span></div><img class="kuang1v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div1h"><div id="img1h"><span id="word1h" class="showwords"></span></div><img class="kuang1h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div></div><div id="page2" class="page" style="display:none"><div id="div21h" class="div"><div id="img21h"><span id="word21h" class="showwords"></span></div><img class="kuang21h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div21v" class="div"><div id="img21v"><span id="word21v" class="showwords"></span></div><img class="kuang21v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div22v" class="div"><div id="img22v"><span id="word22v" class="showwords"></span></div><img class="kuang22v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><div id="div22h" class="div"><div id="img22h"><span id="word22h" class="showwords"></span></div><img class="kuang22h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k.png"></div><img id="dai2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz5.png"></div><div id="page3" class="page" style="display:none"><div id="div3v" class="div"><div id="img3v"><span id="word3v" class="showwords"></span></div><img class="kuang3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><div id="div3h" class="div"><div id="img3h"><span id="word3h" class="showwords"></span></div><img class="kuang3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"> <img class="dai3h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz6.png"></div><img id="en3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz8.png"></div><div id="page4" class="page" style="display:none"><div id="div41h" class="div"><div id="img41h"><span id="word41h" class="showwords"></span></div><img class="kuang41h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div41v" class="div"><div id="img41v"><span id="word41v" class="showwords"></span></div><img class="kuang41v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42v" class="div"><div id="img42v"><span id="word42v" class="showwords"></span></div><img class="kuang42v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><div id="div42h" class="div"><div id="img42h"><span id="word42h" class="showwords"></span></div><img class="kuang42h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k2.png"></div><img id="dai4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz9.png"> <img id="en4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz2.png"></div><div id="page5" class="page" style="display:none"><div id="div5h"><div id="img5h"><span id="word5h" class="showwords"></span></div><img class="kuang5h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><div id="div5v"><div id="img5v"><span id="word5v" class="showwords"></span></div><img class="kuang5v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k1.png"></div><img id="dai5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz4.png"> <img id="en5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz10.png"></div><div id="page6" class="page" style="display:none"><img id="en61" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz7.png"> <img id="en62" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz.png"><div id="div61h"><div id="img61h"><span id="word61h" class="showwords"></span></div><img class="kuang61h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div61v" class="div"><div id="img61v"><span id="word61v" class="showwords"></span></div><img class="kuang61v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"></div><div id="div62v" class="div"><div id="img62v"><span id="word62v" class="showwords"></span></div><img class="kuang62v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6v" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div><div id="div62h"><div id="img62h"><span id="word62h" class="showwords"></span></div><img class="kuang62h" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/k3.png"> <img class="dai6" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz3.png"></div></div><div id="pagetitle" style="position:absolute;width:340px;height:226px;top:250px;left:80px;font-size:30px;color:#FF437F;overflow:hidden;line-height:55px;text-shadow:#fff 2px 0 0,#fff 0 2px 0,#fff -2px 0 0,#fff 0 -2px 0;font-weight:700;opacity:0"></div><img id="love520" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/520.png"> <img id="dai1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/wz1.png"> <img id="heart1" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x1.png"> <img id="heart2" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x2.png"> <img id="heart4" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x4.png"> <img id="heart3" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x.png"> <img id="heart5" src="http://referer-image.szwwy.com/coolphoto/img/tpl66/x3.png"></div>');

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
        var delaytime = 5000;

        function id(name) {
            return document.getElementById(name);
        }

        function play_music2(id) {
            var music02 = document.getElementById(id);
            music02.preload = "auto";
            music02.play();
        }

        function muiscFn() {
            play_music2("muisc359a");

            timeout10 = setTimeout(function() {
                play_music2("muisc359b");
            }, 300);
        }

        function show1() {
            setImage('1');
            $("#photo-card").css("display", "block")
            $("#bg6").css("display", "none");
            $("#bg1").css("display", "block");
            id('bg1').style.WebkitAnimation = "bg1 1s linear";
            $("#word1").css("display", "none");
            $("#word2").css("display", "none");
            $("#clock").css("display", "block");
            $("#outerphoto").css("display", "block");
            $('#interphoto').css("display", "block");
            $("#centerphoto").css("display", "block");
            $("#outerwhite").css("display", "block");
            id('interphoto').style.WebkitAnimation = "interphoto 1s linear";
            id('white1').style.WebkitAnimation = "white1 .7s linear infinite alternate";
            id('white2').style.WebkitAnimation = "white2 .4s linear infinite alternate";
            id('white3').style.WebkitAnimation = "white3 .8s linear infinite alternate";
            id('white4').style.WebkitAnimation = "white4 .3s linear infinite alternate";
            id('white5').style.WebkitAnimation = "white5 .6s linear infinite alternate";
            id('white6').style.WebkitAnimation = "white6 .9s linear infinite alternate";
            id('white7').style.WebkitAnimation = "white7 .7s linear infinite alternate";
            id('white8').style.WebkitAnimation = "white8 .4s linear infinite alternate";
            id('centerphoto1').style.WebkitAnimation = "topwhite 1s linear";
            id('red').style.WebkitAnimation = "red 1.5s linear infinite";
            timerStart();
            blur("#bg1");
            timeout0 = setTimeout(clearFn, 1000);
            id('topwhite').style.webkitAnimation = "";
            id('bottomwhite').style.webkitAnimation = "";

        }

        function clearFn1() {
            muiscFn();
            $('#outerwhite').css("display", "none");
            $('#centerphoto').css("display", "none");
            $('#outerphoto').css("display", "none");
            $('#interphoto').css("display", "none");
            $('#clock').css("display", "none");
            id('interphoto').style.WebkitAnimation = "";

            id('bg1').style.WebkitAnimation = "";
            id('bg2').style.WebkitAnimation = "";
            id('bg4').style.WebkitAnimation = "";
            id('bg3').style.WebkitAnimation = "";
            id('bg5').style.WebkitAnimation = "";
            id('bg6').style.WebkitAnimation = "";
            id('topwhite').style.webkitAnimation = "topwhite .4s linear both";
            id('bottomwhite').style.webkitAnimation = "bottomwhite .5s linear both";
            id('red').style.WebkitAnimation = "";
            id('centerphoto1').style.WebkitAnimation = "";
        }

        function clearFn() {
            $("#word2").css("display", "block");
            clearFn1();
            timeout1 = setTimeout(show2, 1500)
        }

        function clearFn2() {
            $('#word1').css("display", "block");
            clearFn1();
            timeout2 = setTimeout(show4, 1500);
        }

        function clearall() {
            clearFn1();
            id('clock').innerText = "00:00:00:00";
            clearInterval(timer1);
            t = 0;
            lt = 0;
            timeout9 = setTimeout(show1, 1500);
        }

        function show2() {
            setImage('2');
            $("#word2").css("display", "none");
            $('#bg1').css("display", "none");
            $('#bg2').css("display", "block");
            id('bg2').style.WebkitAnimation = "bg3 2.5s linear";
            sFn();
            timeout3 = setTimeout(show3, 2500);
            id('topwhite').style.webkitAnimation = "";
            id('bottomwhite').style.webkitAnimation = "";
        }

        function sFn() {
            $('#outerphoto').css("display", "block");
            $('#interphoto').css("display", "block");
            $('#outerwhite').css("display", "block");
            $('#clock').css("display", "block");
            id('red').style.WebkitAnimation = "red 1.8s linear infinite";
        }

        function show3() {
            setImage('3');
            $('#bg2').css("display", "none");
            $('#bg3').css("display", "block");
            $('#bg3').addClass("bg");
            id('interphoto').style.WebkitAnimation = "interphoto 1s 2s linear";
            id('centerphoto1').style.WebkitAnimation = "topwhite 1s 2s linear";
            timeout4 = setTimeout(function() {
                $('#centerphoto').css("display", "block");
                blur("#bg3");
            }, 2000);
            timeout5 = setTimeout(clearFn2, 3000);

        }

        function show4() {
            setImage('4');
            $('#bg3').css("display", "none");
            $('#bg4').css("display", "block");
            $('#word1').css("display", "none");
            sFn();
            id('bg4').style.WebkitAnimation = "bg3 2.5s linear";
            timeout6 = setTimeout(show5, 2500);
            id('topwhite').style.webkitAnimation = "";
            id('bottomwhite').style.webkitAnimation = "";

        }

        function show5() {
            setImage('5');
            $('#bg4').css("display", "none");
            $('#bg5').css("display", "block");
            id('bg5').style.WebkitAnimation = "bg3 2.5s linear";
            timeout7 = setTimeout(show6, 2500);

        }

        function show6() {
            setImage('6');
            $('#bg5').css("display", "none");
            $('#bg6').css("display", "block");
            id('bg6').style.WebkitAnimation = "bg1 1s linear";
            $('#centerphoto').css("display", "block");
            id('centerphoto1').style.WebkitAnimation = "topwhite 1s linear";
            id('interphoto').style.WebkitAnimation = "interphoto 1s linear";
            blur('#bg6');
            timeout8 = setTimeout(clearall, 1000);

        }

        function blur(obj) {
            setTimeout(function() {
                $(obj).removeClass("blur");
                setTimeout(function() {
                    $(obj).addClass("blur");
                    setTimeout(function() {
                        $(obj).removeClass("blur");
                        setTimeout(function() {
                            $(obj).addClass("blur");
                            setTimeout(function() {
                                $(obj).removeClass("blur");
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }

        function timerStart() {
            var t = 0;
            var lt = 100;
            timer1 = setInterval(function() {
                lt += 5;
                if (lt > 95) {
                    lt = 0;
                    t++;
                }
                id('clock').innerText = "00:00:" + ((t < 10) ? ("0" + t) : t) + ":" + ((lt < 10) ? ("0" + lt) : lt);
            }, 50)
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
            bl_keepload = 'first';
            step_load();

        }

        //ÿ��ִ�м��غ�5��ͼƬ
        var bl_keepload = 'first';
        var step_loadnum = 5;
        var juli = 0;

        function step_load() {
            var load_num = 0
                //��������X��
            if (image_url_index == 0 && bl_keepload == 'first') {
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
                    if (i == 0) {
                        $("#bg1").css("background-image", "url(" + images[i][1] + ")");
                    }
                }
            } else if (bl_keepload == 'end') {
                return;
            } else {
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
            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                show1();
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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                show1();

            }
        }

        function setImage(idname) {
            if (reshow == true)
                return;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            //  console.log(Onload_imgs_url[image_url_index]);
            //  console.log(Onload_imgs_url,image_url_index);
            //  console.log(Onload_imgs_url,image_url_index);
            $("#bg" + idname).css("background-image", "url(" + Onload_imgs_url[image_url_index] + ")");
            image_url_index++;

            if (image_url_index == Onload_imgs_url.length) image_url_index = 0;
        }

        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'titlein .5s linear forwards';
            setTimeout(function() {
                id('pagetitle').style.webkitAnimation = 'titleMove 2s linear infinite';
            }, 600)
            id('titlecontent').innerHTML = e_desc;

        }

        function distitle() {
            id('pagetitle').style.webkitAnimation = 'titleout .5s linear forwards';
            setTimeout(function() {
                show1();
            }, 500)
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
        }

        function photo_auto_height() {
            var h1 = $(window).height();
            if (h1 < 760) h1 = 760;
            if (h1 > 815) h1 = 815;
            $("#container").height(h1 + "px");
        }
        //�Զ��߶���Ӧ
        photo_auto_height();


        call_me(load_images);
        load_init_modules();
    }
}
