
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
}

function showEditorContent(isShow,h)
{
    var i = document.getElementById("editor_content");
    if (1 == isShow) {
        i.style.display = "block",
        i.className = "editor_content_show",
        $("#div_player").css("pointer-events", "none");
        var scrollhtight = document.body.scrollHeight,
        a = h + 70;
        i.style.height = a + "px",
        i.style.top = scrollhtight - a + "px",
        $("#editor_content_frm").css("height", a - 70 + "px"),
        $("#editor_change_template").css("height", a - 70 + "px"),
        $("#div_edit_scroll").css("height", a - 75 + "px")
    }else {
        i.className = "editor_content_hide",
        $("#div_player").css("pointer-events", "auto");
    }
}


var staticUrl="./img/";
/* templeView **********************************/
var templeView = {
    templeViewElem : undefined,

    init: function() {
        this.templeViewElem = $('#TempleView');

        $('#templeGroup .templeItem').on('click',function(){
            changeTpl($(this).children('img:first').data('id'));
        });
    },

    showTempleView: function() {
        function show() {
            var v = 'translate(0,-100%)';
            templeView.templeViewElem.css({
                '-moz-transform':v,
                '-webkit-transform':v,
                '-o-transform':v,
                '-ms-transform':v,
                'transform':v,
            });
        }

        var template_arr = {
            'hot': ['82','74','60','58','56','52','51','50','49','6','8','9','10','12','14','16','18','20','21','23','25','26','27','28','29','30','31','32','33','34','35','38','39','40','41','42','43','44','45','46','48'],
            'new': ['71','63','51','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48'],
            'xinqing': ['85','82','81','77','76','74','73','71','70','62','61','54','52','50','48','46','45','44','42','3','9','10','16','20','24','29','34','35'],
            'aiqing': ['72','66','65','49','6','23','27','37'],
            'fengjing': ['69','64','63','58','55','41','8','56','11','18','21','33','25','36','38','39'],
            'jieri': ['87','86','88','83','80','79','68','67','51','13','14','15','28','30','22','43'],
            'ertong': ['84','78','75','59','57','53','47','7','12','17','19'],
            'd3': ['1','2','4','5','31']
        };
        if(this.templeViewElem == undefined) {
            $('#saveOverlay').show();
            var des = $('#saveDescript');
            des.html("");
           
            $.ajax({

                url: './json/templates.min.json?t=9',
                error: function (xhr, status) {
                    console.log("error");
                    console.log(status);
                },
                success: function(data) {
                     //data = eval('(' + data + ')');
                    var muban = data.templates;
                    var mubtanGroup = $("#templeGroup");
                    var html = "";
                    console.log(muban);
                    for(var i=0,max=muban.length;i<max;++i) {
                        if(muban[i]['isonline'] == "1") {
                            for (var j = 0; j < template_arr["hot"].length; j++) {
                                if (template_arr["hot"][j] == muban[i]['id']) {
                                   html += "<div class='templeItem'><img data-id='" + muban[i]['id'] + "' src='"+staticUrl+"" + muban[i]['pic'] + "'/>";
                                    if (muban[i]['new'] == "1") {
                                        html += "<img class='new_temple' src='./img/new.png'/>";
                                    }
                                    if (muban[i]['id'] == c_tp) {
                                        html += "<img class='select_mb' src='./img/select.png'/>";
                                    }
                                    html += "<div style='width=100;''>" + muban[i]['title'] + "</div></div>";
                                }
                            }
                        }
                    }
                    $(".TempSelet ul li").click(function () {
                        var html = "";
                        $(".TempSelet ul li").removeClass("select");
                        mubtanGroup.html("");
                        $(this).addClass("select");
                        var type = $(this).attr("data");
                        for (var i = 0, max = muban.length; i < max; ++i) {
                            if (muban[i]['isonline'] == "1") {
                                for (var j = 0; j < template_arr[type].length; j++) {
                                    if (template_arr[type][j] == muban[i]['id']) {
                                        html += "<div class='templeItem'><img data-id='" + muban[i]['id'] + "' src='"+staticUrl+"" + muban[i]['pic'] + "'/>";
                                        if (muban[i]['new'] == "1") {
                                            html += "<img class='new_temple' src='./img/new.png'/>";
                                        }
                                        if (muban[i]['id'] == c_tp) {
                                            html += "<img class='select_mb' src='./img/select.png'/>";
                                        }
                                        html += "<div style='width=100;''>" + muban[i]['title'] + "</div></div>";
                                    }
                                }
                            }
                        }
                        mubtanGroup.append(html);
                        templeView.init();
                        show();
                        $('#saveOverlay').hide();
                    });
                    mubtanGroup.append(html);
                    templeView.init();
                    show();
                    $('#saveOverlay').hide();
                }
            });
        } else {
            show();
        }
    },

    hideTempleView: function() {
        var v = 'translate(0,0%)';
        this.templeViewElem.css({
            '-moz-transform':v,
            '-webkit-transform':v,
            '-o-transform':v,
            '-ms-transform':v,
            'transform':v,
        }); 
    }
}

