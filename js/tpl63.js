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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl63/bg.jpg"> <img id="water"> <img class="moon" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/moon.png"><div id="pagediv1"><div id="pagetitle1" style="position:absolute;width:340px;height:150px;top:150px"><div style="position:absolute;width:340px;height:150px;overflow:hidden;display:table"><div id="titlecontent1" style="width:340px;height:150px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:45px;color:#fff"></div></div></div></div><div id="pagediv2"><div id="pagetitle2" style="position:absolute;width:340px;height:150px;top:-150px;-webkit-transform:scale(1,-1)"><div style="position:absolute;width:340px;height:150px;overflow:hidden;display:table"><div id="titlecontent2" style="width:340px;height:150px;vertical-align:middle;display:table-cell;text-align:center;font-size:30px;line-height:45px;color:#fff"></div></div></div></div><div id="div1" style="display:none"><div id="div1h" class="divh"><img id="img1h" class="img"><div id="word1h" class="wordspanh"></div></div><div id="ying1h" class="divh"><img id="imgy1h" class="img"><div id="wordy1h" class="wordspanh"></div></div><div id="div1v" class="divv"><img id="img1v" class="img"><div id="word1v" class="wordspanv"></div></div><div id="ying1v" class="divv"><img id="imgy1v" class="img"><div id="wordy1v" class="wordspanv"></div></div></div><div id="con2v"><div id="div2v" class="divv"><img id="img2v" class="img"><div id="word2v" class="wordspanv"></div></div></div><div id="cony2v"><div id="ying2v" class="divv"><img id="imgy2v" class="img"><div id="wordy2v" class="wordspanv"></div></div></div><div id="con2h"><div id="div2h" class="divh"><img id="img2h" class="img"><div id="word2h" class="wordspanh"></div></div></div><div id="cony2h"><div id="ying2h" class="divh"><img id="imgy2h" class="img"><div id="wordy2h" class="wordspanh"></div></div></div><div id="div3"><div id="con3h"><div id="div3h" class="divh"><img id="img3h" class="img"><div id="word3h" class="wordspanh"></div></div></div><div id="cony3h"><div id="ying3h" class="divh"><img id="imgy3h" class="img"><div id="wordy3h" class="wordspanh"></div></div></div><div id="con3v"><div id="div3v" class="divv"><img id="img3v" class="img"><div id="word3v" class="wordspanv"></div></div></div><div id="cony3v"><div id="ying3v" class="divv"><img id="imgy3v" class="img"><div id="wordy3v" class="wordspanv"></div></div></div></div><div id="pBmF7kZo5-an-obj-2"><div><img height="57" width="56" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua.png"></div></div><img id="hua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua.png"><div class="huadiv3"><img id="hua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua1.png"></div><img id="hua4" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua.png"> <img class="hehua" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua3.png"> <img class="yulan" src="http://referer-image.szwwy.com/coolphoto/img/tpl63/hua2.png"></div>');

        function id(name) {
            return document.getElementById(name);
        }

        function watermoving() {
            var water = id('water');
            water_index = 0;
            tt = setInterval(function() {
                water_index++;
                if (water_index == water_arr.length)
                    water_index = 0;
                water.src = water_arr[water_index];

                // clearInterval(tt);

            }, 100)
        }


        var water_arr = [
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w1.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w2.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w3.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w4.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w5.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w6.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w7.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w8.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w9.jpg', 
        'http://referer-image.szwwy.com/coolphoto/img/tpl63/w10.jpg'];



        function showtitle() {
            id('pagediv1').style.overflow = 'hidden';
            id('pagediv2').style.overflow = 'hidden';
            id('pagetitle1').style.webkitAnimation = 'title_in 2s ease-in-out both';
            id('pagetitle2').style.webkitAnimation = 'daoying_in 2s ease-in-out both';
            id('pagediv1').style.webkitAnimation = 'titlemoving 1s 2s linear infinite alternate';
            id('pagediv2').style.webkitAnimation = 'titlemoving1 1s 2s linear infinite alternate';

            id('titlecontent1').innerHTML = e_desc;
            id('titlecontent2').innerHTML = e_desc;


            // setTimeout(distitle,4000)
        }

        function zimeitixfb() {
            id('pagediv1').style.overflow = 'visible';
            id('pagediv2').style.overflow = 'visible';
            id('pagetitle1').style.webkitAnimation = 'title_out 1.5s ease-in both';
            id('pagetitle2').style.webkitAnimation = 'daoying_out 1.5s ease-in both';

            timeout[1] = setTimeout(show1, 1500)
        }

        function show1() {
            id('div1').style.display = 'block';
            setImage('1');

            id('div1').style.webkitAnimation = 'div1_in 3.5s ease-out both';


            timeout[2] = setTimeout(show2, 6000)
        }

        function show2() {
            setImage('2');

            id('div2v').style.webkitAnimation = '';
            id('ying2v').style.webkitAnimation = '';

            id('div2h').style.webkitAnimation = '';
            id('ying2h').style.webkitAnimation = '';

            id('div1').style.webkitAnimation = 'div1_out 2.5s ease-in both';

            timeout[3] = setTimeout(function() {
                id('div2v').style.webkitAnimation = 'div2v_in 3s ease-out both';
                id('ying2v').style.webkitAnimation = 'div2vy_in 3s ease-out both';

                id('div2h').style.webkitAnimation = 'div2h_in 3s ease-out both';
                id('ying2h').style.webkitAnimation = 'ying2h_in 3s ease-out both';



                // id('con2v').style.webkitAnimation = 'div2moving 1.2s 4 3s linear alternate';
                // id('cony2v').style.webkitAnimation = 'divy2moving 1.2s 4 3s linear alternate';

                // id('con2h').style.webkitAnimation = 'div2moving 1.2s 4 3s linear alternate';
                // id('cony2h').style.webkitAnimation = 'divy2moving 1.2s 4 3s linear alternate'; 

            }, 2500)

            id('div3').style.webkitAnimation = '';
            id('con3h').style.webkitAnimation = '';
            id('cony3h').style.webkitAnimation = '';
            id('con3v').style.webkitAnimation = '';
            id('cony3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('ying3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('ying3v').style.webkitAnimation = '';

            timeout[4] = setTimeout(show3, 10000)
        }

        function show3() {
            setImage('3');
            id('div2h').style.webkitAnimation = 'div2h_out 2.5s ease-in both';
            id('ying2h').style.webkitAnimation = 'ying2h_out 2.5s ease-in both';

            id('div2v').style.webkitAnimation = 'div2v_out 2.5s ease-in both';
            id('ying2v').style.webkitAnimation = 'div2vy_out 2.5s ease-in both';



            id('div3h').style.webkitAnimation = 'div2h_in 4s ease-out both';
            id('ying3h').style.webkitAnimation = 'ying2h_in 4s ease-out both';
            id('div3v').style.webkitAnimation = 'div2v_in 4s ease-out both';
            id('ying3v').style.webkitAnimation = 'div2vy_in 4s ease-out both';
            id('div3').style.webkitAnimation = 'div3_in 4s ease-out both';

            // setTimeout(function()
            // {
            //     id('div3').style.webkitAnimation = 'div3_move 2s 2 4s linear alternate';
            // },4000)


            timeout[5] = setTimeout(show4, 8000)

        }

        function show4() {
            setImage('1');
            id('con3h').style.webkitAnimation = 'div3h_out 3s ease-in both';
            id('cony3h').style.webkitAnimation = 'ying3h_out 3s ease-in both';

            id('con3v').style.webkitAnimation = 'div3h_out 3s ease-in both';
            id('cony3v').style.webkitAnimation = 'ying3h_out 3s ease-in both';

            id('div1').style.webkitAnimation = 'div1_in 3.5s 2.5s ease-out both';

            timeout[6] = setTimeout(show2, 10000);
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
        var showfont = false;
        var imgtype = 0;

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
            // loading_first(); 
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

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zimeitixfb();

            }
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

            var hname = idname + 'h';
            var vname = idname + 'v';

            if (img_bili > 1) {

                var img = id('img' + hname);
                var imgy = id('imgy' + hname);

                var word = id('word' + hname);
                var wordy = id('wordy' + hname);

                var div = id('div' + hname);
                var ying = id('ying' + hname);

                var div1 = id('div' + vname);
                var ying1 = id('ying' + vname);

                width = 400;
                height = 270;

            } else {
                var img = id('img' + vname);
                var imgy = id('imgy' + vname);

                var word = id('word' + vname);
                var wordy = id('wordy' + vname);

                var div = id('div' + vname);
                var ying = id('ying' + vname);

                var div1 = id('div' + hname);
                var ying1 = id('ying' + hname);

                width = 360;
                height = 540;
            }

            div.style.display = 'block';
            ying.style.display = 'block';
            div1.style.display = 'none';
            ying1.style.display = 'none';

            // var str = words[get_pid(Onload_imgs_url[image_url_index])];
            // if (str != undefined) {
            //     word.innerHTML = str;
            //     wordy.innerHTML = str;
            // } else {
            //     word.innerHTML = '';
            //     wordy.innerHTML = '';
            // }
            img.src = Onload_imgs_url[image_url_index];
            imgy.src = Onload_imgs_url[image_url_index];


            if (img_bili > (width / height)) {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height * img_bili + 'px';
                img.style.left = -((height * img_bili - width) / 2) + 'px';

                imgy.style.top = '0px';
                imgy.style.height = height + 'px';
                imgy.style.width = height * img_bili + 'px';
                imgy.style.left = -((height * img_bili - width) / 2) + 'px';
            } else {
                img.style.left = '0px';
                img.style.width = width + 'px';
                img.style.height = width / img_bili + 'px';
                img.style.top = -((width / img_bili - height) / 2) + 'px';

                imgy.style.left = '0px';
                imgy.style.width = width + 'px';
                imgy.style.height = width / img_bili + 'px';
                imgy.style.top = -((width / img_bili - height) / 2) + 'px';
            }

            image_url_index++;
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

        }



        function loading() {
            watermoving();
            load_images();

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

            var itemlist = ['div1h', 'div1v', 'ying1h', 'ying1v', 'div2h', 'div2v', 'ying2h', 'ying2v', 'div3h', 'div3v', 'ying3v', 'ying3h'];

            for (var i = 0; i < itemlist.length; i++) {
                id(itemlist[i]).style.display = 'none';
            }

            id('pagediv1').style.overflow = 'hidden';
            id('pagediv2').style.overflow = 'hidden';
            id('pagetitle1').style.webkitAnimation = '';
            id('pagetitle2').style.webkitAnimation = '';
            id('pagediv1').style.webkitAnimation = '';
            id('pagediv2').style.webkitAnimation = '';
            id('div1').style.webkitAnimation = '';

            id('div2v').style.webkitAnimation = '';
            id('ying2v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('ying2h').style.webkitAnimation = '';

            id('div3').style.webkitAnimation = '';
            id('con3h').style.webkitAnimation = '';
            id('cony3h').style.webkitAnimation = '';
            id('con3v').style.webkitAnimation = '';
            id('cony3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('ying3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('ying3v').style.webkitAnimation = '';


        }
        var get_pid = function(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }
        call_me(loading);
        load_init_modules();
    }
}
