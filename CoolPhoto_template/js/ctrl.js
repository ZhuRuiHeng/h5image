
var countx = 3;
var county = 4;
var Scenes = [];
var boxIndex = 0;
var box = [];
var imageIndex = 0;
var loadingIndex = 0;
var loadingdef = $.Deferred();
var callbackConfirm;
var iscroll;
var lastSelMusicObj;
var hasShowTip = false;

//控制音乐

function getMusicUrl(index) {
    var musicurl;
    switch (index) {
        case 0:
            musicurl = "./music/Canon.aac"; break;
        case 1:
            musicurl = "./music/Canon.aac"; break;
        case 2:
            musicurl = "./music/kiyomi.aac"; break;
        case 3:
            musicurl = "./music/xpg.aac"; break;
        case 4:
            musicurl = "./music/nxher.aac"; break;
        case 5:
            musicurl = "./music/htys.aac"; break;
        case 6:
            musicurl = "./music/awm.aac"; break;
        case 7:
            musicurl = "./music/gydgs.aac"; break;
        case 8:
            musicurl = "./music/qcdff.aac"; break;
        case 9:
            musicurl = "./music/Papillon.aac"; break;
        case 10:
            musicurl = "./music/hhwq.aac"; break;
    }
    var e = document.getElementById("audio_bgmusic");
    e.src = musicurl;
}

function closeShare() {
    $("#div_share").hide();
}

function share() {
    $(".share_btn").hide();
    $("#sharetip").css("display", "block");
}

//设置模板自适应
function setTempSize() {
    var w = Math.floor(.3 * document.body.scrollWidth);
    var h = Math.floor(260 * w / 200)
    $("#album_template_list").children("li").css("width", w);
    $("#album_template_list").children("li").css("height", h);
}

function onPlayMusic() {
    var e = document.getElementById("audio_bgmusic");
    1 == e.paused ? resumeBkMusic() : pauseBkMusic()
}

function resumeBkMusic() {
    var e = document.getElementById("audio_bgmusic"),
    t = document.getElementById("btn_play_music");
    e.play(),
    t.className = "c_btn_play_music_playing"
}

function pauseBkMusic() {
    var e = document.getElementById("audio_bgmusic"),
    t = document.getElementById("btn_play_music");
    e.pause(),
    t.className = "c_btn_play_music_paused"
}

function getImgScale(wh, ht, sw) {
    sh = Math.floor(ht * sw / wh);
    return result =
    {
        width: sw,
        height: sh,
    };
}

function calcImgClip(e, t, n, o) {
    var a, i, r, c;
    return n / o > e / t ? (i = t, a = Math.floor(t * (n / o))) : (a = e, i = Math.floor(e * (o / n))),
    r = (a - e) / 2,
    c = (i - t) / 2,
    {
        objWidth: a,
        objHeight: i,
        clipLeft: r,
        clipTop: c
    }
}

function loadUserImages() {
    var ldt = $("#player_loadingText");
    ldt.css("margin-top", $(window).height() / 2 - 30);
    ldt.css("margin-left", $(window).width() / 2 - 50);
    ldt.css("display", "block");
    for (var i = 0; i < images.length; i++) {
        var c = new Image;
        c.onload = function () {
            loadingIndex++;
            ldt.html("加载中...(" + loadingIndex + "/" + images.length + ")");
            if (loadingIndex == images.length) {
                loadingdef.resolve();
            }
            if (loadingIndex == 1) {
                if (this.width > this.height) {
                    $("#wrapper_player_cover_bkgnd img").css("height", "100%");
                } else {
                    $("#wrapper_player_cover_bkgnd img").css("width", "100%");
                }
            }
        };
        c.src = images[i][1];
    }
}


//模板设置相关
function onConfirmClk() {
    null != callbackConfirm && callbackConfirm(),
    showEditorContent(0);
}

function onChangeTemplateClk(type) {
    $("#editor_change_template").css("display", "block");
    $("#editor_change_content").css("display", "none");
    var scrollhtight = document.body.scrollHeight,
    h = 0,
    title = "";
    if (type === 0) {
        title = "换模版";
        h = scrollhtight * 0.7;
        callbackConfirm = null;
    }
    if (type == 1) {
        title = "选音乐";
        h = scrollhtight * 0.5;
        callbackConfirm = onAlbumMusicSelect;
    }
    if (type == 2) {
        $("#editor_change_content").css("display", "block");
        $("#editor_change_template").css("display", "none");
        title = "改标题";
        h = 84;
        callbackConfirm = onSaveTitle;
    }
    var n = document.getElementById("editor_content_titlebar");
    n.getElementsByTagName("div")[0].innerText = title;
    showEditorContent(1, h);
    onChangeTemplateSelTab(type)
}



function onChangeTemplateSelTab(type) {
    for (var t = document.getElementById("editor_change_tmpl_toolbar"), i = t.children, l = 0; l < i.length; ++l) {
        var a = document.getElementById(i[l].getAttribute("page"));
        l == type ? (a.style.display = "block", i[l].className = "editor_tab_item_hover") : (a.style.display = "none", i[l].className = "editor_tab_item")
    }
    iscroll.refresh(),
    iscroll.scrollTo(0, 0)
}

function showEditorContent(isShow, h) {
    var i = document.getElementById("editor_content");
    if (1 == isShow) {
        i.style.display = "block",
        i.className = "editor_content_show",
        $("#div_player").css("pointer-events", "none");
        //$("#edit_album_title").val("测试");
        var scrollhtight = document.body.scrollHeight,
        a = h + 70;
        i.style.height = a + "px",
        i.style.top = scrollhtight - a + "px",
        $("#editor_content_frm").css("height", a - 70 + "px"),
        $("#editor_change_template").css("height", a - 70 + "px"),
        $("#div_edit_scroll").css("height", a - 75 + "px"),
        iscroll.refresh(),
        iscroll.scrollTo(0, 0)
    } else {
        i.className = "editor_content_hide",
        $("#div_player").css("pointer-events", "auto");
        var n = $("#album_music_list").children("audio")[0];
        n.src = "";
        n.pause();
        resumeBkMusic();
        _selMusicItem(lastSelMusicObj, 0);
        lastSelMusicObj = null;
    }
}

function _selMusicItem(item, isshow) {
    if (null != item) {
        var i = item.getElementsByClassName("music_right")[0];
        if (isshow === 1) {
            i.style.display = "block";
            item.className = "music_item_hover";
        } else {
            i.style.display = "none";
            item.className = "";
        }
    }
}

function onAlbumMusicClk(node) {
    var audio = document.getElementById("temp_audio");
    if (lastSelMusicObj == node) {
        audio.src = "";
        audio.pause();
        _selMusicItem(node, 0);
        lastSelMusicObj = null;
    } else {
        if (lastSelMusicObj != null) {
            _selMusicItem(lastSelMusicObj, 0);
        }
        _selMusicItem(node, 1);
        lastSelMusicObj = node;
        //var img = $(".music_status img").get(0);
        var img = $(node).find(".music_status img").get(0);
        var musicurl = node.getAttribute("music");
        var pl = node.getElementsByClassName("music_playing")[0];
        pauseBkMusic();
        pl.style.display = "none";
        img.style.display = "block";
        img.src = "/Application/Weixin/View/Coolphoto/img/loading.gif";
        $(audio).bind("canplay", function () {
            img.style.display = "none";
            pl.style.display = "block";
        });
        audio.src = musicurl;
        audio.play();
    }

}