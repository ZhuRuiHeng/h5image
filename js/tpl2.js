var imgdivArray = [];
var curScene = null;
var sceneindex = 0;

function playPhoto() {
    imageIndex = -1;
    $("#img_viewer").css("height", $(window).height());
    $("#img_viewer").css("width", $(window).width());
    $("#div_player").append("<div id='tpl2' style='width: 100%; height: 100%; display: block;'></div>");
    $('#tpl2').append('<img style="width: 100%; height: 100%;position:absolute" src="http://referer-image.szwwy.com/coolphoto/img/sp2.jpg">');
    $('#tpl2').append('<div id="space_wrapper" style="width: 100%; height: 100%;z-index:1"></div>');
    $('#tpl2').append('<div id="space_imgItems_wrapper" style="width: 100%; height: 100%;"></div>');

    //加载星星
    for (var i = 0; 16 > i; ++i) {
        var w = parseInt(Math.random() * $(window).width()),
        h = parseInt(400 * Math.random()),
        d = document.createElement("div");
        d.className = "star",
        d.style.left = w + "px",
        d.style.top = h + "px",
        d.style["-webkit-animation-duration"] = 5 * Math.random() + 1 + "s";
        $("#space_wrapper").append(d);
    }

    //加载相片层
    for (o = 0; 14 > o; ++o) {
        var imgurl = images[o % images.length][1],
        div = document.createElement("div");
        div.innerHTML = '<div class="space_img_wrapper"><img></div>',
        div.style.position = "absolute",
        div.style.zIndex = 2,
        div.style.display = "none",
        div.style.overflow = "hidden",
        div.style.background = "#FFF",
        div.style.boxShadow = div.style.webkitBoxShadow = "0 0 10px 4px #9cf";
        div.onclick = function () {
            var t = this.getElementsByTagName("img")[0];
            $("#img_viewer img").attr("src", t.src);
            $("#img_viewer").removeClass();
            $("#img_viewer").addClass("img_viewer_show");
            $("#img_viewer").css("display", "block");
            $("#img_viewer").css("pointer-events", "auto");

            //这样获取尺寸最好
            var img = new Image();
            img.src = t.src;
            var s = getImgScale(img.width, img.height, $(window).width());
            $("#img_viewer img").css("left", parseInt(($(window).width() - s.width) / 2) + "px");
            $("#img_viewer img").css("top", parseInt(($(window).height() - s.height) / 2) + "px");
            $("#img_viewer img").css("width", s.width + "px");
            $("#img_viewer img").css("height", s.height + "px");
            $("#img_viewer img").css("position", "absolute");
            $("#img_viewer").bind("click", function () {
                $("#img_viewer").removeClass();
                $("#img_viewer").addClass("img_viewer_hide");
                $("#img_viewer").css("pointer-events", "none");
            });
        };
        //div.onclick = p;
        var img = div.getElementsByTagName("img")[0];
        img.src = imgurl,
        $("#space_imgItems_wrapper").append(div),
        imgdivArray.push(div)
    }

    Scenes.push(new SpaceScene1($(window).width(), $(window).height(), getNextImg, adjustImgItem, playEnd));
    Scenes.push(new SpaceScene2($(window).width(), $(window).height(), getNextImg, adjustImgItem, playEnd));
    Scenes.push(new SpaceScene3($(window).width(), $(window).height(), getNextImg, adjustImgItem, playEnd));
    Scenes.push(new SpaceScene4($(window).width(), $(window).height(), getNextImg, adjustImgItem, playEnd));
    Scenes.push(new SpaceScene5($(window).width(), $(window).height(), getNextImg, adjustImgItem, playEnd));

    //加载图片
    loadUserImages();
    //图片加载完成之后,运用jquery的异步信号
    $.when(loadingdef).done(function () {

        //显示界面
        $("#wrapper_player_cover_bkgnd").css("display", "block");
        setTimeout("$('#wrapper_cover').addClass('effect_fadeOut');", 3000);
        //启动动画
        setTimeout(function () {
            window.setTimeout(function myfunction() {
                playEnd();
            }, 100);
        }, 3100);
    });
}

function getNextImg() {
    imageIndex++;
    if (imageIndex >= imgdivArray.length)
        imageIndex = 0;
    return imgdivArray[imageIndex];
}

function getImageBySrc(url) {
    for (var e in images) {
        if (images[e][1].src == src) {
            return images[e][1];
        }
    }
    return null;
}

