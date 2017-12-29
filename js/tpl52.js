function Action(t) {
    "use strick";
    var n = this;
    if (arguments.length < 1 || !arguments[0]) throw new Error("Error in Act");
    if (this.actDom = document.querySelector("#" + t), !this.actDom) throw new Error("Error in Act");
    var o = this.actDom.querySelectorAll(".photo"),
        e = (this.actDom.querySelectorAll(".desc"),
            function() {}),
        i = function() {},
        r = 0,
        s = 500,
        c = function() {
            n.actDom.style.opacity = 1
        },
        l = function() {
            n.actDom.style.opacity = 0
        };
    l();
    var u = function(t, n) {
        return function() {
            var o = function(o) {
                for (var e = document.querySelectorAll(o), i = function(i) {
                            var r = e[i].style.webkitAnimation;
                            r && (e[i].style.webkitAnimation = ""),
                                e[i].style.webkitAnimation = t[o],
                                window.setTimeout(function() {
                                        e[i].style.webkitAnimation = r || ""
                                    },
                                    n)
                        },
                        r = 0; r < e.length; r++) i(r)
            };
            for (var e in t) o(e)
        }
    };
    this.getPhotoPlaceNum = function() {
            return o.length
        },
        this.setLoadIn = function(t, n) {
            e = u(t, n)
        },
        this.setLoadOut = function(t, n) {
            i = u(t, n),
                r = parseInt(n) || r
        },
        this.fill = function(t) {
            if (0 !== t.length)
                for (var n = 0; n < o.length; n++) {
                    var e = t[n].cloneNode(),
                        i = o[n].classList;
                    o[n].style.cssText = "";
                    var r = e.width,
                        s = e.height,
                        c = r / s;
                    if (c > 1 ? (i.remove("h"), i.add("v"), e.width = parseFloat(window.getComputedStyle(o[n]).width), e.height = e.width / c, o[n].style.height = e.height + "px") : (i.remove("v"), i.add("h"), e.height = parseFloat(window.getComputedStyle(o[n]).height), e.width = e.height * c, o[n].style.width = e.width + "px"), o[n].innerHTML = "", o[n].appendChild(e), e.alt) {
                        var l = document.createElement("span");
                        l.className = "photo-word",
                            l.innerHTML = e.alt,
                            o[n].appendChild(l)
                    }
                }
        },
        this.progress = Promise.resolve(),
        this.play = function(t) {
            return c(),
                e(),
                window.setTimeout(function() {
                        i(),
                            l()
                    },
                    t),
                this.progress = new Promise(function(n, o) {
                    window.setTimeout(function() {
                            n()
                        },
                        t + r - s)
                }),
                this.progress
        }
}

