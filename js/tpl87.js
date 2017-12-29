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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl87/bg.jpg"><div id="div1" class="div"><div id="word1" class="wordspan"></div></div><div id="div2" class="div"><div id="word2" class="wordspan"></div></div><div id="div3" class="div"><div id="word3" class="wordspan"></div></div><div id="div4" class="div"><div id="word4" class="wordspan"></div></div><div style="position:absolute;left:150px"><div id="div5" class="div"><div id="word5" class="wordspan1"></div></div></div><div style="position:absolute;left:-150px"><div id="div6" class="div"><div id="word6" class="wordspan1"></div></div></div><div id="div7" class="div"><div id="word7" class="wordspan"></div></div><div id="div8" class="div"><div id="word8" class="wordspan"></div></div><div id="yunbiao"><img class="yun09" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic8.png"> <img class="yun08" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic9.png"> <img class="yun07" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic7.png"> <img class="yun06" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic20.png"> <img class="yun05" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic16.png"> <img class="yun04" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic17.png"> <img class="yun03" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic26.png"> <img class="yun02" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic13.png"> <img class="yun01" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic2.png"></div><div id="yunbiao1"><img class="yun09" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic8.png"> <img class="yun08" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic9.png"> <img class="yun07" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic7.png"> <img class="yun06" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic20.png"> <img class="yun05" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic16.png"> <img class="yun04" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic17.png"> <img class="yun03" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic26.png"> <img class="yun02" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic13.png"> <img class="yun01" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic2.png"></div><img id="xiaban" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic24.png"><div id="jixiong"><img id="jiwei" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic10.png"> <img id="shenzi" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic14.png"> <img id="youshou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic19.png"> <img id="zuoshou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic12.png"> <img id="jitou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic11.png"><div id="zifu"><div id="zhongjian"><img id="zhongshou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic23.png"></div><img id="zyoushou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic22.png"> <img id="zzuoshou" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic21.png"> <img id="ankang" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic15.png"> <img id="hengtong" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic6.png"> <img id="hesui" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic18.png"> <img id="nafu" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic25.png"> <img id="yingchun" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic1.png"></div></div><img id="meihua" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic5.png"> <img id="meihua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua4" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua5" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua6" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua7" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua8" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua9" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"> <img id="meihua10" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic27.png"><div id="pagetitle"><img id="dibu" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic4.png"><div id="biaoti"><img id="shang" src="http://referer-image.szwwy.com/coolphoto/img/tpl87/pic3.png"><div id="titlecontent" style="width:287px;height:78px;display:flex;font-size:22px;line-height:25px;color:#540e0a;position:absolute;top:384px;left:106px;display:flex;justify-content:center;align-items:center"><div id="tcontent">新年快乐</div></div></div></div></div>');

        function id(name) {
            return document.getElementById(name);
        }


        function showtitle() {
            id('pagetitle').style.webkitAnimation = 'title_in 0.5s linear both';
            id('biaoti').style.webkitAnimation = 'shangdonghua 0.75s 0.5s linear both';
            id('dibu').style.webkitAnimation = 'dibuzhuan 18s 0.5s linear both';
        }

        function liangziyun_kawa() {
            setTimeout(function() {
                id('pagetitle').style.webkitAnimation = 'title_out 0.5s 0.5s linear both';
                id('biaoti').style.webkitAnimation = 'shangchu 0.5s linear both';
            }, 2000)
            setTimeout(show1, 3000);
            setTimeout(function() {
                id('zifu').style.display = 'block';
            }, 3000)


        }

        function show1() {
            setImage('1');
            setImage('2');
            id('div1').style.webkitAnimation = 'div1_in 2s ease-out both';
            id('div2').style.webkitAnimation = 'div2_in 2s ease-out both';

            timeout[1] = setTimeout(show2, 6000)
        }

        function show2() {
            id('div1').style.webkitAnimation = 'div1_out 2s ease-in both';
            id('div2').style.webkitAnimation = 'div2_out 2s ease-in both';

            setImage('3');
            setImage('4');
            id('div3').style.webkitAnimation = 'div3_in 2s 2s ease-out both';
            id('div4').style.webkitAnimation = 'div4_in 2s 2s ease-out both';

            timeout[2] = setTimeout(show3, 6000)

        }

        function show3() {
            id('div3').style.webkitAnimation = 'div3_out 2s ease-in both';
            id('div4').style.webkitAnimation = 'div4_out 2s ease-in both';
            setImage('5');
            setImage('6');
            id('div5').style.webkitAnimation = 'div5_in 2s 2s ease-out both';
            id('div6').style.webkitAnimation = 'div6_in 2s 2s ease-out both';
            timeout[3] = setTimeout(show4, 6000)

        }

        function show4() {
            id('div5').style.webkitAnimation = 'div5_out 2s ease-in both';
            id('div6').style.webkitAnimation = 'div6_out 2s ease-in both';

            setImage('7');
            setImage('8');
            id('div7').style.webkitAnimation = 'div7_in 2s 2s ease-out both';
            id('div8').style.webkitAnimation = 'div8_in 2s 2s ease-out both';

            timeout[4] = setTimeout(show5, 6000)

        }

        function show5() {
            id('div7').style.webkitAnimation = 'div3_out 2s ease-in both';
            id('div8').style.webkitAnimation = 'div4_out 2s ease-in both';
            timeout[5] = setTimeout(show1, 2000)
        }

        function loading() {
            load_images();
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

            var div = id('div' + idname);

            div.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';

            var word = id('word' + idname);
            var str = words[get_pid(Onload_imgs_url[image_url_index])];
            if (str != undefined) {
                word.innerHTML = str;
            } else {
                word.innerHTML = '';
            }
            //500 760
            if (img_bili < (380 / 600)) {
                var height = 600;
                var width = 600 * img_bili;
                var top = 80;
                var left = (500 - width) / 2;
                if (idname == '5' || idname == '6') {
                    width = width / 1.8;
                    height = height / 1.8;
                    left = 40;
                }
                if (idname == '6') {
                    left = 280;
                    top = 400;
                }
            } else if (img_bili <= 1) {
                var width = 420;
                var height = 420 / img_bili;
                var left = 40;
                var top = (740 - height) / 2;
                if (idname == '5' || idname == '6') {
                    width = width / 1.8;
                    height = height / 1.8;
                }
                if (idname == '6') {
                    left = left + 220;
                    top = 400;
                }
            } else if (img_bili > 1) {
                var width = 480;
                var height = 480 / img_bili;
                var left = 10;
                var top = (760 - height) / 2;
                if (idname == '5' || idname == '6') {
                    width = width / 1.5;
                    height = height / 1.5;
                }
                if (idname == '6') {
                    left = left + 180;
                    top = 420;
                }
            }

            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.left = left + 'px';
            div.style.top = top + 'px';
            div.style.backgroundSize = (width - 8) + 'px ' + (height - 8) + 'px';
            div.style.backgroundColor = '#fff';

            if (idname != "1" && idname != "3" && idname != "7") {
                image_url_index++;
            }
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

        function load_images() {
            reshow = false;
            image_size_width = [];
            image_size_height = [];
            Onload_imgs_url = [];
            image_url_index = 0;
            have_num = 0;
            error_num = 0;
            //id('tcontent').innerHTML = e_desc;
            showtitle();

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            canshow = true;
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
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime - begin_titletime);
                if (dis_titletime > delaytime) {
                    liangziyun_kawa();
                } else {
                    dis_titletime = delaytime - dis_titletime;
                    timeout[0] = setTimeout(function() {
                        liangziyun_kawa();
                    }, dis_titletime);
                }
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
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime - begin_titletime);
                if (dis_titletime > delaytime) {
                    liangziyun_kawa();
                } else {
                    dis_titletime = delaytime - dis_titletime;
                    timeout[0] = setTimeout(function() {
                        liangziyun_kawa();
                    }, dis_titletime);
                }

            }
        }
        var image_size_width = [];
        var image_size_height = [];
        var image_url_index = 0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime = 3500;
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
            id('zifu').style.display = 'none';

            var itemlist = ['pagetitle', 'dibu', 'biaoti', 'div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }
        call_me(loading);

        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl86/