function adjustImgItem(imgdiv, w, h) {
    var img = imgdiv.getElementsByTagName("img")[0];
    //为了让他onload，重新复制url
    var tpurl = img.src;

    img.src = "";

    img.onload = function () {
        var n = calcImgClip(w, h, this.width, this.height);
        img.style.left = 0 - n.clipLeft + "px";
        img.style.top = 0 - n.clipTop + "px";
        img.style.width = n.objWidth + "px";
        img.style.height = n.objHeight + "px";
        img.style.clip = "rect(" + n.clipTop + "px " + Math.floor(n.clipLeft + w) + "px " + Math.floor(n.clipTop + h) + "px " + n.clipLeft + "px)";
    }

    img.src = tpurl;
}

function playEnd() {
    if (curScene != null) {
        curScene.leave;
        curScene == null;
    }
    // if (sceneindex == Scenes.length) {
    //     sceneindex = 0;
    //     if (!hasShowTip) {
    //         $("#div_share").show();
    //         hasShowTip = true;
    //     }
    // }
    //换背景
    if (sceneindex % 3 == 0) {
        //e()
    }
    curScene = Scenes[sceneindex];
    curScene.enter();
    sceneindex++;
}

function SPACE_SCENE_EXTEND(cls, base) {
    cls.prototype = new base,
    cls.prototype.constructor = cls;
}

function SpaceSceneBase() {
    this.effect_in = ["zoomIn animateShow", "zoomInDown animateShow", "zoomInUp animateShow", "zoomInLeft animateShow", "zoomInRight animateShow"],
    this.effect_out = [],
    this.imgWidth = 0,
    this.imgHeight = 0,
    this.show_speed = 3,
    this.hide_speed = 3.5,
    this.curImgItems = [null, null, null, null],
    this.points = []
}

SpaceSceneBase.prototype.params = function (cw, ch, nimg, fnaii, fnpe) {
    this.canvasWidth = cw,
    this.canvasHeight = ch,
    this.fnGetNextImg = nimg,
    this.fnAdjustImgItem = fnaii,
    this.fnPlayEnd = fnpe;
},

SpaceSceneBase.prototype.onShowEnd = function () {
    this.leave(),
    this.fnPlayEnd();
}

SpaceSceneBase.prototype.leave = function () {
    for (e = 0; e < this.curImgItems.length; ++e) {
        var outindex = parseInt(Math.random() * this.effect_out.length);
        this.curImgItems[e].style.animationDuration = this.hide_speed + "s";
        this.curImgItems[e].style.webkitAnimationDuration = this.hide_speed + "s";
        (function (t, e, i, s) {
            window.setTimeout(function () {
                t.className = s
            },
            150 * i - 150 * e);
        })(this.curImgItems[e], e, this.curImgItems.length, this.effect_out[outindex][e]);
        this.curImgItems[e] = null;
    }
}

SpaceSceneBase.prototype.enter = function () {
    function animEnd() {
        ss.onShowEnd(),
        $(this).unbind("webkitAnimationEnd", animEnd);
    }
    for (var e = 0; e < this.curImgItems.length; ++e) {
        var top = this.points[e][1],
        left = this.points[e][0];

        this.curImgItems[e] = this.fnGetNextImg();
        //如果是0，监听结束，因为0结束，其他都开始结束了。
        if (0 == e) {
            var ss = this;
            $(this.curImgItems[0]).bind("webkitAnimationEnd", animEnd);
        }
        this.curImgItems[e].style.top = top + "px";
        this.curImgItems[e].style.left = left + "px";
        this.curImgItems[e].style.width = this.imgWidth + "px";
        this.curImgItems[e].style.height = this.imgHeight + "px";
        this.curImgItems[e].style.animationDuration = this.curImgItems[e].style.webkitAnimationDuration = this.show_speed + "s";

        //适应相框
        this.fnAdjustImgItem(this.curImgItems[e], this.imgWidth, this.imgHeight);
        //执行动画
        (function (t, e, i) {
            window.setTimeout(function () {
                t.style.display = "block",
                t.className = i
            },
            50 * e)
        })(this.curImgItems[e], e, this.effect_in[parseInt(this.effect_in.length * Math.random())]);
    }
}

function SpaceScene1(cw, ch, nimg, fnaii, fnpe) {
    this.params(cw, ch, nimg, fnaii, fnpe);
    this.imgWidth = parseInt(.5 * Math.min(this.canvasWidth, this.canvasHeight));
    this.imgHeight = this.imgWidth;
    this.show_speed = 3;
    this.hide_speed = 3.5;
    this.effect_out = [["bounceOutLeft animateHide"], ["bounceOutRight animateHide"]];
    this.curImgItems = [null];
    this.points.push([parseInt((this.canvasWidth - this.imgWidth) / 2), parseInt((this.canvasHeight - this.imgHeight) / 2)]);
}

