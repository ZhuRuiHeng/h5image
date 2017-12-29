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
        $("#div_player").append('<div id="container1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/bg.jpg"><div id="laorendiv"style="opacity:0;"><img id="laoren"src="http://referer-image.szwwy.com/coolphoto/img/tpl30/7.png"style="position:absolute"></div><div id="pagetitle"><div id="linetop"></div><div id="line1"></div><div id="line2"></div><div id="line3"></div><div id="linebottom"></div></div><div id="shengzi1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/1.png"style="left:0px;top:0px"><div id="div1"style="left:133px;top:91px;width:488px;height:646px;-webkit-transform-origin: 39% 11%;-webkit-animation: yaohuang 2s linear infinite alternate"><div class="imgbox"><img id="img1"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/kuang.png"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/9.png"style="left:628px;top:83px;-webkit-transform-origin: 45% 12%;-webkit-animation: yaohuang 1.5s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/2.png"style="left:442px;top:126px;-webkit-transform-origin: 52% 32%;-webkit-animation: yaohuang 1.2s linear infinite alternate"></div><div id="shengzi2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/1.png"style="left:0px;top:54px;-webkit-transform: scale(-1,1) rotate(-4deg)"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/1.png"style="left:1210px;top:41px;-webkit-transform: scale(-1,1) rotate(18deg)"><div id="div2"style="left: 243px;top: 50px;width:488px;height:646px;-webkit-transform-origin: 39% 11%;-webkit-animation: yaohuang 1.5s ease-in-out infinite alternate"><div class="imgbox"><img id="img2"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/kuang.png"style="position:absolute"></div><div id="div3"style="left: 814px;top: 148px;width:488px;height:646px;-webkit-transform-origin: 39% 11%;-webkit-animation: yaohuang 1.5s 1.5s ease-in-out infinite alternate"><div class="imgbox"><img id="img3"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/kuang.png"style="position:absolute"></div><div id="div4"style="left: 1494px;top: 126px;width:488px;height:646px;-webkit-transform-origin: 39% 11%;-webkit-animation: yaohuang 1.5s ease-in-out infinite alternate"><div class="imgbox"><img id="img4"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/kuang.png"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/5.png"style="left: 1324px;top: 186px;-webkit-transform-origin: 31% 14%;-webkit-transform: rotate(0deg);-webkit-animation: yaohuang 1.5s 0.7s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl30/5.png"style="left: 1203px;top: 196px;-webkit-transform-origin: 31% 14%;-webkit-transform: rotate(0deg) scale(-1,1);-webkit-animation: yaohuang1 1.5s linear infinite alternate"></div><div id="leafContainer"style="pointer-events: none;z-index:10"></div></div>');
        eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[23679a-hj-rt-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 leafinit(){2 n=h.getElementById(\'leafContainer\');for(2 i=0;i<leafNum;i++){n.o(p())}}7 j(9,c){a 9+d.floor(d.k()*(c-9))}7 e(9,c){a 9+d.k()*(c-9)}7 q(f){a f+\'px\'}7 g(f){a f+\'s\'}7 p(){2 3=h.r(\'div\');2 b=h.r(\'img\');2 t=j(1,kindNum+1);b.src=kindurl[t-1];3.6.top="-100px";3.6.left=q(j(0,500));2 u=(d.k()<0.5)?\'clockwiseSpin\':\'counterclockwiseSpinAndFlip\';3.6.v=\'fade, drop\';b.6.v=u;2 l=g(e(5,11));2 w=g(e(4,8));3.6.x=l+\', \'+l;2 m=g(e(0,5));3.6.webkitAnimationDelay=m+\', \'+m;b.6.x=w;3.o(b);a 3}',[],34,'||var|leafDiv|||style|function||low|return|image|high|Math|randomFloat|value|durationValue|document||randomInteger|random|fadeAndDropDuration|leafDelay|container|appendChild|createALeaf|pixelValue|createElement||temp|spinAnimationName|webkitAnimationName|spinDuration|webkitAnimationDuration'.split('|'),0,{}))    
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

        var delaytime=5000;

        var leafNum = 20;          
        var kindNum = 4;           
        var kindurl = new Array("http://referer-image.szwwy.com/coolphoto/img/tpl30/shengdan1/1.png","http://referer-image.szwwy.com/coolphoto/img/tpl30/shengdan1/1.png","http://referer-image.szwwy.com/coolphoto/img/tpl30/shengdan1/1.png","http://referer-image.szwwy.com/coolphoto/img/tpl30/shengdan1/1.png");

        function id(name)
        {
            return document.getElementById(name);
        }
        function Init()
        {
            leafinit();
            load_images();
        }
        function load_images()
        {

            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_url_index=0;
            have_num = 0;
            error_num = 0;
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            showtitle();
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

        function showtitle()
        {
            id('laorendiv').style.webkitAnimation = 'fadein 1s linear both';
            id('laoren').style.webkitAnimation = 'showlaoren 6s linear both';
            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');
            // setTimeout(distitle,5000);
        }
        function distitle()
        {

            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');

            id('laorendiv').style.webkitAnimation = 'fadeout 1s linear both';
            timeout1 = setTimeout(show1,1000)
        }
        function show1()
        {
            setImage('1');
            id('shengzi1').style.webkitAnimation = 'showsheng1 7s linear both';
            id('shengzi1').style.pointerEvents="auto";
            id('shengzi2').style.pointerEvents="none";
            timeout2 = setTimeout(function()
            {
                id('shengzi2').style.webkitAnimation = '';
            },3000)
            timeout3 = setTimeout(show2,7000);
        }
        function show2()
        {
            id('shengzi2').style.webkitAnimation = 'showsheng2 14s linear both';
            id('shengzi2').style.pointerEvents="auto";
            id('shengzi1').style.pointerEvents="none";
            setImage('2');
            setImage('3');
            setImage('4');
            timeout4 = setTimeout(function()
            {
                id('shengzi1').style.webkitAnimation = '';
            },3000)
            timeout5 = setTimeout(show1,13000);
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

            var div = id('div'+idname)
            var img = id('img'+idname);
            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if(img_bili > 1)
            {
                img.style.top = '0px';
                img.style.height = 351 + 'px';
                img.style.width = 351*img_bili + 'px';
                img.style.left = -((351*img_bili-351)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = 351+'px';
                img.style.height = 351/img_bili + 'px';
                img.style.top = -((351/img_bili-351)/2) + 'px';
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
        call_me(Init);
        
load_init_modules();
        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }
        function clearnode()
        {
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation = '';
            id('line1').innerHTML = '';
            id('line2').innerHTML = '';
            id('line3').innerHTML = '';
            id('shengzi1').style.webkitAnimation = '';
            id('shengzi2').style.webkitAnimation = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
        }
    }
}
