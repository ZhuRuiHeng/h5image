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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/bg.jpg"><div id="pagetitle"style="position:absolute;width:370px;height:227px;top:247px;left:65px;font-size:40px;color:#fff;overflow:hidden;text-shadow:1px 5px 4px rgba(0, 0, 0, 0.2);"><div style="position:absolute;width:370px;height:227px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:370px;height:227px;display:table;overflow:hidden;"><div id="titlecontent"style="width:370px;height:227px;vertical-align:middle;display:table-cell;text-align:center;"></div></div></div></div><div id="div1h"class="divh"><div id="box1h"class="boxh"><img id="img1h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/1.jpg"></div></div><div id="div1v"class="divv"><div id="box1v"class="boxv"><img id="img1v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/1.jpg"></div></div><div id="div2h"class="divh"><div id="box2h"class="boxh"><img id="img2h"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/1.jpg"></div></div><div id="div2v"class="divv"><div id="box2v"class="boxv"><img id="img2v"style="position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/1.jpg"></div></div><div id="kuang1" style="pointer-events: none;"></div><div id="kuang2" style="pointer-events: none;"></div><img id="deng"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/deng.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/up.png"><img id="guang1"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/guang1.png"><img id="guang2"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/guang2.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/01.png"style="left:87px;top:702px;"><img id="word2"src="http://referer-image.szwwy.com/coolphoto/img/tpl28/02.png"style="left:87px;top:702px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:76px;top:-21px;opacity:0;-webkit-animation: shan 7s 2s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:129px;top:50px;opacity:0;width:50px;-webkit-animation: shan 7s 1s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:378px;top:-9px;opacity:0;width:60px;-webkit-animation: shan 7s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:54px;top:667px;width:70px;opacity:0;-webkit-animation: shan 7s 3s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:221px;top:697px;width:60px;opacity:0;-webkit-animation: shan 7s 5s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/shan.png"style="left:372px;top:701px;width:50px;opacity:0;-webkit-animation: shan 7s 4s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/xue.png"style="left:348px;top:79px;-webkit-animation: xuehua 5s linear infinite;opacity:0;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/xue.png"style="left:33px;top:382px;-webkit-animation: xuehua 5s 1.2s linear infinite;opacity:0;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl28/xue.png"style="left:380px;top:536px;-webkit-animation: xuehua 5s 2.5s linear infinite;opacity:0;"></div>');
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;
        var timeout9;
        var delaytime=5000;
        function id(name)
        {
            return document.getElementById(name);
        }
        function load_images()
        {
            kuang1 = id('kuang1');
            kuang2 = id('kuang2');
            div1v = id('div1v');
            div1h = id('div1h');
            div2v = id('div2v');
            div2h = id('div2h');
            box1v = id('box1v');
            box1h = id('box1h');
            box2v = id('box2v');
            box2h = id('box2h');
            img1v = id('img1v');
            img1h = id('img1h');
            img2v = id('img2v');
            img2h = id('img2h');
            word2 = id('word2');

            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_url_index=0;
            have_num = 0;
            error_num = 0;
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //showtitle();
            canshow = true;
            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                img.onload=image_onload;
                img.onerror= image_onerror;
                Onload_imgs_url[i] = 'loading';
            }       
        }

        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<10)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
            }
        }

        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img = event.target;
            var index = img.index;

            if(index<10)
            {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);

            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
            }
        }
        function id (name) 
        {
            return document.getElementById(name);
        }

        function showtitle () 
        {
            kuang1.style.webkitAnimation = 'kuang1 1s linear both';
            kuang2.style.webkitAnimation = 'kuang2 1s linear both';
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'title_in 1s linear both';

        }
        function distitle()
        {
            setImage('1');
            word2.style.webkitAnimation = '';
            kuang1.style.webkitAnimation = 'kuang1_out 1s linear both';
            kuang2.style.webkitAnimation = 'kuang2_out 1s linear both';
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';
            div1v.style.webkitAnimation = 'div1v_in 1s linear both';
            box1v.style.webkitAnimation = 'box_in 1s linear both';
            div1h.style.webkitAnimation = 'div1h_in 1s linear both';
            box1h.style.webkitAnimation = 'box_in 1s linear both';
            // id('div1h').style.webkitAnimation = 'div1h_in 1s linear both';
            timeout1 = setTimeout(function()
            {
                word2.style.webkitAnimation = 'word_ani 3s linear both';
            },1000)

            timeout2 = setTimeout(clearshow,3000);
            timeout3 = setTimeout(show2,4000);
        }
        function clearshow () 
        {
            kuang1.style.webkitAnimation = '';
            kuang2.style.webkitAnimation = '';
            $("img").css("pointer-events", "none");
        }
        function show2 () 
        {
            setImage('2');
            word2.style.webkitAnimation = '';
            div1v.style.webkitAnimation = 'div1v_out 1.2s linear both';
            box1v.style.webkitAnimation = 'box_out 1.2s linear both';
            div1h.style.webkitAnimation = 'div1h_out 1.2s linear both';
            box1h.style.webkitAnimation = 'box_out 1.2s linear both';
            kuang1.style.webkitAnimation = 'kuang1_out 1.2s linear both';
            kuang2.style.webkitAnimation = 'kuang2_out 1.2s linear both';
            div2h.style.webkitAnimation = 'div1h_in 1.2s linear both';
            box2h.style.webkitAnimation = 'box_in 1.2s linear both';
            div2v.style.webkitAnimation = 'div1v_in 1.2s linear both';
            box2v.style.webkitAnimation = 'box_in 1.2s linear both';
            timeout4 = setTimeout(function()
            {
                word2.style.webkitAnimation = 'word_ani 3s linear both';
            },1000)
            id('div1v').style.pointerEvents="none";
            id('div1h').style.pointerEvents="none";
            id('div2v').style.pointerEvents="auto";
            id('div2h').style.pointerEvents="auto";

            timeout5 = setTimeout(clearshow,2000);
            timeout6 = setTimeout(show1,4000);
        }
        function show1 () 
        {
            setImage('1');
            word2.style.webkitAnimation = '';
            div2h.style.webkitAnimation = 'div1h_out 1.2s linear both';
            box2h.style.webkitAnimation = 'box_out 1.2s linear both';
            div2v.style.webkitAnimation = 'div1v_out 1.2s linear both';
            box2v.style.webkitAnimation = 'box_out 1.2s linear both';
            kuang1.style.webkitAnimation = 'kuang1_out 1.2s linear both';
            kuang2.style.webkitAnimation = 'kuang2_out 1.2s linear both';
            div1v.style.webkitAnimation = 'div1v_in 1.2s linear both';
            box1v.style.webkitAnimation = 'box_in 1.2s linear both';
            div1h.style.webkitAnimation = 'div1h_in 1.2s linear both';
            box1h.style.webkitAnimation = 'box_in 1.2s linear both';
            timeout7 = setTimeout(function()
            {
                word2.style.webkitAnimation = 'word_ani 3s linear both';
            },1000)
            id('div1v').style.pointerEvents="auto";
            id('div1h').style.pointerEvents="auto";
            id('div2v').style.pointerEvents="none";
            id('div2h').style.pointerEvents="none";
            timeout8 = setTimeout(clearshow,2000);
            timeout9 = setTimeout(show2,4000);
        }
        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;
            var height;
            var width = 420;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                height = 290;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                height = 580;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if(img_bili > (width/height))
            {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height*img_bili + 'px';
                img.style.left = -((height*img_bili-width)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = width+'px';
                img.style.height = width/img_bili + 'px';
                img.style.top = -((width/img_bili-height)/2) + 'px';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            var src = img.src;
            img.parentElement.parentElement.onclick=function() {
                //var src = this.src
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
        }
        call_me(load_images);
        load_init_modules();


        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }
        function clearnode()
        {
            kuang1.style.webkitAnimation = '';
            kuang2.style.webkitAnimation = '';
            box1h.style.webkitAnimation = '';
            box1v.style.webkitAnimation = '';
            box2h.style.webkitAnimation = '';
            box2v.style.webkitAnimation = '';
            div1h.style.webkitAnimation = '';
            div1v.style.webkitAnimation = '';
            div2h.style.webkitAnimation = '';
            div2v.style.webkitAnimation = '';
            div1h.style.display = 'none';
            div1v.style.display = 'none';
            div2h.style.display = 'none';
            div2v.style.display = 'none';
            word2.style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';

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
        }    
    }
}