/* musicView **********************************/
var musicView = {
    chooseIdx: 0,
    audioPlayer: undefined,
    musicViewElem: undefined,

    init: function () {
        this.musicViewElem = $('#MusicView');

        // 初始化音乐
        var musicItem = $('#MusicItem' + c_music.id);
        var musicBtn = $('#btn_play_music');

        if (musicItem.length > 0) {
            //歌词加载
            // var lyricUrl = musicItem.eq(0).find('.musicStatus').data('lyric');
            // if (lyricUrl.length > 0) {
            //     lyricPlayer.loadLyric(lyricUrl);
            // }

            // 音乐加载
            this.audioPlayer = new Player(musicBtn,
              musicItem.eq(0).find('.musicStatus').data('info'),
              function () {
               //lyricPlayer.start(); 
            });

            this.audioPlayer.isPlay = false;
            this.audioPlayer._play();
            this.chooseIdx = c_music.id;

            // if ($('.musicStatus').data('lyric') != '') {
            //     musicItem.addClass('lyric');
            //     lyricPlayer.show();
            // } else {
            //     lyricPlayer.hide();
            // }

            musicItem.addClass('select');
        }

        this.musicViewElem = $('#MusicView');

        musicBtn.on('click', function () {
            if (musicBtn.hasClass('on')) {
                //lyricPlayer.pause(lyricPlayer.PLAY);
            } else {
                //lyricPlayer.pause(lyricPlayer.PAUSE);
            }
        });
    }
}

