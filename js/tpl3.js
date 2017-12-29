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
        var str = '';
        str += '<div id="content" style="position:absolute;width:500px;height:815px;overflow:hidden">';
        str += '<div id="ppT9lwFAC-an-obj-1"><img height="815" width="500" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/bg.jpg"></div>';
        str += '<div id="ppT9lwFAC-an-obj-5"><img height="130" width="300" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/10.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-7"><img height="206" width="250" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/9.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-8"><img height="206" width="250" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/9.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-9"><img height="206" width="250" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/9.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-10"><img height="206" width="250" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/9.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-11">';
        str += '<div id="ppT9lwFAC-an-obj-12"><img height="44" width="70" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/7.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-13">';
        str += '<img height="213" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/8.png">';
        str += '<img id="eye_1" width="100" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/5.png">';
        str += '<img id="eye_2" width="100" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/4.png">';
        str += '</div>';
        str += '<div id="ppT9lwFAC-an-obj-14"><img height="130" width="57" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/3.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-15"><img height="190" width="57" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/2.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-16"><img height="44" width="70" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/7.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-17">';
        str += '<img height="194" width="150" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/6.png">';
        str += '<img id="eye_3" width="93" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/5.png">';
        str += '<img id="eye_4" width="93" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/4.png">';
        str += '</div>';
        str += '<div id="ppT9lwFAC-an-obj-18"><img height="130" width="57" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/3.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-19"><img height="190" width="57" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/2.png"></div>';
        str += '</div>';
        str += '<div id="ppT9lwFAC-an-obj-20"><img height="100" width="82" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/1.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-21"><img height="100" width="82" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/1.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-22"><img height="100" width="82" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/1.png"></div>';
        str += '<div id="ppT9lwFAC-an-obj-23"><img height="100" width="82" src="http://referer-image.szwwy.com/coolphoto/img/tpl3/1.png"></div>';
        str += '</div>';
        $("#div_player").append(str);

        started = false;
        show_images = [];
        bubbles = [];
        current_image = 0;

        one = [{
            x: 250,
            y: 250,
            r: 230
        }];
        two = [{
            x: 177,
            y: 221,
            r: 320
        }, {
            x: 380,
            y: 600,
            r: 218
        }]
        three = [{
            x: 112,
            y: 80,
            r: 230
        }, {
            x: 190,
            y: 593,
            r: 248
        }, {
            x: 390,
            y: 338,
            r: 180
        }]
        four = [{
            x: 137,
            y: 104,
            r: 173
        }, {
            x: 289,
            y: 427,
            r: 280
        }, {
            x: 403,
            y: 124,
            r: 135
        }, {
            x: 397,
            y: 689,
            r: 103
        }]

        paths = [one, two, three, four];


        function calc_image(img) {
            var w = img.width;
            var h = img.height;

            h = h * (500 / w);
            w = 500;

            if (h < 500) {
                w = w * (500 / h);
                h = 500;
            }

            img.w = w;
            img.h = h;

            img.l = Math.floor((500 - w) / 2);
            img.t = Math.floor((500 - h) / 2);
        }


        function insert_css(code) {
            var style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = code;
            document.head.appendChild(style);
        }


        function make_all_path_css() {
            for (var i = 0; i < paths.length; i++) {
                var objs = paths[i];

                for (var k = 0; k < objs.length; k++) {
                    one = objs[k];

                    make_path_css(-500, -500, one.x, one.y, one.r);
                    make_path_css(1000, -500, one.x, one.y, one.r);
                    make_path_css(-500, 1350, one.x, one.y, one.r);
                    make_path_css(1000, 1350, one.x, one.y, one.r);
                }
            }
        }


        function rand(min, max) {
            return Math.floor(Math.random() * (max - min));
        }

        function rand_list() {
            var nums = ['0', '0.1', '0.2', '0.3', '0.4'];

            for (var i = 0; i < 5; i++) {
                var i0 = rand(0, 5);
                var i1 = rand(0, 5);

                var tmp = nums[i0];
                nums[i0] = nums[i1];
                nums[i1] = tmp;
            }

            return nums;
        }


        function make_path_css(sx, sy, dx, dy, r) {
            var name = "ani_" + sx + "_" + sy + "_" + dx + "_" + dy + "_" + r;
            name = name.replace(/\-/g, "n");

            sx += 1000;
            sy += 1000;
            dx += 1000;
            dy += 1000;

            var mx = dx + 40;
            var my = dy + 40;
            var mx2 = dx - 40;
            var my2 = dy - 40;

            if (dx < sx) {
                mx = dx - 40;
                mx2 = dx + 40;
            }

            if (dy < sy) {
                my = dy - 40;
                my2 = dy + 40;
            }

            var dx2, dy2;

            if (sx - 1000 < 0) {
                dx2 = 1000 + 1000;
            } else {
                dx2 = -500 + 1000;
            }

            if (sy - 1000 < 0) {
                dy2 = 1350 + 1000;
            } else {
                dy2 = -500 + 1000;
            }

            var css = "";


            css += "@-webkit-keyframes " + name + "{\n";
            css += "0%{-webkit-transform: translate(" + (sx - r) + "px, " + (sy - r) + "px) rotate(0deg)}\n";
            css += "24%{-webkit-transform: translate(" + (mx - r) + "px, " + (my - r) + "px) rotate(360deg)}\n";
            css += "29%{-webkit-transform: translate(" + (dx - r) + "px, " + (dy - r) + "px) rotate(360deg)}\n";
            css += "73%{-webkit-transform: translate(" + (dx - r) + "px, " + (dy - r) + "px) rotate(360deg)}\n";
            css += "78%{-webkit-transform: translate(" + (mx2 - r) + "px, " + (my2 - r) + "px) rotate(360deg)}\n";
            css += "100%{-webkit-transform: translate(" + (dx2 - r) + "px, " + (dy2 - r) + "px) rotate(720deg)}\n";
            css += "}\n";

            insert_css(css);
            console.log(css);
        }


        function crate_bubbles() {
            for (var i = 0; i < 5; i++) {
                var one = document.createElement('div');
                bubbles.push(one);

                one.style.position = 'absolute';
                one.style.borderRadius = '99em';
                one.style.opacity = 0.98;

                one.style.left = '-1000px';
                one.style.top = '-1000px';
                one.style.width = '100px';
                one.style.height = '100px';
                one.style.visibility = 'visible';
                one.style.backgroundColor = 'white';

                var circle = new Image();

                one.appendChild(circle);

                var src_rand = rand(0, 1)
                if (src_rand == 0)
                    circle.src = "http://referer-image.szwwy.com/coolphoto/img/tpl3/11.png";
                else
                    circle.src = "http://referer-image.szwwy.com/coolphoto/img/tpl3/12.png";
                circle.width = "100";
                circle.height = "100";
                circle.style.visibility = 'visible';

                //document.body.appendChild(circle);

                one.circle = circle;
                one.onclick = function() {
                    var bkimg=$(this).get(0).style.backgroundImage;
                    if($(this).get(0).style.backgroundImage.indexOf('"')!=-1)
                    {
                        var src = $(this).get(0).style.backgroundImage.substr(5,$(this).get(0).style.backgroundImage.length-7);
                    }else
                    {
                        var src = $(this).get(0).style.backgroundImage.substr(4,$(this).get(0).style.backgroundImage.length-5);
                    }
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
                id('content').appendChild(one);
            }
        }


        function get_ok_image() {
            for (var i = 0; i < show_images.length; i++) {
                var sel = (current_image + i) % show_images.length;

                if (show_images[sel].ok) {
                    current_image = (sel + 1) % show_images.length;
                    return show_images[sel];
                }
            }

            return false;
        }


        function apply_image(bubble, w, h) {
            var img = get_ok_image();
            var iw = img.width;
            var ih = img.height;

            ih = ih * w / iw;
            iw = w;

            if (ih < h) {
                iw = iw * h / ih;
                ih = h;
            }

            iw = Math.floor(iw);
            ih = Math.floor(ih);

            var x = Math.floor((w - iw) / 2);
            var y = Math.floor((h - ih) / 2);

            bubble.style.backgroundImage = "url(" + img.src + ")";
            bubble.style.backgroundSize = iw + "px " + ih + "px";
            bubble.style.backgroundPosition = x + "px " + y + "px";
        }

        var style_1 = 0;

        function begin_show() {
            var i = rand(0, paths.length);
            var objs = paths[i];

            var m = rand(0, 4);
            var nums = rand_list();

            for (var k = 0; k < objs.length; k++) {
                // if(objs.length==1)
                // alert();

                o = objs[k];
                b = bubbles[k];

                b.style.width = o.r * 2 + "px";
                b.style.height = o.r * 2 + "px";

                apply_image(b, o.r * 2, o.r * 2);

                b.circle.width = o.r * 2;
                b.circle.height = o.r * 2;
                b.circle.style.position = "absolute";
                b.circle.style.left = "0px";
                b.circle.style.top = "0px";

                var sx, sy;

                if (m == 0) {
                    sx = -500;
                    sy = -500;
                } else if (m == 1) {
                    sx = 1000;
                    sy = -500;
                } else if (m == 2) {
                    sx = -500;
                    sy = 1350;
                } else if (m == 3) {
                    sx = 1000;
                    sy = 1350;
                }

                var name = "ani_" + sx + "_" + sy + "_" + o.x + "_" + o.y + "_" + o.r;
                name = name.replace(/\-/g, "n");

                console.log("ani select " + name);

                //var wt = nums[k];
                wt = 0.7 * k;

                if (objs.length == 1) {
                    // b.style.webkitAnimation='center_ani 3.5s ease-in-out both';
                    if (style_1 == 0) {
                        b.style.webkitAnimation = 'center_ani 3.5s ease-in-out both';
                        style_1 = 1;
                    } else {
                        b.style.webkitAnimation = 'roll_ani 3.5s ease-in-out both';
                        style_1 = 0;
                    }

                } else
                    b.style.webkitAnimation = name + " 3.5s ease-in-out " + wt + "s both";

            }
            var ts = (objs.length - 1) * 700 + 4000;
            setTimeout(clean_ani, ts);
        }


        function clean_ani() {
            for (var i = 0; i < bubbles.length; i++) {
                bu = bubbles[i];
                bu.style.webkitAnimation = "";
            }

            setTimeout(begin_show, 10);
        }


        function on_image_load(event) {
            var img = event.target;
            img.ok = true;
            calc_image(img);

            if (!started && show_images[0].ok && show_images[1].ok && show_images[2].ok && show_images[3].ok) {
                started = true;
                begin_show();
            }
        }


        function set_background() {
            // document.body.style.backgroundImage = "url(http://7xjeju.com2.z0.glb.qiniucdn.com/pic/love/lovebg.jpg)";
            document.body.style.backgroundSize = "500px " + document.body.scrollHeight + "px";
        }

        function id(name) {
            return document.getElementById(name)
        }

        function scene_init() {
            eyeOpen();
            set_background();
            crate_bubbles();
            make_all_path_css();

            if (images.length == 1) {
                images[1] = images[0];
            }

            if (images.length == 2) {
                images[2] = images[0];
            }

            if (images.length == 3) {
                images[3] = images[0];
            }
            console.log(images.length)
            for (var i = 0; i < images.length; i++) {
                var img = new Image();
                show_images.push(img);
                img.i = i;
                img.ok = false;
                img.onload = on_image_load;
                img.src = images[i][1];
            }
        }

        function eyeOpen() {
            var p = setInterval(function() {
                id('eye_2').style.display = 'none';
                id('eye_1').style.display = 'block';
                id('eye_4').style.display = 'none';
                id('eye_3').style.display = 'block';
                setTimeout(function() {
                    id('eye_1').style.display = 'none';
                    id('eye_2').style.display = 'block';
                    id('eye_3').style.display = 'none';
                    id('eye_4').style.display = 'block';
                }, 3000);
            }, 5000);

        }

        call_me(scene_init);
        load_init_modules();
    }
}
