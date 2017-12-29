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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic2.jpg"> <img class="huo8" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic11.png"> <img class="huo7" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic11.png"><div id="div1"><img id="img1" style="position:absolute"></div><div id="div2"><img id="img2" style="position:absolute"></div><div id="titlebg"></div><div id="pagetitle" style="position:absolute;width:340px;height:226px;top:260px;left:80px;font-size:30px;color:#000;overflow:hidden;line-height:55px;text-shadow:0 2px 10px #fff;font-weight:700;opacity:0"><div style="position:absolute;width:340px;height:226px;top:0;left:0;overflow:hidden"><div style="position:absolute;width:340px;height:226px;display:table;overflow:hidden"><div id="titlecontent" style="width:340px;height:226px;vertical-align:middle;display:table-cell;text-align:center"></div></div></div></div><div id="lineup"><img style="left:58px;top:0;width:426px" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic1.png"></div><div id="linedown"><img style="left:39px;top:-135px" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic9.png"></div><div id="titlecover"></div><div id="decro"><img class="chilun1" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic10.png"> <img class="chilun2" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic10.png"> <img class="chilun3" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic8.png"> <img class="zi1" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic3.png"> <img class="zi2" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic7.png"></div><img class="huo1" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic5.png"> <img class="huo2" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic5.png"> <img class="huo3" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic5.png"> <img class="huo4" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic4.png"> <img class="huo5" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic11.png"> <img class="huo6" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic11.png"> <img id="yan1" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic6.png"> <img id="yan2" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic6.png"> <img id="yan3" src="http://referer-image.szwwy.com/coolphoto/img/tpl80/pic6.png"></div>');
        function id(name) {
            return document.getElementById(name)
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


        function image_onerror(event) {
            var img = event.target;
            var index = img.index;
            if (index < step_loadnum)
                error_num++;
            Onload_imgs_url[index] = 'not find';
            // console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
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
            // console.log(have_num + '-' + error_num);

            if ((have_num + error_num >= step_loadnum || images.length == (have_num + error_num)) && canshow == true) {
                reshow = false;
                canshow = false;
                if (have_num == 0)
                    return;
                zmtxifenbao();

            }
        }

        function showtitle() {

            id('titlecover').style.webkitAnimation = 'titlecover 0.7s ease both , fadeout 1s 0.5s linear both';

            timeout[4] = setTimeout(function() {
                    id('lineup').style.opacity = 1;
                    id('linedown').style.opacity = 1;
                    id('titlebg').style.opacity = 1;
                }, 700)
                // id('titlebg').style.webkitAnimation = 'titlescale 0.6s linear both';

            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'fadein 0.1s 0.5s linear both';

        }

        function zmtxifenbao() {
            // return;

            setImageindex();
            set_img_position(1);
            create_img_ani(false);

            timeout[1] = setTimeout(show2, 4000)
        }

        function show2() {

            create_img_ani(true, 2);
            set_img_position(2);

            timeout[2] = setTimeout(show1, 4000);
        }

        function show1() {
            create_img_ani(true, 1);

            timeout[3] = setTimeout(show2, 4000)
        }

        function create_img_ani(img_bool, pageindex) {
            var framesname = 'ani_' + get_pid(Onload_imgs_url[image_url_index]);
            framesname = framesname.replace('.jpg', "");
            // framesname  = 'ani'+framesname.replace('?imageMogr2/auto-orient/',"");
            if (img_bili < 0.7) {
                changeheight = 313;
            } else {
                changeheight = img_height / 2;
            }

            if (!img_bool) {
                var csstext = '@-webkit-keyframes ' + framesname + 'toup {0% {-webkit-transform:translate(0px,-162px)} 90% {-webkit-transform:translate(0px,-' + (changeheight + 10) + 'px)}  100% {-webkit-transform:translate(0px,-' + changeheight + 'px)}}';
                var style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;

                sheet.insertRule(csstext, 0);
                id('lineup').style.webkitAnimation = framesname + 'toup 0.5s linear both';

                csstext = '@-webkit-keyframes ' + framesname + 'todown {0% {-webkit-transform:translate(0px,162px)} 90% {-webkit-transform:translate(0px,' + (changeheight + 10) + 'px)}  100% {-webkit-transform:translate(0px,' + changeheight + 'px)}}';
                style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);
                id('linedown').style.webkitAnimation = framesname + 'todown 0.5s linear both';
                id('decro').style.webkitAnimation = framesname + 'todown 0.5s linear both';

                csstext = '@-webkit-keyframes ' + framesname + 'toscale {0% {-webkit-transform:scale(1,' + (162 / changeheight) + ');opacity:0} 100% {-webkit-transform: scale(1,1);opacity:1}}'
                var style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                id('div1').style.webkitAnimation = framesname + 'toscale 0.5s ease both';

                csstext = '@-webkit-keyframes titletoscale {0% {-webkit-transform: scale(1,1);opacity:1} 100% {-webkit-transform: scale(1,' + (changeheight / 162) + ');opacity:0}}'
                var style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                id('titlebg').style.webkitAnimation = 'titletoscale 0.5s ease both';
                id('pagetitle').style.webkitAnimation = 'titletoscale 0.5s ease both';


                id('div1').style.webkitAnimation = framesname + 'toscale 0.5s ease-in both';

            } else {
                image_url_index++;
                setImageindex();

                var next_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
                var next_name = url_name(Onload_imgs_url[image_url_index]);
                next_name = next_name.replace('.jpg', "");
                if (next_bili < 0.7) {
                    next_height = 313;
                } else {
                    next_height = 210 / next_bili;
                }

                var csstext = '@-webkit-keyframes upfrom_' + framesname + '_to_' + next_name + ' {0% {-webkit-transform: translate(0px,-' + changeheight + 'px)} 90% {-webkit-transform:translate(0px,-' + (next_height + 10) + 'px)} 100% {-webkit-transform:translate(0px,-' + next_height + 'px)}}';
                console.log(csstext);
                style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                id('lineup').style.webkitAnimation = 'upfrom_' + framesname + '_to_' + next_name + ' 0.5s linear both';

                var csstext = '@-webkit-keyframes downfrom_' + framesname + '_to_' + next_name + ' {0% {-webkit-transform: translate(0px,' + changeheight + 'px)} 90% {-webkit-transform:translate(0px,' + (next_height + 10) + 'px)} 100% {-webkit-transform:translate(0px,' + next_height + 'px)}}';
                console.log(csstext);
                style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                id('linedown').style.webkitAnimation = 'downfrom_' + framesname + '_to_' + next_name + ' 0.5s linear both';
                id('decro').style.webkitAnimation = 'downfrom_' + framesname + '_to_' + next_name + ' 0.5s linear both';

                var csstext = '@-webkit-keyframes outfrom_' + framesname + '_to_' + next_name + ' {0% {-webkit-transform: scale(1,1);opacity:1;} 90% {-webkit-transform:scale(1,' + (next_height / changeheight) * 1.04 + ');} 100% {-webkit-transform:scale(1,' + next_height / changeheight + ');opacity:0;}}';
                console.log(csstext);
                style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                var csstext = '@-webkit-keyframes infrom_' + framesname + '_to_' + next_name + ' {100% {-webkit-transform: scale(1,1);opacity:1} 90% {-webkit-transform:scale(1.04,1.04);} 0% {-webkit-transform:scale(1,' + changeheight / next_height + ');opacity:0}}';
                console.log(csstext);
                style = document.createElement('style');
                document.head.appendChild(style);
                var sheet = style.sheet;
                sheet.insertRule(csstext, 0);

                if (pageindex == 2) {
                    set_img_position(2)
                    id('div1').style.webkitAnimation = 'outfrom_' + framesname + '_to_' + next_name + ' 0.5s ease-in both';
                    id('div2').style.webkitAnimation = 'infrom_' + framesname + '_to_' + next_name + ' 0.5s ease-in both';
                } else {
                    set_img_position(1)
                    id('div1').style.webkitAnimation = 'infrom_' + framesname + '_to_' + next_name + ' 0.5s ease-in both';
                    id('div2').style.webkitAnimation = 'outfrom_' + framesname + '_to_' + next_name + ' 0.5s ease-in both';
                }

            }


        }

        function set_img_position(pageindex) {
            img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
            console.log(img_bili);
            img_width = 420;
            img_height = 420 / img_bili;

            var div = id('div' + pageindex);
            var img = id('img' + pageindex);

            div.style.width = '420px';
            div.style.left = '40px';
            img.style.width = '420px';
            img.style.height = img_height + 'px';
            img.src = Onload_imgs_url[image_url_index];
            img.style.left = '0px';
            if (img_bili < 0.7) {
                img.style.top = (626 - img_height) / 2 + 'px';

                div.style.height = '625px';
                div.style.top = (750 - 626) / 2 + 'px';
            } else {
                img.style.top = '0px';

                div.style.height = img_height + 'px';
                div.style.top = (750 - img_height) / 2 + 'px';
            }
        }

        function get_pid(url) {
            var index1 = url.indexOf("?");
            if (index1 != -1) {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function setImageindex() {
            if (image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
                // console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if (image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            if (image_url_index % step_loadnum == 0) {
                step_load();
            }
            console.log('setimg:' + Onload_imgs_url[image_url_index]);
        }

        function url_name(url) {
            if (url == null) {
                return '';
            } else {
                return url.toString().substr(url.lastIndexOf("/") + 1);
            }
        }

        function reload_scene() {
            clearnode();
            reshow = true;
            setTimeout(load_images, 100);
        }

        function clearnode() {
            id('titlebg').style.webkitAnimation = '';
            id('titlecover').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('lineup').style.webkitAnimation = '';
            id('linedown').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            id('decro').style.webkitAnimation = '';
            id('lineup').style.opacity = 0;
            id('linedown').style.opacity = 0;
            id('titlebg').style.opacity = 0;

            for (var i = 0; i < 5; i++) {
                clearTimeout(timeout[i]);
            }
        }


        call_me(load_images);
        load_init_modules();
    }
}
//http://referer-image.szwwy.com/coolphoto/img/tpl79/
