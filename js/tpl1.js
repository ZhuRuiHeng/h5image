/*模板6*/
function playPhoto() {

    $("#div_player").append("<div id='tpl1' style='width: 100%; height: 100%; display: block;'></div>");
    $('#tpl1').append('<div id="t006_imgbox_wrapper_1" class="t006_imgbox_wrapper"></div>    <div id="t006_imgbox_wrapper_2" class="t006_imgbox_wrapper"></div>');

    var width = $(window).width(), height = $(window).height(), isInit = !1, s = 0, Scenes = [], index = -1;

    var initTemplate = function () {
        if (1 == isInit) return void console.log("warning,re init");
        isInit = !0;
        for (var imgbox_wrappers = $(".t006_imgbox_wrapper"), e = 3, s = 4, wh = width / e, ht = height / s, i = 0; i < imgbox_wrappers.length; ++i)
            for (var h = 0; s > h; ++h)
                for (var p = 0; e > p; ++p) {
                    var d = document.createElement("div");
                    d.className = "t006_image_wrapper",
                    d.innerHTML = "<img>",
                    imgbox_wrappers[i].appendChild(d)
                }

        Scenes.push(new T006Scene1());
        Scenes.push(new T006Scene2());
        Scenes.push(new T006Scene3());
        Scenes.push(new T006Scene4());
        box.push($("#t006_imgbox_wrapper_1"));
        box.push($("#t006_imgbox_wrapper_2"));

    }
    var loadImage = function (imagebox, url) {
        var a = new Image;
        a.onload = function () {
            var image_wappers = imagebox.children(".t006_image_wrapper");
            var is = getImgScale(this.width, this.height, $(window).width());
            for (var i = 0; i < county; i++)
                for (var j = 0; j < countx; j++) {
                    var image_wapper = image_wappers[(county - 1) * i + j];
                    var cw = parseInt((is.width / countx)) + 3;
                    if (is.width >= is.height) {
                        var ch = parseInt((is.height / county)) + 6;
                    } else {
                        var ch = parseInt((is.height / county)) + 3;
                    }
                    image_wapper.style.display = "none",
                    image_wapper.style.width = cw + "px";
                    image_wapper.style.height = ch + "px";
                    image_wapper.style["-webkit-transform"] = "none";
                    image_wapper.style.webkitTransition = "-webkit-transform 2s, opacity 2s";
                    image_wapper.style.transition = "transform 2s, opacity 2s";
                    image_wapper.style.opacity = 1;
                    var y = image_wapper.getElementsByTagName("img")[0];
                    var pis = getImgScale(this.width, this.height, $(window).width());
                    y.style.width = is.width + "px";
                    y.style.height = is.height + "px";
                    y.style.left = 0 - cw * j + "px",
                    y.style.top = 0 - ch * i + "px",
                    y.src = url;
                }
            imagebox.css("width", is.width);
            imagebox.css("height", is.height);
            imagebox.css("marginLeft", (0 - is.width) / 2);
            imagebox.css("marginTop", (0 - is.height) / 2);
            var s1 = Scenes[Math.floor(Math.random() * Scenes.length)];
            s1.Show(imagebox, is, cw, ch);
            setTimeout(function () { s1.Hide(imagebox, is, cw, ch) }, 7000);
        };
        a.src = url;

    };

    //初始化模板6
    initTemplate();
    //加载图片
    loadUserImages();
    //图片加载完成之后,运用jquery的异步信号
    $.when(loadingdef).done(function () {

        //显示界面
        $("#wrapper_player_cover_bkgnd").css("display", "block");
        setTimeout("$('#wrapper_cover').addClass('effect_fadeOut');", 3000);
        //启动动画
        setTimeout(function () {
            loadImage($("#t006_imgbox_wrapper_1"), images[0][1]);
            setInterval(function () {
                boxIndex == 1 ? boxIndex = 0 : boxIndex++;;
                imageIndex == images.length - 1 ? imageIndex = 0 : imageIndex++;
                // if (imageIndex == 0 && !hasShowTip) {
                //     $("#div_share").show();
                //     hasShowTip = true;
                // }
                loadImage(box[boxIndex], images[imageIndex][1]);

            }, 7200);
        }, 3100);
    });

}

//动画场景
function T006Scene1() {
    this.Show = function (imagebox, is, cw, ch) {
        //imagebox.css("zIndex", 1);
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                image_wapper.style.display = "block";
                image_wapper.style.opacity = 0;
                var points = [[0 - is.width + 100 * Math.random(), 0], [0 - is.width + 100 * Math.random(), is.height], [0, 0 - is.height + 100 * Math.random()], [is.width, 0 - is.height + 100 * Math.random()]];
                point = points[parseInt(Math.random() * points.length)];
                image_wapper.style["-webkit-transform"] = "translate3d(" + point[0] + "px, " + point[1] + "px, -500px) scale3d(0.1,0.1,0.1) rotateY(" + (45 - 90 * Math.random()) + "deg)";
                //自运行函数
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 1,
                        t.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 0)"
                    },
                    50 + 100 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }
    this.Hide = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 0.1,
                        t.style["-webkit-transform"] = "translate3d(" + is.width + "px, " + is.height / 2 + "px, 0) scale3d(.01,.01,.01) rotateY(-180deg)"
                    },
                    50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }
}

