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
        $("#div_player").append('<div id="container"><div id="content"><!--天空--><img id="bg"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/2000.jpg"><div id="cloud"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/2000.png"></div><div id="cloudTwo"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/2000.png"></div><div style="position:absolute;width:500px;top:401px;height:419px;-webkit-transform-origin:50% 0%;-webkit-animation:shuiwen 4s linear infinite;overflow:hidden;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/500.png"style="position:absolute;width:500px;top:0px;"></div><div style="position:absolute;width:500px;height:419px;top:401px;-webkit-transform-origin:50% 0%;-webkit-animation:shuiwen1 4s linear infinite;overflow:hidden;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/500.png"style="position:absolute;width:500px;top:0px;"></div><div id="botton"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/200.png"></div><div class="fla"id="blue1"style="-webkit-animation: fla1 30s linear 0s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="blue2"style="-webkit-animation: fla1 30s linear 2.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="orange"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="pink"style="-webkit-animation: fla1 30s linear 12.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="purple"style="-webkit-animation: fla1 30s linear 15s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="white"style="-webkit-animation: fla1 30s linear 10s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow1"style="-webkit-animation: fla1 30s linear 5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow2"style="-webkit-animation: fla1 30s linear 7.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="blue11"style="-webkit-animation: fla2 30s linear 1s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="blue21"style="-webkit-animation: fla2 30s linear 3.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="orange1"style="-webkit-animation: fla2 30s linear 18.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="pink1"style="-webkit-animation: fla2 30s linear 13.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="purple1"style="-webkit-animation: fla2 30s linear 16s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="white1"style="-webkit-animation: fla2 30s linear 11s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow11"style="-webkit-animation: fla2 30s linear 6s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow21"style="-webkit-animation: fla2 30s linear 8.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="blue12"style="-webkit-animation: fla3 30s linear 2s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="blue22"style="-webkit-animation: fla3 30s linear 4.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="orange2"style="-webkit-animation: fla3 30s linear 19.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="pink2"style="-webkit-animation: fla3 30s linear 14.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="purple2"style="-webkit-animation: fla3 30s linear 17s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="white2"style="-webkit-animation: fla3 30s linear 12s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow12"style="-webkit-animation: fla3 30s linear 7s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div class="fla"id="yellow22"style="-webkit-animation: fla3 30s linear 9.5s both infinite;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/300.png"></div><div id="aixin"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/t2000.jpg"></div></div><div id="page1"style="display:none;top:-10px;"><div id="box1"style="position:absolute;-webkit-animation: huangdong 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bbs.png"style="top:30px;left:86px;-webkit-transform-origin: 63.64% 99.76%;-webkit-animation: qiqiu 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/yb.png"style="top:61px;left: 112px;-webkit-transform-origin: 35.39% 100%;-webkit-animation: qiqiu1 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/eb.png"style="top: 115px;left: 60px;-webkit-transform-origin: 76.37% 100%;-webkit-animation: qiqiu 2.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/ebs.png"style="top:45px;left: 359px;-webkit-transform-origin: 39.77% 100%;-webkit-animation: qiqiu1 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/rb.png"style="top: 69px;left:299px;-webkit-transform-origin: 81.25% 100%;-webkit-animation: qiqiu 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bb.png"style="top:92px;left:356px;-webkit-transform-origin: 40.32% 100%;-webkit-animation: qiqiu1 2.5s linear infinite alternate"><div id="imgdiv1"style="position:absolute;width: 380px;height:380px;top:261px;left:61px;overflow:hidden;"><img id="img1"style="position:absolute;"></div><img id="left1"style="top:248px;left: 28px;-webkit-transform-origin: 50% 0%;width:46px;height:300px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img id="right1"style="top:248px;left: 426px;-webkit-transform-origin: 50% 0%;width:46px;height:300px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img id="up1"style="width:495px;height:62px;top: 220px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/up.png"><img id="down1"style="width:495px;height:62px;top: 500px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/down.png"></div></div><div id="page2"style="top:-70px;display:none"><div id="box2"style="position:absolute;-webkit-animation: huangdong 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bbs.png"style="top:30px;left:86px;-webkit-transform-origin: 63.64% 99.76%;-webkit-animation: qiqiu 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/yb.png"style="top:61px;left: 112px;-webkit-transform-origin: 35.39% 100%;-webkit-animation: qiqiu1 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/eb.png"style="top: 115px;left: 60px;-webkit-transform-origin: 76.37% 100%;-webkit-animation: qiqiu 2.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/ebs.png"style="top:45px;left: 359px;-webkit-transform-origin: 39.77% 100%;-webkit-animation: qiqiu1 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/rb.png"style="top: 69px;left:299px;-webkit-transform-origin: 81.25% 100%;-webkit-animation: qiqiu 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bb.png"style="top:92px;left:356px;-webkit-transform-origin: 40.32% 100%;-webkit-animation: qiqiu1 2.5s linear infinite alternate"><div id="imgdiv2"style="position:absolute;width: 250px;height:500px;top:261px;left:133px;overflow:hidden;"><img id="img2"style="position:absolute;"></div><img id="left2"style="top:248px;left: 98px;width:46px;height:488px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img id="right2"style="top:248px;left: 371px;width:46px;height:488px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img id="up2"style="width:351px;height:62px;top: 220px;left: 82px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/up.png"><img id="down2"style="width:351px;height:62px;top: 684px;left:82px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/down.png"></div></div><div id="pagetitle"style="top:-10px;display:none"><div id="boxtitle"style="position:absolute;-webkit-animation: huangdong 2s ease-in-out infinite alternate;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bbs.png"style="top:30px;left:86px;-webkit-transform-origin: 63.64% 99.76%;-webkit-animation: qiqiu 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/yb.png"style="top:61px;left: 112px;-webkit-transform-origin: 35.39% 100%;-webkit-animation: qiqiu1 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/eb.png"style="top: 115px;left: 60px;-webkit-transform-origin: 76.37% 100%;-webkit-animation: qiqiu 2.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/ebs.png"style="top:45px;left: 359px;-webkit-transform-origin: 39.77% 100%;-webkit-animation: qiqiu1 2s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/rb.png"style="top: 69px;left:299px;-webkit-transform-origin: 81.25% 100%;-webkit-animation: qiqiu 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl23/bb.png"style="top:92px;left:356px;-webkit-transform-origin: 40.32% 100%;-webkit-animation: qiqiu1 2.5s linear infinite alternate"><div style="position:absolute;width: 380px;height:155px;top:261px;left:61px;overflow:hidden;padding:10px;background:url(http://referer-image.szwwy.com/coolphoto/img/tpl23/diban.png);"><div id="titleword"style="position:absolute;width:360px;color:#ffffff;font-size:40px;text-shadow: 1px 1px 2px #44443F;text-align:center;display:table"><div id="titleword1"style="width:500px;height:140px;display:table-cell;vertical-align:middle;line-height:140%;font-size:35px;"></div></div></div><img style="top:248px;left: 28px;-webkit-transform-origin: 50% 0%;width:46px;height:200px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img style="top:248px;left: 426px;-webkit-transform-origin: 50% 0%;width:46px;height:200px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/left.png"><img style="width:495px;height:62px;top: 220px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/up.png"><img style="width:495px;height:62px;top: 400px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl23/down.png"></div></div></div>');
        function setword()
        {
            id('pagetitle').style.display = 'block';
            var titlediv = id('titleword1');
            //titlediv.innerHTML = e_desc;
        }

        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var begin_titletime;

        function id(name)
        {
            return document.getElementById(name);
        }


        function loadimages()
        {
            id('pagetitle').style.display = 'none';
            //showtitle();
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];

            image_url_index=0;
            have_num = 0;
            error_num = 0;

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            id('pagetitle').style.webkitAnimation = '';
            canshow = true;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                Onload_imgs_url[i] = 'loading';
                img.onload=image_onload;
                img.onerror = image_onerror;
            }       
        }
        function showtitle()
        {
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            setword();
            //log(begin_titletime);
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
                beginshow();
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;

            if(index<10)
                have_num++;
            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height;
            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {

               canshow = false;
               reshow = false;
               if(have_num == 0)
                return;
              //log(Onload_imgs_url[index]);
              //log(have_num + '-' + error_num);

                beginshow();
            }
        }
        function beginshow () {
            if(reshow == true)
              return;
           id('page1').style.display = 'none';
           id('page1').style.webkitAnimation = '';
           if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage(1);
            image_url_index++;
           timeout1 = setTimeout(function()
           {
               id('page1').style.display = 'block';
               id('page1').style.webkitAnimation = 'showup 10s linear both';
           },100)


           timeout4 = setTimeout(nextshow,6000);
        }
        function nextshow()
        {
              if(reshow == true)
                return;
           if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage(2);
            image_url_index++;
            id('page2').style.display = 'none';
           id('page2').style.webkitAnimation = '';
           timeout2 = setTimeout(function()
           {
               id('page2').style.display = 'block';
               id('page2').style.webkitAnimation = 'showup 10s linear both';
           },100)
           timeout3 = setTimeout(beginshow,6000);
        }

        function setImage(pageindex)
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
            var page = id('page'+pageindex);
            var up = id('up'+pageindex);
            var down = id('down'+pageindex);
            var left = id('left'+pageindex);
            var right = id('right'+pageindex);
            var imgdiv = id('imgdiv'+pageindex);
            var img = id('img'+pageindex);
            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if(img_bili>=1)
            {
                page.style.top = '-10px';
                up.style.left = '0px';
                up.style.top = '220px';
                up.style.width = '495px';
                up.style.height = '62px';

                left.style.left = '28px';
                left.style.top = '248px';
                left.style.width = '46px';
                left.style.height = 380/img_bili+20+'px';

                right.style.left = '426px';
                right.style.top = '248px';
                right.style.width = '46px';
                right.style.height = left.style.height;

                down.style.left = '0px';
                down.style.top = 380/img_bili+220+'px';
                down.style.width = '495px';
                down.style.height = '62px';

                imgdiv.style.left = '61px';
                imgdiv.style.top = '261px';
                imgdiv.style.width = '380px';
                imgdiv.style.height = '380px';
                img.style.width = '380px';
            }
            else
            {
                page.style.top = '-70px';
                up.style.left = '82px';
                up.style.top = '220px';
                up.style.width = '351px';
                up.style.height = '62px';

                left.style.left = '98px';
                left.style.top = '248px';
                left.style.width = '46px';
                left.style.height = 250/img_bili + 20 + 'px';

                right.style.left = '370px';
                right.style.top = '248px';
                right.style.width = '46px';
                right.style.height = left.style.height;

                down.style.left = '82px';
                down.style.top = 220 + 250/img_bili + 'px';
                down.style.width = '351px';
                down.style.height = '62px';

                imgdiv.style.left = '133px';
                imgdiv.style.top = '261px';
                imgdiv.style.width = '250px';
                imgdiv.style.height = '500px';
                if(img_bili < 0.5)
                {
                    left.style.height = '520px';
                    right.style.height = '520px';
                    down.style.top = '720px';
                }
                img.style.width = '250px';
            }
            img.onclick=function() {
                var src = this.src
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
        call_me(loadimages);
        load_init_modules();
        function reload_scene()
        {
            reshow = true;
            loadimages();
        }    
    }
}