function PhotoPlayer() {
    "use strick";

    function t() {
        function c() {
            p = new Promise(function(t, n) {
                    var e = y instanceof Action ? y.play(o) : Promise.resolve();
                    e.then(t, n).
                    catch(function(t) {
                        console.error(t)
                    })
                }),
                t()
        }
        var v = r.length,
            m = s.length,
            y = void 0;
        if (0 === v) return void console.log("Empty Action Set");
        if (f >= m - h && !u && !d && (d = n(l, l + h), d.then(function() {
                d = null
            })), p || a || f) {
            var g = function() {
                y = r[a % (v || 1)];
                var n = y.getPhotoPlaceNum();
                if (d instanceof Promise && n > m) return console.log("等待加载..."),
                    d.then(function() {
                        t()
                    }), {
                        v: void 0
                    };
                var o = f % (m || 1);
                o + n > m ? y.fill(s.slice(o).concat(s.slice(0, m - o))) : y.fill(s.slice(o, o + n)),
                    Promise.resolve(p).then(function() {
                        1 === e ? (a++, f += n, c()) : p = null
                    }).
                catch(function(t) {
                    return console.error(t)
                })
            }();
            if ("object" === ("undefined" == typeof g ? "undefined" : _typeof(g))) return g.v
        } else y = i,
            c()
    }

    function n(t, n) {
        console.log("开始预加载：" + t + " - " + (n - 1));
        for (var o = [], e = [], i = function(n) {
                    var i = new Promise(function(o, i) {
                        var r = new Image;
                        r.src = c[n].src,
                            r.alt = c[n].desc,
                            r.onload = function() {
                                console.log("图片载入成功：" + this.src),
                                    r.onload = null,
                                    e[n - t] = r,
                                    o("图片[" + n + "]载入成功")
                            },
                            r.onerror = function() {
                                console.warn("图片载入失败：" + this.src),
                                    e[n - t] = null,
                                    o("图片[" + n + "]载入失败")
                            }
                    });
                    o.push(i)
                },
                r = t; r < n && r < c.length; r++) i(r);
        return Promise.all(o).then(function(t) {
            console.log(t),
                l += e.length;
            for (var n = 0; n < e.length; n++) null !== e[n] && s.push(e[n]);
            l >= c.length && (u = !0),
                console.log("预加载完毕，当前图片队列长度：" + s.length)
        })
    }
    var o = 5e3,
        e = 0,
        i = void 0,
        r = [],
        s = [],
        c = [],
        l = 0,
        u = !1,
        h = 5,
        a = 0,
        f = 0,
        d = void 0,
        p = void 0;
    this.setTitleAction = function(t) {
            if (!t instanceof Action) throw new Error;
            i = t
        },
        this.setTitle = function(t) {
            var n = document.getElementById("title");
            n && (n.innerHTML = t)
        },
        this.addAction = function(t) {
            if (!t instanceof Action) throw new Error;
            r.push(t)
        },
        this.addPhoto = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            u = !1,
                c.push({
                    src: t[1],
                    desc: n
                })
        },
        this.setTimeSpan = function(t) {
            o = parseInt(t) || o
        },
        this.setLoadStride = function(t) {
            h = parseInt(t) || h
        },
        this.replay = function() {
            var t = this;
            this.stop(),
                Promise.resolve(p).then(function() {
                    return t.play()
                }).
            catch(function(t) {
                return console.err(t)
            })
        },
        this.play = function() {
            1 !== e && (p || (e = 1, t()))
        },
        this.stop = function() {
            e = 0,
                a = 0,
                f = 0
        },
        this.pause = function() {
            e = 2
        }
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
PhotoPlayer.prototype.init = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = this,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    t.forEach(function(t) {
            //var o = t.substring(t.lastIndexOf("/") + 1);
            n.addPhoto(t, "");
        });
};

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
        $("#div_player").append('<main id="container"><div id="album"><section id="sec-1" style="opacity:0"><div id="titlebox" class="position-center"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua3.png" alt=""><p id="title"></p></div><div id="branch"><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua28.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua14.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua16.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua24.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua27.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua5.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua22.png" alt=""></div><div class="flower"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua25.png" alt=""></div><div class="bird"><div class="bird-body"></div><div class="bird-head"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua12.png" class="branch"></div><div class="star position-center"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua11.png" alt="" class="position-center"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua19.png" alt="" class="position-center"></div><img class="leaf leaf1" src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua21.png"> <img class="leaf leaf2" src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua21.png"> <img class="leaf leaf3" src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua21.png"></section><section id="sec-2" style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua23.png" alt="" class="top position-center"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua7.png" alt="" class="bottom position-center"><div class="photo-wrap"><div class="photo position-center position-middle h" style="width:361px"><img src="" alt="" height="520" width="361"></div></div><div class="star position-center"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua11.png" alt="" class="position-center"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua19.png" alt="" class="position-center"></div><img class="leaf leaf1" src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua21.png"> <img class="leaf leaf4" src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua21.png"></section><section id="sec-3" style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua26.png" alt="" class="top"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua17.png" alt="" class="bottom"><div class="photo-wrap"><div class="photo position-center h" style="width:204px"><img src="" alt="" height="364" width="204"></div></div><div class="photo-wrap"><div class="photo position-center h" style="width:204px"><img src="" alt="" height="364" width="204"></div></div><div class="petals"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua18.png" alt="" class="petal"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua20.png" alt="" class="petal"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua2.png" alt="" class="petal"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua10.png" alt="" class="petal"></div></section><section id="sec-4" style="opacity:1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua14.png" alt="" class="drop-flower"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua1.png" alt="" class="drop-flower"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua14.png" alt="" class="drop-flower"><div class="photo-wrap"><div class="photo h position-center position-middle" style="width:361px"><img src="" alt="" height="520" width="361"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua13.png" alt="" class="sec-bg position-center"></section><section id="sec-5" style="opacity:0"><div class="petal"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua9.png" width="280px"></div><div class="petal"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua9.png" width="200px"></div><div class="petal"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua15.png" width="140px"></div><div class="petal"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua15.png" width="130px"></div><div class="petal"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua4.png" alt=""></div><div class="photo-wrap"><div class="photo h position-center" style="width:196px"><img src="" alt="" height="350" width="196"></div><div class="photo h position-center" style="width:196px"><img src="" alt="" height="350" width="196"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua8.png" alt="" class="bottom position-center"></section><section id="sec-6" style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua29.png" alt="" class="mum"> <img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua29.png" alt="" class="mum"><div class="photo-wrap"><div class="photo h position-middle position-center" style="width:281px"><img src="" alt="" height="500" width="281"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl52/hua6.png" alt="" class="sec-bg position-center"></section></div></main>');

        window.photoplayer = new PhotoPlayer,
            window.photoplayer.setTimeSpan(7e3);
        var e = new Action("sec-1");
        e.setLoadIn({
                    "#branch>.flower>img": "flower_zoomIn 2s linear",
                },
                5e3),
            e.setLoadOut({
                    "#branch": "zoomOutOff 2s ease-in",
                },
                1e3);
        var o = new Action("sec-2");
        o.setLoadIn({
                    "#sec-2>.top": "moveDownIn 1s linear",
                    "#sec-2>.bottom": "moveUpIn 1s linear",
                    "#sec-2>.photo-wrap": "photo_zoomOutOn 2s linear"
                },
                2e3),
            o.setLoadOut({
                    "#sec-2>.top": "zoomInOff 1s linear",
                    "#sec-2>.bottom": "zoomInOff 1s linear",
                    "#sec-2>.photo-wrap": "photo_zoomOutOff 1s linear"
                },
                1e3);
        var t = new Action("sec-3");
        t.setLoadIn({
                    "#sec-3>.top": "sec3_movedown 7s linear",
                    "#sec-3>.bottom": "sec3_moveright 7s linear",
                    "#sec-3>.photo-wrap:nth-of-type(1)": "sec3_photo_in1 7s linear",
                    "#sec-3>.photo-wrap:nth-of-type(2)": "sec3_photo_in2 7s linear"
                },
                7e3),
            t.setLoadOut({
                    "#sec-3>.photo-wrap:nth-of-type(1)>.photo": "sec3_photo_out1 1s linear",
                    "#sec-3>.photo-wrap:nth-of-type(2)>.photo": "sec3_photo_out2 1s linear"
                },
                1e3);
        var s = new Action("sec-4");
        s.setLoadIn({
                    "#sec-4>.photo-wrap": "photo_zoomOutOn 1s linear"
                },
                1e3),
            s.setLoadOut({
                    "#sec-4>.sec-bg": "zoomInOff 1s linear .2s",
                    "#sec-4>.photo-wrap": "zoomInOff 1s linear"
                },
                1e3);
        var n = new Action("sec-5");
        n.setLoadIn({
                    "#sec-5>.photo-wrap>.photo.v:first-child": "sec5_photo_In_v1 1s linear",
                    "#sec-5>.photo-wrap>.photo.v:last-child": "sec5_photo_In_v2 1s linear",
                    "#sec-5>.photo-wrap>.photo.h:first-child": "sec5_photo_In_h1 1s linear",
                    "#sec-5>.photo-wrap>.photo.h:last-child": "sec5_photo_In_h2 1s linear",
                    "#sec-5>.petal:nth-child(1)": "blossom1 .4s linear",
                    "#sec-5>.petal:nth-child(2)": "blossom2 .6s linear",
                    "#sec-5>.petal:nth-child(3)": "blossom3 .8s linear",
                    "#sec-5>.petal:nth-child(4)": "blossom4 1s linear"
                },
                1e3),
            n.setLoadOut({
                    "#sec-5>.photo-wrap": "sec5_photo_Out 1s linear",
                    "#sec-5>.petal:nth-child(1)": "wither1 1s linear",
                    "#sec-5>.petal:nth-child(2)": "wither2 1s linear",
                    "#sec-5>.petal:nth-child(3)": "wither3 1s linear",
                    "#sec-5>.petal:nth-child(4)": "wither4 1s linear"
                },
                1e3);
        var p = new Action("sec-6");
        p.setLoadIn({
                    "#sec-6>.photo-wrap>.photo": "sec6_photo_in 1s linear"
                },
                1e3),
            p.setLoadOut({
                    "#sec-6>.photo-wrap": "sec6_photo_out 1s linear"
                },
                1e3),
            window.photoplayer.setTitleAction(e),
            window.photoplayer.addAction(o),
            window.photoplayer.addAction(t),
            window.photoplayer.addAction(s),
            window.photoplayer.addAction(n),
            window.photoplayer.addAction(p);
        photoplayer.init(images),
            photoplayer.play()


    }
}