function T006Scene2() {
    this.Show = function (imagebox, is, cw, ch) {
        //imagebox.css("zIndex", 1);
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                image_wapper.style.display = "block";
                image_wapper.style.opacity = 0;
                image_wapper.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 2000px) scale3d(0.1,0.1,0.1) rotate(" + (45 - 90 * Math.random()) + "deg)";
                //自运行函数
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = .2;
                        t.style["-webkit-transform"] = "translate3d(" + (is.width - cw) / 2 + "px, " + (is.height - ch) / 2 + "px, 0) scale3d(0.5,0.5,0.5)";
                        setTimeout(function () {
                            t.style.opacity = .7,
                            t.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, -500px) scale3d(0.6,0.6,0.6) rotateY(" + (45 - 90 * Math.random()) + "deg)";
                        },
                        2500 - 100 * a - 50);
                    },
                    50 + 50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }

        setTimeout(function () {
            for (var i = 0; i < county; i++)
                for (var j = 0; j < countx; j++) {
                    var image_wapper = image_wappers[(county - 1) * i + j];
                    image_wapper.style.opacity = 1;
                    image_wapper.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 0)";
                }
        },
        150 * i * j + 2200);
    }

    this.Hide = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 0.1,
                        t.style["-webkit-transform"] = "translate3d(" + is.width + "px, " + is.height / 2 + "px, 0) scale3d(.01,.01,.01) rotateY(-180deg)"
                    },
                    50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }
}

function T006Scene3() {
    this.Show = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                image_wapper.style.display = "block";
                image_wapper.style.opacity = 0;
                image_wapper.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 2000px) scale3d(0.1,0.1,0.1) rotate(" + (45 - 90 * Math.random()) + "deg)";
                //自运行函数
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = .2;
                        t.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, -500px) scale3d(0.6,0.6,0.6) rotateY(" + (45 - 90 * Math.random()) + "deg)";
                    },
                    50 + 50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
        setTimeout(function () {
            for (var i = 0; i < county; i++)
                for (var j = 0; j < countx; j++) {
                    var image_wapper = image_wappers[(county - 1) * i + j];
                    image_wapper.style.opacity = 1;
                    image_wapper.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 0)";
                }
        },
        150 * i * j + 150);
    }

    this.Hide = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 0.1;
                        var points = [[0 - is.width + 100 * Math.random(), 0], [0 - is.width + 100 * Math.random(), is.height], [0, 0 - is.height + 100 * Math.random()], [is.width, 0 - is.height + 100 * Math.random()]];
                        point = points[parseInt(Math.random() * points.length)];
                        t.style["-webkit-transform"] = "translate3d(" + point[0] + "px, " + point[1] + "px, 0px) scale3d(0.2,0.2,0.2) rotateY(-180deg)";

                    },
                    50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }
}

function T006Scene4() {
    this.Show = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                image_wapper.style.display = "block";
                image_wapper.style.opacity = 0;
                image_wapper.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 1500px) scale3d(0.1,0.1,0.1) rotate(" + (45 - 90 * Math.random()) + "deg)";
                //自运行函数
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 1;
                        t.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 0px) rotateY(0deg)";
                    },
                    50 + 50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }

    this.Hide = function (imagebox, is, cw, ch) {
        var image_wappers = imagebox.children(".t006_image_wrapper");
        for (var i = 0; i < county; i++)
            for (var j = 0; j < countx; j++) {
                var image_wapper = image_wappers[(county - 1) * i + j];
                (function (t, a, x, y, j, i) {
                    setTimeout(function () {
                        t.style.opacity = 0.5,
                        t.style["-webkit-transform"] = "translate3d(" + cw * j + "px, " + ch * i + "px, 0) scale3d(.04,.04,.04) rotate(" + (45 - 90 * Math.random()) + "deg)";
                        setTimeout(function () {
                            t.style.opacity = 0,
                            t.style["-webkit-transform"] = "translate3d(" + is.width / 2 + "px, " + is.height / 2 + "px, 0px) scale3d(0.2,0.2,0.2) rotateY(-180deg)";
                        },
                        1500 - 50 * a);
                    },
                    50 * a);
                })(image_wapper, (county - 1) * i + j, cw, ch, j, i);
            }
    }
}
/*end模板6*/