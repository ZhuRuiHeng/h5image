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
        $("#div_player").append('<div id="container"><div id="page4" style="width:500px;height:815px"><div id="div4h" style="position:absolute;top:54px;width:470px;height:500px;overflow:hidden"><img id="img4h" style="position:absolute"></div><div id="div4v" style="position:absolute;top:50px;left:10px;width:480px;height:500px;overflow:hidden"><div id="div4vv" style="position:absolute;top:-150px;left:10px;width:480px;height:500px"><img id="img4v" style="position:absolute"></div></div><img id="bg4" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic4.png"> <img id="lan4" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic8.png"> <img id="hu4" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"><div id="camera"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic14.png" style="position:absolute;top:20px;left:10px"><div id="guang"><img id="guang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic13.png"> <img id="guang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic13.png"> <img id="guang3" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic13.png"></div></div><div id="zimu"><img id="t1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic9.png"> <img id="a1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic3.png"> <img id="k" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic17.png"> <img id="e" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic6.png"> <img id="a2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic3.png"> <img id="p1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic2.png"> <img id="h" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic10.png"> <img id="o1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic7.png"> <img id="t2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic9.png"> <img id="o2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic7.png"></div></div><div id="page3" style="display:none;width:500px;height:815px"><div id="div3h" style="position:absolute;top:310px;left:-5px;width:480px;height:440px;overflow:hidden"><div id="div3hh" style="position:absolute;top:310px;left:50px;width:480px;height:440px"></div><img id="img3h" style="position:absolute"></div><div id="div3v" style="width:480px;height:440px;overflow:hidden"><img id="img3v" style="position:absolute"></div><img id="bg3" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic15.png"><div id="lan3"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic8.png"> <b id="wenzi1">人生</b></div><div id="hu3"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"> <b id="wenzi2">如戏</b></div></div><div id="page2" style="display:none;width:500px;height:815px"><div id="div2v" style="position:absolute;top:50px;width:480px;height:745px;overflow:hidden"><img id="img2v" style="position:absolute"></div><div id="div2h" style="position:absolute;top:95px;width:480px;height:720px;overflow:hidden"><img id="img2h" style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic1.png" style="position:absolute;top:0;left:0"> <img id="hong" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic12.png"> <img id="lan2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic8.png"> <img id="hu2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"></div><div id="page1" style="display:none;width:500px;height:815px"><div id="div1v" style="position:absolute;top:50px;width:480px;height:745px;overflow:hidden"><img id="img1v" style="position:absolute"></div><div id="div1h" style="position:absolute;top:95px;width:480px;height:720px;overflow:hidden"><img id="img1h" style="position:absolute"></div><img id="kuang1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic16.png"> <img id="memory" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic11.png"> <img id="huu1" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"> <img id="huu11" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"></div><div id="div0" style="position:absolute;top:-50px;left:0;display:none;width:500px;height:815px"><img id="kuang0" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic16.png" style="position:absolute;top:0;left:0"><div id="k1"><div id="huang1" style="width:131px;height:131px"><img id="huang1in" style="position:absolute;-webkit-animation:huang1in 5s linear both" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"></div><img id="huang2" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"> <img id="huang3" src="http://referer-image.szwwy.com/coolphoto/img/tpl81/pic5.png"><div id="pagetitle" style="position:absolute;width:130px;height:120px;top:20px;left:0;font-size:20px;color:#000;overflow:hidden;text-shadow:0 0 0 rgba(0,0,0,.2)"><div style="position:absolute;width:130px;height:120px;top:0;left:0;overflow:hidden"><div style="position:absolute;width:130px;height:120px;display:table;overflow:hidden"><div id="titlecontent" style="width:130px;height:120px;vertical-align:middle;color:#000;display:table-cell;text-align:center"></div></div></div></div><div style="position:absolute;top:70px;left:50px"><div id="biu1"><div id="biu11"></div></div><div id="biu2"><div id="biu22"></div></div><div id="biu3"><div id="biu33"></div></div><div id="biu4"><div id="biu44"></div></div><div id="biu5"><div id="biu55"></div></div><div id="biu6"><div id="biu66"></div></div><div id="biu7"><div id="biu77"></div></div></div></div></div></div>');

        var timeout0 = 0;
        var timeout1 = 0;
        var timeout2 = 0;
        var timeout3 = 0;
        var timeout4 = 0;
        var timeout5 = 0;
        var timeout6 = 0;
        var timeout7 = 0;
        var timeout8 = 0;
        var timeout9 = 0;
        var timeout10 = 0;
        var timeout12 = 0;


        var image_size_width = [];
        var image_size_height = [];
        var Onload_imgs_url = [];

        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var bl_keepload = 'first';
        var step_loadnum = 5;

        function step_load() {
            var load_num = 0
                //初步加载X张
            if (image_url_index == 0 && bl_keepload == 'first') {
                //console.log('loading continue');
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
                //console.log('loading continue');
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
            //zmtxifenbao_title();

            bl_keepload = 'first';
            step_load();
        }

        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum)
                error_num++;
            Onload_imgs_url[index] = 'not find';
            //console.log(Onload_imgs_url[index]);
            //console.log(have_num + '-' + error_num);
            if ((have_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;

                to_zmtxifenbao_show();
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

                to_zmtxifenbao_show();

            }
        }
        var divwidth = { '0h': 900, '0v': 450, '1h': 900, '1v': 450, '2h': 900, '2v': 450, '3h': 520, '3v': 480, '4h': 615, '4v': 480 };
        var divheight = { '0h': 700, '0v': 800, '1h': 700, '1v': 800, '2h': 700, '2v': 760, '3h': 435, '3v': 700, '4h': 495, '4v': 700 };

        function setImage(idname) {
            if (reshow == true)
                return;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

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
            var heng = 0;
            if (img_bili > 1) {
                divname = idname + 'h';
                div = id('div' + idname + 'h');
                div1 = id('div' + idname + 'v');
                heng = 1;
            } else {
                divname = idname + 'v';
                div = id('div' + idname + 'v');
                div1 = id('div' + idname + 'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var height = divheight[divname];
            var width = divwidth[divname];

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
        }
        var delaytime = 5000;

        function id(name) {
            return document.getElementById(name);
        }

        function zmtxifenbao_title() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';
            id('div0').style.display = 'block';
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'zmtxifenbao_title 3s linear  both';

            id('huang1').style.webkitAnimation = 'huang1 3s linear both';
            id('huang2').style.webkitAnimation = 'huang2 0.8s linear both';
            id('huang3').style.webkitAnimation = 'huang3 0.8s linear both';
            id('biu11').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu22').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu33').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu44').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu55').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu66').style.webkitAnimation = 'biu11 3.4s linear both';
            id('biu77').style.webkitAnimation = 'biu11 3.4s linear both';
        }

        function to_zmtxifenbao_show() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';
            id('pagetitle').style.webkitAnimation = 'to_zmtxifenbao_show 0.6s linear both';
            id('huang1').style.webkitAnimation = 'dishuang 0.6s linear both';
            id('kuang0').style.webkitAnimation = 'kuang0 0.6s linear both';

            timeout8 = setTimeout(show1, 600);
        }

        function jshow1() {
            setImage(1);
            id("huu1").style.webkitAnimation = "huu1111 0.6s linear  both";

            timeout7 = setTimeout(show1, 1000);
        }

        function show1() {
            setImage(1);
            id('page1').style.display = 'block';
            id('page2').style.display = 'none';
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';
            id("page4").style.webkitAnimation = "";
            id("page2").style.webkitAnimation = "";
            id("img2v").style.webkitAnimation = "";
            id("img2h").style.webkitAnimation = "";
            id("lan2").style.webkitAnimation = "";
            id("hong").style.webkitAnimation = "";
            id("hu2").style.webkitAnimation = "";
            id("div0").style.display = "none";
            id('page1').style.display = 'block';
            id("img1v").style.webkitAnimation = "img1 6s linear both";
            id("img1h").style.webkitAnimation = "img30 6s linear both";
            id("huu1").style.webkitAnimation = "huu1 6s linear  both";
            // id("lan1").style.webkitAnimation = "lan1 4s linear both";
            id("memory").style.webkitAnimation = "memory 5.5s linear 0.5s both";

            id("huu11").style.webkitAnimation = "huu11 5.8s linear 0.2s both";

            timeout2 = setTimeout(zmtxifenbao_show2, 6000);

        }

        function zmtxifenbao_show2() {
            setImage(2);
            id("page3").style.webkitAnimation = "";
            id("bg3").style.webkitAnimation = "";
            id("img3h").style.webkitAnimation = "";
            id("img3v").style.webkitAnimation = "";
            id("lan3").style.webkitAnimation = "";
            id("wenzi1").style.webkitAnimation = "";
            id("wenzi2").style.webkitAnimation = "";
            id("hu3").style.webkitAnimation = "";
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';
            id("page1").style.display = "none";
            id('page2').style.display = 'block';
            id("img2v").style.webkitAnimation = "img2 7s linear both";
            id("img2h").style.webkitAnimation = "img2h 7s linear both";
            id("lan2").style.webkitAnimation = "lan2 7s linear both";
            id("hong").style.webkitAnimation = "hong 7s linear both";
            id("hu2").style.webkitAnimation = "hu2 6.4s linear both";
            timeout3 = setTimeout(jy, 6500);

        }

        function jy() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'block';
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';
            id("page2").style.webkitAnimation = " jianying 0.5s  linear both";
            timeout9 = setTimeout(ztxifenbao_show3, 500);
        }

        function ztxifenbao_show3() {
            setImage(3);
            id('page2').style.display = 'none';
            id('page1').style.display = 'none';
            id('page4').style.display = 'none';
            id("page4").style.webkitAnimation = "";
            id("bg4").style.webkitAnimation = "";
            id("img4h").style.webkitAnimation = "";
            id("img4v").style.webkitAnimation = "";
            id('hu4').style.webkitAnimation = "";
            id('lan4').style.webkitAnimation = "";
            id('camera').style.webkitAnimation = "";
            id('zimu').style.webkitAnimation = "";
            id('t1').style.webkitAnimation = "";
            id('a1').style.webkitAnimation = "";
            id('k').style.webkitAnimation = "";
            id('e').style.webkitAnimation = "";
            id('p1').style.webkitAnimation = "";
            id('h').style.webkitAnimation = "";
            id('o1').style.webkitAnimation = "";
            id('t2').style.webkitAnimation = "";
            id('o2').style.webkitAnimation = "";
            id('a2').style.webkitAnimation = "";
            id('guang').style.webkitAnimation = "";

            id('page3').style.display = 'block';
            id("page3").style.webkitAnimation = "div3 7.4s linear  both";
            id("bg3").style.webkitAnimation = "bg3 7.4s linear  both";
            id("img3h").style.webkitAnimation = "img3 7.4s linear both";
            id("img3v").style.webkitAnimation = "img3v 7.4s linear  both";
            id("lan3").style.webkitAnimation = "lan3 7.1s linear 0.9s both";
            id("wenzi1").style.webkitAnimation = "wenzi1 7.4s linear  both";
            id("wenzi2").style.webkitAnimation = "wenzi2 7.4s linear  both";
            id("hu3").style.webkitAnimation = "hu3 4s linear  both";
            timeout4 = setTimeout(jy3, 6800);

        }

        function jy3() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page3').style.display = 'block';
            id('page4').style.display = 'none';
            id("page3").style.webkitAnimation = "jianying 0.6s linear  both";
            timeout10 = setTimeout(show4, 600);
        }

        function show4() {
            setImage(4);
            id("div0").style.webkitAnimation = "";
            id("page1").style.webkitAnimation = "";
            id("img1v").style.webkitAnimation = "";
            id("img1h").style.webkitAnimation = "";
            // id("lan1").style.webkitAnimation = "";
            id("memory").style.webkitAnimation = "";
            id("huu1").style.webkitAnimation = "";
            id("huu11").style.webkitAnimation = "";
            id("huang1").style.webkitAnimation = "";
            id('page3').style.display = 'none';
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page4').style.display = 'block';
            id("page4").style.webkitAnimation = "div4 6.4s linear both";
            id("bg4").style.webkitAnimation = "bg4 7s linear both";
            id("img4h").style.webkitAnimation = "img4 7s linear both";
            id("img4v").style.webkitAnimation = "img4v 7s linear both";
            id("lan4").style.webkitAnimation = "lan4 7s linear both";
            id("hu4").style.webkitAnimation = "hu4 7s linear both";
            id("camera").style.webkitAnimation = "camera 7s linear  both";
            id("zimu").style.webkitAnimation = "zimu 6.7s linear 0.3s both";
            id("t1").style.webkitAnimation = "t1 1.7s linear  both";
            id("a1").style.webkitAnimation = "a1 1.7s linear  both";
            id("k").style.webkitAnimation = "k 1.7s linear  both";
            id("e").style.webkitAnimation = "e 1.7s linear  both";
            id("a2").style.webkitAnimation = "a2 1.7s linear  both";
            id("p1").style.webkitAnimation = "p1 1.7s linear  both";
            id("h").style.webkitAnimation = "h 1.7s linear  both";
            id("o1").style.webkitAnimation = "o1 1.7s linear  both";
            id("t2").style.webkitAnimation = "t2 1.7s linear  both";
            id("o2").style.webkitAnimation = "o2 1.7s linear  both";
            id("guang").style.webkitAnimation = "guang 0.5s linear  infinite both";
            timeout5 = setTimeout(disimg4, 6400);
        }

        function disimg4() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page3').style.display = 'none';
            id('page4').style.display = 'block';
            id("page4").style.webkitAnimation = 'jianying 0.6s  linear both';
            timeout6 = setTimeout(show1, 650);
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('page3').style.display = 'none';
            id('page4').style.display = 'none';

            id('titlecontent').innerHTML = '';
            // 开头清零zmtxifenbaok
            id('div0').style.display = 'none';
            id('pagetitle').style.webkitAnimation = '';
            id('kuang0').style.webkitAnimation = '';
            id('huang1').style.webkitAnimation = '';
            id('huang2').style.webkitAnimation = '';
            id('huang3').style.webkitAnimation = '';
            id('biu11').style.webkitAnimation = '';
            id('biu22').style.webkitAnimation = '';
            id('biu33').style.webkitAnimation = '';
            id('biu44').style.webkitAnimation = '';
            id('biu55').style.webkitAnimation = '';
            id('biu66').style.webkitAnimation = '';
            id('biu77').style.webkitAnimation = '';
            id('kuang0').style.webkitAnimation = '';
            // 第二页
            id("page2").style.webkitAnimation = "";
            id("img2v").style.webkitAnimation = "";
            id("img2h").style.webkitAnimation = "";
            id("lan2").style.webkitAnimation = "";
            id("hong").style.webkitAnimation = "";
            id("hu2").style.webkitAnimation = "";
            // 第三页
            id("page3").style.webkitAnimation = "";
            id("bg3").style.webkitAnimation = "";
            id("img3h").style.webkitAnimation = "";
            id("img3v").style.webkitAnimation = "";
            id("lan3").style.webkitAnimation = "";
            id("wenzi1").style.webkitAnimation = "";
            id("wenzi2").style.webkitAnimation = "";
            id("hu3").style.webkitAnimation = "";
            // 第四页
            id("page4").style.webkitAnimation = "";
            id("bg4").style.webkitAnimation = "";
            id("img4h").style.webkitAnimation = "";
            id("img4v").style.webkitAnimation = "";
            id('hu4').style.webkitAnimation = "";
            id('lan4').style.webkitAnimation = "";
            id('camera').style.webkitAnimation = "";
            id('zimu').style.webkitAnimation = "";
            id('t1').style.webkitAnimation = "";
            id('a1').style.webkitAnimation = "";
            id('k').style.webkitAnimation = "";
            id('e').style.webkitAnimation = "";
            id('p1').style.webkitAnimation = "";
            id('h').style.webkitAnimation = "";
            id('o1').style.webkitAnimation = "";
            id('t2').style.webkitAnimation = "";
            id('o2').style.webkitAnimation = "";
            id('a2').style.webkitAnimation = "";
            id('guang').style.webkitAnimation = "";
            // 第一页
            id("page1").style.webkitAnimation = "";
            id("img1v").style.webkitAnimation = "";
            id("img1h").style.webkitAnimation = "";
            // id("lan1").style.webkitAnimation = "";
            id("memory").style.webkitAnimation = "";
            id("huu1").style.webkitAnimation = "";
            id("huu11").style.webkitAnimation = "";
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
            clearTimeout(timeout12);
        }
        call_me(load_images);

        load_init_modules();
    }
}