function SpaceScene2(cw, ch, nimg, fnaii, fnpe) {
    this.params(cw, ch, nimg, fnaii, fnpe),
    this.imgWidth = parseInt(.45 * Math.min(this.canvasWidth, this.canvasHeight)),
    this.imgHeight = this.imgWidth,
    this.show_speed = 3,
    this.hide_speed = 2.5,
    this.effect_out = [["bounceOutUp animateHide", "bounceOutDown animateHide"], ["bounceOutDown animateHide", "bounceOutUp animateHide"], ["bounceOutRight animateHide", "bounceOutLeft animateHide"]],
    this.curImgItems = [null, null];
    var a = (this.canvasHeight - 1.7 * this.imgHeight) / 2,
    h = (this.canvasWidth - 1.7 * this.imgWidth) / 2;
    this.points = [[h, a], [parseInt(h + .7 * this.imgWidth), parseInt(a + .7 * this.imgHeight)]]
}
function SpaceScene3(cw, ch, nimg, fnaii, fnpe) {
    this.params(cw, ch, nimg, fnaii, fnpe),
    this.imgWidth = parseInt(.35 * Math.min(this.canvasWidth, this.canvasHeight)),
    this.imgHeight = this.imgWidth,
    this.show_speed = 2.5,
    this.hide_speed = 2.5,
    this.effect_out = [["bounceOutDown animateHide", "bounceOutUp animateHide", "bounceOutRight animateHide", "bounceOutLeft animateHide"]],
    this.curImgItems = [null, null, null, null];
    var a = .15,
    h = (this.canvasHeight - this.imgHeight * (3 - 2 * a)) / 2,
    c = (this.canvasWidth - this.imgWidth) / 2,
    o = (this.canvasHeight - this.imgHeight) / 2,
    m = (this.canvasWidth - (3 - 2 * a) * this.imgWidth) / 2;
    this.points = [[c, h], [c, parseInt(h + this.imgHeight * (2 - 2 * a))], [m, o], [parseInt(m + this.imgWidth * (2 - 2 * a)), o]];
}

function SpaceScene4(cw, ch, nimg, fnaii, fnpe) {
    this.params(cw, ch, nimg, fnaii, fnpe),
    this.imgWidth = parseInt(.3 * Math.min(this.canvasWidth, this.canvasHeight)),
    this.imgHeight = this.imgWidth,
    this.show_speed = 3,
    this.hide_speed = 2.5,
    this.effect_out = [["bounceOutDown animateHide", "bounceOutLeft animateHide", "bounceOutUp animateHide", "bounceOutRight animateHide", "rotateOut animateHide"]],
    this.curImgItems = [null, null, null, null, null];
    var a = .1,
    h = parseInt((this.canvasHeight - this.imgHeight * (3 - 2 * a)) / 2),
    c = parseInt((this.canvasWidth - (3 - 2 * a) * this.imgWidth) / 2);
    this.points = [[c, h], [parseInt(c + this.imgWidth * (2 - 2 * a)), h], [parseInt(c + this.imgWidth * (2 - 2 * a)), parseInt(h + this.imgWidth * (2 - 2 * a))], [c, parseInt(h + this.imgWidth * (2 - 2 * a))], [parseInt(c + this.imgWidth * (1 - a)), parseInt(h + this.imgHeight * (1 - a))]];
}

function SpaceScene5(cw, ch, nimg, fnaii, fnpe) {
    this.params(cw, ch, nimg, fnaii, fnpe),
    this.imgWidth = parseInt(.2 * Math.min(this.canvasWidth, this.canvasHeight)),
    this.imgHeight = this.imgWidth,
    this.show_speed = 3,
    this.hide_speed = 3.5,
    this.effect_out = [["zoomOutDown animateHide", "zoomOutLeft animateHide", "zoomOutLeft animateHide", "zoomOutUp animateHide", "zoomOutRight animateHide", "zoomOutRight animateHide", "zoomOut animateHide"]],
    this.curImgItems = [null, null, null, null, null, null, null];
    for (var a = Math.min(this.canvasWidth, this.canvasHeight), h = (a - this.imgWidth) / 2, c = this.canvasWidth / 2, o = this.canvasHeight / 2, m = 0; 6 > m; ++m) {
        var p = 60 * m,
        l = parseInt(c + h * Math.cos((90 - p) * Math.PI / 180) - this.imgWidth / 2),
        g = parseInt(o - h * Math.sin((90 - p) * Math.PI / 180) - this.imgHeight / 2);
        this.points.push([l, g])
    }
    this.points.push([parseInt(c - this.imgWidth / 2), parseInt(o - this.imgHeight / 2)])
}
SPACE_SCENE_EXTEND(SpaceScene1, SpaceSceneBase);
SPACE_SCENE_EXTEND(SpaceScene2, SpaceSceneBase);
SPACE_SCENE_EXTEND(SpaceScene3, SpaceSceneBase);
SPACE_SCENE_EXTEND(SpaceScene4, SpaceSceneBase);
SPACE_SCENE_EXTEND(SpaceScene5, SpaceSceneBase);