musicView.initEdit = function() {

    // 取消选择音乐
    var ulItem = $('#MusicList');
    $('#MusicView .musicType span').on('click', function() {
        var className = $(this).attr('class');
        $(this).parent().attr('class', className);
        ulItem.attr('class', className);
    });

    $('#MusicView #MusicList span').on('click', function(e) {
        var musicItem = $(this).parent().parent();
        if (musicItem.hasClass('select')) {
            musicItem.toggleClass('lyric');
        }

        // 阻止冒泡
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    // 取消选择
    $('#MusicCancel').on('click', function() {
        var musicItem = $('#MusicItem' + c_music.id);

        // 音乐选择保存
        if (musicView.chooseIdx != c_music.id) {
            var selectMusicItem = $('#MusicItem' + musicView.chooseIdx);

            if (selectMusicItem.length > 0) {
                selectMusicItem.eq(0).removeClass('select');
                selectMusicItem.eq(0).removeClass('lyric');
            }
            var musicUrl = "";
            if (musicItem.length > 0) {
                musicItem.eq(0).addClass('select');
                musicUrl = musicItem.eq(0).find('.musicStatus').data('info');

                // 歌词加载
                // var lyricUrl = musicItem.eq(0).find('.musicStatus').data('lyric');
                // if (lyricUrl.length > 0) {
                //     lyricPlayer.loadLyric(lyricUrl);
                // } else {
                //     lyricPlayer.discard();
                // }
            }

            musicView.audioPlayer._src(musicUrl);
            musicView.audioPlayer._load();
            musicView.chooseIdx = c_music.id;
        }

        // 歌词显示隐藏选项保存
        // if (mvCfg.lyric) {
        //     musicItem.addClass('lyric');
        //     lyricPlayer.show();
        // } else {
        //     musicItem.removeClass('lyric');
        //     lyricPlayer.hide();
        // }

        musicView.hideMusicView();
        $('#AudioBtn').removeClass('c_btn_play_music_playing');
        $('#AudioBtn').removeClass('c_btn_play_music_paused');
    });

    // 确定选择音乐
    $('#MusicSelect').on('click', function() {
        c_music.id = musicView.chooseIdx;
        //mvChange.music = musicView.chooseIdx;
        musicView.hideMusicView();

        // 重置音乐
        musicView.audioPlayer._audio.currentTime = 0;

        if (musicView.audioPlayer._audio.duration > 1) {
            // lyricPlayer.replay();
        }
        musicView.audioPlayer.isPlay = false;
        musicView.audioPlayer._play();

        $('#AudioBtn').addClass('c_btn_play_music_playing');
        $('#AudioBtn').removeClass('c_btn_play_music_paused');

        // if ($('#MusicItem' + c_music.id).hasClass('lyric')) {
        //     mvCfg.lyric = true;
        //     saveChange({ 'lyric': true });
        //     lyricPlayer.show();
        // } else {
        //     mvCfg.lyric = false;
        //     saveChange({ 'lyric': false });
        //     lyricPlayer.hide();
        // }
        saveMusic();
    });

    // 绑定选择音乐事件
    $(".musicItem").on('click', function() {
        var selectMusicItem = $(this);
        var musicItem = $('#MusicItem' + musicView.chooseIdx);
        if (musicItem.length > 0) {
            musicItem.eq(0).removeClass('select');
            musicItem.eq(0).removeClass('lyric');
        }
        selectMusicItem.addClass('select');
        selectMusicItem.addClass('lyric');

        musicView.chooseIdx = parseInt(selectMusicItem.eq(0)[0].id.match(/\d+/)[0]);
        var musicUrl = selectMusicItem.eq(0).find('.musicStatus').data('info');
        c_music.musicUrl = selectMusicItem.eq(0).find('.musicStatus').data('info');
        c_music.name = selectMusicItem.eq(0).find('.musicStatus').data('name');
        // // 歌词加载
        // var lyricUrl = selectMusicItem.eq(0).find('.musicStatus').data('lyric');
        // mvCfg.lyricUrl = selectMusicItem.eq(0).find('.musicStatus').data('lyric');
        // if (lyricUrl.length > 0) {
        //     lyricPlayer.loadLyric(lyricUrl);
        // } else {
        //     lyricPlayer.reset();
        // }

        if (musicView.audioPlayer == undefined) {
            musicView.audioPlayer = new Player($('#AudioBtn'), musicUrl, function() { });//lyricPlayer.start(); 
            musicView.audioPlayer.isPlay = false;
            musicView.audioPlayer._play();
        } else {
            musicView.audioPlayer._src(musicUrl);
            musicView.audioPlayer._load();
        }
    });
}

musicView.isInit = false;

musicView.showMusicView = function() {
    function show() {
        var v = 'translate(0,-100%)';
        musicView.musicViewElem.css({
            '-moz-transform': v,
            '-webkit-transform': v,
            '-o-transform': v,
            '-ms-transform': v,
            'transform': v,
        });
    }
    if (false == musicView.isInit) {
        $('#saveOverlay').show();
        var des = $('#saveDescript');
        des.html("");
        $.ajax({
            url: './json/musiclist.min.json',
            error: function(xhr, status) {
                console.log("error");
                console.log(status);
            },
            success: function(data) {
                //data = eval('('+data+')');
                var musicList = data['musiclist'];
                var musicGroup = $("#MusicList");

                var html = "";
                for (var i = 0, max = musicList.length; i < max; ++i) {
                    var musicItem = musicList[i];
                    if (musicItem['id'] != c_music.id) {
                        html += "<li class='" + musicItem['type'] + "'><div id='MusicItem" + musicItem['id'] + "' class='musicItem'><div class='musicItemTitle'>" + musicItem['name'] + "</div><div class='musicItemAfter'><div class='musicStatus' data-name='" + musicItem['name'] + "' data-info='" + musicItem['musicUrl'] + "' data-lyric='";
                        if (musicItem['lyricUrl']) {
                            html += staticUrl + musicItem['lyricUrl'] + "'></div>";//<span>歌词</span>
                        } else {
                            html += "'></div>"
                        }
                        html += "<div class='clrBox'></div></div><div class='clrBox'></div></div></li>";
                    }
                }
                musicGroup.append(html);
                musicView.initEdit();
                show();
                musicView.isInit = true;
                $('#saveOverlay').hide();
            }
        });
    } else {
        show();
    }
}

musicView.hideMusicView = function() {
    var v = 'translate(0,0%)';
    this.musicViewElem.css({
        '-moz-transform': v,
        '-webkit-transform': v,
        '-o-transform': v,
        '-ms-transform': v,
        'transform': v,
    });
}

function search() {
    $(".serch li.serch").remove();
    $("#custom").remove();
    var keywords = $('#keyword').val();
    $("#MusicList").attr("class", "serch");

    $.post("/index.php?g=Wap&m=Photo&a=serchmusic&bookname=oz9LKwdMutuuk7AZno0sbZsdCAZ4wqlcms1480574126&token=hrttor1464854411&keyword=" + keywords, function (result) {
        $("#MusicList").attr("class", "serch");
        $('#MusicList').append(result);
        musicView.initEdit();
    }
    )
}

// 提供 app 音乐暂停接口
function appPauseMusic() {
    musicView.audioPlayer.isPlay = true;
    musicView.audioPlayer._play();
    //lyricPlayer.pause(lyricPlayer.PAUSE);
}
// 提供 app 音乐播放接口
function appPlayMusic() {
    musicView.audioPlayer.isPlay = false;
    musicView.audioPlayer._play();
    //lyricPlayer.pause(lyricPlayer.PLAY);
}

function androidMusicInit() {
    musicView.audioPlayer.isPlay = false;
    musicView.audioPlayer._play();
}

function escapeHtml(text) {
    if (text.length == 0) { return "" };

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        " ": '&nbsp;'
    };

    return text.replace(/[&<>"' ]/g, function (m) { return map[m]; });
}

function decodeEscapeHtml(text) {
    if (text.length == 0) { return "" };

    var map = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&nbsp;': ' '
    };

    return text.replace(/(&nbsp;|&amp;|&lt;|&gt;|&quot;|&#039;)/g, function (m) { return map[m]; });
}

function Player(el,src,callback,callbackThis){
  this.el = el;
  this.isPlay = false;
  if(src == undefined) {
    src = '';
  }
  this.init(src,callback,callbackThis); 
}
Player.prototype = {
  init: function(src,callback,callbackThis){
    var _this = this,
      attr = {
        loop: false, 
        preload: "auto",
        autoplay: true, 
        src: src
      };

    this._audio = new Audio;
    for (var i in attr){
      attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
    }

    this.inited = false;
    $(this._audio).on('durationchange',function(){
      // 播放加载
      if(_this._audio.duration > 1 && callback) {
        _this.inited = true;
        callback.call(callbackThis);
      }
    });

    $(this._audio).on('ended',function(){
      // 播放结束
      _this._audio.currentTime = 0;
      if(callback){
        callback.call(callbackThis);
      }
      _this.isPlay = false;
      _this._play();
    });

    if(src != ''){
      this._audio.load();
    }

    if(typeof this.el !== 'string'){
      this.el.on('click', function(){
        _this._play();
      });      
    }
  },

  _load: function(){
    this._audio.load();
  },

  _src: function(src){
    this._audio['src'] = src;
  },

  _isplay: function(){
    return this.isPlay;
  },
  
  _play: function(){
    if(!this.isPlay){
      this._audio.play();
      if(typeof this.el !== 'string'){
        this.el.removeClass('c_btn_play_music_paused');
        this.el.addClass('c_btn_play_music_playing');
      }
    }else{
      this._audio.pause();
      if(typeof this.el !== 'string'){
        this.el.removeClass('c_btn_play_music_playing');
        this.el.addClass('c_btn_play_music_paused');
      }
    }
    this.isPlay = !this.isPlay;
  },
  
  _playOn: function(){
    this._audio.play();
    if(typeof this.el !== 'string'){
        this.el.removeClass('c_btn_play_music_paused');
        this.el.addClass('c_btn_play_music_playing');
    }
    this.isPlay = true;
  },
  
  _playOff: function(){
    this._audio.pause();
    if(typeof this.el !== 'string'){
      this.el.removeClass('c_btn_play_music_playing');
      this.el.addClass('c_btn_play_music_paused');
    }
    this.isPlay = false;
  },
}

function search() {
    $(".serch li.serch").remove();
    $("#custom").remove();
    var keywords = $('#keyword').val();
    $("#MusicList").attr("class", "serch");

    $.get("./searchmusic?name=" + keywords, function (result) {
        $("#MusicList").attr("class", "serch");
        $('#MusicList').append(result);
        musicView.initEdit();
    }
    )
}